const express = require('express');
const exprees = require('express');
const path = require('path');
const port = 8000;


const db = require('./config/mongoose.js')
const Contact = require('./model/contacts');
const app = exprees();
app.use(express.urlencoded());
// app.use(exprees.static('assets')); //to access a static file, assets is the folder of that static website 

//app.set is used to set the atributes view engine as ejs and views to its path directory
ContactList = [
    {
        name:"prachi",
        phone: 756547847
    },
    {
        name : 'Abhishek',
        phone : 476474
    }
];

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.get('/', function (req, res) {
    // res.send('<h1>Express is so cool</h1>');  //this is use to send response html file
    res.render('home', { title: "My Contact List", contact_list: ContactList});  //to render the view engine file
});

app.post('/create-contact', (req,res)=>{
    // ContactList.push({
    //     name: req.body.name,
    //     phone:req.body.phone
    // })
    ContactList.push(req.body);
    return res.redirect('/');
})

//to delete a contact details from the contact list 
app.get('/delete-contact/', (req, res)=>{
        let phone = req.query.phone;
        let contactIndex = ContactList.findIndex(contact => contact.phone == phone);
        if(contactIndex != -1){
            ContactList.splice(contactIndex, 1);
        }
        return res.redirect('back');
})

app.listen(port, function (err) {
    if (err) {
        console.log('error', err);
        return;
    }
    console.log('yup, express server is up and running on port:', port);
})