import { GetStaticProps } from "next";
import Layout from "../../components/Layout";
import BasicMeta from "../../components/meta/BasicMeta";
import OpenGraphMeta from "../../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../../components/meta/TwitterCardMeta";
import PortfolioList from "../../components/PortfolioList";
import config from "../../lib/config";
import { countPortfolio, listPortfolioContent, PortfolioContent } from "../../lib/portfolio";
import { listTags, TagContent } from "../../lib/tags";
import { motion } from 'framer-motion'
import { Truck } from 'react-feather'

type Props = {
    posts: PortfolioContent[];
    tags: TagContent[];
    pagination: {
      current: number;
      pages: number;
    };
  };

  
export default function Index({portfolio, tags, pagination}) {
    const url = "/portfolio";
    const title = "Portfolio";
    return (
        <Layout>
            <BasicMeta url={url} title={title} />
            <OpenGraphMeta url={url} title={title} />
            <TwitterCardMeta url={url} title={title} />
            {/* <div className="container">
                <h1>Portfolio under construction <Truck /> </h1>
            </div> */}
            <PortfolioList portfolio={portfolio} tags={tags} pagination={pagination} />
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

export const getStaticProps: GetStaticProps = async () => {
    const portfolio = listPortfolioContent(1, config.posts_per_page);
    const tags = listTags();
    const pagination = {
      current: 1,
      pages: Math.ceil(countPortfolio() / config.posts_per_page),
    };
    return {
      props: {
        portfolio,
        tags,
        pagination,
      },
    };
  };

