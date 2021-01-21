import HashTag from '../models/Hashtag.js';

export async function getHashTags() {
  const hashTags = await HashTag.find({});

  return hashTags;
}

export async function addHashTags(tag) {
  const hashTag = await HashTag.create({ tag });

  return hashTags;
}

export default {
  getHashTags,
  addHashTags,
};
