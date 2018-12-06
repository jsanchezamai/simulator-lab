// Copyright 2018, University of Colorado Boulder

/**
 * @author jsanchez@nechigroup.com
 */
define( require => {
  'use strict';

  // modules
  var Property = require( 'AXON/Property' );
  var Screen = require( 'JOIST/Screen' );
  var myHelloWorld = require( 'MY_HELLO_WORLD/myHelloWorld' );
  var MyHelloWorldModel = require( 'MY_HELLO_WORLD/my-hello-world/model/MyHelloWorldModel' );
  var MyHelloWorldScreenView = require( 'MY_HELLO_WORLD/my-hello-world/view/MyHelloWorldScreenView' );

  class MyHelloWorldScreen extends Screen {

    constructor() {

      var options = {
        backgroundColorProperty: new Property( 'white' )
      };

      super(
        () => new MyHelloWorldModel(),
        ( model ) => new MyHelloWorldScreenView( model ),
        options
      );
    }
  }

  return myHelloWorld.register( 'MyHelloWorldScreen', MyHelloWorldScreen );
} );