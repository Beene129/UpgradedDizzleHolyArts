import { useSpring, animated, config } from "@react-spring/web";
import React from "react";
import SlidingPic from "../../assets/small/portraits/AllenBeenelogo.png";

import "./AnimatedImg.css";

function AnimatedImg() {
  const styles = useSpring({
    loop: { reverse: false },
    from: { y: 0, opacity: 0 },
    to: { y: 200, opacity: 1 },
    config: { mass: 12, tension: 180, friction: 12 },
  });

  return (
    

      <animated.div style={styles}>
        <div className="AnmatedImg">

        <div className="theImg">
          <img
            src={SlidingPic}
            alt="God Bless"
            name="Insert_logo"
            width="190"
            height="190"
            id="htdslider"
            style={{  borderRadius: "10px"
            }}
          />
        </div>
        </div>
        </animated.div>
   
  );
}

export default AnimatedImg;
