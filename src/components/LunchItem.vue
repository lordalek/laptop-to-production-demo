<template>
<li>{{lunch.day}} - {{ lunch.name }}</li>
</template>

<script>
export default {
  name: "lunch-item",
  props: {
    lunch: {
      type: Object,
      required: true
    }
  }
};
</script>