$(document).ready(function() {

  // Load profiles
  $.get("https://private-anon-5d82f5b10b-wad20postit.apiary-mock.com/profiles", (data, status) => {
    for (var i = 0; i < data.length; i++) {
      let profile = data[i];

      $("#profiles").append(
        `<div class="profile">
          <img src="${profile.avatar}" alt="Avatar">
          <div class="profile-name">
            ${profile.firstname} ${profile.lastname}
          </div>
          <div class="profile-actions">
            <button type="button" name="follow" class="follow-button">Follow</button>
          </div>
        </div>`
      );
    }

    // Interactive follow button for profiles
    $(".follow-button").click(function(e) {
      e.stopPropagation();
      $(this).toggleClass("followed");
      $(this).text($(this).hasClass("followed") ? "Followed" : "Follow");
    });
  });

});
