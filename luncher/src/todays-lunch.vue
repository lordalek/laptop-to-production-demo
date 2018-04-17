<template>
<div>
    <p>{{lunch.text}}</p>
    <div class="btn-group">
        <button class="btn btn-success" @click="$emit('liked', lunch.id)">I liked it</button>
        <button class="btn btn-danger" @click="$emit('hated', lunch.id)">I hated it</button>
        </div>
</div>
</template>

<script>
export default {
  name: "todays-lunch",
  props: {
    lunch: {
      type: Object,
      required: true
    }
  }
};
</script>