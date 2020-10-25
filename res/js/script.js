$(document).ready(function() {
  // jQuery methods go here...
  $(".dropdownMe").hide();
  $.get("https://private-anon-735fc5c29c-wad20postit.apiary-mock.com/users/1", function(data, status) {
    console.log("Data: " + toString(data) + "\nStatus: " + status);
    $("#avatar").attr("src", data.avatar);
    $("#_userName").text(data.firstname + " " + data.lastname);
    $("#_userMail").text(data.email);
  });

  $("#avatar").click(function() {
    $(".dropdownMe").toggle();
  })

});
