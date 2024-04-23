db.createUser({
    user: "rootuser",
    pwd: "rootpass",
    roles: [
        { role: "read", db: "local" },
        { role: "clusterMonitor", db: "admin" },
        { role: "root", db: "admin" }
    ],
    mechanisms: ["SCRAM-SHA-1", "SCRAM-SHA-256"]
});