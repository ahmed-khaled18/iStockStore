require('dotenv').config();

const productData =require('./data/products');
const connectDB= require('./config/db');
const Product=require('./model/Product');

connectDB();

async function importData(){
try {
    
    await Product.deleteMany({});
    await Product.insertMany(productData);
    console.log("Data Import Success");
    // process.exit();
} catch (error) {
    console.error("Error with data iport");
    // process.exit(1);
}

};
module.exports = {importData};