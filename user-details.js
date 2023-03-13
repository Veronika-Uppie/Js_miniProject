
let url = new URL(location.href);
let user = JSON.parse(url.searchParams.get('data'));

let divDetailsBlock = document.getElementById('user-details');


console.log(user);





function getUserDetails (obj) {
    for (const item in obj) {

        if (typeof obj[item] === 'object') {
            let addBlock = document.createElement('div');
            addBlock.innerText = item;
            getUserDetails(obj[item]);

        } else {
            let divUserDetails = document.createElement('div');
            divUserDetails.classList.add('user-details-block');

            divUserDetails.innerText = `${item}: ${obj[item]}`;



            divDetailsBlock.appendChild(divUserDetails);

        }
    }

}
getUserDetails(user);