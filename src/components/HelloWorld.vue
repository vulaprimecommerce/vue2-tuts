<template>
  <div id="hello-world">
    <div class="hello" v-bind:title="title" v-if="seen">
      <h1>{{ msg }}</h1>

      <h2>{{ reverseWordsInMSG }}</h2>
    </div>

    <button v-on:click="toggleLight">{{ light ? "ON" : "OFF" }}</button>

    <div class="todo-list-wrap">
      <ol class="todo-list">
        <!-- <li v-for="todo in todos"> {{ todo }} </li> -->
        <todo-item
          v-for="todo in todos"
          v-bind:todo="todo"
          v-bind:key="todo.id"
        />
      </ol>
    </div>

    <form v-on:submit.prevent="onSubmitForm">
      <textarea v-model="todoText"></textarea>
      <button type="submit">Submit Form</button>
    </form>

    <div id="watch-example">
      <p>
        Ask a yes/no question:
        <input v-model="question" />
      </p>

      <p>{{ answer }}</p>
    </div>
  </div>
</template>

<script>
import _ from "lodash";
import axios from "axios";

export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      title: "Welcome!",
      seen: true,
      todos: ["HTML5", "CSS3", "Javascript", "Vue.js"],
      light: false,
      todoText: "",
      question: "",
      answer: "I cannot give you an answer until you ask a question"
    };
  },

  // All will re-calc when rerender the page
  methods: {
    toggleLight() {
      this.light = !this.light;
    },
    onSubmitForm() {
      this.todos = [...this.todos, this.todoText];

      this.todoText = "";
    },

    getAnswer() {
      if (this.question.indexOf("?") === -1) {
        this.answer = "Questions usually contain a question mark. ;-)";
        return;
      }
      const vm = this;
      this.answer = "Thinking...";
      axios
        .get("https://yesno.wtf/api")
        .then(function(response) {
          vm.answer = _.capitalize(response.data.answer);
        })
        .catch(function(error) {
          vm.answer = "Error! Could not reach the API. " + error;
        });
    }
  },

  // why dont use methods to caculate.
  // Because the computed only calc once and catched the data
  // It's will not re-calc when rerender the page.
  // It's will re-calc when the msg is changing.
  computed: {
    reverseWordsInMSG() {
      return this.msg
        .split(" ")
        .reverse()
        .join(" ");
    }
  },

  watch: {
    // Whenever question changes, this function will run.
    question: function(newQuestion, oldQuestion) {
      this.answer = "Waiting for you to strop typing...";
      this.debouncedGetAnswer();
    }
  },

  created() {
    // _.debounce is a function provided by lodash to limit how
    // often a particularly expensive operation can be run.
    // In this case, we want to limit how often we access
    // yesno.wtf/api, waiting until the user has completely
    // finished typing before making the ajax request. To learn
    // more about the _.debounce function (and its cousin
    // _.throttle), visit: https://lodash.com/docs#debounce
    this.debouncedGetAnswer = _.debounce(this.getAnswer, 500);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.todo-list {
  max-width: 300px;
  margin: auto;
  padding: 3rem;
}
</style>

<!-- Thêm xóa sửa , Xử dụng VueX -->
