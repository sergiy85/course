$(document).ready(function() {

    const $app = $('#app');
    const $comments_list = $app.find('.js_comments_list');

    let comments = [{name: 'Vasya'}];

    let renderUser = makeRender('.js_template');
    const userID = 3;
    const postID = 15;

    function renderUsers() {
        let comments_html = comments.map(function(comment) {
            console.log(comment);
            return renderUser(comment);
        }).join('');

        $comments_list.html(comments_html);
    }


    $.ajax({
        url: `https://jsonplaceholder.typicode.com/comments?userId=${userID}&postId=${postID}`,
        method: 'GET',
        data: {},
        async: true,
        headers: {
            'test': 'Hello User!'
        },
    }).done(function(data) {
        comments = data;
        console.log(data);
        renderUsers();
    })

    renderUsers();

});