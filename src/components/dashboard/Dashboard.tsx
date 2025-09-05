export function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome to your networking command center.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg border p-3">
          <div className="text-2xl font-bold">12</div>
          <p className="text-xs text-muted-foreground">Active Connections</p>
        </div>
        <div className="rounded-lg border p-3">
          <div className="text-2xl font-bold">5</div>
          <p className="text-xs text-muted-foreground">This Week</p>
        </div>
        <div className="rounded-lg border p-3">
          <div className="text-2xl font-bold">23</div>
          <p className="text-xs text-muted-foreground">Total Contacts</p>
        </div>
        <div className="rounded-lg border p-3">
          <div className="text-2xl font-bold">8</div>
          <p className="text-xs text-muted-foreground">Follow-ups Due</p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border p-4">
          <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm">Connected with Sarah Johnson</span>
              <span className="text-xs text-muted-foreground ml-auto">
                2h ago
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-sm">
                Follow-up scheduled with Mike Chen
              </span>
              <span className="text-xs text-muted-foreground ml-auto">
                1d ago
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <span className="text-sm">Updated networking goal</span>
              <span className="text-xs text-muted-foreground ml-auto">
                3d ago
              </span>
            </div>
          </div>
        </div>

        <div className="rounded-lg border p-4">
          <h3 className="text-lg font-semibold mb-4">Upcoming Follow-ups</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm">John Smith - Coffee chat</span>
              <span className="text-xs text-muted-foreground">Tomorrow</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">
                Emily Davis - Informational interview
              </span>
              <span className="text-xs text-muted-foreground">Friday</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Robert Taylor - Follow-up email</span>
              <span className="text-xs text-muted-foreground">Next week</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
