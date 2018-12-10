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