import { useState } from "react";
import contactUs from"/Images/contactUs.png";

const Contact = () => {
  const [message, setMessage] = useState(false);
    const handleSubmit = (e) => {
        
    }
  return (
    <div className="contact-container">
      <div className="contact-left">
      <img src={contactUs} alt="" />
      </div>
      <div className="contact-right">
      <h1>Contact us</h1>
                <form className="formbox" onSubmit={handleSubmit}>
                    <input className="inp" type="text" placeholder="Name" required/>
                    <input className="inp" type="email" placeholder="Email" required/>
                    <textarea className="inp texta" placeholder="Type your Message here..." required></textarea>
                    <button className="inp btn" type="submit">Submit</button>
                </form>
      </div>
    </div>
  );
};

export default Contact;