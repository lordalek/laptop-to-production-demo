<template>
  <div id="app">
    <div class="row">
     <div class="col-md-6">
    <img class="img-fluid" src="./assets/lunch-big.jpg">
    </div>
     <div class="col-md-6">
    <h2>Today's lunch {{ today }}</h2>
    <todays-lunch
    :lunch="lunches[0]"
    @liked="likedIt"
    @hated="hatedIt"
    />
    </div>
    </div>
    <h2>This week's menu</h2>
    <ol>
      <lunch-item
        v-for="lunch in lunches"
        :lunch="lunch"
        :key="lunch.id"
      />
    </ol>
  </div>
</template>

<script>
import LunchItem from './lunch-item.vue'
import TodaysLunch from './todays-lunch.vue'

export default {
  name: "app",
  data() {
    return {
      today: new Date().toLocaleDateString("nb-NO"),
      lunches: [{ id: 1, text: "pasta",description:"Pasta is a staple food of traditional Italian cuisine, with the first reference dating to 1154 in Sicily.", allergens: ['gluten'], day: "monday" }]
    };
  },
  components:{
    'lunch-item': LunchItem,
    'todays-lunch': TodaysLunch
  },

  methods: {
    likedIt(lunchId){
      console.log("liked it: " + lunchId);
    },
    hatedIt(lunchId){
      console.log("hated it: " + lunchId);
    }
  }
};
</script>

<style>

</style>
