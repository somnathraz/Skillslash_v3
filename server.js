const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

// Import functions from lib/post.js and lib/page.js
const { getAllPostIds: getAllPostIdsId, getPostData: getPostDataId } = require('./lib/post');
const { getAllPostIds: getAllPostIdsId1, getPostData: getPostDataId1 } = require('./lib/page');

app.prepare().then(() => {
  createServer(async (req, res) => {
    const parsedUrl = parse(req.url, true);
    const { pathname } = parsedUrl;

    try {
      // Handle /[id].js and /ids/[id1].js routes
      if (pathname === '/[id].js' || pathname.startsWith('/ids/')) {
        let postData;
        if (pathname === '/[id].js') {
          const ids = await getAllPostIdsId();
          postData = ids;
        } else {
          const id1 = pathname.replace('/ids/', '');
          postData = await getPostDataId1(id1);
        }
        app.render(req, res, '/[id]', { postData });
      }
      // Handle dynamic city-based routes like /data-science-course-in-ahmedabad
      else if (pathname.startsWith('/data-science-course-in-')) {
        const city = pathname.replace('/data-science-course-in-', '');
        const postData = await getPostDataId1(city); // Adjust this based on your actual logic
        app.render(req, res, '/[id]', { postData });
      }
      // Handle another dynamic course route like /business-analytics-course-in-mumbai
      else if (pathname.startsWith('/business-analytics-course-in-')) {
        const city = pathname.replace('/business-analytics-course-in-', '');
        const postData = await getPostDataId1(city); // Adjust this based on your actual logic
        app.render(req, res, '/[id]', { postData });
      }
      // Default handler for other routes
      else {
        handle(req, res, parsedUrl);
      }
    } catch (err) {
      console.error('Error handling request:', err);
      res.statusCode = 500;
      res.end('Server Error');
    }
  }).listen(3000, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  });
});
