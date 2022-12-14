let axios = require('axios');
const ExpressError = require('./expresserror');

const BASE_URL = `https://api.github.com/users/`

async function getDeveloperData(developers) {
    let response = developers.map(async developer => {
        return await axios.get(`${BASE_URL}${developer}`)});

        // Wait for all promises in the response array to resolve
        response = await Promise.all(response);

        if (response.length === 0) {
            throw new ExpressError("Developer not found", 404);
        }

        let developersinfo = response.map(developerinfo => (
            { name: developerinfo.data.name, 
                bio: developerinfo.data.bio }));
        
        return developersinfo;
    }

module.exports = {getDeveloperData};