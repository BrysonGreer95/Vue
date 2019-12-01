<template>
  <div id="app">
    Hello Cameron.

    <SearchBar />
  </div>
</template>

<script>
import SearchBar from './components/SearchBar';
export default {
  name: 'App',
  components: {
    SearchBar,
  },
}
</script>
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
