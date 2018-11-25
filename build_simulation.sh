echo "Entering into ./phetsims/my-hello-world"
cd ./phetsims/my-hello-world
echo "Installing..."
npm install
npm prune
npm update
npm install grunt-cli -g
echo "Going to do the chipper building thing.."
cd ../chipper
npm update 
cd ../my-hello-world
echo "Going to to the Grunt launching thing"
grunt
echo "See it running on http://localhost:8080/my-hello-world/build/phet/example-sim_en_phet.html"
open http://localhost:8080/my-hello-world/build/phet/example-sim_en_phet.html
