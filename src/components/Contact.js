import React from "react";

function Contact(props) {
    return (
        <div>
            <h2>Contact Me</h2>
            <div class="form-group">
                <label for="contactEmail">Email Address</label>
                <input
                    type="email"
                    class="form-control"
                    id="contactEmail"
                    placeholder="name@example.com"
                ></input>
            </div>

            <div class="form-group">
                <label for="contactTextArea">Message</label>
                <textarea
                    class="form-control"
                    id="contactTextArea"
                    rows="10"
                ></textarea>
            </div>
        </div>
    );
}

export default Contact;
