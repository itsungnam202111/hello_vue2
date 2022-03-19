<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/json">사자성어</router-link> |
    <router-link to="/chunja">천자문</router-link> |
    <router-link to="/icon">부트스트랩</router-link> 
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 10px; text-align: right;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
