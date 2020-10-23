import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";
import { SocialList } from "../components/SocialList";
import { motion } from 'framer-motion';
import Link from "next/link";
import { AtSign, Grid } from "react-feather";


export default function Index() {
  return (
    <Layout>
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />
      <TwitterCardMeta url={"/"} />
      <div className="container">
        <div>
          <motion.div initial="hidden" animate="visible" variants={{
            hidden: {
              scale: .8,
              opacity: 0,
            },
            visible: {
              scale: [.8, 1.2, 1],
              opacity: 1,
              transition: {
                delay: .2
              }
            },
          }}>
            <h1>
              So you want to know more<span className="fancy">...</span>
            </h1>
          </motion.div>

          <motion.div initial="hidden" animate="visible" variants={{
            hidden: {
              scale: .8,
              opacity: 0,
            },
            visible: {
              scale: [0.8, 1],
              opacity: [0.4, 0.8, 1],
              transition: {
                delay: 1.2
              }
            },
          }}>
            <p>I am a developer based in the UK with a wide range of experience.</p>
            <p>Most recently I have been exploring the idea of sustaining myself as a freelance developer and feel I can bring my experience in a self sustaining manner.</p>
            <p>I am currently looking for more work, if you are interested please <span className="fancy-link"><Link href={"/contact"}><span>contact me</span></Link></span></p>
            <p>If you are interested in some of my previous work please take a look at my <span className="fancy-link"><Link href={"/portfolio"}><span>portfolio</span></Link></span></p>
          </motion.div>
        </div>
        
      </div>
      <style jsx>{`
        .container {
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 1 1 auto;
          padding: 0 1.5rem;
        }
        h1 {
          font-size: 2.5rem;
          margin: 0;
          font-weight: 500;
        }
        h2 {
          font-size: 1.75rem;
          font-weight: 400;
          line-height: 1.25;
        }
        .fancy {
          color: #15847d;
        }



        .fancy-link {
            font-weight: 500;
            text-decoration: underline;
            cursor: pointer;
        }
        .handle {
          display: inline-block;
          margin-top: 0.275em;
          color: #9b9b9b;
          letter-spacing: 0.05em;
        }

        @media (min-width: 769px) {
          h1 {
            font-size: 3rem;
          }
          h2 {
            font-size: 2.25rem;
          }
        }
      `}</style>
    </Layout>
  );
}
