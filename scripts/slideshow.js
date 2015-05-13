/**
 * Created by dberko on 5/12/15.
 */
var Slideshow = Backbone.Collection.extend({
  model    : Slide
  ,
  nextOrder: function () {
    if (!this.length) return 1;
    return this.last().get('order') + 1;
  }
});


Slide = Backbone.Model.extend({

    // Default attributes for the todo item.
    defaults: function () {
      return {
        title  : "",
        summary: "",
        link   : "",
        postID : 0,
        order  : gSlideshow.nextOrder(),
      };
    }
  }
);

//global slideshow
var gSlideshow = new Slideshow();
