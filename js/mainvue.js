var demo = new Vue({ 
    el: '#content',
    data: {
        title: 'todos',
        todos: [
            {
                done: true,
                content: 'Learn JavaScript'
            },
            {
                done: false,
                content: 'Learn Vue.js'
            }
        ]
    }
});
