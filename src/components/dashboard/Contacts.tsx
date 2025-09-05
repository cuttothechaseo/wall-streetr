import { MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
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

// Define the contact type based on context.md
type Contact = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  firm: string;
  role: string;
  school: string;
  classYear: string;
  stage:
    | "intro_sent"
    | "waiting_reply"
    | "conversation"
    | "referral_requested"
    | "closed";
  lastActivity: string;
  tags: string[];
};

// Sample data for finance recruiting
const contacts: Contact[] = [
  {
    id: "1",
    firstName: "John",
    lastName: "Smith",
    email: "john.smith@gs.com",
    firm: "Goldman Sachs",
    role: "VP, Investment Banking",
    school: "Harvard Business School",
    classYear: "2018",
    stage: "conversation",
    lastActivity: "2 days ago",
    tags: ["Alumni", "IB"],
  },
  {
    id: "2",
    firstName: "Sarah",
    lastName: "Johnson",
    email: "s.johnson@jpmorgan.com",
    firm: "JPMorgan",
    role: "Director, M&A",
    school: "Wharton",
    classYear: "2016",
    stage: "waiting_reply",
    lastActivity: "1 week ago",
    tags: ["Alumni", "M&A"],
  },
  {
    id: "3",
    firstName: "Mike",
    lastName: "Chen",
    email: "mchen@blackrock.com",
    firm: "BlackRock",
    role: "Senior Analyst",
    school: "Columbia",
    classYear: "2020",
    stage: "intro_sent",
    lastActivity: "3 days ago",
    tags: ["Asset Management"],
  },
  {
    id: "4",
    firstName: "Emily",
    lastName: "Davis",
    email: "emily.davis@morganstanley.com",
    firm: "Morgan Stanley",
    role: "Associate, IBD",
    school: "NYU Stern",
    classYear: "2021",
    stage: "referral_requested",
    lastActivity: "5 days ago",
    tags: ["Alumni", "IB"],
  },
  {
    id: "5",
    firstName: "Robert",
    lastName: "Taylor",
    email: "rtaylor@credit-suisse.com",
    firm: "Credit Suisse",
    role: "MD, Coverage",
    school: "Chicago Booth",
    classYear: "2012",
    stage: "conversation",
    lastActivity: "1 day ago",
    tags: ["Coverage"],
  },
];

const getStageColor = (stage: Contact["stage"]) => {
  switch (stage) {
    case "intro_sent":
      return "bg-blue-100 text-blue-800";
    case "waiting_reply":
      return "bg-yellow-100 text-yellow-800";
    case "conversation":
      return "bg-green-100 text-green-800";
    case "referral_requested":
      return "bg-purple-100 text-purple-800";
    case "closed":
      return "bg-gray-100 text-gray-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

const formatStage = (stage: Contact["stage"]) => {
  switch (stage) {
    case "intro_sent":
      return "Intro Sent";
    case "waiting_reply":
      return "Waiting Reply";
    case "conversation":
      return "In Conversation";
    case "referral_requested":
      return "Referral Requested";
    case "closed":
      return "Closed";
    default:
      return stage;
  }
};

export function Contacts() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Contacts</h1>
        <p className="text-muted-foreground">
          Manage your networking connections and track interactions.
        </p>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Firm</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>School</TableHead>
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
                  {contact.firstName} {contact.lastName}
                </TableCell>
                <TableCell>{contact.firm}</TableCell>
                <TableCell className="text-sm">{contact.role}</TableCell>
                <TableCell className="text-sm">
                  {contact.school} '{contact.classYear}
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
                  {contact.lastActivity}
                </TableCell>
                <TableCell>
                  <div className="flex gap-1 flex-wrap">
                    {contact.tags.slice(0, 2).map((tag, index) => (
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
                        onClick={() =>
                          navigator.clipboard.writeText(contact.email)
                        }
                      >
                        Copy email
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>View profile</DropdownMenuItem>
                      <DropdownMenuItem>Send email</DropdownMenuItem>
                      <DropdownMenuItem>Add note</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
