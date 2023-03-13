
let url = new URL(location.href);
let user = JSON.parse(url.searchParams.get('data'));

let divDetailsBlock = document.getElementById('user-details');


for (const item in user) {
    let divUserDetails = document.createElement('div');
    divUserDetails.classList.add('user-details-block');

    divUserDetails.innerText = `${item}: ${user[item]}`;

    // console.log(user[item])
    divDetailsBlock.appendChild(divUserDetails);
}


// divUserDetails.innerText = JSON.stringify(user);

console.log(user);