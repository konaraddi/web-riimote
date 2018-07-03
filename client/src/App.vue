<template>
  <section id="app" class="section">
    <div class="nav">
      <router-link to="/">DisplayView</router-link> |
      <router-link to="/controller-view">ControllerView</router-link>
    </div>
    <keep-alive>
      <router-view/>
    </keep-alive>
  </section>
</template>

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

@import url("https://cdnjs.cloudflare.com/ajax/libs/IBM-type/0.5.4/css/ibm-type.min.css");
$family-primary: "IBM Plex Sans", sans-serif;

// Import Bulma and Buefy styles
@import "~bulma";
@import "~buefy/src/scss/buefy";

html {
  padding-top: 4rem;
  @extend .has-background-light;

  @include tablet {
    width: 760px;
    margin: auto;
  }
}

a {
  font-weight: bold;
  padding-bottom: 3px;
  border-bottom: 3px dotted $primary;
  &:hover {
    border-bottom: 3px solid $primary;
  }
}

.nav {
  padding-bottom: 4rem;
}
</style>
