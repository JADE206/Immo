import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="Sidebar">
      <h2>Property Sales</h2>
      <ul>
        <li>Sales Journey</li>
        <li>Property Information</li>
        <li>Required Documents</li>
        <li>Ad Tracking</li>
        <li>Legal Resources</li>
      </ul>
    </div>
  );
}

export default Sidebar;