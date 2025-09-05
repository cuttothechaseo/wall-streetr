"use client";

import { useState, useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Mail, CheckCircle, AlertCircle } from "lucide-react";

interface GmailConnectionProps {
  onConnected?: () => void;
}

export function GmailConnection({ onConnected }: GmailConnectionProps) {
  const { user } = useUser();
  const searchParams = useSearchParams();
  const [isConnecting, setIsConnecting] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Check if Gmail is already connected
  useEffect(() => {
    async function checkGmailConnection() {
      if (!user) {
        setIsLoading(false);
        return;
      }

      try {
        // Use a server-side API call to bypass RLS since we're using Clerk auth
        const response = await fetch("/api/gmail/check-connection", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userId: user.id }),
        });

        const result = await response.json();

        if (response.ok && result.connected) {
          console.log("Gmail is connected:", result.email);
          setIsConnected(true);
          setError(null);
          onConnected?.();
        } else {
          console.log("No Gmail connection found");
        }
      } catch (err) {
        console.error("Error checking Gmail connection:", err);
      } finally {
        setIsLoading(false);
      }
    }

    checkGmailConnection();
  }, [user, onConnected]);

  // Check for OAuth callback results
  useEffect(() => {
    const gmailStatus = searchParams.get("gmail");
    if (gmailStatus === "connected") {
      setIsConnected(true);
      setError(null);
      onConnected?.();
    } else if (gmailStatus === "error") {
      setError("Failed to connect Gmail. Please try again.");
      setIsConnected(false);
    }
  }, [searchParams, onConnected]);

  const handleConnectGmail = async () => {
    if (!user) {
      setError("Please sign in to connect Gmail");
      return;
    }

    setIsConnecting(true);
    setError(null);

    try {
      // Get OAuth URL
      const response = await fetch(`/api/auth/gmail?userId=${user.id}`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to get auth URL");
      }

      // Redirect to Gmail OAuth
      window.location.href = data.authUrl;
    } catch (err) {
      console.error("Error connecting Gmail:", err);
      setError(err instanceof Error ? err.message : "Failed to connect Gmail");
    } finally {
      setIsConnecting(false);
    }
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Mail className="h-5 w-5" />
          Connect Gmail
        </CardTitle>
        <CardDescription>
          Connect your personal Gmail account to send emails directly from the
          app
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {isLoading ? (
          <div className="flex items-center gap-2 text-sm text-blue-600 bg-blue-50 p-3 rounded-md">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
            <span>Checking Gmail connection...</span>
          </div>
        ) : isConnected ? (
          <div className="flex items-center gap-2 text-sm text-green-600 bg-green-50 p-3 rounded-md">
            <CheckCircle className="h-4 w-4" />
            <span>
              Gmail is connected and webhook is automatically configured
            </span>
          </div>
        ) : (
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm text-green-600">
              <CheckCircle className="h-4 w-4" />
              <span>Best deliverability</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-green-600">
              <CheckCircle className="h-4 w-4" />
              <span>Full functionality</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-green-600">
              <CheckCircle className="h-4 w-4" />
              <span>No restrictions</span>
            </div>
          </div>
        )}

        {error && (
          <div className="flex items-center gap-2 text-sm text-red-600">
            <AlertCircle className="h-4 w-4" />
            <span>{error}</span>
          </div>
        )}

        <Button
          onClick={handleConnectGmail}
          disabled={isConnecting || isConnected || isLoading}
          className="w-full"
        >
          {isLoading
            ? "Checking connection..."
            : isConnecting
            ? "Connecting..."
            : isConnected
            ? "✓ Gmail Connected"
            : "Connect Gmail"}
        </Button>

        <p className="text-xs text-muted-foreground">
          We recommend using your personal Gmail account for the best
          experience. School emails may have limitations.
        </p>
      </CardContent>
    </Card>
  );
}
