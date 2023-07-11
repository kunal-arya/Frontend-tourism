import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="company-container">
          <img src="/src/assets/logo.png" alt="logo" />
          <div className="footer-headings">
            <h3 className="footer-heading footer-heading-1">losangeles</h3>
            <h3 className="footer-heading footer-heading-2">mountains</h3>
          </div>
        </div>
        <p className="footer-para">COPYRIGHT 2016. ALL RIGHTS RESERVED.</p>
      </div>
    </footer>
  );
};

export default Footer;
