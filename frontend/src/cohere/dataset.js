// const fs = require('fs');

// function safeCity(city, country) {
//     const fileContent = fs.readFileSync('World Crime Index_updated.json', 'utf-8');
//     const data = JSON.parse(fileContent);
//     const result = [];
//     let currentCrime;

//     for (const entry of data) {
//         if (entry.City === city) {
//             currentCrime = entry['Crime Index'];
//             break;
//         }
//     }

//     for (const entry of data) {
//         if (entry.Country === country && currentCrime > entry['Crime Index']) {
//             result.push([entry.City, entry['Crime Index'], entry['Safety Index']]);
//         }
//     }

//     return result; // returns 2D array of safer cities
// }
// function visitation(nationality, country) {
//     const fileContent = fs.readFileSync('passport-index-tidy.json', 'utf-8');
//     const data = JSON.parse(fileContent);

//     if (nationality === country) {
//         return "Domestic Travel";
//     }

//     for (const entry of data) {
//         if (entry.Passport === nationality && entry.Destination === country) {
//             // You can add days after numbers as needed
//             return entry.Requirement;
//         }
//     }

//     // Handle the case when no matching entry is found
//     return "No information found";
// }
// // module.exports = { safeCity, visitation };