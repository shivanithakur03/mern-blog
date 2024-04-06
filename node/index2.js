//curd
//create a new file 
const fs=require('fs');
fs.writeFileSync("Hello.txt","this is");
//update
fs.appendFileSync("Hello.txt","a new file");
//read
const read = fs.readFileSync('hell.txt');
result=read.toString();
console.log(result);
//rename
fs.rename,eSync("hello.txt","Myfile.txt");
//delete
fs.unlikeSync("MyFile.txt")