
var MyName = "Alexandre";
var MyAge = "19";

console.log("Name: " + MyName + ", Age: " + MyAge);

var MyAgeTimesTimes7 = MyAge * 7;

var Friends = ["Eduardo", "Leandro", "Gonçalo"];

var MyInfo = {
    name: "Alexandre",
    Age: "19",
    isStudent: true,
};

var FriendsInfo = [
    {
        name: "Eduardo",
        Age: "20",
        isStudent: true
    },
    {
        name: "Leandro",
        Age: "20",
        isStudent: true
    },
    {
        name: "Gonçalo",
        Age: "19",
        isStudent: true
    }
];

console.log("My age times 7: " + MyAgeTimesTimes7);

for (var i = 0; i < Friends.length; i++) {
    console.log("\nMy Friends name: ", Friends[i]);
}

console.log("My info: \nName: " + MyInfo.name + "\nAge: " + MyInfo.Age + "\nStudent? " + MyInfo.isStudent);

for (var i = 0; i < Friends.length; i++) {
    console.log("\nMy Friends info: \nName", FriendsInfo[i].name + "\nAge: " + FriendsInfo[i].Age + "\nStudent? " + FriendsInfo[i].isStudent);
}