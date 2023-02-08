const jsonDB = require('../model/jsonDatabase');
const productModel = jsonDB('products')
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const mainController = {
    index : (req,res)=>{
		
        const  visited = productModel.visited('visited')
        const inSale = productModel.inSale('in-sale')
        res.render('index', { visited, inSale,toThousand})
    },
    // search: (req, res)=>{
        
    // }

}
module.exports = mainController;
