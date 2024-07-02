const jsonServer = require("json-server"); // Importing json-server library
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8080; // Choose port from here like 8080, 3001

// Use default middlewares (logger, static, cors, and no-cache)
server.use(middlewares);

// Use the router defined in db.json
server.use(router);

// Start the server and listen on the specified port
server.listen(port, (err) => {
    if (err) {
        console.error("Error starting JSON Server:", err);
    } else {
        console.log(`JSON Server is running on port ${port}`);
    }
});
