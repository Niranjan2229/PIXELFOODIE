// This file acts as a database for users.
// You can manually add users here to allow them to login.
// Format: { email: "...", password: "..." }

const FILE_USERS = [
    {
        email: "admin@pixelfoodie.com",
        password: "admin_2229"
    },
    {
        email: "guest@pixelfoodie.com",
        password: "guest"
    }
];

console.log("Loaded " + FILE_USERS.length + " users from file system.");
