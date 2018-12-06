// Copyright 2018, University of Colorado Boulder

/**
 * @author jsanchez@nechigroup.com
 */
define( function( require ) {
  'use strict';

  // modules
  var ResetAllButton = require( 'SCENERY_PHET/buttons/ResetAllButton' );
  var ScreenView = require( 'JOIST/ScreenView' );
  var myHelloWorld = require( 'MY_HELLO_WORLD/myHelloWorld' );

  class MyHelloWorldScreenView extends ScreenView {

    /**
     * @param {MyHelloWorldModel} model
     */
    constructor( model ) {

      super();

      var resetAllButton = new ResetAllButton( {
        listener: () => {
          model.reset();
        },
        right: this.layoutBounds.maxX - 10,
        bottom: this.layoutBounds.maxY - 10
      } );
      this.addChild( resetAllButton );
    }

    // @public
    step( dt ) {
      //TODO Handle view animation here.
    }
  }

  return myHelloWorld.register( 'MyHelloWorldScreenView', MyHelloWorldScreenView );
} );