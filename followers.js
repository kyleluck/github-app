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
    url: 'https://api.github.com/search/code?q=addClass+in:file+language:js+user:kyleluck',
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
      codeResults += "<p>" + result.items[i].url + "</p>";
    }
    console.log(result);
    $('.code').append(codeResults);
  });
});
