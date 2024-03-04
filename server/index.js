const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv");
const MongoDb = require("./Database/MongoDb")

//defining application 
const app = express();


// connect to the data base 
MongoDb();

//importing routes 
const userRoutes = require("./routes/UserRoutes")
const productRoutes = require("./routes/ProductRoute")
const WishListRoutes = require("./routes/WishListRoute")
const bagRoutes = require("./routes/BagRoute")
const orderRoutes = require("./routes/orderRoutes")
//const bagRoute = require("./routes/bagRoute")

// middlewares 
app.use(cors());
app.use(express.json());


//routes
app.use("/user", userRoutes);
app.use("/order", orderRoutes);
app.use("/product", productRoutes);
app.use("/wishList", WishListRoutes);
app.use("/bag", bagRoutes);

// app.use(errorMiddleWare);


const PORT = process.env.PORT || 8080

//listen

app.listen(PORT, () => {
    console.log(`backend started at ${PORT}`)
})