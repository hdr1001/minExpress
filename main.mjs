import Express from 'express';

const app = Express();
const port = 8088;

app.get('/about', (req, resp) => {
   resp.send('A prototype at most 🤓')
});

app.listen(port, () => console.log(`Listening on port ${port}`));

