import app from '../server/server';
const port = 8000

app.listen(port, function() {
 console.log('running at localhost: ' + port);
});