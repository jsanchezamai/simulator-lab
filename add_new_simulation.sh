echo "This script will install a new blank simulation on phetsims/simula-rasa for my-hello-world"
echo "Entering to phetsims directory"
cd phetsims
echo "Downloading template"
git clone https://github.com/phetsims/simula-rasa.git
echo "Install dependencies"
cd perennial
npm install
echo "Use Grunt to run the simulation"
npm install grunt
grunt create-sim --repo=my-hello-world --author="jsanchez@nechigroup.com"
