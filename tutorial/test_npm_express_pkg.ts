import express from "npm:express@4";

const app = express();

app.get("/", (request: any, response: any) => {
    response.send("Hello from Express!");
});

app.listen(3000);

console.log("Server running on port 3000");

// run with: deno run -A test_npm_express_pkg.ts
