PhET Interactive Simulator PoC
====================

Get general idea on [Creating PhET Interactive Simulations Activities approach guided inquiry](https://phet.colorado.edu/files/guides/PhetGuideActivityDoc_v8-final_en.pdf).

See [PhET Development Overview](https://docs.google.com/document/d/1Ys1EiwnqQGYuzGOcQSr4uXDes35mF1v1XhMZIl10nk8/edit#bookmark=id.ktug2sc8jabe).

See [PhET Source code](https://github.com/phetsims).
	
What is PhET HTML5 bundle
==============
Source code and Dependencies

Our simulations and dependencies are hosted publicly on GitHub
https://github.com/phetsims

We have 40+ repositories for the simulations and their dependencies, all of which can be found here: https://github.com/phetsims?tab=repositories.

Below is a list of some of the repositories that contain libraries and frameworks upon which the individual simulations depend.

- Scenery: A general scene graph for rendering the graphics and handling the input.  Documentation site for scenery
- Axon: for model implementation
- Assert: assertion framework for development testing
- phet-core: inheritance, extension and other utility functions
- phetcommon: higher-level common dependencies
- scenery-phet: PhET-specific scenery graphics and input handlers
- Joist: Framework for application loading, launching, and handling tabs
- Dot: Mathematics framework for model & view
- Kite: Shape library
- Sun: Graphical user interface components, such as buttons, checkboxes, etc
- Sherpa: All of our 3rd party dependencies
- Chipper: Tools for developing and building simulations.
- Perennial: Maintenance tools that won't change with different versions of chipper checked out

Main lines
=============
Creating a New Sim
After checking out the dependencies and installing grunt-cli in the preceding instructions, you can create your own simulation using the template.
1. Check out the template sim, called ‘simula-rasa’ using this git clone command:

cd phetsims
git clone https://github.com/phetsims/simula-rasa.git

2. Install the perennial dependencies:

cd perennial
npm install

3. Use the perennial ‘grunt’ task to create a new sim, like so (still in the perennial directory):

grunt create-sim --repo=NAME --author=AUTHOR

For instance, if the simulation is going to be named Acceleration Lab and the author is Sam Reid from PhET Interactive Simulations, then you could put

grunt create-sim --repo=acceleration-lab --author="Sam Reid (PhET Interactive Simulations)"

4. Test the created simulation in the browser and make sure it launches.  It should be a blank simulation.  Write to the Developing Interactive Simulations in HTML5 Google Group if you run into problems.
).

For your information
==================
Once the environment is set, you can download plenty examples from:

Checking out the HTML5 code from GitHub

Our example-sim repository README.md includes a list of git clone commands that will check out the example simulation and all of its dependencies.
https://github.com/phetsims/example-sim

And to clone some of our in-development sims:
git clone git://github.com/phetsims/forces-and-motion-basics.git
git clone git://github.com/phetsims/build-an-atom.git

All repositories should be cloned into the same directory so that relative paths will work.

Here is a full list of all phetsims repos.  If the sim won’t launch due to a missing dependency, you may need to check out some more of these repos:
https://github.com/phetsims?tab=repositories

Also note that this will check out the ‘master’ branch of all of our dependencies, which may create breaking changes intermittently if you remain up-to-date with them.  If you run into any breaking changes, please notify us immediately.  Also, we recommend developing your code on a public repo such as GitHub to enable us to test and update your simulations as common dependencies are changed.
