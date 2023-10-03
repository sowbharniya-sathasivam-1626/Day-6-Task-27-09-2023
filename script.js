//1. https://github.com/rvsp/typescript-oops/blob/master/Practice/Movie.md
//The class Movie is stated below. An instance of class Movie represents a film. This class has the following three properties:
//title, which is a String representing the title of the movie
//studio, which is a String representing the studio that made the movie
//rating, which is a String representing the rating of the movie (i.e. PG­13, R, etc)

//a. Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.
//code:
class Movie {
    constructor(Title, Studio, Rating) {
        this.Title = Title;
        this.Studio = Studio;
        this.Rating = Rating;
    }
    getInformation() {
        return `The film '${this.Title}' produced by ${this.Studio}, has been certified as suitable for all audiences with a '${this.Rating}' rating.`;
    }
}
var Film = new Movie("Harkara", "Kalorful Beta Movement", "Universal");
console.log(Film.getInformation());

//Output:
//The film 'Harkara' produced by Kalorful Beta Movement, has been certified as suitable for all audiences with a 'Universal' rating.

//b. The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.
//code:
class Movie {
    constructor(Title, Studio, Rating = "PG(Parental guidance suggested)") {
        this.Title = Title;
        this.Studio = Studio;
        this.Rating = Rating; 
    }
    getInformation() {
        return `The film '${this.Title}' produced by ${this.Studio}, has been certified as suitable for all audiences with a '${this.Rating}' rating.`;
    }
}
var Film1 = new Movie("Harkara", "Kalorful Beta Movement", "Universal");
var Film2 = new Movie("Jai Bhim", "2D Entertainment");
console.log(Film1.getInformation()); 
console.log(Film2.getInformation());  
//Output:
//The film 'Harkara' produced by Kalorful Beta Movement, has been certified as suitable for all audiences with a 'Universal' rating.
//The film 'Jai Bhim' produced by 2D Entertainment, has been certified as suitable for all audiences with a 'PG(Parental guidance suggested)' rating.

//C. Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.
//code:
class Movie {
    constructor(Title, Studio, Rating) {
        this.Title = Title;
        this.Studio = Studio;
        this.Rating = Rating; 
    }
    getInformation() {
        return `The film '${this.Title}' produced by ${this.Studio}, has been certified as suitable for all audiences with a '${this.Rating}' rating.`;
    }
    static getPG(movies) {
        return movies.filter(movie => movie.Rating === "PG(Parental guidance suggested)");
    }
}
var Film1 = new Movie("Harkara", "Kalorful Beta Movement", "Universal");
var Film2 = new Movie("Jai Bhim", "2D Entertainment", "A(self-applied)");
var Film3 = new Movie("Inception", "Warner Bros. Pictures Legendary Pictures Syncopy", "PG(Parental guidance suggested)");
var Flim4 = new Movie("A Man Called Otto", "Columbia Pictures", "PG(Parental guidance suggested)");
var moviesArray = [Film1, Film2, Film3, Flim4];
const pgMovies = Movie.getPG(moviesArray);
pgMovies.forEach(movie => {
    console.log(movie.Title);
});

//Output:
//Inception
//A Man Called Otto


//d. Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”
//code:
class Movie {
    constructor(Title, Studio, Rating) {
        this.Title = Title;
        this.Studio = Studio;
        this.Rating = Rating;
    }
    getInformation() {
        return `${this.Title} 
        ${this.Studio}
        ${this.Rating}`;
    }
}
var film = new Movie("Casino Royale", "Eon Productions", "PG-13");
console.log("Title:", film.Title);
console.log("Studio:", film.Studio);
console.log("Rating:", film.Rating);

//Output:
//Title: Casino Royale
//Studio: Eon Productions
//Rating: PG-13
