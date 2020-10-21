import fs from "fs";
import matter from "gray-matter";
import path from "path";
import yaml from "js-yaml";

const portfolioDirectory = path.join(process.cwd(), "src/pages/portfolio");

export type PortfolioContent = {
  readonly date: string;
  readonly title: string;
  readonly slug: string;
  readonly tags?: string[];
};

let portfolioCache: PortfolioContent[];

function fetchPortfolioContent(): PortfolioContent[] {
  if (portfolioCache) {
    return portfolioCache;
  }
  // Get file names under /portfolio
  const fileNames = fs.readdirSync(portfolioDirectory);
  const allPortfolioData = fileNames
    .filter((it) => it.endsWith(".mdx"))
    .map((fileName) => {
      // Read markdown file as string
      const fullPath = path.join(portfolioDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      // Use gray-matter to parse the portfolio metadata section
      const matterResult = matter(fileContents, {
        engines: {
          yaml: (s) => yaml.safeLoad(s, { schema: yaml.JSON_SCHEMA }) as object,
        },
      });
      const matterData = matterResult.data as {
        date: string;
        title: string;
        tags: string[];
        slug: string;
      };
      const slug = fileName.replace(/\.mdx$/, "");

      // Validate slug string
      if (matterData.slug !== slug) {
        throw new Error(
          "slug field not match with the path of its content source"
        );
      }

      return matterData;
    });
  // Sort portfolio by date
  portfolioCache = allPortfolioData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
  return portfolioCache;
}

export function countPortfolio(tag?: string): number {
  return fetchPortfolioContent().filter(
    (it) => !tag || (it.tags && it.tags.includes(tag))
  ).length;
}

export function listPortfolioContent(
  page: number,
  limit: number,
  tag?: string
): PortfolioContent[] {
  return fetchPortfolioContent()
    .filter((it) => !tag || (it.tags && it.tags.includes(tag)))
    .slice((page - 1) * limit, page * limit);
}
