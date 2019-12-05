<template>
  <div id="app">
    <!-- The content of the search bar below. Note, this div has the id of app -->
    Hello Cameron.
    <!-- when "termChange occurs (see SearchBar.vue), execute method onTermChange() which we will define below" -->
    <SearchBar v-on:termChange="onTermChange"> </SearchBar>
  </div>
</template>

<script>
import SearchBar from './components/SearchBar';
// Importing Bryson's credentials for accessing the YouTube API
const API_KEY = 'AIzaSyBNGRYwtFf6uKEAQMvnBmzVDv7gA2lbglY';
export default {
  name: 'App',
  components: {
    // These are the components our app uses!
    SearchBar,
  },
  methods: {
    onTermChange(searchTerm) {
      console.log(searchTerm);
    }
  }
}
</script>

// Styling for our application below.
<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: right;
  color: blue;
  margin-top: 60px;
}
</style>
