var buttons = ["Dog", "Cat", "Rabbit", "Hamster", "Skunk", "Goldfish", "Bird", "Ferret", "Turtle", "Sugar Glider", "Chinchilla", "Hedgehog", "Hermit Crab", "Gerbil", "Pygmy Goat", "Chicken", "Capybara", "Teacup Pig", "Serval", "Salamander", "Frog",];

// displayGifInfo function re-renders the HTML
function displayGifInfo() {

    var animals = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animals + "&api_key=PIem49TSSafPP8CLXggUeldwXQPZ6th4&limit=10";

    // Creating an AJAX call for the gif button being clicked
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        displayGif(response);
        console.log(response);

        // Creating a div to hold the gifs
        var giphyDiv = $("<div class='giphy'>");
    });

}

// Function for displaying gif data
function renderButtons() {

    // Deleting the gifs prior to adding new movies
    $("#buttons-view").empty();

    // Looping through the array of movies
    for (var i = 0; i < buttons.length; i++) {
        var a = $("<button>");
        a.addClass("movie-btn");
        a.attr("data-name", buttons[i]);
        a.text(buttons[i]);
        $("#buttons-view").append(a);
    }

}

// This function handles events where a gif button is clicked
$("#add-gif").on("click", function (event) {
    event.preventDefault();
    // This line grabs the input from the textbox
    var button = $("#gif-input").val().trim();

    // Adding user input from the textbox to our array
    buttons.push(button);

    // Calling renderButtons which handles the processing of our gif array
    renderButtons();
});