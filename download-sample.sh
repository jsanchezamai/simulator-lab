echo "Will download ${1} sample"
echo "Entering on phetsims dir"
cd phetsims
echo "Downloading"
git clone git://github.com/phetsims/${1}.git
echo "Running installer"
sh ../build_simulation.sh ${1}
