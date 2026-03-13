import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function Sidebar() {
  const { theme } = useContext(ThemeContext);

  return (
    <div style={{
      background: theme === "light" ? "#ddd" : "#222",
      color: theme === "light" ? "#000" : "#fff",
      padding: "10px"
    }}>
      <h3>Sidebar - {theme} theme</h3>
    </div>
  );
}

export default Sidebar;