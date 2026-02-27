// dotenv reads our .env file and loads all the variables
// into process.env so we can access them anywhere in the app
require('dotenv').config({ path: './backend/.env' });

const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// --- MIDDLEWARE ---
// Middleware runs on every request before it hits your routes.
// Think of it as a pipeline: request → middleware → route handler → response

// cors() allows requests from different origins (ports/domains)
// Without this, your frontend on port 5500 can't talk to backend on 3000
app.use(cors());

// express.json() automatically parses incoming JSON request bodies
// Without this, req.body would be undefined when someone POSTs data
app.use(express.json());

// Serve the entire frontend folder as static files
// Any file in /frontend is now publicly accessible
// http://localhost:3000 → serves frontend/index.html automatically
app.use(express.static('frontend'));

// --- ROUTES ---
// A route is a combination of: HTTP method + URL path + handler function
// req = the incoming request (headers, body, params, query)
// res = the outgoing response (what we send back)

app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    message: 'Maji API is running',
    timestamp: new Date().toISOString()
  });
});

// --- START SERVER ---
app.listen(PORT, () => {
  console.log(`\n💧 Maji server running → http://localhost:${PORT}`);
  console.log(`   API health check  → http://localhost:${PORT}/api/health\n`);
});