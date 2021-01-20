import HashTag from '../models/Hashtag.js';

export default async function getHashTags() {
  const hashTags = await HashTag.find({});

  return hashTags;
}

export default async function addHashTags(tag) {
  const hashTag = await HashTag.create({ tag });

  return hashTags;
}
