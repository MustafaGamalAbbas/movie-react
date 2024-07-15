import { writeFileSync } from 'fs';
import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';

const BASE_URL = 'https://yourdomain.com';

const fetchPages = async () => {
  // Fetch your dynamic pages from the API or data source
  const movies = ["550","500"]; // Example movie IDs
  const moviePaths = movies.map((movie) => `/movie/${movie}`);

  return moviePaths;
};

(async () => {
  const staticPaths = ['/', '/login']; // Add your static routes here
  const dynamicPaths = await fetchPages();
  const paths = [...staticPaths, ...dynamicPaths];
  console.log('Sitemap generated successfully');
  const stream = new SitemapStream({ hostname: BASE_URL });
  stream.write({ url: '/', changefreq: 'weekly' }); // Example of adding a static path
  dynamicPaths.forEach(path => {
    stream.write({ url: path, changefreq: 'weekly' });
  });
  stream.end();
  console.log('Sitemap generated successfully');
  const xml = await streamToPromise(stream).then((data) =>
    data.toString()
  );

  writeFileSync('./public/sitemap.xml', xml);
  console.log('Sitemap generated successfully');
})();
