const model = require('./model');
const router = require('express').Router();

router.get('/users', async (req, res) => {
  try {
    const users = await model.getUsers();
    res.json(users);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Add more routes as needed

module.exports = router;
