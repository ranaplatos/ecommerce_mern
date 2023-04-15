const Product = require("../models/productModel") 

//create product--Admin
exports.createProduct = async (req,res,next) => {
    const product = await Product.create(req.body);
    res.status(201).send({message:"Product created successfully!", success:true, product})
}

//get all ptoducts
exports.getAllProducts = async (req,res) => {
    const product = await Product.find()
    res.status(200).send({message:"Product fetched successfully",success: true, product})
}

//update product--Admin
exports.updateProduct = async (req,res) => {
    let product = await Product.findById(req.params.id)
    if(!product){
        return res.status(500).json({success: false, message: "Product not found!"})
    }
    product = await Product.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators: true, useFindAndModify: false});
    res.status(200).json({success: true, product})

}

