const Poids = require('../models/poids');

exports.getAllPoids = async(req,res,next) => {
    try {
const [allPoids] = await Poids.fetchAll();
res.status(200).json(allPoids);
    }catch(err) {
if (!err.statusCode){
    err.statusCode = 500
}
next(err);
    }
};


