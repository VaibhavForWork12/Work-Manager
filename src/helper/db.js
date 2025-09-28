import mongoose from 'mongoose';
import { User } from '../models/user'

const config = {
    isConnected : 0,
}

export const connectDb = async () => {
    if(config.isConnected){
        return ;
    }

    
    try {
        const { connection } = await mongoose.connect(process.env.MONGO_DB_URL, {
            dbname: 'work_manager',
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 5000, // 5 seconds
            socketTimeoutMS: 45000, // 45 seconds
        });

        console.log('DB connected...');
        console.log('Connected with host:', connection.host);
        console.log('Host port number:', connection.port);
        console.log('host connection readystate', connection.readyState)
        config.isConnected = connection.readyState;
    } catch (error) {
        console.error('Failed to connect to database');
        console.error(error);
    }
};

/* import mongoose from 'mongoose';
import { User } from '@/models/user';

export const connectDb = async() =>{

    try {
        const {connection} = await mongoose.connect(process.env.MONGO_DB_URL, {
            dbname: 'work_manager'
        });
        console.log('db connected...');
       // console.log(connection)

       // console.log('Connected with host::', connection.host)
       // console.log('Host port number::', connection.port)

      /* 
        const uuser = new User({
        name: "Testing",
        email: "Test@email",
        password: "12345",
        about: "I am the tester",
        profile: "I am mmmmmmm"
       });
       await uuser.save();
       console.log("user data is saved");
       

    }
    catch(error){
        console.log("failead to connect to database")
        console.log(error);
    }
}; 
*/

