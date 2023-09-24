const ContactsRouter = require('express').Router();
const db = require('../models');

// GET All contacts
ContactsRouter.get('/', async (req, res) => {
  try {
    const foundContacts = await db.Contacts.findAll();
    res.status(200).json(foundContacts);
  } catch (err) {
    res.status(500).send(`Server error: ${err}`);
  }
});

ContactsRouter.post('/', async (req, res) => {
  try {
    const x = Date.now()
    console.log(x)
    const newContacts = await db.Contacts.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      message: req.body.message,
    });

    res.redirect ("/home")
  } catch (err) {
    res.status(500).send(console.log('error'));
  }
});

module.exports = ContactsRouter;