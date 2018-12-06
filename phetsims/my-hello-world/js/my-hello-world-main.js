// Copyright 2018, University of Colorado Boulder

/**
 * Main entry point for the sim.
 *
 * @author jsanchez@nechigroup.com
 */
define( require => {
  'use strict';

  // modules
  var Sim = require( 'JOIST/Sim' );
  var SimLauncher = require( 'JOIST/SimLauncher' );
  var MyHelloWorldScreen = require( 'MY_HELLO_WORLD/my-hello-world/MyHelloWorldScreen' );

  // strings
  var myHelloWorldTitleString = require( 'string!MY_HELLO_WORLD/my-hello-world.title' );

  var simOptions = {
    credits: {
      //TODO fill in credits, all of these fields are optional, see joist.CreditsNode
      leadDesign: '',
      softwareDevelopment: '',
      team: '',
      qualityAssurance: '',
      graphicArts: '',
      soundDesign: '',
      thanks: ''
    }
  };

  // launch the sim - beware that scenery Image nodes created outside of SimLauncher.launch() will have zero bounds
  // until the images are fully loaded, see https://github.com/phetsims/coulombs-law/issues/70
  SimLauncher.launch( () => {
    var sim = new Sim( myHelloWorldTitleString, [ new MyHelloWorldScreen() ], simOptions );
    sim.start();
  } );
} );