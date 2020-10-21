import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";
import { SocialList } from "../components/SocialList";
import { motion } from 'framer-motion';

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
              Hi, Im <span className="fancy">Adam</span>.
            </h1>
          </motion.div>
          
          <motion.div initial="hidden" animate="visible" variants={{
            hidden: {
              scale: .8,
              opacity: 0,
            },
            visible: {
              scale: [.8 , 1],
              opacity: 1,
              transition: {
                delay: .8
              }
            },
          }}>
            <span className="handle">@duffyboyo</span>
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
            <h2>Freelance Software and Web Developer.</h2>
            <SocialList />
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
