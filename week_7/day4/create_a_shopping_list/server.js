// 1.Create an HTML file.

// 2.Add a form where you will allow the user to 
// submit a shopping item and an amount.

// 3.Create a js file, where you will have your express server.

// 4.When the form is submitted 
// (ie. the user clicks on the “Submit” button, 
// send the data to the server and save it in a file 
// (ie. save the item to your shopping list).

// 5.After submitting the data, direct the user to a page displaying your 
// shopping list items (including the newly added items).



const exp = require('express');
const env = require('dotenv');
const cors = require('cors');
const bp = require('body-parser');
const fs = require('fs');

const app = exp();
env.config();

app.use(cors()); //IMPORTANT

app.use(exp.json());
app.use(exp.urlencoded({
    extended: true
}));



// app.get('/', (req, res) => {
//     console.log(req.params);
//     res.send('GETGETE')
// })

app.post('/', (req, res) => {
    res.send(JSON.stringify(req.body))
})




app.listen(process.env.PORT, () => {
    console.log('listening to port ' + process.env.PORT);
})