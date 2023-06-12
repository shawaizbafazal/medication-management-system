// import React, { useState } from "react";
import React, { useState } from "react";
import HomePage from "./components/HomePage";
import "./App.css";

function App() {
  const [loggedIn, setLoggedIn] = useState(true);

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <div className="App">
      <main>
        {loggedIn && <HomePage onLogout={handleLogout} />}
      </main>
    </div>
  );
}

export default App;
