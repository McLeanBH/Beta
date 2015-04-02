(function(){
  "use strict";


      $( "#accordion" ).accordion();
  

/// Each post is to be a piece of work/an application I've built to be showcased as a portfolio of works.

  var Post = Backbone.Model.extend({
    idAttribute: 'postId',

    defaults: function(attributes) {
      attributes = attributes || {};
      return _.defaults(attributes, {
        title: '',
        body: ''
      });
    }
  });

  var PostsCollection = Backbone.Collection.extend({
    model: Post,

    url: "https://api.parse.com/1/classes/POST",

    parse: function(response){
      return response.results;
    }
  });

/////////////////////////////////////////////
// Views - Presentation / Interaction
/////////////////////////////////////////////

  var PostListView = Backbone.View.extend({
    template: _.template($('[data-template-name=post]').text()),

    render: function(){
      this.$el.html(this.template());
      return this;
    },

    events: {
      'submit': 'createPost'
    },

    createPost: function(e) {
      e.preventDefault();
      var postTitle = this.$('.post-title').val();
      var postBody = this.$('.post-body').val();
      this.collection.create({title: postTitle, body: postBody});
      // this.$('.post-title').val().empty(); // --> attempt to empty input after enter/submit
      console.log('hello');

      postTitle = this.$('.post-title').val('');
      postBody = this.$('.post-body').val('');
    }
  });

/////////////////////////////////////////////
// Router - Application State
/////////////////////////////////////////////

  var AppRouter = Backbone.Router.extend({
    routes: {
      '': 'index',
      'portfolio': 'portfolio',
      'about': 'resume',
      'contact': 'contact'
    },

    initialize: function(){
      this.posts = new PostsCollection();
      this.listView = new PostListView({
        el: '.main-content-wrapper',
        collection: this.posts
      });
    },

    index: function() {
      // var template = _.template($('[data-template-name=post]').text()); // --> moved to listView
      // $('.main-content-wrapper').html(template());
      this.listView.render();
    },
  });

/////////////////////////////////////////////
// Parse Config
/////////////////////////////////////////////

  $.ajaxSetup ({
    headers: {
      "X-Parse-Application-Id": "...",
      "X-Parse-REST-API-Key": "..."
    }
  });

/////////////////////////////////////////////
// Glue
/////////////////////////////////////////////

  $(document).ready(function(){
    window.router = new AppRouter();
    Backbone.history.start({pushState: false});
    var p = $("#gallery").portfolio();
    p.init();
  });

})();
