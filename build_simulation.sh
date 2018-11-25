echo "Entering into ./phetsims/${1}"
cd ./phetsims/${1}
echo "Installing..."
npm install --verbose
npm prune --verbose
npm update --verbose
npm install grunt --verbose
echo "Going to do the chipper building thing.."
cd ../chipper
npm update --verbose
cd ../${1}
echo "Going to to the Grunt thing"
grunt
echo "Going back to run the server"
cd ../..
sh run-created-simulation.sh ${1}