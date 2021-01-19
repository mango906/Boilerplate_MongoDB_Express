import express from 'express';
import * as hashTagController from '../../controllers/hashtagController';

const router = express.Router();

router.get('/', hashTagController.getHashTags());

export default router;
