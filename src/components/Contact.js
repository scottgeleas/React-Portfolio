import React from "react";

function Contact(props) {
    return (
        <div>
            <h2>Contact Me</h2>
            <div className="form-group">
                <label for="contactName">Name</label>
                <input
                    type="text"
                    className="form-control"
                    id="contactName"
                    placeholder="John Doe"
                ></input>
            </div>

            <div className="form-group">
                <label for="contactEmail">Email Address</label>
                <input
                    type="email"
                    className="form-control"
                    id="contactEmail"
                    placeholder="example@email.com"
                ></input>
            </div>

            <div className="form-group">
                <label for="contactTextArea">Message</label>
                <textarea
                    className="form-control"
                    id="contactTextArea"
                    placeholder="Write your message here"
                    rows="10"
                ></textarea>
            </div>
        </div>
    );
}

export default Contact;
