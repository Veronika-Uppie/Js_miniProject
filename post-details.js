//     На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)


let urlPost = new URL(location.href);
let post = JSON.parse(urlPost.searchParams.get('data'));

let divPostsBlock = document.getElementById('user-posts');


function getPostInfo (obj) {
    for (const item in obj) {

        if (typeof obj[item] === 'object') {
            let addBlock = document.createElement('div');
            addBlock.innerText = item;
            getPostInfo(obj[item]);

        } else {
            let divPostInfo = document.createElement('div');
            divPostInfo.classList.add('user-posts-info');

            divPostInfo.innerText = `${item}: ${obj[item]}`;

            divPostsBlock.appendChild(divPostInfo);
        }
    }
}
getPostInfo(post);