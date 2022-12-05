const express = require ('express')
const router = express.Router()
const path = require("path");

const categories = require(path.join(__dirname, "../model/Category.js"))
const products = require(path.join(__dirname, "../model/Product.js"))


router.get('/new', (req , res ) => {
    res.render('categoryForm', {title:"Créer un rayon"})
});


router.get('/', (req , res ) => {
    res.render('categories', {title:"Rayons",
        categories:categories.getAll()})
});

router.get('/:catIndex', (req , res ) => {
    res.render('category', {title:`Produits du rayon ${categories.getById(req.params.catIndex).name}`,
        products:products.getByCategory(req.params.catIndex)})
});

// TODO complete delete and update
module.exports = router