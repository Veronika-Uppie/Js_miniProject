// На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули

let urlUser = new URL(location.href);
let user = JSON.parse(urlUser.searchParams.get('data'));

let divDetailsBlock = document.getElementById('user-details');



for (const item in user) {
    let divDtailInfo = document.createElement('div');
    divDtailInfo.classList.add('div-detail-info')
    divDtailInfo.innerText = `${item}: `;
    divDetailsBlock.appendChild(divDtailInfo);

    function getUserDetails (obj) {

        if (typeof user[item] !== 'object' ) {
            divDtailInfo.innerText =`${item}: ${user[item]}`;
        }
        if (typeof obj === 'object') {
            for (const element in obj) {
                if (typeof obj[element] !== 'object') {
                    let addInfo = document.createElement('div');
                    addInfo.innerText = `${element}: ${obj[element]}`;
                    divDtailInfo.appendChild(addInfo);
                } else {
                    getUserDetails(obj[element]);
                }
            }
        }
    }
    getUserDetails(user[item]);
}


// function getUserDetails (obj) {
//     for (const item in obj) {
//         let divDtailInfo = document.createElement('div');
//         divDtailInfo.classList.add('div-dtail-info')
//         divDetailsBlock.appendChild(divDtailInfo);
//         if (typeof obj[item] !== 'object' ){
//             divDtailInfo.innerText = `${item}: ${obj[item]}`
//         } else {
//             divDtailInfo.innerText = item;
//             getUserDetails(obj[item])
//         }
//             }
// }
//
// getUserDetails(user);





// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html, котра має детальну інфу про поточний пост.

let buttUserDetails = document.getElementsByTagName("button")[0];
buttUserDetails.id = 'butt-User-Details';

buttUserDetails.onclick = function(eo) {
    eo.preventDefault();
    let usersPostsBlock = document.createElement('div');
    usersPostsBlock.id = 'userPosts';

    let urlPosts = new URL('https://jsonplaceholder.typicode.com/posts?userId=' + JSON.stringify(user.id));


    fetch(urlPosts)
        .then(value => value.json())
        .then(posts => {
            for (const post of posts) {

                    let divPostBlock = document.createElement('div');
                    divPostBlock.classList.add('post-block');
                    let a = document.createElement('a');
                    a.innerText = post.title;
                    a.href = 'post-details.html?data=' + JSON.stringify(post);

                    divPostBlock.appendChild(a);
                    usersPostsBlock.appendChild(divPostBlock);

            }
        });
    document.body.appendChild(usersPostsBlock);
};



