const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;


app.get('/', (req, res) => {
    res.send('Hello From My First Ever Node with node mon');
});

const users = [
    { id: "0", name: "morim", email: "morim@gmail.com" },
    { id: "1", name: "korim", email: "korim@gmail.com" },
    { id: "2", name: "rohim", email: "rohim@gmail.com" },
    { id: "3", name: "jani na", email: "janina@gmail.com" },
    { id: "4", name: "morjina", email: "morjina@gamil.com" }
]

app.get('/users', (req, res) => {
    const search = req.query.search;
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult)
    }
    else {
        res.send(users)
    }
})

// app.Method
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser)
    console.log("hitting the post", req.body);
    // res.send(JSON.stringify(newUser))
    res.json(newUser);

})


// dynamic api 
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id]
    res.send(user)
})

app.get('/fruits', (req, res) => {
    res.send(['mango', 'oranges', 'banana', 'apple'])
})

app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send('yummy yummy tok marka fazli')
})


app.listen(port, () => {
    console.log("listening to port", port);
});