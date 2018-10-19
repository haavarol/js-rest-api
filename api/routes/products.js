const express = require('express');
const router = express.Router();

router.get('/', (req, res, nexxt) => {
  res.status(200).json({
    message: 'Handling GET requests to /products'
  })
})

router.post('/', (req, res, nexxt) => {
  const product = {
    name: req.body.name,
    price: req.body.price
  }
  res.status(201).json({
    message: 'Handling POST requests to /products',
    createdProduct: product
  })
})

router.get('/:productId', (req, res, nexxt) => {
  const id = req.params.productId;
  if (id === 'special') {
    res.status(200).json({
      message: 'You discoverd the special ID',
      id: id
    })
  }
  else {
    res.status(200).json({
      message: 'You passed an ID'
    })
  }
})

router.patch('/:productId', (req, res, nexxt) => {
  res.status(200).json({
    message: 'Updated product!'
  })
})

router.delete('/:productId', (req, res, nexxt) => {
  res.status(200).json({
    message: 'Deleted product!'
  })
})
module.exports = router;