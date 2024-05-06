const oscarMovies = [
    { title: "Parasite", year: 2020, genre: "Thriller", director: "Bong Joon Ho" },
    { title: "Green Book", year: 2019, genre: "Drama", director: "Peter Farrelly" },
    { title: "The Shape of Water", year: 2018, genre: "Fantasy", director: "Guillermo del Toro" },
    { title: "Independence Day", year: 1990, genre: "Sci-Fi", director: "Guillermo del Toro" }
    ];

    //### Task 1: Iterate with `forEach`
    console.log("Output using forEach method of ES6:")
    oscarMovies.forEach(loopmovies);
    
    function loopmovies(movies,movieIndex){
        console.log(`"Index: ${movieIndex}, Title: ${movies.title}, Movie: ${JSON.stringify(movies)}"`);
    }

    //### Task 2: Iterate with a `for` loop
    console.log("Output using traditional for loop of javascript:")
    for (let i=0;i<oscarMovies.length;i++)
    {
        console.log(`"Index: ${i}, Title: ${oscarMovies[i].title}, Movie: "${JSON.stringify(oscarMovies[i])}"`);
    }
