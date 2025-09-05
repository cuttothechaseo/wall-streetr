"use client";

import { MoreHorizontal, Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { EmailCompositionModal } from "@/components/email/EmailCompositionModal";
import { createClient } from "@/utils/supabase/client";

// Define the contact type based on database schema
type Contact = {
  id: string;
  user_id: string; // Clerk user ID
  first_name: string;
  last_name: string;
  email?: string;
  phone?: string;
  company?: string;
  title?: string;
  stage:
    | "not_contacted"
    | "intro_sent"
    | "in_conversation"
    | "call_scheduled"
    | "followed_up";
  follow_up_date?: string; // ISO date string
  tags: ("Alumni" | "IB" | "PE" | "Other")[];
  last_activity: string;
  notes?: string;
  created_at: string;
  updated_at: string;
};

const getStageColor = (stage: Contact["stage"]) => {
  switch (stage) {
    case "not_contacted":
      return "bg-red-100 text-red-800";
    case "intro_sent":
      return "bg-blue-100 text-blue-800";
    case "in_conversation":
      return "bg-green-100 text-green-800";
    case "call_scheduled":
      return "bg-purple-100 text-purple-800";
    case "followed_up":
      return "bg-orange-100 text-orange-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

const formatStage = (stage: Contact["stage"]) => {
  switch (stage) {
    case "not_contacted":
      return "Not Contacted";
    case "intro_sent":
      return "Intro Sent";
    case "in_conversation":
      return "In Conversation";
    case "call_scheduled":
      return "Call Scheduled";
    case "followed_up":
      return "Followed Up";
    default:
      return stage;
  }
};

const formatRelativeTime = (dateString: string): string => {
  const date = new Date(dateString);
  const now = new Date();
  const diffInMs = now.getTime() - date.getTime();
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
  const diffInWeeks = Math.floor(diffInDays / 7);
  const diffInMonths = Math.floor(diffInDays / 30);
  const diffInYears = Math.floor(diffInDays / 365);

  if (diffInDays === 0) {
    return "Today";
  } else if (diffInDays === 1) {
    return "Yesterday";
  } else if (diffInDays < 7) {
    return `${diffInDays} days ago`;
  } else if (diffInWeeks === 1) {
    return "1 week ago";
  } else if (diffInWeeks < 4) {
    return `${diffInWeeks} weeks ago`;
  } else if (diffInMonths === 1) {
    return "1 month ago";
  } else if (diffInMonths < 12) {
    return `${diffInMonths} months ago`;
  } else if (diffInYears === 1) {
    return "1 year ago";
  } else {
    return `${diffInYears} years ago`;
  }
};

const formatPhoneNumber = (phone: string): string => {
  // Remove all non-digit characters
  const digits = phone.replace(/\D/g, "");

  // Check if it's a valid 10-digit US phone number
  if (digits.length === 10) {
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
  }

  // If it's already formatted or doesn't match expected format, return as-is
  return phone;
};

export function Contacts() {
  const { user, isLoaded } = useUser();
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [editingContact, setEditingContact] = useState<Contact | null>(null);
  const [emailModalOpen, setEmailModalOpen] = useState(false);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);

  // Form state
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    company: "",
    title: "",
    stage: "not_contacted" as Contact["stage"],
    tags: [] as string[],
    notes: "",
  });

  useEffect(() => {
    async function fetchContacts() {
      if (!isLoaded || !user) {
        setLoading(false);
        return;
      }

      try {
        const supabase = createClient();

        // Fetch contacts for the authenticated user
        const { data, error } = await supabase
          .from("contacts")
          .select("*")
          .eq("user_id", user.id)
          .order("created_at", { ascending: false });

        if (error) {
          console.error("Error fetching contacts:", error);
          setError("Error loading contacts. Please try again later.");
        } else {
          setContacts(data || []);
        }
      } catch (err) {
        console.error("Error fetching contacts:", err);
        setError("Error loading contacts. Please try again later.");
      } finally {
        setLoading(false);
      }
    }

    fetchContacts();
  }, [isLoaded, user]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!user) {
      setError("You must be logged in to create contacts.");
      return;
    }

    setIsSubmitting(true);

    try {
      const supabase = createClient();

      if (editingContact) {
        // Update existing contact
        const { data, error } = await supabase
          .from("contacts")
          .update({
            ...formData,
            tags: formData.tags,
          })
          .eq("id", editingContact.id)
          .select()
          .single();

        if (error) {
          console.error("Error updating contact:", error);
          setError(
            `Error updating contact: ${error.message || "Unknown error"}`
          );
        } else {
          // Update the contact in the list
          setContacts(
            contacts.map((contact) =>
              contact.id === editingContact.id ? data : contact
            )
          );

          // Reset form and close modal
          setFormData({
            first_name: "",
            last_name: "",
            email: "",
            phone: "",
            company: "",
            title: "",
            stage: "not_contacted",
            tags: [],
            notes: "",
          });
          setEditingContact(null);
          setIsModalOpen(false);
        }
      } else {
        // Create new contact
        const { data, error } = await supabase
          .from("contacts")
          .insert([
            {
              ...formData,
              user_id: user.id, // Use real Clerk user ID
              tags: formData.tags,
            },
          ])
          .select()
          .single();

        if (error) {
          console.error("Error creating contact:", error);
          console.error("Error details:", JSON.stringify(error, null, 2));
          setError(
            `Error creating contact: ${
              error.message || error.details || "Unknown error"
            }`
          );
        } else {
          // Add the new contact to the list
          setContacts([data, ...contacts]);

          // Reset form and close modal
          setFormData({
            first_name: "",
            last_name: "",
            email: "",
            phone: "",
            company: "",
            title: "",
            stage: "not_contacted",
            tags: [],
            notes: "",
          });
          setIsModalOpen(false);
        }
      }
    } catch (err) {
      console.error("Error creating contact:", err);
      setError("Error creating contact. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleEditContact = (contact: Contact) => {
    setEditingContact(contact);
    setFormData({
      first_name: contact.first_name,
      last_name: contact.last_name,
      email: contact.email || "",
      phone: contact.phone || "",
      company: contact.company || "",
      title: contact.title || "",
      stage: contact.stage,
      tags: contact.tags || [],
      notes: contact.notes || "",
    });
    setIsModalOpen(true);
  };

  const handleCopyEmail = async (email: string) => {
    try {
      await navigator.clipboard.writeText(email);
      // You could add a toast notification here
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  const handleSendEmail = (contact: Contact) => {
    if (!contact.email) {
      setError("Contact has no email address");
      return;
    }

    if (!user) {
      setError("Please sign in to send emails");
      return;
    }

    setSelectedContact(contact);
    setEmailModalOpen(true);
  };

  const handleEmailSent = async () => {
    // Refresh contacts to show updated stage
    console.log("Email sent successfully!");

    if (!user) return;

    try {
      const supabase = createClient();
      const { data, error } = await supabase
        .from("contacts")
        .select("*")
        .eq("user_id", user.id)
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error refreshing contacts:", error);
      } else {
        setContacts(data || []);
      }
    } catch (err) {
      console.error("Error refreshing contacts:", err);
    }

    // You could add a toast notification here
  };

  // Reset form when modal closes
  useEffect(() => {
    if (!isModalOpen) {
      setEditingContact(null);
      setFormData({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        company: "",
        title: "",
        stage: "not_contacted" as Contact["stage"],
        tags: [],
        notes: "",
      });
    }
  }, [isModalOpen]);

  if (!isLoaded) {
    return (
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Contacts</h1>
          <p className="text-muted-foreground">
            Manage your networking connections and track interactions.
          </p>
        </div>
        <div className="text-center py-8">
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Contacts</h1>
          <p className="text-muted-foreground">
            Manage your networking connections and track interactions.
          </p>
        </div>
        <div className="text-center py-8">
          <p className="text-red-500">Please sign in to view your contacts.</p>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Contacts</h1>
          <p className="text-muted-foreground">
            Manage your networking connections and track interactions.
          </p>
        </div>
        <div className="text-center py-8">
          <p className="text-muted-foreground">Loading contacts...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Contacts</h1>
          <p className="text-muted-foreground">
            Manage your networking connections and track interactions.
          </p>
        </div>
        <div className="text-center py-8">
          <p className="text-red-500">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Contacts</h1>
          <p className="text-muted-foreground">
            Manage your networking connections and track interactions.
          </p>
        </div>
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Contact
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>
                {editingContact ? "Update Contact" : "Add New Contact"}
              </DialogTitle>
              <DialogDescription>
                {editingContact
                  ? "Update the contact information below."
                  : "Add a new contact to your networking database."}
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="first_name">First Name</Label>
                  <Input
                    id="first_name"
                    value={formData.first_name}
                    onChange={(e) =>
                      handleInputChange("first_name", e.target.value)
                    }
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last_name">Last Name</Label>
                  <Input
                    id="last_name"
                    value={formData.last_name}
                    onChange={(e) =>
                      handleInputChange("last_name", e.target.value)
                    }
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Company</Label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) => handleInputChange("company", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => handleInputChange("title", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="stage">Stage</Label>
                <Select
                  value={formData.stage}
                  onValueChange={(value) => handleInputChange("stage", value)}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="not_contacted">Not Contacted</SelectItem>
                    <SelectItem value="intro_sent">Intro Sent</SelectItem>
                    <SelectItem value="in_conversation">
                      In Conversation
                    </SelectItem>
                    <SelectItem value="call_scheduled">
                      Call Scheduled
                    </SelectItem>
                    <SelectItem value="followed_up">Followed Up</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="tags">Tags</Label>
                <div className="space-y-2">
                  <div className="flex flex-wrap gap-2">
                    {["Alumni", "IB", "PE", "Other"].map((tag) => (
                      <Button
                        key={tag}
                        type="button"
                        variant={
                          formData.tags.includes(tag) ? "default" : "outline"
                        }
                        size="sm"
                        onClick={() => {
                          setFormData((prev) => ({
                            ...prev,
                            tags: prev.tags.includes(tag)
                              ? prev.tags.filter((t) => t !== tag)
                              : [...prev.tags, tag],
                          }));
                        }}
                      >
                        {tag}
                      </Button>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Select relevant tags for this contact
                  </p>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="notes">Notes</Label>
                <Textarea
                  id="notes"
                  value={formData.notes}
                  onChange={(e) => handleInputChange("notes", e.target.value)}
                  rows={3}
                />
              </div>
              <DialogFooter>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </Button>
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting
                    ? editingContact
                      ? "Updating..."
                      : "Adding..."
                    : editingContact
                    ? "Update Contact"
                    : "Add Contact"}
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {contacts && contacts.length > 0 ? (
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Company</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Stage</TableHead>
                <TableHead>Last Activity</TableHead>
                <TableHead>Tags</TableHead>
                <TableHead className="w-12"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {contacts.map((contact) => (
                <TableRow key={contact.id}>
                  <TableCell className="font-medium">
                    {contact.first_name} {contact.last_name}
                  </TableCell>
                  <TableCell>{contact.company}</TableCell>
                  <TableCell className="text-sm">{contact.title}</TableCell>
                  <TableCell className="text-sm">
                    {contact.phone ? formatPhoneNumber(contact.phone) : ""}
                  </TableCell>
                  <TableCell>
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStageColor(
                        contact.stage
                      )}`}
                    >
                      {formatStage(contact.stage)}
                    </span>
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    {formatRelativeTime(contact.last_activity)}
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-1 flex-wrap">
                      {contact.tags
                        .slice(0, 2)
                        .map((tag: string, index: number) => (
                          <span
                            key={index}
                            className="inline-flex items-center px-2 py-0.5 rounded text-xs bg-muted text-muted-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      {contact.tags.length > 2 && (
                        <span className="text-xs text-muted-foreground">
                          +{contact.tags.length - 2}
                        </span>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <span className="sr-only">Open menu</span>
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem
                          onClick={() => handleEditContact(contact)}
                        >
                          Update Contact
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => handleCopyEmail(contact.email || "")}
                          disabled={!contact.email}
                        >
                          Copy email
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                          onClick={() => handleSendEmail(contact)}
                        >
                          Send Email
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      ) : (
        <div className="text-center py-8">
          <p className="text-muted-foreground">
            No contacts found. Add your first contact to get started!
          </p>
        </div>
      )}

      {/* Email Composition Modal */}
      {selectedContact && (
        <EmailCompositionModal
          contact={selectedContact}
          isOpen={emailModalOpen}
          onClose={() => {
            setEmailModalOpen(false);
            setSelectedContact(null);
          }}
          onEmailSent={handleEmailSent}
        />
      )}
    </div>
  );
}
