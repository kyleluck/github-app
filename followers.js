function getData(callback) {
  $.ajax({
    method: 'GET',
    url: 'https://api.github.com/users/kyleluck/followers',
    success: function(data) {
      callback(data);
    }
  });
}

$(function() {
  getData(function(result) {
    var avatars = '';
    result.forEach(function(obj) {
      avatars += "<a href='" + obj.html_url + "'><img src='" + obj.avatar_url + "' alt='" + obj.login + "'></a>";
    });
    $('.followers').append(avatars);
    console.log(result);
  });
});
