import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Button,
  Image,
  Dimensions,
} from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import * as ImagePicker from "expo-image-picker";
import { RNS3 } from "react-native-aws3";
import { Card, Title, Paragraph, Avatar, Caption } from "react-native-paper";
import GridImageView from "react-native-grid-image-viewer";
import MasonryList from "react-native-masonry-list";
import { AntDesign } from "@expo/vector-icons";
import axios from "axios";
import AWS from "aws-sdk";
import Modal from "react-native-modal";

AWS.config.update({
  accessKeyId: "AKIAQIB6YF66U7YIXKOW",
  secretAccessKey: "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",
  region: "ap-south-1",
});
const s3 = new AWS.S3();
const params = {
  Bucket: "garvita-bkt",
  Delimiter: "",
  Prefix: "uploads/",
};

const PhotosScreen = ({ navigation }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [listImages, setListImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState([]);
  useEffect(() => {
    s3.listObjects(params, (err, data) => {
      if (err) {
        console.log(err, err.stack);
      } else {
        setListImages(data.Contents);
        console.log(data.Contents);
      }
    });
  }, []);
  const handlePress = (Key) => {
    return <Modal isVisible={isModalVisible}></Modal>;
  };

  const [connections, setConnections] = useState([]);
  //generating random string for image name
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  function generateString(length) {
    let result = "";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
  }

  //Selecting photo from gallery
  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    const fileName = generateString(5) + ".png";
    Upload(result, fileName);

    // //Uploading image to S3 bucket
    // RNS3.put(
    //   {
    //     //file details
    //     uri: result.uri,
    //     name: fileName,
    //     type: "image/png",
    //   },
    //   {
    //     //credentials
    //     keyPrefix: "uploads/",
    //     bucket: "garvita-bkt",
    //     region: "ap-south-1",
    //     accessKey: "AKIAQIB6YF6665TN4BHF",
    //     secretKey: "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",
    //     successActionStatus: 201,
    //   }
    // ).then((response) => {
    //   console.log("Uploaded Image Successfully ");
    //   console.log(response);
  };

  var id = [];
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const updateModal = (name) => {
    return connections.length > 0 ? (
      connections.map((value) => {
        const s3FileName = name.Key.slice(8);
        // return (
        //   <Text>
        //     ({value.key})({name.Key})
        //   </Text>
        // );

        if (value.key == s3FileName) {
          // return <Text>{value.externalId}</Text>;
          return (
            <View>
              <Image
                source={{
                  uri:
                    "https://garvita-bkt.s3.ap-south-1.amazonaws.com/uploads/" +
                    value.externalId,
                }}
                style={styles.bucketImages}
              />
            </View>
          );
        }
        return;
      })
    ) : (
      <Text style={{ fontSize: 20 }}>no images</Text>
    );
  };

  const Upload = (result, fileName) => {
    RNS3.put(
      {
        //file details
        uri: result.uri,
        name: fileName,
        type: "image/png",
      },
      {
        //credentials
        keyPrefix: "uploads/",
        bucket: "garvita-bkt",
        region: "ap-south-1",
        accessKey: "AKIAQIB6YF66U7YIXKOW",
        secretKey: "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",
        successActionStatus: 201,
      }
    ).then((response) => {
      console.log("Uploaded Image Successfully ");
      console.log(response);

      axios
        .post("http://172.20.10.4:5000/api/groupingFacesOnUpload/")
        .then((res) => {
          console.log(res);
          setConnections(res.data);
        })
        .catch((err) => console.log(err));
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>Photos</Text>
      <View></View>
      <View>
        <ScrollView horizontal={true} style={styles.scrollView}>
          <TouchableOpacity>
            <Text style={{ marginLeft: 15 }}>May, 2022</Text>
            <Image
              source={{ uri: "https://picsum.photos/800" }}
              style={styles.scrollMemory}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{ marginLeft: 15 }}>April, 2022</Text>
            <Image
              source={{ uri: "https://picsum.photos/900" }}
              style={styles.scrollMemory}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{ marginLeft: 15 }}>March, 2022</Text>
            <Image
              source={{ uri: "https://picsum.photos/1000" }}
              style={styles.scrollMemory}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{ marginLeft: 15 }}>Feb, 2022</Text>
            <Image
              source={{ uri: "https://picsum.photos/920" }}
              style={styles.scrollMemory}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{ marginLeft: 15 }}>Jan, 2022</Text>
            <Image
              source={{ uri: "https://picsum.photos/820" }}
              style={styles.scrollMemory}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{ marginLeft: 15 }}>Dec, 2021</Text>
            <Image
              source={{ uri: "https://picsum.photos/720" }}
              style={styles.scrollMemory}
            />
          </TouchableOpacity>
        </ScrollView>
      </View>
      <View style={{ margin: 12 }}>
        <TouchableOpacity onPress={pickImage}>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <AntDesign name="upload" size={20} color="black" />
            <Text style={{ marginLeft: 10, marginTop: 2 }}>
              Upload From Photos
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      {/* <View>
        <Text style={styles.headerText}>
          {connections.length > 0 ? JSON.stringify(connections[0].key) : ""}
        </Text>
      </View> */}

      <ScrollView>
        <View>
          {listImages &&
            listImages.map((name, index) => (
              <TouchableOpacity onPress={toggleModal}>
                <Modal isVisible={isModalVisible}>
                  <ScrollView>
                    {updateModal(name)}
                    <TouchableOpacity onPress={toggleModal}>
                      <Text>Hide Modal</Text>
                    </TouchableOpacity>
                  </ScrollView>
                </Modal>
                <Image
                  source={{
                    uri:
                      name.Key === "uploads/"
                        ? "https://garvita-bkt.s3.ap-south-1.amazonaws.com/uploads/UBVYb.png"
                        : "https://garvita-bkt.s3.ap-south-1.amazonaws.com/" +
                          name.Key,
                  }}
                  style={styles.bucketImages}
                />
              </TouchableOpacity>
            ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PhotosScreen;

const styles = StyleSheet.create({
  bucketImages: {
    width: 400,
    height: 400,
    margin: 2,
  },
  cardCover: {
    width: "100%",
  },
  cardView: {
    marginTop: 20,
  },

  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
  },
  eachCard: {
    width: "20%",
    flex: 1,
    margin: 10,
    borderRadius: 8,
    // height: "20%",
    // borderColor: "#000",
  },
  gridView: {
    marginTop: 10,
  },
  headerText: {
    alignSelf: "center",
    fontSize: "22",
    fontWeight: "bold",
  },
  memories: {},
  outerView: {},
  recapText: {
    marginBottom: -5,
    marginLeft: 5,
    fontSize: 13,
  },
  scrollView: {
    marginTop: 15,
  },
  scrollMemory: {
    margin: 7,
    width: 100,
    height: 100,
    borderRadius: 18,
  },
});
