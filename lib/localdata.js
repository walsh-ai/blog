import fs from 'fs'; 
import path from 'path'; 

export function getLocalData(filename) {
    // Get the path of the json file 
    const filePath = 
        path.join([process.cwd(), 'public/json', filename, '.json']);

    // Read the json file
    const rawData = fs.readFileSync(filePath);

    // Parse data as json
    const jsonData = JSON.parse(rawData); 

    return jsonData; 
}