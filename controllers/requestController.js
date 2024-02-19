const { Request } = require('../models'); 


//CREATE Request NO AUTHENTICATION
const createRequest = async (req, res) => {
    try {
        console.log(req.body)
        const newRequest = await Request.create(req.body);
        console.log('Request created successfully')
        res.status(200).json(newRequest);
      } catch (err) {
        console.log(err)
        res.status(500).json({error: 'Error creating request' });
      }
};

// ====== AUTHENTICATION REQUEST [ DO NOT DELETE ]========

// const createRequest = async (req, res) => {
//     try {
//         console.log(req.body);

//         // Retrieve user ID from session
//         const userId = req.session.user_id;

//         // Ensure user is authenticated
//         if (!userId) {
//             return res.status(401).json({ error: 'User not authenticated' });
//         }

//         // Create request associated with user ID
//         const newRequest = await Request.create({
//             ...req.body,
//             user_id: userId,
//         });

//         console.log('Request created successfully');
//         res.status(200).json(newRequest);
//     } catch (err) {
//         console.log(err);
//         res.status(500).json({ error: 'Error creating request' });
//     }
// };



const getAllRequests = async (req, res) => {
  try {
      // Retrieve all requests from the database
      const requestData = await Request.findAll();
      
      // Send the requests as JSON response
      res.status(200).json(requestData);
  } catch (err) {
      console.error("Error fetching requests: ", err);
      res.status(500).json({ error: 'Error fetching requests' });
  }
};

const getSingleRequest = async (req, res) => {
  try{
    const requestData = await Request.findByPk(req.params.id, {
      // include:{model: Tag, through: ProductTag} 
    });
    if(!requestData) {
      res.status(404).json({message: "No request found with that id!"});
      return;
    }
    res.status(200).json(requestData)

  } catch (err) {
    res.status(500).json(err)
  }
};



      
module.exports = {
    createRequest,
    getAllRequests,
    getSingleRequest,

};