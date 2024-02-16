const { Request } = require('../models'); 


//CREATE Request
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


    //UPDATE REQUEST


    //DELETE REQUEST


//GET REQUEST
// const getRequest = async (req, res) => {
//     try {
//         // Find post by ID
//         const requestId = req.params.id;
//         const request = await Request.findByPk(requestId);
    
//         // Check if post exists
//         if (!request) {
//         res.status(404).json({ error: 'request not found' });
//         return;
//         }
    
//         // Send the post as JSON response
//         res.status(200).json(request);
//     } catch (err) {
//         console.error("Error fetching request: ", err);
//         res.status(500).json({ error: 'Error fetching request' });
//     }
// };


      
module.exports = {
    createRequest,
    // getRequest,

};