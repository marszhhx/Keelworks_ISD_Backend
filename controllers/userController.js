const { User } = require('../models');

// const getUser = async (req, res) => {
//   try {
//     const user = await User.findByPk(req.params.id, {
//       attributes: { exclude: ['password'] }, // Exclude password field
//     });

//     if (user) {
//       res.json(user);
//     } else {
//       res.status(404).json({ message: 'User not found' });
//     }
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// };

module.exports = { getUser };
