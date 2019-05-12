<template>
  <div id="app">
    <router-view/>
    <p id="meh">¯\_(ツ)_/¯ Made by Suyash</p>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#meh{
  position: relative;
  top: 20px;
  text-align: center;
  width: 100%
}
</style>
