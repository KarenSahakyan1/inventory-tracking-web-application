const Product = require('../models/products');

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

