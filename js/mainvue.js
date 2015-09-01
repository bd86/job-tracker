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
        content: 'Saw manatee'
      },
      {
        done: false,
        test: 'Something',
        content: 'still kind of Still Fix car'
      },
      {
        done: false,
        test: 'Something',
        content: 'still Finished Game'
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
