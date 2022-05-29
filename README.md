# engageProject


/*MASTER BRANCH, CODE IN MASTER BRANCH*/

This is a full Stack Photos Application using Amazon Rekognition,Node.js,Express,React Native and  AWS S3 bucket where you can upload your photos to the s3 bucket from the image gallery of your phone and then when you click on a particular image, you get the matching faces for that image using the Amazon rekognition face Api.

AMAZON REKOGNITION is used the face detection, indexing and searching by Id.
REACT NATIVE is used for for frontend.
NODE.js and EXPRESS is used for backend.
AWS S3 bucket is used for storage server.

INSTALLATION AND SETUP ON YOUR SYSTEM:

 download node.js and npm from https://nodejs.org/en/download/.
 
Clone the respository and open two terminal in the directory of the repository. Go to the frontend and the backend folder. 
In the front end folder run the command 
npm install
and same for the backend folder
This will install all on the dependencies required for this app to run on your system.


For amazon rekogniton config, refer to the following two docs and create the account and IAM user step by step and add required permissions.For security reasons, I've removed my own accessKey and secretAccessKey
https://docs.aws.amazon.com/rekognition/latest/dg/setting-up.html#setting-up-iam

https://docs.aws.amazon.com/rekognition/latest/dg/setup-awscli-sdk.html

Searching faces in a collection documentation Amazon Rekognition :https://docs.aws.amazon.com/rekognition/latest/dg/collections.html

HOW TO RUN THIS APP?
Download the expo go app on your iphone(preferably). Change the ip address in the axios postrequest in the photos screen to the ip address of your system. Run the backend by going to the backend directory and running 'nodemon server' command. Once the server is up and ready, navigate to the frontend directory on another terminal and use expo start to start the development server. 
Open the camera app on your iphone, android phone and scan the bar code shown on the frontend terminal. Go to the expo go app and you're good to go.

For configuring android ios issues, refer https://stackoverflow.com/questions/44270504/react-native-ios-and-android-folders-not-present

I






