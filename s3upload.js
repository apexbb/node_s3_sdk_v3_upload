
const { PutObjectCommand, S3Client } = require("@aws-sdk/client-s3");

const client = new S3Client({
    region:process.env.region,
    credentials: {
        accessKeyId: process.env.accessKeyId,
        secretAccessKey: process.env.secretAccessKey
    }
});
const uploadtoS3 = async () => {
    const command = new PutObjectCommand({
    Bucket: process.env.bucketname,
    Key: "hello-s3.txt",
    Body: "Hello S3!",
    });
    try {
            const response = await client.send(command);
            console.log(response);
        } catch (err) {
            console.error(err);
        }
    };

uploadtoS3()

