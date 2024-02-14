import React, { useState, useEffect } from "react";
import "../css/Header.css"; // Import the CSS file
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Header = ({ onAddItem }) => {
  // Placeholder image URL for user profile picture
  const userProfilePictureUrl = "https://via.placeholder.com/50"; // Replace this with actual user profile picture URL

  // Mock user data (replace with actual user data)
  const userData = {
    name: "Walid",
    email: "walid.ayoubi2@hotmail.com",
  };

  // State to manage the visibility of the user menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to handle profile picture click and toggle the user menu
  const handleProfileClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      {/* Logo */}
      <div className="logo-container">
        <div
          className="logo"
          style={{
            backgroundImage: `url('https://cdn.pixabay.com/photo/2017/01/31/23/25/boy-2027611_960_720.png')`,
          }}
        />
        <span className="logo-text">
          IDO
          <br />
          <small>We Can Do It !</small>
        </span>
      </div>
      {/* Search bar */}
      <div className="search-bar-container">
        <input
          type="text"
          placeholder="Search..."
          className="search-bar violet"
        />
        <FontAwesomeIcon icon={faSearch} className="search-icon violet" />
      </div>
      {/* User profile picture */}
      <div className="user-profile-container">
        <div className="profile-picture-container">
          <img
            src={userProfilePictureUrl}
            alt="User Profile"
            className="user-profile-picture violet"
            onClick={handleProfileClick}
          />
          {/* User menu */}
          {isMenuOpen && (
            // Inside the user-menu div
            // Inside the user-menu div
            <div className="user-menu">
              <p className="menu-title">
                <span className="bold-text">Account Info:</span>
              </p>
              <p>
                <span className="bold-text">User:</span> {userData.name} <br />
                <span className="bold-text">Email:</span> {userData.email}
              </p>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

// import React from "react";
// import "../css/Header.css"; // Import the CSS file
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSearch } from "@fortawesome/free-solid-svg-icons";

// const Header = () => {
//   // Placeholder image URL for user profile picture
//   const userProfilePictureUrl = "https://via.placeholder.com/50"; // Replace this with actual user profile picture URL

//   // Function to handle adding an item
//   const handleAddItem = () => {
//     // Your logic for adding an item goes here
//     console.log("Add item clicked");
//   };

//   return (
//     <header className="header">
//       {/* Apply the 'header' class */}
//       {/* Logo */}
//       <div className="logo-container">
//         {/* Apply the 'logo-container' class */}
//         <div
//           className="logo"
//           style={{
//             backgroundImage: `url('https://cdn.pixabay.com/photo/2017/01/31/23/25/boy-2027611_960_720.png')`,
//           }}
//         />{" "}
//         {/* Apply the 'logo' class */}
//         <span className="logo-text">
//           IDO
//           <br />
//           <small>We Can Do It !</small>
//         </span>{" "}
//         {/* Apply the 'logo-text' class */}
//       </div>
//       {/* Add Item button */}
//       <button onClick={handleAddItem} className="add-item-button violet">
//         {/* Apply the 'add-item-button' class */}
//         <span>+</span>
//         <span className="add-item-label">Add Item</span>{" "}
//         {/* Apply the 'add-item-label' class */}
//       </button>
//       {/* Search bar */}
//       <div className="search-bar-container">
//         <input
//           type="text"
//           placeholder="Search..."
//           className="search-bar violet"
//         />
//         <FontAwesomeIcon icon={faSearch} className="search-icon violet" />
//       </div>
//       {/* User profile picture */}
//       <div className="user-profile-container">
//         {/* Apply the 'user-profile-container' class */}
//         <img
//           src={userProfilePictureUrl}
//           alt="User Profile"
//           className="user-profile-picture violet"
//         />{" "}
//         {/* Apply the 'user-profile-picture' class */}
//       </div>
//     </header>
//   );
// };

// export default Header;
