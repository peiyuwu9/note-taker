// var moment = require("moment");

 // Show note table by retrieving input from api
 $.get("/api/notes", function(result){
    $(".list-group").html("");
    console.log('result', result);
    for (var i=0; i<result.length; i++){
        var noteArea = $("<li class='list-group-item'>");
        var div = $("<div>");
        var noteTitle = $("<span class='font-weight-bold saved-note-title'>" + result[i].title + "</span>");
        var edit = $("<a href= '#top'><i class='fas fa-pen float-right text-danger edit-note' data-id= " + result[i].id + ">")
        var trash = $("<i class='fas fa-trash-alt float-right text-danger delete-note' data-id= " + result[i].id + ">")
        var noteText = $("<p class='mt-2'>" + result[i].text + "</p>");
        // var timeConverter = moment(result[i].created_at, ["YYYY", moment.ISO_8601]);
        var timeStamp = $("<p>" + result[i].created_at + "</p>");
        div.append(noteTitle, trash, edit);
        noteArea.append(div, noteText, timeStamp);
        $(".list-group").prepend(noteArea);
    }
});

// When click save button, notes will be posted to api middleware then refreash page to get current api data
$(".add-note").on("click", function(event){

    event.preventDefault();

    //Store input data in variables
    var newNote = {
        noteTitle: $("#note-title").val().trim(),
        noteText: $("#note-text").val().trim()
    };
    
    console.log(newNote);
    $("#note-title").val("");
    $("#note-text").val("");
    
    //Post input data to api middleware and clear input textbox
    $.post("/api/notes", newNote)
    .then(function(data){
        if (data) {
            console.log("Note has been added.");
        }
    });
    location.reload();
});

// Click trach icon to send delete-note request to middleware
$(document.body).on("click", ".delete-note", function(){
    var id = $(this).data("id");
    $.ajax("/api/notes/" + id, {
        type: "DELETE"
    }).then(function(data){
        if (data) {
            console.log("Note has been deleted.");
        }
    });
    location.reload();
}); 

// Click edit icon to send update-note request to middleware
$(document.body).on("click", ".edit-note", function(){
    console.log("edit click function: " + true);
    var id = $(this).data("id");
    console.log(id);
    $.ajax("/api/notes/" + id, {
        type: "GET"
    }).then(function(result){
        console.log(result[0]);
        console.log(result[0].title);
        console.log(result[0].text);
        $(".card-title").text("Edit This Note");
        $("#note-title").attr("value", result[0].title);
        $("#note-text").text(result[0].text);
        $(".btn").attr("class", "btn btn-success mt-4 float-right add-edited-note").attr("data-id", id);
        console.log('add button', $('.add-edited-note'));
    });
});

$(document.body).on("click", ".add-edited-note", function(){
    event.preventDefault();
    var id = $(this).data("id");

    //Store input data in variables
    var editNote = {
        noteTitle: $("#note-title").val().trim(),
        noteText: $("#note-text").val().trim()
    };
    
    console.log(editNote);
    $("#note-title").val("");
    $("#note-text").val("");

    $.ajax("/api/notes/" + id, {
        type: "PUT"
    }).then(function(data){
        if (data) {
            console.log("Note has been updated.");
        }
    });

    // location.reload();
});

