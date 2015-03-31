(function(){

  require('ScrollMagic', 'ScrollMagic.debug'), function(ScrollMagic) {
  // init controller
  var controller = new ScrollMagic.Controller({
      globalSceneOptions: {triggerHook: "onCenter"}
    });
  // init scene
  var scene = new ScrollMagic.Scene({
        duration: 300,
        offset: 100
    })
      .addTo(controller)
      .addIndicators();
    };

    // init controller
    var controller = new ScrollMagic.Controller();

    // create a scene
    new ScrollMagic.Scene({
      duration: 100, // the scene should last for a scroll distance of 100px
      offset: 50 // start this scene after scrolling for 50px
    })

    .setPin('#my-sticky-element').addTo(controller);
    // pins the element for the scene's duration, then assigns the scene to the controller

})();

// [ All notes and code, both above and below, written out entirely by Ben McLean, but taken from github account janpaepke's repo "ScrollMagic" ]

// HOW DOES SCROLLMAGIC WORK?
// The prinicple design patter of ScrollMagic is a controller that has an arbitrary number of scenes attached to it
  // (1) there is one controller for each scroll container. In most cases there is only one controller object and the scroll container is the browser window.
  // But you can also use DIV elements for scrolling and even have multiple containers on your page. The controller also defines which direction should be scrolled
  // (horizontal or vertical) and is responsible for keeping all scenes updated.
  //
  // (2) A scene defines what should happen when, meaning at which scroll position.
  // It can trigger animations, pin an element, change element classes or anything else you might desire.

// DEFINING THE CONTROLLER
  // As mentioned above, in most cases the scroll container is the browser window. To create a ScrollMagic controller with the default setting we use the main
  // ScrollMagic.Controller() class. We create a new instance of it and assign it to a variable, we can referene it later

  var controller = new ScrollMagic.Controller();

// DEFINING SCENES
  // Scenes are created by using the `ScrollMagic.Scene()` class. A ScrollMagic.Scene defines where the controller should react and how.
  // Here we define a variable called "scene" and we'll create a new ScrollMagic.Scene() instance.

  var scene = new ScrollMagic.Scene();

  // Inside ScrollMagic.Scene we place an object of associated properties and values that are made available according to the doc --> ( http://janpaepke.github.io/ScrollMagic/docs/ScrollMagic.Scene.html#ScrollScene )
  // These options describe the behavior of our scene and in order to figure out what value has what effect you can play around in the "scene manipulation example" --> ( http://janpaepke.github.io/ScrollMagic/examples/basic/scene_manipulation.html )

  var scene = new ScrollMagic.Scene({
    offset: 100, // start scene after scrolling for 100px
    duration: 400 // pin the element for 400px of scrolling
  });

// ADDING SCENES TO THE CONTROLLER
  // In order to have the scenes react to the scrolling of the container we have to add our scene to the controller we defined at the very beginning…

  var scene = new ScrollMagic.Scene({
    triggerElement: '#pinned-trigger1', // starting scene, when reaching this element
    duration: 400 // pin the element for a total of 400px
  })
  .setPin('#pinned-element1'); // the element we want to pin

  // Add Scene to ScrollMagic Controller
  controller.addScene(scene);

  // If you desire multiple scenes at once you can pass them to the controller just as the example shows below:

  // Add Scene to ScrollMagic Controller
    controller.addScene([
      scene1,
      scene2,
      scene3
    ]);

  // Instead of telling the controller what scenes to add you can also tell the scene to be added to a certain controller:

    var scene = new ScrollMagic.Scene({
      triggerElement: '#trigger1'
    })
    .addTo(controller); // Add Scene to ScrollMagic Controller

    var scene2 = new ScrollMagic.Scene({
      triggerElement: '#trigger2'
    })
    .addTo(controller); // Add Scene to ScrollMagic Controller

    //In the above example we're using a technique called ”chaining” with the addTo(). If no Semicolon ends the line, we can continue adding ScrollMagic.Scene methods and ”chain” them together.
    // Next let's start adding some animation to our scenes in the next Chapter: Tweens
