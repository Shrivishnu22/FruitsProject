const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/fruitsDB', { useNewUrlParser: true, useUnifiedTopology: true });

const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please check your data entry.No name specified"]
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

// const fruit = new Fruit({
//     name: "Kiwi",
//     rating: 9,
//     review: "Great Green fruit."
// });

// fruit.save();

// const apple = new Fruit({
//     name: "Apple",
//     rating: 6,
//     review: "Pretty solid as a fruit."
// });

// const orange = new Fruit({
//     name: "Orange",
//     rating: 4,
//     review: "Too sour."
// });

// const banana = new Fruit({
//     name: "Banana",
//     rating: 6,
//     review: "Healthy fruit."
// });

const mango = new Fruit({
    name: "Mango",
    rating: 10,
    review: "Yummy Yellow Mango"
});

// mango.save();

const CrustedApple = new Fruit({
    name: "CurstedApple",
    rating: 10,
    review: "Fabulous Apple"
});
// CrustedApple.save();
const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    FavFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);

const person = new Person({
    name: "John",
    age: 37
});

// const Hannah = new Person({
//     name: "Hannah",
//     age: 18,
//     FavFruit: mango
// });

// person.save();

// Fruit.insertMany([apple, orange, banana], function(err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Successfully saved all the fruits to fruitsDB");
//     }
// });

Fruit.find(function(err, fruits) {
    if (err) {
        console.log(err);
    } else {
        mongoose.connection.close();
        fruits.forEach(fruit =>
            console.log(fruit.name));

    }
});

// Fruit.updateOne({ _id: "60b24b5fdb5df451a8ba2e3e" }, { name: "Water Melon" }, function(err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Successfully Updated Name.");
//     }
// });

// Fruit.deleteOne({ _id: "60b24db19834a94cb800e83c" }, function(err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Successfully Deleted One Record.");
//     }
// });

// Person.deleteMany({ name: "John" }, function(err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Successfully Deleted Many Record");
//     }
// });

Person.updateOne({ name: "John" }, { FavFruit: CrustedApple }, function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log("Successfully Updated FavFruit.");
    }
});