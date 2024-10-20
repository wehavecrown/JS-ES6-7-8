const apiURL = 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime';

async function getTop100Campers() {
    const response = await fetch(apiURL);
    const json = await response.json();
    
    console.log(json[0])
}


// FETCH using promises
// function getTop100Campers(){
//     fetch(apiURL)
//     .then((response) => response.json())
//     .then((json) => {
//         console.log(json[0])
//     }).catch((error) => {
//         console.log("failed")
//     });
// }

getTop100Campers();