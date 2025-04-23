
import { createRoot } from 'react-dom/client';
import { ClerkProvider } from '@clerk/clerk-react';
import App from './App.tsx';
import './index.css';
import React from 'react';

// Use environment variable or fallback to the hardcoded value
const PUBLISHABLE_KEY = "pk_test_ZWxlZ2FudC13aWxkY2F0LTE4LmNsZXJrLmFjY291bnRzLmRldiQ";

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Clerk Publishable Key");
}

const rootElement = document.getElementById("root");

// Ensure the root element exists
if (!rootElement) {
  throw new Error("Root element not found");
}

const root = createRoot(rootElement);

// Wrap the App with ClerkProvider inside a React.StrictMode
root.render(
  <React.StrictMode>
    <ClerkProvider 
      publishableKey={PUBLISHABLE_KEY}
      navigateUrl={(url) => window.location.href = url}
    >
      <App />
    </ClerkProvider>
  </React.StrictMode>
);
