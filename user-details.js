
let url = new URL(location.href);
let user = JSON.parse(url.searchParams.get('data'));

let divDetailsBlock = document.getElementById('user-details');





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




let currentUserId = user.id;


document.getElementsByTagName("button")[0].onclick = function(eo) {
    eo.preventDefault();
    let usersPostsBlock = document.createElement('div');
    usersPostsBlock.id = 'userPosts';


    let urlUsers = new URL('https://jsonplaceholder.typicode.com/posts');

    fetch(urlUsers)
        .then(value => value.json())
        .then(posts => {
            for (const post of posts) {

                console.log(post.userId)

                if (post.userId === currentUserId) {

                    let divPostBlock = document.createElement('div');
                    divPostBlock.classList.add('user-block');
                    divPostBlock.innerText = `${post.title}`;

                    usersPostsBlock.appendChild(divPostBlock);
                }
            }
        });



    document.body.appendChild(usersPostsBlock);

};