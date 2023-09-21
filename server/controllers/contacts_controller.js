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
    // Insert data into the database
    const newContacts = await db.Contacts.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      message: req.body.message,
      //  createdAt: Date.now(),
      // updatedAt: Date.now(),
    });

    // Respond with the newly created contact
    // res.status(201).json(newContacts);
    res.redirect ("/home")
  } catch (err) {
    res.status(500).send(`Server error: line31 ${err}`);
  }
});

module.exports = ContactsRouter;