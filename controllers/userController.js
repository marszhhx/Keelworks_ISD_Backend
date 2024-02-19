const { User, Request } = require('../models');


const getAllUsers = async (req, res) => {
    // find all users
    try{
      const userData = await User.findAll({
        attributes: { exclude: ['password'] },
        include: Request
      });
  
      res.status(200).json(userData)
    } catch (err) {
      res.status(500).json(err)
    }
    // be sure to include its associated Products
  };

const getUser = async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id, {
      attributes: { exclude: ['password'] }, // Exclude password field
      include: Request
    });

    if (userData) {
      res.json(userData);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { 
    getAllUsers,
    getUser, 
};
