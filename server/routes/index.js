// const taskRoutes = require("./taskRoutes");
const product = require("./product");
const category = require("./category");
const productdetails = require("./productdetails");
const promotion = require("./promotion");
const guarantee = require("./guarantee");
const { db } = require("../models/category");
const { connect } = require("mongoose");



function routes (app) {
    // app.use("/api/tasks", taskRoutes)
    app.use("/api/categorys", category)
    app.use("/api/products", product)
    app.use("/api/productdetailss", productdetails)
    app.use("/api/promotions", promotion)
    app.use("/api/guarantees", guarantee)
    
}


module.exports = routes