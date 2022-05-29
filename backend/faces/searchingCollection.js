import AWS from "aws-sdk";
import {
  SearchFacesCommand,
  RekognitionClient,
  ListFacesCommand,
} from "@aws-sdk/client-rekognition";

const result = [];

const searchingCollection = async (collection_name) => {
  const REGION = "ap-south-1";
  const rekogClient = new RekognitionClient({ region: REGION });

  const data = await rekogClient.send(
    new ListFacesCommand({ CollectionId: collection_name })
  );
  console.log(data);
  for (const element of data.Faces) {
    const response = await rekogClient.send(
      new SearchFacesCommand({
        CollectionId: collection_name,
        FaceId: element.FaceId,
      })
    );
    console.log(response.FaceMatches);
    for (const val of response.FaceMatches) {
      result.push({ key: element.FaceId, externalId: val.Face });
    }
  }
  console.log(result);
  return result;
};
