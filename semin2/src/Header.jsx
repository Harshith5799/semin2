import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function Header() {
  const { theme } = useContext(ThemeContext);

  return (
    <header style={{
      background: theme === "light" ? "#eee" : "#333",
      color: theme === "light" ? "#000" : "#fff",
      padding: "10px"
    }}>
      <h2>Header - {theme} mode</h2>
    </header>
  );
}

export default Header;