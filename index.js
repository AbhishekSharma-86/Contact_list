const exprees = require('express');
const path = require('path');
const port = 8000;

const app = exprees();

//app.set is used to set the atributes view engine as ejs and views to its path directory
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.get('/', function (req, res) {
    // res.send('<h1>Express is so cool</h1>');  //this is use to send response html file
    res.render('home', { title: "My Contact List" })  //to render the view engine file
})

app.listen(port, function (err) {
    if (err) {
        console.log('error', err);
        return;
    }
    console.log('yup, express server is up and running on port:', port);
})