import React from "react";
// import Twitter from "../assets/twitter-alt.svg";
// import GitHub from "../assets/github-alt.svg";
import Medium from "../assets/medium-alt.svg";
import config from "../lib/config";
import { GitHub, Twitter } from 'react-feather';

export function SocialList({}) {
  return (
    <div>
      <a
        title="Medium"
        href={`https://medium.com/${config.twitter_account}`}
        target="_blank"
        rel="noopener"
      >
        <div className="iconOutline">
          <Medium width={24} height={24} fill={"#999"}  />
        </div>
      </a>
      <a
        title="Twitter"
        href={`https://twitter.com/${config.twitter_account}`}
        target="_blank"
        rel="noopener"
      >
        <Twitter width={24} height={24} fill={"#999"} />
      </a>
      <a
        title="GitHub"
        href={`https://github.com/${config.github_account}`}
        target="_blank"
        rel="noopener"
      >
        <GitHub width={24} height={24} fill={"#999"} />
      </a>
      <style jsx>{`
        a {
          display: inline-block;
        }
        a:not(:last-child) {
          margin-right: 2em;
        }

        .iconOutline {
          stroke: #fff;
          stroke-width: 1px;
          stroke-linejoin: round;
          transition: stroke 1s ease-in-out;
        }

        .iconOutline:hover {
          stroke: inherit;
          transition: stroke 1s ease-in-out;

        }
      `}</style>
    </div>
  );
}
