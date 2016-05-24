function getData(callback) {
  $.ajax({
    method: 'GET',
    headers: {
    },
    url: 'https://api.github.com/emojis',
    success: function(data) {
      callback(data);
    }
  });
}

$(function() {
  getData(function(result) {
    var images = '';
    for (var prop in result) {
      if (result.hasOwnProperty(prop)) {
        images += "<img src='" + result[prop] + "' alt='" + prop + "'>";
      }
      //console.log(result[prop]);
    }
    $('.container').append(images);
    console.log(result);
  });
});
