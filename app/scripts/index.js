var $ = require('jquery');
var Like = require('./models/like').Like;

var likeButton = $('.like-button');
var numValue = $('#num-value');

var like = new Like();

numValue.textContent = ('0 Likes');

likeButton.on('click', function(event){
  event.preventDefault();

  like.likeValue();

    if(like.get('likes') !== 1) {
      numValue.textContent = (like.get('likes') + " Likes");
    }else {
      numValue.textContent = (like.get('likes') + " Like");
    };
});
