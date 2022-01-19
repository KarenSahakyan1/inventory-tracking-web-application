
const fs = require('fs');
const path = require('path');

const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'products.json'
);

const pcsv = path.join('data', 'products.csv')


const getProductsFromFile = cb => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};


    
   



module.exports = class Product {
    constructor(id, articleNumber,category, brand, name,  imageUrl, description, quantity, location, aisle, bin) {
      this.id = id;
      this.articleNumber = articleNumber;
      this.category = category;
      this.brand = brand;
      this.name = name;
      this.imageUrl = imageUrl;
      this.description = description;
      this.quantity = quantity;
      this.location = location;
      this.aisle = aisle;
      this.bin = bin;
    }
  
  save() {
    getProductsFromFile(products => {
      if (this.id) {
        const existingProductIndex = products.findIndex(
          prod => prod.id === this.id
        );
        const updatedProducts = [...products];
        updatedProducts[existingProductIndex] = this;
        fs.writeFile(p, JSON.stringify(updatedProducts), err => {
          console.log(err);
        });
      } else {
        this.id = Math.random().toString();
        products.push(this);
        fs.writeFile(p, JSON.stringify(products), err => {
          console.log(err);
        });
      }
    });
  
  }



  static deleteById(id) {
    getProductsFromFile(products => {
      const product = products.find(prod => prod.id === id);
      const updatedProducts = products.filter(prod => prod.id !== id);
      fs.writeFile(p, JSON.stringify(updatedProducts), err => {
      
      });
    });
    
  }


  static fetchAll(cb) {
    getProductsFromFile(cb);
    // console.log(fileContent)
   
  }

  static findById(id, cb) {
    getProductsFromFile(products => {
      const product = products.find(p => p.id === id);
      cb(product);
    });
  }


 
};
