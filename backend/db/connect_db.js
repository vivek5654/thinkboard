// import mongoose from "mongoose";

// const connectMongoDB = async () => { 
//     try {
//         const conn = await mongoose.connect(process.env.MONGO_URI);
//         console.log(`MongoDB connected: ${conn.connection.host}`);
//     } catch (error) {
//         console.error('Error connecting to MongoDB:', error);
//         process.exit(1); // Exit the process with failure
//     }
// }
// console.log(process.env.MONGO_URI);

// export default connectMongoDB;







import mongoose from "mongoose";

export const connectMongoose = async () => {
    try {
        // mongoose.set('debug', true);
        await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB connected successfully`);

    } catch (error) {
        console.log("error while connecting the mongoose");
        process.exit(1);
}
}

