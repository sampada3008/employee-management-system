import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./Feedback.css";
import { useState } from "react";
export default function feedback() {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [message, setMessage] = useState("");

  const handleRating = (value) => {
    setRating(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!rating || !feedback) {
      alert("It is mandatory to give star rating and feedback!");
    } else {
      alert("Feedback submitted successfully.");
    }
  };

  return (
    <div className="feedback">
      <div className="container d-flex justify-content-center align-items-center">
        <form
          className="feedback_form p-2 rounded-2"
          id="feedbackForm"
          onSubmit={handleSubmit}
        >
          <h2 className="mt-2 text-center">We value your opinion.</h2>
          <div className="text-center">
            {[1, 2, 3, 4, 5].map((value) => (
              <span
                key={value}
                className={`rating_star ${value <= rating ? "active" : ""}`}
                onClick={() => handleRating(value)}
              >
                  <FontAwesomeIcon icon={faStar} />
              </span>
            ))}
             {rating == 1 && <p>Terrible</p>}
             {rating == 2 && <p>Bad</p>}
             {rating == 3 && <p>OK</p>}
             {rating == 4 && <p>Good</p>}
             {rating == 5 && <p>Excellent</p>}
          </div>
          <div>
            <label htmlFor="feedback_msg" className="form-label mt-3">
              Your feedback:<sup className="text-danger">*</sup>
            </label>
            <textarea
              rows={12}
              cols={60}
              placeholder="Write your feedback here..."
              id="feedback_msg"
              className="form-control"
              onChange={(e) => setFeedback(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email" className="form-label mt-3">
              Email address(optional):
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Write your email address here..."
            />
          </div>
          <div className="submit-btn-cont mt-3 d-flex justify-content-center align-items-center mb-2">
            <button type="submit" className="btn btn-primary p-2">
              Submit feedback
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
