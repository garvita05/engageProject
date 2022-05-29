import AWS from "aws-sdk";
import {
  SearchFacesCommand,
  RekognitionClient,
  ListFacesCommand,
} from "@aws-sdk/client-rekognition";

const searchCollection = async (collection_name) => {
  let result = [];
  const REGION = "ap-south-1";
  const rekogClient = new RekognitionClient({ region: REGION });
  console.log("ok");

  const data = await rekogClient.send(
    //listing faces in the collection
    new ListFacesCommand({ CollectionId: collection_name })
  );

  for (const element of data.Faces) {
    const response = await rekogClient.send(
      //Taking each face in the collection one by one and searching for
      //its matching faces
      new SearchFacesCommand({
        CollectionId: collection_name,
        FaceId: element.FaceId,
      })
    );

    for (const val of response.FaceMatches) {
      result.push({
        key: element.ExternalImageId,
        externalId: val.Face.ExternalImageId,
      });
    }
  }

  return result;
};

export default searchCollection;
