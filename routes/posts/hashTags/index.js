import express from 'express';
import { getHashTags, addHashTag } from '../../../controllers/hashtagController.js';

const router = express.Router();

router.get('/', getHashTags);
router.post('/', addHashTag);

export default router;
