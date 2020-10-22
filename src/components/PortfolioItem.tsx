import { PortfolioContent } from "../lib/portfolio";
import Date from "./Date";
import Link from "next/link";
import { parseISO } from "date-fns";

type Props = {
  portfolio: PortfolioContent;
};
export default function PortfolioItem({ portfolio }: Props) {
  return (
    <Link href={"/portfolio/" + portfolio.slug}>
      <a>
        <h2>{portfolio.title}</h2>
        <style jsx>
          {`
            a {
              color: #e4e4e4;
              display: inline-block;
            }
            h2 {
              margin: 0;
              font-weight: 500;
            }
          `}
        </style>
      </a>
    </Link>
  );
}
