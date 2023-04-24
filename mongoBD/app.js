const mongoClient = require('mongodb').MongoClient;
// const uri = "mongodb://localhost:27017/"
const uri = "mongodb+srv://sanju:rPKNFgoqdhm3LuZR@cluster0.arwhxpb.mongodb.net/augustNewton"
const connect = new mongoClient(uri);
const db = connect.db('augustNewton');
const objectId = require('mongodb').ObjectId;

async function insert() {
    try {
        let result = await db.collection('employee').insertOne({ firstName: "Sanju", age: 24, salary: 200000, status: true });
        console.log(result);
    } catch (err) {
        console.log(err);
    }

}
insert();


async function find() {
    try {
        let result = await db.collection('employee').find(query).toArray();
        console.log(result);
    } catch (err) {
        console.log(err);
    }

}
// find();

async function query() {
    try {
        // let query = { firstName: "Sanju" }
        // let query = { firstName: "akhil", age: 44 }

        let query = { _id: new objectId('64469c4624707c83d688a295') }
        let result = await db.collection('employee').find(query).toArray();
        console.log(result);
    } catch (err) {
        console.log(err);
    }

}
// query();

async function update() {

    try {

        let filter = { firstName: "Sanju" };
        let update = { $set: { age: 25 } };
        let result = await db.collection('employee').updateOne(filter, update);
        console.log(result);
    }
    catch (err) {
        console.log(err);
    }
}
// update();

async function deleteQuery() {

    try {
        let filter = { _id: new objectId('6446a4789ed1380fe0f15e9b') };
        let result = await db.collection('employee').deleteOne(filter);
        console.log(result);
    }
    catch (err) {
        console.log(err)
    }
}

// deleteQuery();