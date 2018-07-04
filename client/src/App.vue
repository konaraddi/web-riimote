<!--
Users on a mobile device will be redirected to the controller view 
because a mobile device should be used as the controller.
Otherwise, by default, the user will see the view for the main display.
-->
<template>
<div id="app">
  <github-corners repo="konaraddio/web-riimotes"></github-corners>
  <section class="section">
    <!--
    <div class="nav">
      <router-link to="/">MainDisplayView</router-link> |
      <router-link to="/controller-view">ControllerView</router-link>
    </div>
    -->
    <keep-alive>
      <router-view/>
    </keep-alive>
  </section>
</div>
</template>

<script>
export default {
  name: "App",
  mounted() {
    // get user's screen's width
    // https://stackoverflow.com/questions/3437786/get-the-size-of-the-screen-current-web-page-and-browser-window

    const w = window,
      d = document,
      e = d.documentElement,
      g = d.getElementsByTagName("body")[0];
    const screenWidth = w.innerWidth || e.clientWidth || g.clientWidth;

    // check if user is on mobile using screen width and user agent string
    const userIsOnMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      ) && screenWidth < 768; // screenWidth is in pixels

    // if user is on mobile, then redirect them to the controller view
    if (userIsOnMobile) {
      this.$router.push("/controller-view");
    }
  }
};
</script>


<style lang="scss">
// Import Bulma's core
@import "~bulma/sass/utilities/_all";
// Set your colors
$primary: #333;
$primary-invert: findColorInvert($primary);
// Setup $colors to use as bulma classes (e.g. 'is-twitter')
$colors: (
  "white": ($white, $black),
  "black": ($black, $white),
  "light": ($light, $light-invert),
  "dark": ($dark, $dark-invert),
  "primary": ($primary, $primary-invert),
  "info": ($info, $info-invert),
  "success": ($success, $success-invert),
  "warning": ($warning, $warning-invert),
  "danger": ($danger, $danger-invert)
);
// Links
$link: $primary;
$link-invert: $primary-invert;
$link-focus-border: $primary;

$body-line-height: 1.6;

@import url('https://rsms.me/inter/inter-ui.css');
$family-primary: "Inter UI", sans-serif;

// Import Bulma and Buefy styles
@import "~bulma";
@import "~buefy/src/scss/buefy";

html {
  @extend .has-background-light;
}

a {
  font-weight: bold;
  padding-bottom: 3px;
  border-bottom: 3px dotted $primary;
  &:hover {
    border-bottom: 3px solid $primary;
  }
}
</style>
