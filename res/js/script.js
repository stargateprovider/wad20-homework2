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

  // Load posts
  $.get("https://private-anon-32697201dd-wad20postit.apiary-mock.com/posts", (data, status) => {
    let mediacontent, textcontent;

    for (var i = 0; i < data.length; i++) {
      let post = data[i];
      textcontent = post.text !== null ? post.text : "";
      
      if (post.media === null) {
        mediacontent = "";
      } else if (post.media.type === "image") {
        mediacontent = `<div class="post-image"><img src="${post.media.url}" alt=""></div>`;
      } else if (post.media.type === "video") {
        let format = post.media.url.slice(post.media.url.lastIndexOf(".") + 1);
        mediacontent =
          `<video controls>
            <source src=" ${post.media.url}" type="video/${format}">
          Your browser does not support the video tag.
          </video>`;
      }
    
      $(".main-container").append(
        `<div class="post">
          <div class="post-author">
            <span class="post-author-info">
              <img src="${post.author.avatar}" alt="Post author">
              <small>${post.author.firstname} ${post.author.lastname}</small>
            </span>
            <small>${post.createTime}</small>
          </div>
          ${mediacontent}
          <div class="post-title">
            <h3>${textcontent}</h3>
          </div>
          <div class="post-actions">
            <button type="button" name="like" class="like-button">${post.likes}</button>
          </div>
        </div>`
      );
    }

    // Interactive like button for posts
    $(".like-button").click(e => {
      if (!e.target.classList.contains("liked")) {
        e.target.className += " liked";
      }
    });
  });

});
