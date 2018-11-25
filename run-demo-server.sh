echo "Entering to PeTH simulations folder"
cd phetsims
echo "Running server"
echo "Launch a browser: http://localhost:8080"
http-server
echo "Launch a browser: http://localhost:8080/${1}/build/${1}.html"
firefox http://localhost:8080/${1}/build/${1}.html