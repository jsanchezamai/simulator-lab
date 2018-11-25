echo "Going to launch the ${1} sim"
cd phetsims/${1}
echo "Building"
grunt
echo "Launching"
cd ../..
sh run-demo-server.sh ${1}
echo "Visit http://localhost:8080/${1}/build"

