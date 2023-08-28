const router = require('express').Router()
const md = require('./accounts-middleware')
const Account = require('./accounts-model')

router.get('/', async (req, res, next) => {
  try {
    res.json('get accounts')
  } catch (error) {
    next(error)
  }
})

router.get('/:id', md.checkAccountId, (req, res, next) => {
  // DO YOUR MAGIC
  try {
    res.json('get account getby id')
  } catch (error) {
    next(error)
  }
})

router.post(
  '/',
  md.checkAccountNameUnique,
  md.checkAccountPayload,
  (req, res, next) => {
    // DO YOUR MAGIC
    try {
      res.json('post account')
    } catch (error) {
      next(error)
    }
  })

router.put(
  '/:id',
  md.checkAccountId,
  md.checkAccountNameUnique,
  md.checkAccountPayload,
  (req, res, next) => {
    // DO YOUR MAGIC
    try {
      res.json('update account')
    } catch (error) {
      next(error)
    }
  });

router.delete('/:id', md.checkAccountId, (req, res, next) => {
  // DO YOUR MAGIC
  try {
    res.json('remove account')
  } catch (error) {
    next(error)
  }
})

router.use((err, req, res, next) => { // eslint-disable-line
  // DO YOUR MAGIC
  res.status(err.status || 500).json({ message: err.message })
})

module.exports = router;
