import '../css/ContactUs.css'; // Ensure you have your CSS file
import qr from '../assets/qr.png'
const Contactus = () => {
  return (
    <div className="contactus-container">
      <div className="form-container">
        <h2>Contact Us</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" required></textarea>
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
      <div className="qr-container">
        <h2>Download Our App</h2>
        <div className="qr-placeholder">
          <img src={qr} alt="qr" />
          {/* <p>QR Code Placeholder</p> */}
        </div>
        <p>Scan the QR code to download the app!</p>
      </div>
    </div>
  );
};

export default Contactus;
