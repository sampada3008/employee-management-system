import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../navbar/Navbar";
import "./Help.css";
import { Link } from "react-router-dom";

export default function Help() {
  return (
    <div className="help">
      <Navbar />
      <div className="text-center" id="search-section">
        <h1 className="text-center">How can we help?</h1>
        <div className="d-flex justify-content-center">
          <div className="text-center mt-3 search-div rounded-3">
            <input
              type="search"
              placeholder="Write your query here..."
              className="form-control"
            />
            <FontAwesomeIcon icon={faMagnifyingGlass} className="mx-3" />
          </div>
        </div>
      </div>
      <div id="introduction" className="help_subsec ms-2 p-2">
        <h2 className="mt-3">
          <img
            src="src\assets\images\free-bulb-icon.png"
            height={"60px"}
            width={"70px"}
            className="mb-3"
          />
          <span className="ms-3">Introduction</span>
        </h2>
        <p>
          Welcome to the Employee Management System! This tool helps you
          efficiently manage employee records through easy-to-use CRUD
          operations (Create, Read, Update, Delete).
        </p>
      </div>
      <hr />
      <div id="Getting_Started" className="help_subsec ms-2 p-2">
        <h2>
          <img
            src="src\assets\images\rocket.png"
            height={"40px"}
            width={"50px"}
            className="mb-2"
          />
          <span className="ms-3">Getting Started</span>
        </h2>
        <ul>
          <li>
            <strong>Login:</strong> Enter your email and password to access the
            system.
          </li>
          <li>
            <strong>Dashboard Overview:</strong> The main dashboard displays
            employee records and available actions.
          </li>
        </ul>
      </div>
      <hr />
      <div id="Sys_Req" className="help_subsec ms-2 p-2">
        <h2>
          <img
            src="src\assets\images\computer.png"
            height={"40px"}
            width={"50px"}
            className="mb-2"
          />
          <span className="ms-3">System Requirements</span>
        </h2>
        <ul>
          <li>
            <strong>Recommended:</strong> Google Chrome, Microsoft Edge, Mozilla
            Firefox
          </li>
          <li>
            <strong>Dashboard Overview:</strong> The main dashboard displays
            employee records and available actions.
          </li>
        </ul>
      </div>
      <hr />
      <div id="contact_support" className="help_subsec ms-2 p-2">
        <h2>
          <img
            src="src\assets\images\chat-icon.png"
            height={"40px"}
            width={"50px"}
            className="mb-2"
          />
          <span className="ms-3">Contact Support</span>
        </h2>
        If you encounter technical issues, reach out to our support team:
        <ul>
          <li>
            <strong>Email: </strong>support@ems.com
          </li>
          <li>
            <strong>Phone: </strong>+123-456-7890
          </li>
        </ul>
      </div>
      <hr />
      <div id="feedback" className="help_subsec ms-2 p-2">
        <h2>
          <img
            src="src\assets\images\feedback-icon.png"
            height={"50px"}
            width={"60px"}
            className="mb-2"
          />
          <span className="ms-3">Feedback</span>
        </h2>
        We value your feedback! Let us know how we can improve by submitting your suggestions in the <Link to = "/feedback" id = "feedback_link">Feedback </Link>tab.
      </div>
    </div>
  );
}
