echo "Entering into ./phetsims/${1}"
cd ./phetsims/${1}
echo "Installing..."
npm install
npm prune
npm update
npm install grunt
echo "Going to do the chipper building thing.."
cd ../chipper
npm update 
cd ../${1}
echo "Going to to the Grunt launching thing"
grunt
echo "See it running on http://localhost:8080/${1}/build/${1}.html"
open http://localhost:8080/${1}/build/${1}.html
