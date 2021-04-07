// Animations
import { motion } from "framer-motion";
import { pageAnimation, titleAnim } from "../animation";
import styled from "styled-components";
import ScrollTop from "../components/ScrollTop";
import ContactIcons from "../components/ContactIcons";

const ContactUs = () => {
  return (
    <ContactStyle
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      style={{ background: "#1B1B1B" }}
    >
      <Title>
        <Hide>
          <motion.h2 variants={titleAnim}>
            Get in <span>touch</span>
          </motion.h2>
        </Hide>
      </Title>
      <div>
        <Hide>
          <Social variants={titleAnim}>
            <h2>Send Us a Message</h2>

            <div className="contact">
              <textarea placeholder="write here..."></textarea>
            </div>
            <button>Send</button>

            <div className="contact-line"></div>
          </Social>
        </Hide>
        {/* <Hide>
          <Social variants={titleAnim}>
            <h2>Send an Email</h2>
            <div className="contact-line"></div>
          </Social>
        </Hide> */}
        <Hide>
          <Social variants={titleAnim}>
            <h2>Social Media</h2>
            <ContactIcons />
            <div className="contact-line"></div>
          </Social>
        </Hide>
      </div>
      <ScrollTop />
    </ContactStyle>
  );
};

const ContactStyle = styled(motion.div)`
  padding: 5rem 10rem;
  color: #ffffff;
  min-height: 90vh;

  .contact {
    width: 100%;
    max-width: 400px;
  }

  textarea {
    width: 100%;
    height: 130px;
    border: 1px solid #555;
    padding: 10px;
    color: #111;
    outline: none;
    font-size: 16px;
    font-weight: 300;
    resize: none;
  }

  .contact-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }

  @media (max-width: 1100px) {
    padding: 2rem;
    font-size: 1rem;
  }
`;

const Title = styled.div`
  margin-bottom: 4rem;
  color: #ffffff;

  h2 {
    font-size: 4rem;
  }
  @media (max-width: 1100px) {
    margin-top: 5rem;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

const Social = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    margin: 2rem 2rem 2rem 0rem;
  }
`;

export default ContactUs;
