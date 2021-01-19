import hashTagService from "../services/hashtagService";

export async function getHashTags(res, req) {
  try {
    const hashTags = hashTagService.getHashTags();
    res.status(200).send(hashTags);
  } catch (err) {
    res.status(500).send("Erorr while find hashTags");
  }
}
