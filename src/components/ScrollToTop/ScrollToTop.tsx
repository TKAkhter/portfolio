import { useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";

import { ToTop } from "./ScrollToTop.styles";

export const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTopAction = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <>
      <ToTop>
        <FaArrowCircleUp
          onClick={scrollToTopAction}
          style={{ display: visible ? "inline" : "none" }}
        />
      </ToTop>
    </>
  );
};
