import "normalize.css";
import { AppProps } from "next/app";
// NOTE: Do not move the styles dir to the src.
// They are used by the Netlify CMS preview feature.
import "../../public/styles/global.css";
import { motion } from 'framer-motion' 
export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <motion.span key={router.route} initial="pageInitial" animate="pageAnimate" variants={{
      pageInitial: {
        opacity: 0
      },
      pageAnimate: {
        opacity: [0.5, 0.75, 1]
      },
    }}>
      <div className="waveWrapper waveAnimation">
          <div className="waveWrapperInner bgTop">
            <div className="wave waveTop" style={{backgroundImage: "url('https://duffyboyo.com/images/wave-top.png')"}}></div>
          </div>
          <div className="waveWrapperInner bgMiddle">
            <div className="wave waveMiddle" style={{backgroundImage: "url('https://duffyboyo.com/images/wave-mid.png')"}}></div>
          </div>
          <div className="waveWrapperInner bgBottom">
            <div className="wave waveBottom" style={{backgroundImage: "url('https://duffyboyo.com/images/wave-bot.png')"}}></div>
          </div>
        </div>
      <Component {...pageProps} />
      <style jsx>
        {`
@keyframes move_wave {
  0% {
      transform: translateX(0) translateZ(0) scaleY(1)
  }
  50% {
      transform: translateX(-25%) translateZ(0) scaleY(0.55)
  }
  100% {
      transform: translateX(-50%) translateZ(0) scaleY(1)
  }
}
.waveWrapper {
  overflow: hidden;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  margin: auto;
  z-index: -1;
}
.waveWrapperInner {
  position: absolute;
  width: 100%;
  overflow: hidden;
  height: 100%;
  bottom: -1px;
  background-image: linear-gradient(to top, #86377b 20%, #27273c 80%);
}
.bgTop {
  z-index: 15;
  opacity: 0.5;
}
.bgMiddle {
  z-index: 10;
  opacity: 0.75;
}
.bgBottom {
  z-index: 5;
}
.wave {
  position: absolute;
  left: 0;
  width: 200%;
  height: 100%;
  background-repeat: repeat no-repeat;
  background-position: 0 bottom;
  transform-origin: center bottom;
}
.waveTop {
  background-size: 50% 100px;
}
.waveAnimation .waveTop {
animation: move-wave 3s;
 -webkit-animation: move-wave 3s;
 -webkit-animation-delay: 1s;
 animation-delay: 1s;
}
.waveMiddle {
  background-size: 50% 120px;
}
.waveAnimation .waveMiddle {
  animation: move_wave 10s linear infinite;
}
.waveBottom {
  background-size: 50% 100px;
}
.waveAnimation .waveBottom {
  animation: move_wave 15s linear infinite;
}
        `}
      </style>
    </motion.span>
  );
}
