
const express = require('express');
const publicRouter = express.Router();
const Tag = require('../../mongo/model/Tag');


// Create new user if does not exists
publicRouter.route('/tags')
  .get(async (req, res) => {
    const qName = req.query.name;
    const tags = await Tag.find({name: { $regex: '.*' + qName + '.*' } }).limit(10);
    res.send(tags);

  });

module.exports = publicRouter;