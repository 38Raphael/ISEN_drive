const { MongoClient } = require('mongodb');
const debug = require('debug')('mongo');

const args = process.argv.slice(2);
const url = args[0] ?? 'mongodb://localhost:27017';
const dbName = args[1] ?? "isen_drive";
const client = new MongoClient(url);



async function getCategories(){
    await client.connect()
    const db = client.db(dbName);
    const categoriesCollection = db.collection('categories');
    const productsCollection = db.collection('products')

    const categories = await categoriesCollection.find().toArray()
    debug(products)
    for (i in categories){
        categories[i].size = 0
        const products = await productsCollection.countDocuments()
    }

    return categories
}

getCategories()
    .then(console.log)
    .catch(console.error)