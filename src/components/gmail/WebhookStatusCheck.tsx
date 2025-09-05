"use client";

import { useState } from "react";
import { useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Loader2, CheckCircle, AlertCircle, RefreshCw } from "lucide-react";
import { Input } from "@/components/ui/input";

interface WebhookStatus {
  connected: boolean;
  email?: string;
  watchTopic?: string;
  watchExpiry?: string;
  watchHistoryId?: string;
  isExpired?: boolean;
  environment?: {
    hasWebhookTopic: boolean;
    hasProjectId: boolean;
    hasAppUrl: boolean;
    webhookTopic?: string;
    projectId?: string;
    appUrl?: string;
  };
  error?: string;
}

export function WebhookStatusCheck() {
  const { user } = useUser();
  const [status, setStatus] = useState<WebhookStatus | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSettingUp, setIsSettingUp] = useState(false);
  const [isTesting, setIsTesting] = useState(false);
  const [isCheckingConfig, setIsCheckingConfig] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [setupMessage, setSetupMessage] = useState<string | null>(null);
  const [testEmail, setTestEmail] = useState<string>("");
  const [configDetails, setConfigDetails] = useState<{
    current: {
      fullTopicName: string;
      webhookUrl: string;
      projectId: string;
    };
    requiredSetup: {
      steps: Array<{
        step: number;
        title: string;
        description: string;
        details: string[];
        url?: string;
      }>;
    };
  } | null>(null);

  const checkWebhookStatus = async () => {
    if (!user) {
      setError("Please sign in to check webhook status");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `/api/gmail/webhook-status?userId=${user.id}`
      );
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to check webhook status");
      }

      setStatus(data);
    } catch (err) {
      console.error("Error checking webhook status:", err);
      setError(
        err instanceof Error ? err.message : "Failed to check webhook status"
      );
    } finally {
      setIsLoading(false);
    }
  };

  const setupWebhook = async () => {
    if (!user) {
      setError("Please sign in to setup webhook");
      return;
    }

    setIsSettingUp(true);
    setError(null);
    setSetupMessage(null);

    try {
      const response = await fetch("/api/gmail/setup-webhook", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId: user.id }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to setup webhook");
      }

      setSetupMessage(
        "Webhook setup successful! Check status again to verify."
      );
      // Refresh status after successful setup
      setTimeout(() => {
        checkWebhookStatus();
      }, 1000);
    } catch (err) {
      console.error("Error setting up webhook:", err);
      setError(err instanceof Error ? err.message : "Failed to setup webhook");
    } finally {
      setIsSettingUp(false);
    }
  };

  const testWebhook = async () => {
    if (!user) {
      setError("Please sign in to test webhook");
      return;
    }

    setIsTesting(true);
    setError(null);
    setSetupMessage(null);

    try {
      const response = await fetch("/api/gmail/test-webhook", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: user.id,
          testEmail: testEmail.trim() || undefined,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to test webhook");
      }

      setSetupMessage(`Test successful! ${data.message}`);
      console.log("🧪 Webhook test result:", data);
    } catch (err) {
      console.error("Error testing webhook:", err);
      setError(err instanceof Error ? err.message : "Failed to test webhook");
    } finally {
      setIsTesting(false);
    }
  };

  const checkPubSubConfig = async () => {
    if (!user) {
      setError("Please sign in to check configuration");
      return;
    }

    setIsCheckingConfig(true);
    setError(null);

    try {
      const response = await fetch(
        `/api/gmail/pubsub-config?userId=${user.id}`
      );
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to check configuration");
      }

      setConfigDetails(data);
    } catch (err) {
      console.error("Error checking Pub/Sub config:", err);
      setError(
        err instanceof Error ? err.message : "Failed to check configuration"
      );
    } finally {
      setIsCheckingConfig(false);
    }
  };

  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <RefreshCw className="h-5 w-5" />
          Webhook Status Check
        </CardTitle>
        <CardDescription>
          Check if your Gmail webhook is properly configured and active
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex gap-2">
          <Button
            onClick={checkWebhookStatus}
            disabled={isLoading}
            className="flex-1"
          >
            {isLoading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin mr-2" />
                Checking Status...
              </>
            ) : (
              "Check Webhook Status"
            )}
          </Button>

          {status?.connected && (!status.watchTopic || status.isExpired) && (
            <Button
              onClick={setupWebhook}
              disabled={isSettingUp}
              variant="outline"
              className="flex-1"
            >
              {isSettingUp ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin mr-2" />
                  Setting Up...
                </>
              ) : (
                "Setup Webhook"
              )}
            </Button>
          )}

          <Button
            onClick={checkPubSubConfig}
            disabled={isCheckingConfig}
            variant="secondary"
            className="flex-1"
          >
            {isCheckingConfig ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin mr-2" />
                Checking Config...
              </>
            ) : (
              "Check Pub/Sub Config"
            )}
          </Button>
        </div>

        {/* Test Section */}
        {status?.connected && (
          <div className="border-t pt-4">
            <h4 className="font-semibold mb-2">Test Webhook</h4>
            <div className="flex gap-2">
              <Input
                placeholder="Enter contact email to test"
                value={testEmail}
                onChange={(e) => setTestEmail(e.target.value)}
                className="flex-1"
              />
              <Button
                onClick={testWebhook}
                disabled={isTesting}
                variant="outline"
              >
                {isTesting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin mr-2" />
                    Testing...
                  </>
                ) : (
                  "Test"
                )}
              </Button>
            </div>
          </div>
        )}

        {setupMessage && (
          <div className="flex items-center gap-2 text-sm text-green-600 bg-green-50 p-3 rounded-md">
            <CheckCircle className="h-4 w-4" />
            <span>{setupMessage}</span>
          </div>
        )}

        {error && (
          <div className="flex items-center gap-2 text-sm text-red-600 bg-red-50 p-3 rounded-md">
            <AlertCircle className="h-4 w-4" />
            <span>{error}</span>
          </div>
        )}

        {status && (
          <div className="space-y-4">
            {/* Connection Status */}
            <div className="flex items-center gap-2 text-sm">
              {status.connected ? (
                <CheckCircle className="h-4 w-4 text-green-600" />
              ) : (
                <AlertCircle className="h-4 w-4 text-red-600" />
              )}
              <span
                className={status.connected ? "text-green-600" : "text-red-600"}
              >
                Gmail {status.connected ? "Connected" : "Not Connected"}
              </span>
            </div>

            {status.connected && (
              <>
                {/* Email */}
                <div className="text-sm">
                  <strong>Email:</strong> {status.email}
                </div>

                {/* Watch Status */}
                <div className="text-sm">
                  <strong>Watch Topic:</strong>{" "}
                  {status.watchTopic || "Not configured"}
                </div>

                <div className="text-sm">
                  <strong>Watch Expiry:</strong>{" "}
                  {status.watchExpiry
                    ? new Date(status.watchExpiry).toLocaleString()
                    : "Not set"}
                </div>

                <div className="text-sm">
                  <strong>Watch Status:</strong>{" "}
                  <span
                    className={
                      status.isExpired ? "text-red-600" : "text-green-600"
                    }
                  >
                    {status.isExpired ? "Expired" : "Active"}
                  </span>
                </div>

                {/* Environment Check */}
                {status.environment && (
                  <div className="border-t pt-4">
                    <h4 className="font-semibold mb-2">
                      Environment Configuration:
                    </h4>
                    <div className="space-y-1 text-sm">
                      <div className="flex items-center gap-2">
                        {status.environment.hasWebhookTopic ? (
                          <CheckCircle className="h-3 w-3 text-green-600" />
                        ) : (
                          <AlertCircle className="h-3 w-3 text-red-600" />
                        )}
                        <span>
                          GMAIL_WEBHOOK_TOPIC:{" "}
                          {status.environment.webhookTopic || "Not set"}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        {status.environment.hasProjectId ? (
                          <CheckCircle className="h-3 w-3 text-green-600" />
                        ) : (
                          <AlertCircle className="h-3 w-3 text-red-600" />
                        )}
                        <span>
                          GOOGLE_CLOUD_PROJECT_ID:{" "}
                          {status.environment.projectId || "Not set"}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        {status.environment.hasAppUrl ? (
                          <CheckCircle className="h-3 w-3 text-green-600" />
                        ) : (
                          <AlertCircle className="h-3 w-3 text-red-600" />
                        )}
                        <span>
                          NEXT_PUBLIC_APP_URL:{" "}
                          {status.environment.appUrl || "Not set"}
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        )}

        {/* Pub/Sub Configuration Details */}
        {configDetails && (
          <div className="border-t pt-4">
            <h4 className="font-semibold mb-2">Pub/Sub Configuration</h4>
            <div className="space-y-2 text-sm">
              <div>
                <strong>Topic:</strong> {configDetails.current.fullTopicName}
              </div>
              <div>
                <strong>Webhook URL:</strong> {configDetails.current.webhookUrl}
              </div>
              <div>
                <strong>Project ID:</strong> {configDetails.current.projectId}
              </div>
            </div>

            <div className="mt-4">
              <h5 className="font-medium mb-2">Required Setup Steps:</h5>
              <div className="space-y-2">
                {configDetails.requiredSetup.steps.map((step) => (
                  <div key={step.step} className="border rounded p-2">
                    <div className="font-medium">
                      Step {step.step}: {step.title}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {step.description}
                    </div>
                    <ul className="text-xs mt-1 space-y-1">
                      {step.details.map((detail: string, idx: number) => (
                        <li key={idx} className="ml-2">
                          • {detail}
                        </li>
                      ))}
                    </ul>
                    {step.url && (
                      <a
                        href={step.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-blue-600 hover:underline"
                      >
                        Open in Google Cloud Console →
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="text-xs text-muted-foreground space-y-1">
          <p>
            <strong>Debugging Steps:</strong>
          </p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Check if all environment variables are set</li>
            <li>Verify Pub/Sub topic exists in Google Cloud Console</li>
            <li>Ensure webhook URL is publicly accessible</li>
            <li>Check application logs for webhook calls</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
