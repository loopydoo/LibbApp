const express = require('express')
const router = express.Router()

router.get('/', (reeq, res) => {
	res.render('index')
})

module.exports = router