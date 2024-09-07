import { useEffect } from "react";
import SmoothScrollbar from "smooth-scrollbar";
import OverscrollPlugin from "smooth-scrollbar/plugins/overscroll";

const overscrollOptions = {
  enable: false,
  effect: "bounce",
  damping: 0.15,
  maxOverscroll: 150,
};

const options = {
  damping: 0.07,
  plugins: {
    overscroll: { ...overscrollOptions },
  },
};

const SmoothScroll = () => {
  useEffect(() => {
    SmoothScrollbar.use(OverscrollPlugin);
    SmoothScrollbar.init(document.body, options);

    return () => {
      if (SmoothScrollbar) SmoothScrollbar.destroy(document.body);
    };
  }, []);
  return null;
};

export default SmoothScroll;
