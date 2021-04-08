import { motion } from "framer-motion";
import { useState } from "react";

const Toggle = ({ children, title, isContentDisabled }) => {
  const [toggle, setToggle] = useState(false);

  const renderDisabledContent = () => (
    <motion.div layout>
      <motion.h4 className="question" layout onClick={() => setToggle(!toggle)}>
        {title}
      </motion.h4>
      {toggle ? children : ""}
    </motion.div>
  );

  const renderClicableContent = () => (
    <motion.div layout className="question" onClick={() => setToggle(!toggle)}>
      <motion.h4 layout>{title}</motion.h4>
      {toggle ? children : ""}
      <div className="faq-line contact-line"></div>
    </motion.div>
  );

  return isContentDisabled ? renderDisabledContent() : renderClicableContent();
};

export default Toggle;
