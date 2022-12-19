let allMovieTitle = [];
let movieExisted;
let rentMovie;
class movie {
    constructor() {
        this.movieCount = 0
        this.movieStorage = [
            {
                "id": 508,
                "title": "Regency Enterprises",
                "price": 400,
                "quantity": 1
            },
            {
                "id": 711,
                "title": "Fox 2000 Pictures",
                "price": 4000,
                "quantity": 3
            },
            {
                "id": 20555,
                "title": "Taurus Film",
                "price": 200,
                "quantity": 1
            },
            {
                "id": 54050,
                "title": "Linson Films",
                "price": 700,
                "quantity": 6
            },
            {
                "id": 54051,
                "title": "Atman Entertainment",
                "price": 420,
                "quantity": 2
            },
            {
                "id": 54052,
                "title": "Knickerbocker Films",
                "price": 400,
                "quantity": 5
            },
            {
                "id": 25,
                "title": "20th Century Fox",
                "price": 200,
                "quantity": 0
            }
        ],
            this.rentAgain = function () {
                let doYouSTillWantToRentMovie = window.prompt("Do you still want to rent a movie?");
                if (doYouSTillWantToRentMovie.toLocaleLowerCase() == "yes") {
                    movieRental = window.prompt("Title of the movie");
                    this.rentMovie(movieRental);
                } else {
                    console.log('Thanks for your patronage.');
                }
            }
        this.rentMovie = function (item) {
            this.movieStorage.map((movie) => {
                allMovieTitle.push(movie.title);
            });
            movieExisted = allMovieTitle.indexOf(item);
            if (movieExisted >= 0 && this.movieStorage[movieExisted].quantity >= 1) {
                console.log(`${item} is available`);
                console.log(`You've successfully rented ${item} Thanks for patronizing us, You have five(5) days to return the movie`);
                this.movieStorage[movieExisted].quantity = this.movieStorage[movieExisted].quantity - 1;
                console.log(this.movieStorage[movieExisted].quantity);
                this.rentAgain();
            } else {
                console.log('The movie is not available in our store or it has been rented by a user');
                this.rentAgain();
            }
        },
            this.returnMovie = function (returnItem) {
                this.movieStorage.map((movie) => {
                    allMovieTitle.push(movie.title);
                });
                movieExisted = allMovieTitle.indexOf(returnItem);
                console.log(movieExisted);
                if (movieExisted >= 0) {
                    console.log(`You've successfully returned ${returnItem}`);
                    this.movieStorage[movieExisted].quantity = this.movieStorage[movieExisted].quantity + 1;
                    let anotherActivities = window.prompt('Do you still want to perform another activity?')
                    if (anotherActivities.toLocaleLowerCase() == "yes") {
                        userActivity();
                    } else if (anotherActivities.toLocaleLowerCase() == "no") {
                        console.log('Thanks for your patronage.');
                    }
                } else {
                    console.log('Wrong title', allMovieTitle);
                }
            }
    }
}
let movieStore = new movie;

console.log('This is the list of the movies we have in store');
movieStore.movieStorage.map((item) => {
    console.log(item);
})
let movieRental;
function userActivity() {
    let activities = window.prompt("Do you want to return a movie or rent a movie?");
    if (activities.toLocaleLowerCase() == "rent") {
        movieRental = window.prompt("Title of the movie");
        movieStore.rentMovie(movieRental);
    } else if (activities.toLocaleLowerCase() == "return") {
        returnMovie = window.prompt("Title of the movie");
        movieStore.returnMovie(returnMovie);
    } else {
        console.log('Thanks for visiting our store, feel free to check back.');
    }
}
userActivity();