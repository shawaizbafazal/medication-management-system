import React from "react";
import "./HomePage.css";

function HomePage({ onLogout }) {
  return (
    <div className="HomePage">
      <header>
        <h1>Medication Management System</h1>
        <button className="LogoutButton" onClick={onLogout}>
          Logout
        </button>
      </header>
      <div className="HomePageContent">
        <h2>Welcome to the Medication Management System</h2>
        {/* Add your content and components here */}
      </div>
    </div>
  );
}

export default HomePage;
