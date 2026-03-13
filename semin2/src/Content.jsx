import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function Content() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div style={{
      background: theme === "light" ? "#fff" : "#111",
      color: theme === "light" ? "#000" : "#fff",
      padding: "20px"
    }}>
      <h2>Main Content</h2>
      <p>Current Theme: {theme}</p>

      <button onClick={toggleTheme}>
        Toggle Theme
      </button>
    </div>
  );
}

export default Content;