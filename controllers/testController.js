const getTest = (req, res) => {
    try {
        res.send({ hi: 'there' });
    } catch (error) {
        console.error(error.stack);
        res.status(500).send('Internal Server Error');
    }
};

const postTest = (req, res) => {
    try {
        const data = req.body;

        data['new property'] = 'added property test';

        let json = JSON.stringify(data);
        res.send(json);
    } catch (error) {
        console.error(error.stack);
        res.status(500).send('Internal Server Error');
    }
};


module.exports = {
	postTest,
	getTest,
};

//========================

// module.exports = {

// 	getTest: async (req, res) => {
// 		try {
// 			res.send({ hi: 'there' });
// 		} catch (error) {
// 			console.error(error.stack);
// 			res.status(500).send('Internal Server Error');
// 		}
		
// 	},

// 	postTest: async (req, res) => {
// 		try {
// 			const data = req.body;
	
// 			data['new property'] = 'added property test';
	
// 			let json = JSON.stringify(data);
// 			res.send(json);
// 		} catch (error) {
// 			console.error(error.stack);
// 			res.status(500).send('Internal Server Error');
// 		}
// 	},
// }