// //checking path of file
// const path=require('path');
// //const myBasename=path.basename("index.js");
// //console.log(BaseName)

// // const Extname=path.extname("index2.js");
// // console.log(Extname)

// const Parse=path.parse("C:\Users\Shivani\OneDrive\Desktop\node\index.js");
// console.log(Parse)


//creting file in class folder of node
// const fs=require('fs');
// const path=require('path');
// const myPath=path.join(__dirname,'Class');
// fs.writeFileSync(myPath+"/MYFile"+".txt","this is secret file")

//creating multiple File
const fs=require('fs');
const path=require("path");
const myPath=path.join(__dirname,'Class');
for(let i=1 ; i<4;i++){
    fs.writeFileSync(myPath+"/File"+i+".txt","this content is fake")
}