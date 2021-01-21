import hashTagService from '../services/hashtagService.js';

async function getHashTags(req, res) {
  try {
    const hashTags = hashTagService.getHashTags();
    res.status(200).json(hashTags);
  } catch (err) {
    res.status(500).send('Error while find hashTags');
  }
}

async function addHashTag(req, res) {
  try {
    const { tag } = req.body;

    const hashTag = hashTagService.addHashTag(tag);
    res.status(200).json(hashTag);
  } catch (err) {
    res.status(500).send('Error while add hashTag');
  }
}

export default {
  getHashTags,
  addHashTag,
};
