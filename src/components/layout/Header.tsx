import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export function Header() {
  return (
    <header className="w-full bg-background border-b border-border">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Left side - Logo/Brand */}
          <div className="flex items-center">
            <h2 className="text-lg font-semibold" style={{ color: "#1e9df1" }}>
              Wall Streetr
            </h2>
          </div>

          {/* Right side - Theme toggle and Auth buttons */}
          <div className="flex items-center gap-3">
            <ThemeToggle />

            {/* Show SignInButton only when user is NOT signed in */}
            <SignedOut>
              <SignInButton mode="modal">
                <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
                  Sign In
                </button>
              </SignInButton>
            </SignedOut>

            {/* Show UserButton only when user IS signed in */}
            <SignedIn>
              <UserButton
                appearance={{
                  elements: {
                    avatarBox: "h-9 w-9",
                  },
                }}
              />
            </SignedIn>
          </div>
        </div>
      </div>
    </header>
  );
}
