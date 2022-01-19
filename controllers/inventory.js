const fs = require('fs');
const path = require('path');
const Product = require('../models/products');

const pcsv = path.join('data', 'products.csv')
const p = path.join('data', 'products.json')


exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('inventory/product-list', {
      prods: products,
      pageTitle: 'All Products',
      path: '/products'
    });
  });
};

exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findById(prodId, product => {
    res.render('inventory/product-detail', {
      product: product,
      pageTitle: product.name,
      path: '/products'
    });
  });
};

exports.getIndex = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('inventory/index', {
      prods: products,
      pageTitle: 'Inventory',
      path: '/'
    });
  });
};


exports.downloadCSV =(req, res, next)=>{
fs.readFile(pcsv, (err, data)=>{
if (err){
  return next(err);
}
res.send(data);
});
};

exports.exportCSV = (req, res, next) =>{
  fs.readFile(p, (err, data) => {
    if (err) {
      return nextTick(err)
    }
    const items = JSON.parse(data);
    const replacer = (key, value) => value === null ? '' : value //  handle null values here
    const header = Object.keys(items[0])
    const csv = [
      header.join(','), // header row first
      ...items.map(row => header.map(fieldName => JSON.stringify(row[fieldName], replacer)).join(','))
    ].join('\r\n')
    // console.log(csv)
    fs.writeFile(pcsv, csv, (err) => {
      if (err) console.log("error")
    });
  });
  
}