const Product = require('../models/products');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    editing: false
  });
};

exports.postAddProduct = (req, res, next) => {
  const articleNumber = req.body.articleNumber;
  const category = req.body.category;
  const brand = req.body.brand
  const name = req.body.name;
  const imageUrl = req.body.imageUrl;
  const description = req.body.description;
  const quantity = req.body.quantity;
  const location = req.body.location;
  const ailse = req.body.aisle;
  const bin = req.body.bin;
  
  const product = new Product(null, articleNumber, category, brand, name, imageUrl, description, quantity, location, ailse, bin) ;
  product.save();
  res.redirect('/');
};







exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect('/');
  }
  const prodId = req.params.productId;
  Product.findById(prodId, product => {
    if (!product) {
      return res.redirect('/');
    }
    res.render('admin/edit-product', {
      pageTitle: 'Edit Product',
      path: '/admin/edit-product',
      editing: editMode,
      product: product
    });
  });
};

exports.postEditProduct = (req, res, next) => {
  const prodId = req.body.productId;
  const updatedArticleNumber = req.body.articleNumber;
  const updatedBrand = req.body.brand;
  const updatedCategory = req.body.category;
  const updatedName = req.body.name;
  const updatedImageUrl = req.body.imageUrl;
  const updatedDescription = req.body.description;
  const updatedQuantity = req.body.quantity;
  const updatedLocation = req.body.location;
  const updatedAislese = req.body.aisle;
  const updatedBin = req.body.bin;



  const updatedProduct = new Product(
    prodId,
    updatedArticleNumber,
    updatedBrand,
    updatedCategory,
    updatedName,
    updatedImageUrl,
    updatedDescription,
    updatedQuantity,
    updatedLocation,
    updatedAislese,
    updatedBin

    
  );
  updatedProduct.save();
  res.redirect('/admin/products');
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('admin/products', {
      prods: products,
      pageTitle: 'Admin Products',
      path: '/admin/products'
    });
  });
};

exports.postDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.deleteById(prodId);
  res.redirect('/admin/products');
};
