import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@/services/clerk/components/ClerkProvider";
import { ThemeProvider } from "next-themes";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wall Streetr",
  description:
    "Wall Streetr is an AI-driven finance recruiting tracker built for investment banking, private equity, and consulting candidates. Manage networking contacts, generate cold emails and follow-ups, and track your recruiting funnel in one simple dashboard. Features include a contact CRM, AI email generator, Gmail/Outlook integration, auto-send follow-up rules, and real-time reminders. Perfect for students, early professionals, and finance societies looking to stay organized and land top offers.",
  keywords: [
    "finance recruiting",
    "investment banking",
    "private equity",
    "ai networking",
    "Wall Streetr",
    "finance recruiting software",
    "investment banking recruiting",
    "IB networking tracker",
    "AI recruiting CRM",
    "cold email generator",
    "private equity recruiting",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={`${montserrat.variable} antialiased font-sans`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableColorScheme
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
