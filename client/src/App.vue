<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">DisplayView</router-link> |
      <router-link to="/controller-view">ControllerView</router-link>
    </div>
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<style lang="scss">
</style>
