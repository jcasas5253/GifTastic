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

    $("#buttons-view").empty();

    for (var i = 0; i < buttons.length; i++) {
        var a = $("<button type=button class=btn btn-outline-primary>");
        a.addClass("gif-btn");
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

function imageChangeState() {          

    var state = $(this).attr("data-state");
    var animateImage = $(this).attr("data-animate");
    var stillImage = $(this).attr("data-still");

    if(state == "still") {
        $(this).attr("src", animateImage);
        $(this).attr("data-state", "animate");
    }

    else if(state == "animate") {
        $(this).attr("src", stillImage);
        $(this).attr("data-state", "still");
    }   
}

$(document).on("click", ".gif-btn", displayGifInfo);
$(document).on("click", ".movImage", imageChangeState);

// Calling the renderButtons function to display the intial buttons
renderButtons();

function displayGif(response) {
    $('#animalGif').empty();
    for (var i = 0; i < response.data.length; i++) {
        var rating = "<div class='ratings'> Rating:  " + (response.data[i].rating) + " </div>";
        var image = rating + '<img src= " ' + response.data[i].images.fixed_height_still.url +
            '" data-still=" ' + response.data[i].images.fixed_height_still.url +
            ' " data-animate=" ' + response.data[i].images.fixed_height.url + '" data-state="still" class="movImage" style= "width:250px; height:250px">';

        image = '<div class="col-md-4">' + image + "</div>";
        $('#animalGif').append(image);
    }
}

