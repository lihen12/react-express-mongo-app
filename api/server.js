const express = require('express');
const userRoutes = require('./routes/users')
const app = express();
const connectDb = require('./src/connection');
const User = require('./src/User.model');
const cors = require('cors');
const bodyParser = require('body-parser');


const PORT = 8080;
app.use(cors());
app.use(bodyParser.json());

//middleware
// any request, it looks at body and passes it to a request object
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.use('/api/users', userRoutes)

app.get('/', (req, res) => {
  res.json({mssg: 'Welcome to the app'})
})

/* app.get('/users', async (req, res) => {
  const users = await User.find();

  res.json(users);
});

app.get('/user-create', async (req, res) => {
  const user = new User({ username: 'userTest' });

  await user.save().then(() => console.log('User created'));

  res.send('User created \n');
}); */

app.listen(PORT, function() {
  console.log(`Listening on ${PORT}`);

  connectDb().then(() => {
    console.log('MongoDb connected');
  }); 
});
