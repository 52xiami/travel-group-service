const mongoose = require('mongoose');
const dotenv = require('dotenv');
const colors = require('colors');
const connectDB = require('./config/db');

//Load models
const User = require('./models/User');
const Travelgroup = require('./models/Travelgroup');


dotenv.config({ path: './config/config.env' });

//Connect to DB
connectDB();


const users = [
    {
        name: 'Tom',
        email: 'tom@gmail.com',
        role: 'admin'

    },
    {
        name: 'Bob',
        email: 'bob@gmail.com',
        role: 'user'
    },
    {
        name: 'Jenny',
        email: 'jenny@gmail.com',
        role: 'user'
    },
    {
        name: 'Mandy',
        email: 'mandy@gmail.com',
        role: 'user'
    },
    {
        name: 'Sophie',
        email:'sophie@gmail.com'
    },
    {
        name: 'Brad',
        email: 'brad@gamil.com',
        role: 'user'
    },
    {
        name: 'Ming',
        email: 'ming@gmail.com',
        role: 'user'
    },
    {
        name: 'Qiang',
        email: 'qiang@gmail.com',
        role: 'user'
    }
]

const importData = async () => {
    try {
        await User.create(users);
        console.log('Data Imported...'.green.inverse);
        process.exit();
    } catch (err) {
        console.error(err);
    }
}

const deletData = async () => {
    try {
        await User.deleteMany();
        await Travelgroup.deleteMany();
        console.log('Data Deleted...'.red.inverse);
        process.exit();
    } catch (err) {
        console.error(err);
    }
}

if (process.argv[2] === '-i') {
    importData();
} else if (process.argv[2] === '-d') {
    deletData();
}



