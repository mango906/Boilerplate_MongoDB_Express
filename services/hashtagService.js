import HashTag from '../models/Hashtag';

export async function getHashTags(){
  const hashTags = await HashTag.find({});

  return hashTags;
}