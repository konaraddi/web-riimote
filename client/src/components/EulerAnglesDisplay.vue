<template>
<p>
  X: {{eulerAngles.x}}°
  <br>
  Y: {{eulerAngles.y}}°
  <br>
  Z: {{eulerAngles.z}}°
</p>
</template>

<script>
export default {
  name: 'EulerAnglesDisplay',
  props: {
    eulerAngles: {
      type: Object,
      description: "Contains the x y z euler angles"
    }
  }
}
</script>
