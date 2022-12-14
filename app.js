const express = require('express');
const app = express();


const path = require('path')

app.set('view engine', 'ejs')

app.set('views', path.join(__dirname, 'views'));
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render('pages/index');
})

app.use('*', (req, res) => {
    res.redirect('/');
})

app.listen(process.env.PORT || 3000, () => {
    console.log("Listening on port 3000");
})