const express = require('express');
const app = express();
const cors = require('cors');
const fileUpload = require('express-fileupload');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./documentation/index');
require('./db');

const books = require('./routers/books.router');
const users = require('./routers/users.router');
const borrowBook = require('./routers/borrow.router');


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(process.env.PWD, + '/uploads'));
app.use(fileUpload({ createParentPath: true }));
app.use(express.urlencoded({ extended: false }));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/books', books);
app.use('/users', users);
app.use('/borrow', borrowBook);



const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Library management ${process.env.NODE_ENV} server running on ${port}`))
