# engageProject

This is a Photos App where you can upload your photos to the s3 bucket from the image gallery of your phone and then when you click on a particular image, you get the matching faces for that image using the Amazon rekognition services.

AMAZON REKOGNITION is used the face detection, indexing and searching by Id.
REACT NATIVE is used for for frontend.
NODE.js and EXPRESS is used for backend.
AWS S3 bucket is used for storage server.


LOGIC:

The user uploads the image from his/her gallery to the S3 bucket using expo image picker and react native aws3 package. The images gets uploaded to the S3 bucket of the corresponding owner.Node accesses those images from the bucket and then adds them to a new collection which is stored on server side containers by the amzon rekogniton services.


