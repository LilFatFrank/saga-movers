import { Button } from "@mui/material";
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
            <h2 style={{ position: "relative" }}>
              New Zealand’s most trusted
              <br />
              <span style={{ color: "#6349ff" }}>moving specialists</span>
              <img src="underline.svg" alt="underline" id="svg" />
            </h2>
          </div>
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
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          <img src="landing.png" alt="landing" id="landing-img" />
        </motion.div>
      </div>
      <div className="principles">
        <div className="list">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              type: "spring",
              bounce: 0.5,
              delay: 0.3,
            }}
          >
            <img src="Trust.png" alt="Trust" />
          </motion.div>
          <img src="Efficiency.png" alt="Efficiency" />
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              type: "spring",
              bounce: 0.5,
              delay: 0.3,
            }}
          >
            <img src="Support.png" alt="Support" />
          </motion.div>
        </div>
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
      <div className="testimonials">
        <img src="Testimonials.png" alt="testimonials" id="testimonials" />
        <div className="list">
          <img src="Joshika.png" alt="Joshika" />
          <img src="Courteney.png" alt="Courteney" />
          <img src="Jo.png" alt="Jo" />
          <img src="You.png" alt="You" />
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
      </div>
      <div className="port">
        <img src="Port.png" alt="port" id="port" />
        <div className="details">
          <img src="letsport.png" alt="Let's Port" id="letsport" />
          <div className="detail">
            <span id="saga">Saga Moving Specialists</span>
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
          <div className="detail">
            <span
              style={{
                paddingRight: "20px",
                borderRight: "1px solid #3d3d3d",
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
        </div>
      </div>
      <label>© All Rights Reserved</label>
    </div>
  );
};

export default App;
