// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

$(document).ready(function() {
    var next_Image
    var other_next_Image
    function getMovieTitle(searchTerm) {

        var url = "https://www.omdbapi.com/?apikey=90d4b10a&t=" + searchTerm;
        return url;
    }

    function appendInfoToBody(info) {
        // write a function that will append an <img> to the body with the
        // URL provided in the parameters
        
        $('.results').append('<ul>' + info + '</ul>');
    }

    function callMovieAPIWithSearchTerm(searchTerm) {
        var url = getMovieTitle(searchTerm);
        console.log(url);
        $.ajax({
            url: url,
            method: "GET",
            success: function(response) {
                console.log(response)
                var title = response.Title;
                var rating= response.Rated;
                var released= response.Released;
                var actors= response.Actors;
                var plot= response.Plot;
                var genre= response.Genre;
                var director= response.Director;
                var runTime= response.Runtime;
                console.log(title);
                console.log(rating);
                 $('.results').append('<img src='+ response.Poster + '>');
                appendInfoToBody("Title: " + title);
                appendInfoToBody("Release Date: " +released);
                appendInfoToBody("Rated: " +rating);
                appendInfoToBody("Runtime: " +runTime);
                appendInfoToBody("Genre: " +genre);
                appendInfoToBody("Director(s): " +director);
                appendInfoToBody("Main Cast: " +actors);
                appendInfoToBody("Short plot: " +plot);

            },
        });
    }

    //Add a click handler beloe to call the function when the button is clicked
    $("#button").click(function() {
        var searchTerm = $('#Add_Title').val();
        clearList();
        callMovieAPIWithSearchTerm(searchTerm);

    });
    function clearList(){
   $('.results').empty();
}
 
});


