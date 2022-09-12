import { Button, withTheme } from "@mui/material";
import "./styles/app.scss";
import { motion } from "framer-motion";

const App = () => {
  return (
    <div className="app">
      <div className="landing">
        <motion.div
          className="header"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="logo-area">
            <img src="SAGA.png" alt="Logo" id="logo" />
            <div className="logo-text">
              <h2 style={{ position: "relative", color: "#3D3D3D" }}>
                New Zealand’s most trusted
                <br />
                <span style={{ color: "#3D3D3D" }}>moving specialists</span>
                {/* <img src="underline.svg" alt="underline" id="svg" /> */}
              </h2>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="about-us">
        <img src="about.png" alt="about" id="about" />
        <p>
          At SAGA, we take pride in being the most efficient movers and packers
          in New Zealand.
          <br /> With a fleet of over a dozen vehicles, we’re helped countless
          families across NZ move successfully.
        </p>
        <Button
          variant="contained"
          onClick={() =>
            window.open(
              "https://www.facebook.com/Sagamovingspecialists/",
              "_blank",
              "noopener"
            )
          }
        >
          Book Now
        </Button>
      </div>
      <div>
        <video autoPlay loop muted width="100%" height="auto">
          <source src="saga-video.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="about-us">
        <img src="services.png" alt="about" id="about" />
        <div className="services-container">
          <img
            src="services1.png"
            alt="services"
            id="services"
            className="item"
          />
          <div className="item">
            <h3>Furniture Moving</h3>
            <p>
              Moving into a new place? Want your goods moved safely and
              efficiently? We have helped countless home owners relocate
              reliably.
            </p>
            <a
              href="https://www.facebook.com/Sagamovingspecialists/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read More &nbsp;&nbsp;&nbsp;
              <img src="arrow.png" alt="arrow" width="auto" height="15px" />
            </a>
          </div>
          <div className="item">
            <h3>Timely Services</h3>
            <p>
              With a fleet of over a dozen trucks, we are reliable, on-time, and
              customer friendly. Need last minute changes, we got you!
            </p>
            <a
              href="https://www.facebook.com/Sagamovingspecialists/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read More &nbsp;&nbsp;&nbsp;
              <img src="arrow.png" alt="arrow" width="auto" height="15px" />
            </a>
          </div>
          <img
            src="services2.png"
            alt="services"
            id="services"
            className="item"
          />
        </div>
      </div>
      <div className="about-us">
        <img src="gallery.png" alt="about" id="about" />
        <img
          src="gallery-content.jpeg"
          alt="gallery"
          id="gallery"
          width="100%"
          height="auto"
        />
        <div className="link">
          <a
            href="https://www.facebook.com/Sagamovingspecialists/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="link-div">&nbsp;</div>
          </a>
        </div>
      </div>
      <div className="port">
        <div className="port-image-container">
          <img
            src="connect-img.png"
            alt="contact"
            id="contact"
            width="100%"
            height="auto"
          />
          <div className="port-text">
            <h2>Connnect With Us</h2>
            <p>
              Reach out for a quick moving service. <br /> We don't disappoint.
            </p>
            <span>
              <a
                href="https://www.facebook.com/Sagamovingspecialists/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="fb.png" alt="fb" id="fb" width="auto" height="40px" />
              </a>
              <label>© All Rights Reserved</label>
            </span>
          </div>
        </div>
        <div className="details">
          <span className="triangle">
            <img src="triangle.png" alt="triangle" id="triangle" />
            <h3 style={{ fontSize: "2rem" }}>Ready to Move?</h3>
          </span>
          <div className="detail-title">
            <span id="saga">SAGA Moving Specialists</span>
            <img src="Check.png" alt="Check" />
          </div>
          <div className="detail">
            <span id="text" style={{ textAlign: "right" }}>
              6 Ken Browne drive, Te rapa 3200 <br />
              Hamilton, New Zealand
            </span>
            <img src="Location.png" alt="Location" />
          </div>
          <div className="detail">
            <span id="text">+64 21 152 8084</span>
            <img src="Phone.png" alt="phone" />
          </div>
          <div className="detail">
            <a
              href="mailto:sagamovingspecialists@gmail.com"
              style={{ color: "inherit" }}
              id="text"
            >
              sagamovingspecialists@gmail.com
            </a>
            <img src="Mail.png" alt="mail" />
          </div>
          <div className="detail" style={{ border: "none" }}>
            <span
              style={{
                paddingRight: "20px",
                borderRight: "1px solid #ffffff66",
                display: "flex",
                alignItems: "center",
                gap: "5px",
              }}
              id="text"
            >
              <img src="Star.png" alt="star" />
              4.8 / 5
            </span>
            <span style={{ paddingLeft: "20px" }}>
              <Button
                variant="contained"
                style={{
                  background: "white",
                  color: "#3D3D3D",
                  fontSize: "0.8rem",
                }}
                onClick={() =>
                  window.open(
                    "https://www.facebook.com/Sagamovingspecialists/",
                    "_blank",
                    "noopener"
                  )
                }
              >
                Book Now
              </Button>
            </span>
          </div>
          <img src="hex.png" alt="hex" id="hex" />
        </div>
      </div>
    </div>
  );
};

export default App;
