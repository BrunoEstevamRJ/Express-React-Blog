const express = require('express')
const router = express.Router()
const { MongoClient } = require('mongodb');

router.get('/postagens', async (req, res) => {

    const uri =
        "mongodb://localhost:27017/";

    const client = new MongoClient(uri);

    async function run() {
        try {
            const database = client.db('MangualDB');
            const BlogDB = database.collection('BlogDB');

            const doc = {
                title: 'Back to the Future',
                autor: 'BrunoEstevam'
            };

            const result = await BlogDB.insertOne(doc);
            console.log(`A document was inserted with the _id: ${result.insertedId}`);

            // const findResult = await doc.find({}).toArray();
            // console.log('Found documents =>', findResult);

        } finally {
            await client.close();
        }
    }
    run().catch(console.dir);


    res.json({
        titulo: 'Meu primeiro post',
        conteudo: 'Era uma vez, publicação',
        autor: 'Bruno Estevam',
    })
    // mongodb://localhost:27017

    // res.json({
    //     titulo: 'Meu primeiro post',
    //     conteudo: 'Era uma vez, publicação',
    //     autor: 'Bruno Estevam',
    // })

})

module.exports = router