import '../css/footer.css';

const Footer = () => {
    return (
        <div className="Footer hw100">
            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-logo">
                        <h2>ROCKET CAR WASH</h2>
                    </div>
                    <div className="footer-links">
                        <ul>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#contact">Contact</a></li>
                            <li><a href="#faq">FAQ</a></li>
                        </ul>
                    </div>
                    <div className="footer-social">
                        <ul>
                            <li><a href="https://facebook.com">Facebook</a></li>
                            <li><a href="https://instagram.com">Instagram</a></li>
                            <li><a href="https://twitter.com">Twitter</a></li>
                        </ul>
                    </div>
                    <div className="footer-locations">
                        <h3>Our Locations</h3>
                        <ul>
                            <li>Coimbatore - 123 Main St</li>
                            <li>Chennai - 456 Ocean Drive</li>
                            <li>Kanyakumari - 789 Hill Rd</li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2024 Rocket Car Wash. All Rights Reserved.</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer