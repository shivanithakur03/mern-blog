const {MongoClient}=require('mongodb');
const url= 'mongodb://localhost:27017';
const client= new MongoClient(url);
async function dbConnect(){
    let result = await client.connect();
    let data = result.db('admin');
    return data.collection('class1');
}
module.exports=dbConnect;