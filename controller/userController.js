const UserModel = require('../model/UserModel');

exports.createUser = (req, res) => {
    try {
        const user = new UserModel({
            name: req.body.name,
            email: req.body.email,
            gender: req.body.gender
        });

        user.save(user);
        res.json({
            status: 200,
            user
        });
    } catch (error) {
        res.json(error.message);
    }
};

exports.findUser = async(req, res)=> {
    try {
        const id = req.query.id;

        const user = await UserModel.findById(id);

        res.json({
            status: 200,
            user
        });
        
    } catch (error) {
        res.json({
            status: 500,
            message: error.message
        });
    }
};

exports.updateUser = async (req, res) => {
    try {
        const id = req.query.id;
        const updateUser = await UserModel.findByIdAndUpdate(id, req.body, {useFindAndModify: false});
        res.json({
            status: 200,
            user: updateUser
        })
    } catch (error) {
        res.json(error.message);
    }
}