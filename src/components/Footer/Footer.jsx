import './Footer.css';

function Footer() {
  return (
    <>
      {/* -- Footer -- */}
      
<footer className="footer">
    <div className="container footer-grid">
        <div className="footer-col">
            <h3 className="footer-logo">Modern<span>Solutions</span></h3>
            <p className="footer-about">Driving digital innovation through cutting-edge technology solutions.</p>
            <div className="social-links">
                <a href="#" aria-label="LinkedIn">
                    <i className="fab fa-linkedin"></i>
                </a>
                <a href="#" aria-label="Twitter">
                    <i className="fab fa-twitter"></i>
                </a>
                <a href="#" aria-label="GitHub">
                    <i className="fab fa-github"></i>
                </a>
                <a href="#" aria-label="Dribbble">
                    <i className="fab fa-dribbble"></i>
                </a>
            </div>
        </div>
        
        <div className="footer-col">
            <h4>Quick Links</h4>
            <ul className="footer-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
        
        <div className="footer-col">
            <h4>Services</h4>
            <ul className="footer-links">
                <li><a href="#">Web Development</a></li>
                <li><a href="#">Mobile Apps</a></li>
                <li><a href="#">Cloud Solutions</a></li>
                <li><a href="#">UI/UX Design</a></li>
                <li><a href="#">Digital Strategy</a></li>
            </ul>
        </div>
        
        <div className="footer-col">
            <h4>Resources</h4>
            <ul className="footer-links">
                <li><a href="#">Blog</a></li>
                <li><a href="#">Case Studies</a></li>
                <li><a href="#">White Papers</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Support</a></li>
            </ul>
        </div>
    </div>
    
    <div className="footer-bottom">
        <div className="container">
            <p>&copy; 2023 Modern Solutions. All rights reserved.</p>
            <div className="legal-links">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
                <a href="#">Cookie Settings</a>
            </div>
        </div>
    </div>
</footer>
    </>
  );
}

export default Footer;
