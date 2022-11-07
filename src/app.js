const Movie = require("./utils/index");

function myApp(argumentVector) {
    if (argumentVector[2] === "add") {
        const newMovie = new Movie(argumentVector[3], argumentVector[4]);
        newMovie.add();
    } else if (argumentVector[2] ==="addMulti") {
        const newMovie1 = new Movie(argumentVector[3], argumentVector[4]);
        newMovie1.add();
        const newMovie2 = new Movie(argumentVector[5], argumentVector[6]);
        newMovie2.add();
        const newMovie3 = new Movie(argumentVector[7], argumentVector[8]);
        newMovie3.add();
    } else {
        console.log("Command not recognised");
    }
}

myApp(process.argv);