"use client";

import { useState } from "react";
import { useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, Send, Sparkles, Paperclip, X } from "lucide-react";

interface Contact {
  id: string;
  user_id: string;
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
  follow_up_date?: string;
  tags: ("Alumni" | "IB" | "PE" | "Other")[];
  last_activity: string;
  notes?: string;
  created_at: string;
  updated_at: string;
}

interface EmailCompositionModalProps {
  contact: Contact;
  isOpen: boolean;
  onClose: () => void;
  onEmailSent?: () => void;
}

export function EmailCompositionModal({
  contact,
  isOpen,
  onClose,
  onEmailSent,
}: EmailCompositionModalProps) {
  const { user } = useUser();
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [attachments, setAttachments] = useState<File[]>([]);
  const [isDragOver, setIsDragOver] = useState(false);

  // Generate initial email content when modal opens
  useState(() => {
    if (isOpen && contact) {
      const defaultSubject = `Following up on our conversation`;
      const defaultBody = `Hi ${
        contact.first_name
      },\n\nI hope this email finds you well. I wanted to follow up on our previous conversation.\n\nBest regards,\n${
        user?.firstName || "Your Name"
      }`;

      setSubject(defaultSubject);
      setBody(defaultBody);
    }
  });

  const handleGenerateWithAI = async () => {
    if (!contact.email) {
      setError("Contact has no email address");
      return;
    }

    setIsGenerating(true);
    setError(null);

    try {
      // TODO: Integrate with your LLM API here
      // For now, we'll use a placeholder
      const aiGeneratedContent = await generateEmailWithAI(contact, user);

      setSubject(aiGeneratedContent.subject);
      setBody(aiGeneratedContent.body);
    } catch (err) {
      console.error("Error generating email with AI:", err);
      setError("Failed to generate email with AI");
    } finally {
      setIsGenerating(false);
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;

    const newFiles = Array.from(files).filter((file) => {
      // Only allow PDF files for now
      if (file.type !== "application/pdf") {
        setError("Only PDF files are allowed");
        return false;
      }

      // Check file size (max 10MB)
      if (file.size > 10 * 1024 * 1024) {
        setError("File size must be less than 10MB");
        return false;
      }

      return true;
    });

    setAttachments((prev) => [...prev, ...newFiles]);
    setError(null);
  };

  const removeAttachment = (index: number) => {
    setAttachments((prev) => prev.filter((_, i) => i !== index));
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);

    const files = e.dataTransfer.files;
    if (files.length > 0) {
      // Use the same validation logic as file upload
      const newFiles = Array.from(files).filter((file) => {
        // Only allow PDF files for now
        if (file.type !== "application/pdf") {
          setError("Only PDF files are allowed");
          return false;
        }

        // Check file size (max 10MB)
        if (file.size > 10 * 1024 * 1024) {
          setError("File size must be less than 10MB");
          return false;
        }

        return true;
      });

      setAttachments((prev) => [...prev, ...newFiles]);
      setError(null);
    }
  };

  const handleSendEmail = async () => {
    if (!contact.email) {
      setError("Contact has no email address");
      return;
    }

    if (!user) {
      setError("Please sign in to send emails");
      return;
    }

    if (!subject.trim() || !body.trim()) {
      setError("Please enter both subject and message");
      return;
    }

    setIsSending(true);
    setError(null);

    try {
      // Convert attachments to base64 for sending
      const attachmentData = await Promise.all(
        attachments.map(async (file) => ({
          filename: file.name,
          content: await fileToBase64(file),
          contentType: file.type,
        }))
      );

      const response = await fetch("/api/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contactId: contact.id,
          subject: subject.trim(),
          body: body.trim(),
          userId: user.id,
          attachments: attachmentData,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send email");
      }

      // Success!
      onEmailSent?.();
      onClose();

      // Reset form
      setSubject("");
      setBody("");
      setAttachments([]);
      setIsDragOver(false);
    } catch (err) {
      console.error("Error sending email:", err);
      setError(err instanceof Error ? err.message : "Failed to send email");
    } finally {
      setIsSending(false);
    }
  };

  const handleClose = () => {
    if (!isSending) {
      onClose();
      setError(null);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>
            Send Email to {contact.first_name} {contact.last_name}
          </DialogTitle>
          <DialogDescription>
            Compose and send an email to {contact.email}
            {contact.company && ` at ${contact.company}`}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="subject">Subject</Label>
            <Input
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Email subject"
              disabled={isSending}
            />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="body">Message</Label>
              <Button
                variant="outline"
                size="sm"
                onClick={handleGenerateWithAI}
                disabled={isGenerating || isSending}
                className="flex items-center gap-2"
              >
                {isGenerating ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Sparkles className="h-4 w-4" />
                )}
                {isGenerating ? "Generating..." : "Generate with AI"}
              </Button>
            </div>
            <Textarea
              id="body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              placeholder="Type your message here..."
              rows={8}
              disabled={isSending}
            />
          </div>

          {/* File Attachment Section */}
          <div className="space-y-2">
            <Label htmlFor="attachments">Attachments</Label>
            <div
              className={`border-2 border-dashed rounded-lg p-4 transition-colors ${
                isDragOver
                  ? "border-blue-400 bg-blue-50"
                  : "border-gray-300 hover:border-gray-400"
              }`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <input
                type="file"
                id="attachments"
                accept=".pdf"
                multiple
                onChange={handleFileUpload}
                disabled={isSending}
                className="hidden"
              />
              <label
                htmlFor="attachments"
                className="cursor-pointer flex flex-col items-center justify-center py-4"
              >
                <Paperclip
                  className={`h-8 w-8 mb-2 ${
                    isDragOver ? "text-blue-500" : "text-gray-400"
                  }`}
                />
                <p
                  className={`text-sm ${
                    isDragOver ? "text-blue-600" : "text-gray-600"
                  }`}
                >
                  {isDragOver
                    ? "Drop PDF files here"
                    : "Drag & drop or click to upload PDF files (max 10MB each)"}
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  Perfect for attaching your resume
                </p>
              </label>
            </div>

            {/* Display attached files */}
            {attachments.length > 0 && (
              <div className="space-y-2">
                <p className="text-sm font-medium">Attached files:</p>
                {attachments.map((file, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between bg-gray-50 p-2 rounded-md"
                  >
                    <div className="flex items-center gap-2">
                      <Paperclip className="h-4 w-4 text-gray-500" />
                      <span className="text-sm">{file.name}</span>
                      <span className="text-xs text-gray-500">
                        ({(file.size / 1024 / 1024).toFixed(1)} MB)
                      </span>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeAttachment(index)}
                      disabled={isSending}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {error && (
            <div className="text-sm text-red-600 bg-red-50 p-3 rounded-md">
              {error}
            </div>
          )}
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={handleClose} disabled={isSending}>
            Cancel
          </Button>
          <Button onClick={handleSendEmail} disabled={isSending}>
            {isSending ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin mr-2" />
                Sending...
              </>
            ) : (
              <>
                <Send className="h-4 w-4 mr-2" />
                Send Email
              </>
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

// Placeholder function for AI email generation
async function generateEmailWithAI(contact: Contact, user: unknown) {
  // TODO: Replace this with actual LLM API call
  // This is a placeholder that simulates AI generation

  const templates = [
    {
      subject: `Following up on our conversation`,
      body: `Hi ${
        contact.first_name
      },\n\nI hope this email finds you well. I wanted to follow up on our previous conversation and see how things are going.\n\nBest regards,\n${
        user?.firstName || "Your Name"
      }`,
    },
    {
      subject: `Thank you for connecting`,
      body: `Hi ${
        contact.first_name
      },\n\nThank you for taking the time to connect with me. I really enjoyed our conversation and would love to stay in touch.\n\nBest regards,\n${
        user?.firstName || "Your Name"
      }`,
    },
    {
      subject: `Quick follow-up`,
      body: `Hi ${
        contact.first_name
      },\n\nI hope you're doing well. I wanted to reach out and see if you had any questions about our previous discussion.\n\nBest regards,\n${
        user?.firstName || "Your Name"
      }`,
    },
  ];

  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Return a random template for now
  return templates[Math.floor(Math.random() * templates.length)];
}

// Helper function to convert file to base64
function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const result = reader.result as string;
      // Remove the data URL prefix (e.g., "data:application/pdf;base64,")
      const base64 = result.split(",")[1];
      resolve(base64);
    };
    reader.onerror = (error) => reject(error);
  });
}
