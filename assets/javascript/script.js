$("#search").on("click", function() {
    event.preventDefault();
    var searchTerm = $("#searchTerm").val();
    console.log("The search term is: " + searchTerm);
});

$("#clear").on("click", function() {
    // alert("This worked!");
});

