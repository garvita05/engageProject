import express from "express";

import deleteCollection from "./faces/deleteCollection.js";
import createCollection from "./faces/createCollection.js";
import addToCollection from "./faces/addFaces.js";
import searchCollection from "./faces/searchFaces.js";
import cors from "cors";

const app = express();
app.use(cors({ origin: true, credentials: true }));

// app.use(express.static("frontend"));

app.post("/api/groupingFacesOnUpload/", async (req, res) => {
  await deleteCollection("EngageGarvita");

  await createCollection("EngageGarvita");
  console.log("1");

  console.log("3");
  await addToCollection("EngageGarvita");

  console.log("4");

  const ExternalImageId = await searchCollection("EngageGarvita");
  console.log(ExternalImageId);

  return res.send(ExternalImageId);
});

app.listen(5000, () => {
  console.log("Listening on port 5000");
});
