const movieArray = [];

class Movie {
    constructor (title, actor="Not Specified") {
        this.title = title;
        this.actor = actor;
    }
    add() {
        movieArray.push(this);
        console.log(this);
        console.log(movieArray);
    }
}

module.exports = Movie;


// function movieApp (argumentVector) {
//     switch (argumentVector[2]) {
//         case "add":
//             const movie = [argumentVector[3], argumentVector[4], argumentVector[5]];
//             console.table (movie);
//             break;
//         default:
//             console.log("Command not recognised");
//     }
// }

// movieApp(process.argv);
