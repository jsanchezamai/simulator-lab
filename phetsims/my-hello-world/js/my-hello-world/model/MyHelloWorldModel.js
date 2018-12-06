// Copyright 2018, University of Colorado Boulder

/**
 * @author jsanchez@nechigroup.com
 */
define( require => {
  'use strict';

  // modules
  var myHelloWorld = require( 'MY_HELLO_WORLD/myHelloWorld' );

  /**
   * @constructor
   */
  class MyHelloWorldModel  {

    constructor() {
      //TODO
    }

    // @public resets the model
    reset() {
      //TODO Reset things here.
    }

    // @public
    step( dt ) {
      //TODO Handle model animation here.
    }
  }

  return myHelloWorld.register( 'MyHelloWorldModel', MyHelloWorldModel );
} );