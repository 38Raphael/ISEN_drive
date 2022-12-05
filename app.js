require('dotenv').config()
const debug = require('debug')('http')
const tests = require('debug')('tests')

const express = require ('express')
const morgan = require('morgan')
const path = require('path')
const app = express();

let port = 3000;
if (process.env.PORT != null){
    tests("Le port a été trouvé ! Yes !")
    port = process.env.PORT
}
const indexRouter = require(path.join(__dirname, "routes/index.js"))
const categoriesRouter = require(path.join(__dirname, "routes/categories.js"))
const productsRouter = require(path.join(__dirname, "routes/products.js"))

app.use(morgan('tiny'))
app.use(express.static(path.join(__dirname, "public")))

app.set('views', path.join(__dirname, "views"))
app.set('view engine', 'pug')

app.use("/", indexRouter)
app.use("/categories", categoriesRouter)
app.use("/products", productsRouter)

app.listen(port, () =>{
    debug(`Listening on port ${port}`);
});