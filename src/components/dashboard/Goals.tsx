export function Goals() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Networking Goals</h1>
        <p className="text-muted-foreground">
          Track your networking objectives and progress.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border p-4">
          <h3 className="text-lg font-semibold mb-4">Active Goals</h3>
          <div className="space-y-4">
            <div className="p-3 border rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <p className="font-medium">
                  Connect with 5 new people this month
                </p>
                <span className="text-sm text-muted-foreground">3/5</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full"
                  style={{ width: "60%" }}
                ></div>
              </div>
            </div>

            <div className="p-3 border rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <p className="font-medium">
                  Schedule 3 informational interviews
                </p>
                <span className="text-sm text-muted-foreground">1/3</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-green-600 h-2 rounded-full"
                  style={{ width: "33%" }}
                ></div>
              </div>
            </div>

            <div className="p-3 border rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <p className="font-medium">Attend 2 finance events</p>
                <span className="text-sm text-muted-foreground">2/2</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-green-600 h-2 rounded-full"
                  style={{ width: "100%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-lg border p-4">
          <h3 className="text-lg font-semibold mb-4">Goal Ideas</h3>
          <div className="space-y-3">
            <div className="p-3 bg-muted rounded-lg">
              <p className="text-sm font-medium">
                Reach out to alumni in target companies
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Use LinkedIn to find connections
              </p>
            </div>
            <div className="p-3 bg-muted rounded-lg">
              <p className="text-sm font-medium">
                Follow up with recent connections
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Send thank you notes within 24 hours
              </p>
            </div>
            <div className="p-3 bg-muted rounded-lg">
              <p className="text-sm font-medium">Join finance-related groups</p>
              <p className="text-xs text-muted-foreground mt-1">
                LinkedIn groups, local meetups
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
