import React from "react";
import { PortfolioContent } from "../lib/portfolio";
import PortfolioItem from "./PortfolioItem";
import TagLink from "./TagLink";
import Pagination from "./Pagination";
import { TagContent } from "../lib/tags";
import Link from "next/link";
import { Row, Col } from 'react-flexbox-grid/dist/react-flexbox-grid';
type Props = {
  portfolio: PortfolioContent[];
  tags: TagContent[];
  pagination: {
    current: number;
    pages: number;
  };
};
export default function PortfolioList({ portfolio, tags, pagination }: Props) {
  return (
    <div className={"container"}>
      <div className={"posts"}>
        <div className={"post-list"}>
            <Row>
              {portfolio.map((it, i) => (
                  <Col md={4}>
                    <Link href={"/portfolio/" + it.slug}>
                      <a>
                        <img className={"responsive"} src={"/images/" + it.image} /> 
                      </a>
                    </Link>
                    <PortfolioItem portfolio={it} />
                  </Col>
              ))}
            </Row>
          <Pagination
            current={pagination.current}
            pages={pagination.pages}
            link={{
              href: (page) => (page === 1 ? "/posts" : "/posts/page/[page]"),
              as: (page) => (page === 1 ? null : "/posts/page/" + page),
            }}
          />
        </div>
      </div>
      <ul className={"categories"}>
        {tags.map((it, i) => (
          <li key={i}>
            <TagLink tag={it} />
          </li>
        ))}
      </ul>
      <style jsx>{`
        .container {
          display: flex;
          margin: 0 auto;
          max-width: 1200px;
          width: 100%;
          padding: 0 1.5rem;
        }
        ul {
          margin: 0;
          padding: 0;
        }
        li {
          list-style: none;
        }
        .posts {
          display: flex;
          flex-direction: column;
          flex: 1 1 auto;
        }
        .posts li {
          margin-bottom: 1.5rem;
        }
        .post-list {
          flex: 1 0 auto;
        }
        .categories {
          display: none;
        }
        .categories li {
          margin-bottom: 0.75em;
        }

        @media (min-width: 769px) {
          .categories {
            display: block;
            margin-left: 10px;
          }
        }
      `}</style>
    </div>
  );
}
