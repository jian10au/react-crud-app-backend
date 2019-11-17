const Product = require('../model/Product')


const index = (req,res) => {

    Product.find({}, (err,docs) => {
        if(err){
            console.log(err);
        }else{
            res.send(docs)
        }
    })
}

const create = async (req,res) => {
    const newProduct = await Product.create(req.body);
    res.send(newProduct)
}

module.exports = {
    index,
    create
}