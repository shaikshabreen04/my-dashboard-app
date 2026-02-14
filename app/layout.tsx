"use client";

import { useState } from "react";
import Header from "./components2/header";
import Dashboard from "./components2/dashboard";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        {/* HEADER */}
        <header
          style={{
            height: "60px",
            background: "#480ee938",
            display: "flex",
            alignItems: "center",
            padding: "0 16px",
            color: "white",
          }}
        >
          {/* HAMBURGER ICON */}
          <span
            style={{
              fontSize: "24px",
              cursor: "pointer",
              marginRight: "16px",
            }}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </span>

          <h2>MyCompany</h2>
        </header>

        {/* BODY */}
        <div style={{ display: "flex", minHeight: "100vh" }}>
          {menuOpen && <Dashboard />}

          <main style={{ flex: 1, padding: "20px" }}>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
