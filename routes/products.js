const express = require ('express')
const router = express.Router()
const path = require("path");

const categories = require(path.join(__dirname, "../model/Category.js"))
const products = require(path.join(__dirname, "../model/Product.js"))

router.get('/new', (req , res ) => {
    res.render('productForm', {title:"Créer un produit",
        categories:categories.getAll()})
});

router.get('/:prodIndex', (req , res ) => {
    product = products.getById(req.params.prodIndex)
    res.render('product', {title:product.name,
        product:product})
});

//TODO complete delete and update

// router.get('/:prodIndex/delete', (req , res ) => {
//     product = products.getById(req.params.prodIndex)
//     res.render('productDelete', {title: `Supprimer le produit ${product.name}`,
//         product:product,
//         products:products})
// });

module.exports = router