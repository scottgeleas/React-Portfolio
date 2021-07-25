import React from "react";

function Contact(props) {
    return (
        <div>
            <h2>Contact Me</h2>
            <div class="form-group">
                <label for="contactName">Name</label>
                <input
                    type="text"
                    class="form-control"
                    id="contactName"
                    placeholder="John Doe"
                ></input>
            </div>

            <div class="form-group">
                <label for="contactEmail">Email Address</label>
                <input
                    type="email"
                    class="form-control"
                    id="contactEmail"
                    placeholder="example@email.com"
                ></input>
            </div>

            <div class="form-group">
                <label for="contactTextArea">Message</label>
                <textarea
                    class="form-control"
                    id="contactTextArea"
                    placeholder="Write your message here"
                    rows="10"
                ></textarea>
            </div>
        </div>
    );
}

export default Contact;
