// const mongoose = require('mongoose');

// //Configurando Mongoose
// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost:27017', {
//     userMongoClient: true
// }).then(() => {
//     console.log('MongoDB Conectado...')
// })
//     .catch(() => {
//         console.log('Erro de conexão com mongoDB...')
//     });


const mongoose = require('mongoose');

async function startDB() {
    //await mongoose.connect('mongodb+srv://BrunoEstevam:R0ckst4r!@@cluster0.zctgfwj.mongodb.net/test');
    await mongoose.connect('mongodb://localhost:27017/BlogDB');

}






module.exports = startDB;