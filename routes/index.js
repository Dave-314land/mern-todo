const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

router.get('/test', (req, res) => {
  res.send('Hello World!')
})

module.exports = router;
