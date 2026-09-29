const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static("public"));

app.get("/api/health", (req, res) => {
    res.json({
        status: "success",
        message: "Node.js application is running",
        version: "1.0.0"
    });
});

app.get("/api/users", (req, res) => {
    const users = [
        {
            id: 1,
            name: "Neel",
            role: "DevOps Intern"
        },
        {
            id: 2,
            name: "Developer",
            role: "Developer"
        }
    ];

    res.json(users);
});

app.listen(PORT, () => {
    console.log(`Server running on http://3.108.63.211:${PORT}`);
});
