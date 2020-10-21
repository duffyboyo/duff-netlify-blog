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
        opacity: 1
      },
    }}>
      <Component {...pageProps} />
    </motion.span>
  );
}
