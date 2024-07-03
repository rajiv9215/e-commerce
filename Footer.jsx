import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="social">
        
      </div>
      <div className="bottom">
        <div>
          <h1>Villa kitchen</h1>
          <p>© 2024 Villa Pvt. Ltd</p>
          <p>Made by <span>Rajiv🙍🏻‍♂️</span></p>
        </div>
        <div>
          <ul>
           <li style={{color: "black"}}>Company</li>
            <li><Link>About</Link></li>
            <li><Link>Careers</Link></li>
            <li><Link>Team</Link></li>
          </ul>
        </div>
        <div>
          <ul>
          <li style={{color: "black"}}>Contact Us</li>
            <li><Link>Help & Support</Link></li>
            <li><Link>Partner with</Link></li>
            <li><Link>Explore</Link></li>
          </ul>
        </div>
        <div id="lastdiv">
          <ul>
            <li style={{color: "black"}}>Legal</li>
            <li><Link>Terms & Conditions</Link></li>
            <li><Link>Careers</Link></li>
            <li><Link>Team</Link></li>
            <li><Link>Privacy policy</Link></li>
            <li><Link>Investor Relation</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
