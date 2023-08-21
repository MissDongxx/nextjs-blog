export default function handler(req, res) {
    // req is an instance of http.IncomingMessage, plus some pre-built middlewares.
    // res is an instance of http.ServerResponse, plus some helper functions.
    // Do Not Fetch an API Route from getStaticProps or getStaticPaths
    res.status(200).json({ text: 'Hello' });
}