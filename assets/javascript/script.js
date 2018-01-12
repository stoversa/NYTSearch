$("#search").on("click", function() {
    event.preventDefault();
    var searchTerm = $("#searchTerm").val();
    var startYear = $("#startYear").val();
    var endYear = $("#endYear").val();

});

$("#clear").on("click", function() {
    $("resultsHere").empty();
});

