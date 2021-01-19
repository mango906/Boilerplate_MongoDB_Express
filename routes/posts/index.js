import express from 'express';
import router from './hashTags';
import hashTagRouter from './hashTags';

router.use('/:postId/hashtags', hashtagRouter);

export default router;
