 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyA2QftaqOOKsazXD4pEj3u9Y4znX13whRo",
    authDomain: "train-c065b.firebaseapp.com",
    databaseURL: "https://train-c065b.firebaseio.com",
    projectId: "train-c065b",
    storageBucket: "",
    messagingSenderId: "172031127334"
  };
  firebase.initializeApp(config);
  // Create a variable to reference the database
  var database = firebase.database();
  var trainName = "";
  var destination = "";
  var firstTrainTime = "";
  var frequency = "";
  // Capture Button Click
  $("#add-user").on("click", function() {
    // Don't refresh the pfirstTrainTime!
    event.preventDefault();
    // YOUR TASK!!!
    trainName = $("#trainName-input").val().trim();
    destination = $("#destination-input").val().trim();
    firstTrainTime = $("#firstTrainTime-input").val().trim();
    frequency = $("#frequency-input").val().trim();
    // Code in the logic for storing and retrieving the most recent user.
    database.ref().set({
      trainName: trainName,
      destination: destination,
      firstTrainTime: firstTrainTime,
      frequency: frequency
    });
  });
  // Don't forget to provide initial data to your Firebase database.
  // Firebase watcher + initial loader HINT: .on("value")
  database.ref().on("value", function(snapshot) {
    $("#trainName-display").text("Train Name: " + snapshot.val().trainName);
    $("#destination-display").text("Destination: " + snapshot.val().destination);
    $("#firstTrainTime-display").text("Train Time: " + snapshot.val().firstTrainTime);
  })