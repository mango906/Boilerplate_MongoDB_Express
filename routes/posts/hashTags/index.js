import express from 'express';
import hashtagController from '../../../controllers/hashtagController.js';

const router = express.Router();

router.get('/', hashtagController.getHashTags);
router.get('/:id', hashtagController.getHashTag);
router.post('/', hashtagController.addHashTag);
router.put('/:id', hashtagController.updateHashTag);
router.delete('/:id', hashtagController.deleteHashTag);

export default router;
