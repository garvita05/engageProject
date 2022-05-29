import { DeleteCollectionCommand } from "@aws-sdk/client-rekognition";
import { RekognitionClient } from "@aws-sdk/client-rekognition";

// Name the collection

const deleteCollection = async (collection_name) => {
  // Set the AWS Region.
  const REGION = "ap-south-1"; //e.g. "us-east-1"
  const rekogClient = new RekognitionClient({ region: REGION });
  try {
    console.log(`Attempting to delete collection named - ${collection_name}`);
    var response = await rekogClient.send(
      new DeleteCollectionCommand({ CollectionId: collection_name })
    );
    var status_code = response.StatusCode;
    if ((status_code = 200)) {
      console.log("Collection successfully deleted.");
    }
    // return response; // For unit tests.
  } catch (err) {
    console.log("Error", err.stack);
  }
};

export default deleteCollection;
