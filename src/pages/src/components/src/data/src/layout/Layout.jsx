import React from "react";
import { Link } from "react-router-dom";

const Layout = ({ children }) => (
  <div className="flex h-screen bg-gray-100">
    <aside className="w-64 bg-gray-900 text-white p-5 hidden sm:block">
      <h1 className="text-2xl font-bold mb-8">Skullify</h1>
      <nav className="space-y-4">
        <Link to="/" className="block hover:underline">Home</Link>
        <Link to="/upload" className="block hover:underline">Upload</Link>
        <Link to="/studio" className="block hover:underline">Studio</Link>
      </nav>
    </aside>
    <main className="flex-1 p-5 overflow-auto">{children}</main>
  </div>
);

export default Layout;
