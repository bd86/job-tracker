var demo = new Vue({ 
    el: '#content',
    data: {
        title: 'todos',
        todos: [
            {
                done: false,
                content: 'Learn JavaScript'
            },
            {
                done: true,
                content: 'Learn Vue.js'
            },
            {
                done:false,
                content: 'Move'
            },
            {
                done: true,
                content: 'still moving'
            }
        ]
    }
});
