const Product = require('../models/Products');

module.exports = {
  creteProduct: async (req, res) => {
    const newProduct = new Product(req.body)
    try {
      await newProduct.save();
      res.status(200).json('product create successfully')
    } catch (error) {
      res.status(500).json('failed to create product')
    }
  },

  getAllProduct: async (req, res) => {
    try {
      const products = await Product.find().sort({ craetedAt: -1 })
      res.status(200).json(products)
    } catch (error) {
      res.status(500).json('failed to get list product')
    }
  },

  getProduct: async (req, res) => {
    try {
      const product = await Product.findById(req.params.id)
      res.status(200).json(product)
    } catch (error) {
      res.status(500).json('failed to get a product')
    }
  },

  searchProduct: async (req, res) => {
    try {
      const result = await Product.aggregate([
        {
          $search: {
            index: 'furniture',
            text: {
              query: req.params.key,
              path: {
                wildcard: '*'
              }
            }
          }
        }
      ])
      res.status(200).json(result)
    } catch (error) {
      res.status(500).json('failed to search a product')
    }
  }
}