import React from "react";
// import axios from "axios";

const sitemapXML = (data: any[]) => {
  let latestPost = 0;
  let projectsXML = "";

  data.map(post => {
    const postDate = Date.parse(post.modified);
    if (!latestPost || postDate > latestPost) {
      latestPost = postDate;
    }

    const projectURL = `https://domain.ltd/project/${post.slug}/`;
    projectsXML += `
      <url>
        <loc>${projectURL}</loc>
        <lastmod>${postDate}</lastmod>
        <priority>0.50</priority>
      </url>`;
  });

  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>https://domain.ltd/</loc>
        <lastmod>${latestPost}</lastmod>
        <priority>1.00</priority>
      </url>
      <url>
        <loc>https://domain.ltd/about/</loc>
        <priority>0.80</priority>
      </url>
      ${projectsXML}
    </urlset>`;
};

class Sitemap extends React.Component {
  // static async getInitialProps({ res }) {
  //   const data = await axios
  //     .get(
  //       "https://domain.ltd/some/url/"
  //     )
  //     .then(response => response.data);

  //   res.setHeader("Content-Type", "text/xml");
  //   res.write(sitemapXML(data));
  //   res.end();
  // }
}

export default Sitemap;