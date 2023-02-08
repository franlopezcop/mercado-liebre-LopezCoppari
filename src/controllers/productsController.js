
const jsonDB = require('../model/jsonDatabase');
const productModel = jsonDB('products')
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {

	index:(req,res) =>{
		const products = productModel.all();
		res.render('products', {products, toThousand})
	},
	
	detail: (req, res) => {
		const product = productModel.find(req.params.id)
		res.render('detail', {
			product,
			toThousand
		})
	},
	// Create formulario
	create: (req, res) => {
		res.render('product-create-form')
	},
	// Create guardar
	store: (req, res) => {
		const newProduct = {
			...req.body,
			image: 'default-image.png'
		}
		productModel.create(newProduct)
		console.log('cree un nuevo producto')
		res.redirect('/')
	},

	// Update formulario
	edit: (req, res) => {
		let productToEdit = productModel.find(req.params.id)
		res.render('product-edit-form', { productToEdit })
	},

	// Update metodo
	update: (req, res) => {
		let productToEdit = productModel.find(req.params.id)

		productToEdit = {

			id: productToEdit.id,
			...req.body,
			image: productToEdit.image,

		}
		productModel.update(productToEdit)
		res.redirect("/");

	},

    destroy: function(req,res){
        productModel.delete(req.params.id);
        res.redirect("/");
    }
};
module.exports = controller;