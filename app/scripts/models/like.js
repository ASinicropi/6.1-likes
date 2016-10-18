var Backbone = require('backbone');

var Like = Backbone.Model.extend({
  defaults: {
    'likes': 0
  },

    likeValue: function(){
    this.set('likes', this.get('likes') + 1);
    console.log('likes', this.get('likes'));
  }

});

module.exports = {
  'Like': Like,
};
