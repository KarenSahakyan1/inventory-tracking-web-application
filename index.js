

const express = require('express');
const bodyParser = require('body-parser');



const app = express();




const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));

