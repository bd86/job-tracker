var demo = new Vue({ 
  el: '#content',
  data: {
    title: 'todos',
    todos: [
      {
        done: false,
        test: 'SOmething',
        content: 'Learn JavaScript'
      },
      {
        done: true,
        test: 'SOmething',
        content: 'Learn Vue.js'
      },
      {
        done:false,
        test: 'SOmething',
        content: 'Move'
      },
      {
        done: true,
        test: 'SOmething',
        content: 'still moving'
      }
    ],
    newTask: ''
  },

  methods: {
    addTask: function(e) {
      e.preventDefault();
      this.todos.push({
        done: false,
        test: 'Mayber time',
        content: this.newTask
      });

      this.newTask = '';
    },

    removeTask: function(todo) {
      console.log(todo);
      this.todos.$remove(todo);
    }
  }
});
