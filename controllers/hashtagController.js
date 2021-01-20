import hashTagService from '../services/hashtagService.js';

export async function getHashTags(req, res) {
  try {
    const hashTags = hashTagService.getHashTags();
    res.status(200).send(hashTags);
  } catch (err) {
    res.status(500).send('Error while find hashTags');
  }
}

export async function addHashTag(req, res) {
  try {
    const tag = req.body.tag;

    const hashTag = hashTagService.addHashTag(tag);
    res.status(200).send(hashTag);
  } catch (err) {
    res.status(500).send('Error while add hashTag');
  }
}
