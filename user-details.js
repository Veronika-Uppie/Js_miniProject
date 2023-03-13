// На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули

let urlUser = new URL(location.href);
let user = JSON.parse(urlUser.searchParams.get('data'));

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





// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html, котра має детальну інфу про поточний пост.



document.getElementsByTagName("button")[0].onclick = function(eo) {
    eo.preventDefault();
    let usersPostsBlock = document.createElement('div');
    usersPostsBlock.id = 'userPosts';

    let urlPosts = new URL('https://jsonplaceholder.typicode.com/posts?userId=' + JSON.stringify(user.id));

    fetch(urlPosts)
        .then(value => value.json())
        .then(posts => {
            for (const post of posts) {

                    let divPostBlock = document.createElement('div');
                    divPostBlock.classList.add('user-block');
                    let a = document.createElement('a');
                    a.innerText = post.title;
                    a.href = 'post-details.html?data=' + JSON.stringify(post);

                    divPostBlock.appendChild(a);
                    usersPostsBlock.appendChild(divPostBlock);

            }
        });

    document.body.appendChild(usersPostsBlock);
};



