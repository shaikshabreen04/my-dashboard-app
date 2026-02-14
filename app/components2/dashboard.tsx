"use client";

import { useState } from "react";
import Link from "next/link";

export default function Dashboard() {
  const [productsOpen, setProductsOpen] = useState(false);
  const [electronicsOpen, setElectronicsOpen] = useState(false);
  const [furnitureOpen, setFurnitureOpen] = useState(false);
  const [booksOpen, setBooksOpen] = useState(false);

  return (
    <aside
      style={{
        width: "260px",
        background: "#1e293b",
        color: "white",
        padding: "20px",
      }}
    >
      <ul style={{ listStyle: "none", padding: 0 }}>
        {/* PRODUCTS */}
        <li>
          <strong
            style={{ cursor: "pointer" }}
            onClick={() => setProductsOpen(!productsOpen)}
          >
            Products
          </strong>

          {productsOpen && (
            <>
              {/* Electronics */}
              <div
                style={{ cursor: "pointer", marginTop: "10px" }}
                onClick={() => setElectronicsOpen(!electronicsOpen)}
              >
                Electronics
              </div>

              {electronicsOpen && (
                <ul style={{ listStyle: "none", paddingLeft: "20px" }}>
                  <li>
                    <Link href="/products/electronics/tv"> <span style={{ color: "white" }}>TV</span></Link>
                  </li>
                  <li>
                    <Link href="/products/electronics/mobiles"> <span style={{ color: "white" }}>Mobiles</span></Link>
                  </li>
                </ul>
              )}

              {/* Furniture */}
              <div
                style={{ cursor: "pointer", marginTop: "10px" }}
                onClick={() => setFurnitureOpen(!furnitureOpen)}
              >
                Furniture
              </div>

              {furnitureOpen && (
                <ul style={{ listStyle: "none", paddingLeft: "20px" }}>
                  <li>
                    <Link href="/products/furniture/computer-tables"> <span style={{ color: "white" }}>Computer Tables
                    </span></Link>
                  </li>
                  <li>
                    <Link href="/products/furniture/dining-tables"> <span style={{ color: "white" }}>Dining Tables</span></Link>
                  </li>
                </ul>
              )}
            </>
          )}
        </li>

        <br />

        {/* BOOKS */}
        <li>
          <strong
            style={{ cursor: "pointer" }}
            onClick={() => setBooksOpen(!booksOpen)}
          >
            Books
          </strong>

          {booksOpen && (
            <ul style={{ listStyle: "none", paddingLeft: "20px", marginTop: "10px" }}>
              <li>
                <Link href="/books/education"> <span style={{ color: "white" }}>Education</span></Link>
              </li>
              <li>
                <Link href="/books/general"> <span style={{ color: "white" }}>General</span></Link>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </aside>
  );
}
