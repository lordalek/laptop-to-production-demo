<template>
<div>
    <p>{{lunch.text}}</p>
    <p>{{lunch.description}} </p>
    <h4>Allergens</h4>
    <ul v-if="lunch.allergens && lunch.allergens.length">
        <li v-for="(allergen, index) in lunch.allergens">
            {{allergen}}
        </li> 
    </ul>    
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