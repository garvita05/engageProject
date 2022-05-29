import AWS from "aws-sdk";
import {
  IndexFacesCommand,
  RekognitionClient,
  DeleteCollectionCommand,
  CreateCollectionCommand,
} from "@aws-sdk/client-rekognition";

const REGION = "ap-south-1";
const rekogClient = new RekognitionClient({ region: REGION });

var params = {
  Bucket: "garvita-bkt" /* required */,
  Prefix: "uploads/",
};

const s3 = new AWS.S3({
  accessKeyId: "AKIAQIB6YF6665TN4BHF",
  secretAccessKey: "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",
});
//created the collection (ref: createCollection.js)

const createCollection = async (collection_name) => {
  try {
    console.log(`Creating collection: ${collection_name}`);
    const data = await rekogClient.send(
      new CreateCollectionCommand({ CollectionId: collection_name })
    );
    console.log("Collection ARN:");
    console.log(data.CollectionARN);
    console.log("Status Code:");
    console.log(String(data.StatusCode));
    console.log("Success.", data);
    return data;
  } catch (err) {
    console.log("Error", err.stack);
  }
};
export default createCollection;
