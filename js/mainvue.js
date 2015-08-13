//Vue version
var main = new Vue({ 
  el: '#content',
  data: {
    title: 'todos',
    todos: [
      {
        done: false,
        test: 'Something',
        content: 'Learn JavaScript'
      },
      {
        done: true,
        test: 'Something',
        content: 'Learn Vue.js'
      },
      {
        done: true,
        test: 'Something',
        content: 'finshed moving'
      },
      {
        done: true,
        test: 'Something',
        content: 'Ready for weekend'
      },
      {
        done: true,
        test: 'Something',
        content: 'Almost ready?'
      },
      {
        done: false,
        test: 'Something',
        content: 'Finished Game'
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

    editTask: function(todo) {
      this.todos.$remove(todo);
      //console.log(todo);
      this.newTask = todo.content;
      this.$$.newTask.focus();
    },

    removeTask: function(todo) {
      //console.log(todo);
      this.todos.$remove(todo);
    }
  }
});
