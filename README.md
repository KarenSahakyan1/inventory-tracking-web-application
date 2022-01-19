The application is written in javascript language - but you will also need to install a node.js engine. 

# Instruction

1. Clone this repository locally to your machine.  
   https://github.com/KevinSahakyan/inventory-tracking-web-application.git
   
2. Install node.js. 
   https://nodejs.org/en/download/
   
3. Open Terminal or Command Prompt (Set Path where File(app) is located  using cd) 

4. Type npm install

5. Type npm start or npm run dev

7. On the browser open  http://localhost:3001/

# Requirements:

   Basic CRUD Functionality
   ------------------------
   As the following was in the assignment requirements: Don’t assume any technologies exist in the reviewer's environment. 
   I handled the data without using a database. All the information is save in the Data folder under Product.json file (in json format) 
   In the application top navigation bar which is also functioning on mobile version, I have the following menu icons:
   - Product List
   - Product
   - Add a product
   - Admin product (which is used for editing and deleting purposes)

  First option: "Push a button to export product to CSV"
  ------------------------------------------------------
   In the product list menu, I created the export CSV and download CSV buttons. 

   The export CSV button can be used to filter the products and convert them into CSV format. At present, it converts by Default into the Data folder
   in the    product.json file where all the data is handled and is saved in the Data folder product.csv file.

   Download CSV button downloads the product.csv file 



