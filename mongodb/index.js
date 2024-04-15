const {MongoClient}=require('mongodb');
const url ='mongodb://localhost:27017';
const linked =new MongoClient(url);
 async function getData(){
    const myLink=await linked.connect();
    const db=myLink.db('admin');
    const collection =db.collection('class1');
    //const result = await collection.find().toArray();
    //const result = await collection.insertOne({"Category":"Male","Number":"*****"});
    //const result = await collection.updateOne({"Name":"shiva"},{$set:{"Name":"shivani"}});
    //const result = await collection.deleteOne({"Name":"sus"});
    const result = await collection.updateMany({"class":"9"},{$set:{"class":"11"}})
    console.log(result);
}
getData();