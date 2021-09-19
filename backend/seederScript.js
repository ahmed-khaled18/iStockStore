require('dotenv').config();

const productData =require('./data/products');
const Product=require('./model/ProductModel');

async function importData(){
try {
    await Product.deleteMany({});
    await Product.insertMany(productData);
    console.log("Data Import Success");
} catch (error) {
    console.log(error);
}

};
module.exports = {importData};