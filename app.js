// express 모듈
const express = require('express');
const app = express();

// dotenv 모듈
const dotenv = require('dotenv');
dotenv.config();

app.listen(process.env.PORT);

const userRouter = require('./routes/users');
const bookRouter = require('./routes/books');
const categoryRouter = require('./routes/category');
const cartRouter = require('./routes/carts');
const orderRouter = require('./routes/orders');
const likeRouter = require('./routes/likes');

app.use('/users', userRouter);
app.use('/books', bookRouter);
app.use('/category', categoryRouter);
app.use('/carts', cartRouter);
app.use('/orders', orderRouter);
app.use('/likes', likeRouter);