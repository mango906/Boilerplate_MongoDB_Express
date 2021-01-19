import express from 'express';
import hashTagRouter from './posts/hashTags';
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.send('Hello, mobal-mobal Client. Server is running!');
});

router.use('/hashTags', hashTagRouter);

export default router;
