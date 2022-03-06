const router = require('express').Router();

router.use('/', (req, res) => {
  res.send('Ok');
});

module.exports = router;