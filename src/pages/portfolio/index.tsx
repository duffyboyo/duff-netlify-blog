import Layout from "../../components/Layout";
import BasicMeta from "../../components/meta/BasicMeta";
import OpenGraphMeta from "../../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../../components/meta/TwitterCardMeta";
import { motion } from 'framer-motion'
export default function Portfolio() {
    return (
        <Layout>
            <BasicMeta url={"/"} />
            <OpenGraphMeta url={"/"} />
            <TwitterCardMeta url={"/"} />
            <div className="container">
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
                    <h1>Portfolio coming soon...</h1>
                </motion.div>
            </div>
            <style jsx>
                {
                    `
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
                      }`
                }
            </style>
        </Layout>
    );
}