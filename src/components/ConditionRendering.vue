<template>
  <div class="condition-rendering-wrap">
    <h3 v-if="hello">Hello</h3>
    <h3 v-else>Oh, NO</h3>

    <div v-if="Math.random() > 0.5">
      Xin chao
    </div>
    <div v-else>
      No Greeting!
    </div>

    <!-- Auto add display: none = false; -->
    <div v-show="true">
      V-SHOW
    </div>

    <div>
      <label v-if="type">
        <p>Username</p>
        <!-- If have no key, the value of user and email will be same when toggleType -->
        <!-- If have the key, the value of user and email will different -->
        <input placeholder="Username" key="username-input" />
      </label>

      <label v-else>
        <p>Email</p>
        <input placeholder="Email" key="email-input" />
      </label>

      <button type="button" v-on:click="toggleType">Toggle Type</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ConditionRendering",
  components: {},
  data() {
    return {
      hello: false,
      type: false
    };
  },
  methods: {
    toggleType() {
      this.type = !this.type;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
