import AWS from "aws-sdk";
import {
  IndexFacesCommand,
  RekognitionClient,
  DeleteCollectionCommand,
  CreateCollectionCommand,
} from "@aws-sdk/client-rekognition";

// const REGION = "ap-south-1";
// const rekogClient = new RekognitionClient({ region: REGION });

// var params = {
//   Bucket: "garvita-bkt" /* required */,
//   Prefix: "uploads/",
// };

// const s3 = new AWS.S3({
//   accessKeyId: "AKIAQIB6YF6665TN4BHF",
//   secretAccessKey: "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",
// });
//created the collection (ref: createCollection.js)
// const collection_name = "EngageGarvita";

const addToCollection = async (collection_name) => {
  const REGION = "ap-south-1";
  const rekogClient = new RekognitionClient({ region: REGION });

  var params = {
    Bucket: "garvita-bkt" /* required */,
    Prefix: "uploads/",
  };

  const s3 = new AWS.S3({
    accessKeyId: "AKIAQIB6YF66U7YIXKOW",
    secretAccessKey: "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",
  });
  const myPromise = new Promise((resolve, reject) => {
    s3.listObjects(params, function (err, data) {
      data.Contents.forEach((element) => {
        if (element.Key === "uploads/") return;

        //getting external image id
        const imageId = element.Key.slice(8);
        console.log(imageId);

        console.log(
          `Adding face ${element.Key} to the collection ${collection_name}`
        );

        //indexFaces
        try {
          const response = rekogClient.send(
            new IndexFacesCommand({
              CollectionId: collection_name,
              Image: {
                S3Object: {
                  Bucket: "garvita-bkt",
                  Name: element.Key,
                },
              },
              DetectionAttributes: ["ALL"],

              //Keeping the external image id same as
              //image name so that we can access from front end
              ExternalImageId: imageId,
              QualityFilter: "AUTO",
            })
          );
          response.then((data) => {
            data.FaceRecords.forEach((element) => {
              console.log(element.Face.FaceId);
            });
            setTimeout(() => {
              resolve(data);
            }, 5000);
          });
        } catch (err) {
          console.log("Error", err.stack);
        }
      });
    });
  });

  //accessing s3 bucket images in the uploads folder
  //looping through each image in the bucket and
  //running the indexfacescommand over them

  return myPromise;
};

export default addToCollection;

// s3.listObjects(params, function (err, data) {
//   if (err) console.log(err, err.stack); // an error occurred
//   else console.log(data); // successful response
// });
// console.log(data.FaceRecords);
// data.FaceRecords.forEach((element) => {});
