function getFollowers(callback) {
  $.ajax({
    method: 'GET',
    headers: {"Authorization": "Basic YWlycG9ydHloOmZ1enp5bG9naWM="},
    url: 'https://api.github.com/users/kyleluck/followers',
    success: function(data) {
      callback(data);
    }
  });
}

function searchCode(callback) {
  $.ajax({
    method: 'GET',
    headers: {"Authorization": "Basic YWlycG9ydHloOmZ1enp5bG9naWM="},
    url: 'https://api.github.com/search/code?q=push+in:file+language:js+user:kyleluck',
    success: function(data) {
      callback(data);
    }
  })
}

$(function() {
  getFollowers(function(result) {
    var avatars = '';
    result.forEach(function(obj) {
      avatars += "<a href='" + obj.html_url + "'><img src='" + obj.avatar_url + "' alt='" + obj.login + "'></a>";
    });
    $('.followers').append(avatars);
    //console.log(result);
  });

  searchCode(function(result) {
    var codeResults = '';
    for (var i = 0; i < result.items.length; i++) {
      var thisresult = result.items[i];
      if (thisresult.name !== 'jquery.js') {
        codeResults += "<p><a href='" + thisresult.html_url + "'>" + thisresult.name + "</a></p>";
      }
    }
    console.log(result);
    $('.code').append(codeResults);
  });
});
