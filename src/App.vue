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
    <form class="form" v-on:submit="createLunch" action="#">
      <div class="form-group">
    <label for="name">Name</label>
    <input v-model="newLunch.name" type="text" class="form-control" id="name" placeholder="Pasta Bolognese">
  </div>
  <button type="submit">Create Lunch</button>
    </form>
  </div>
</template>

<script>
import LunchItem from "./components/LunchItem";
import TodaysLunch from "./components/TodaysLunch";

export default {
  name: "app",
  data() {
    return {
      newLunch: {},
      today: new Date().toLocaleDateString("nb-NO"),
      lunches: [
        {
          id: 1,
          name: "pasta",
          description:
            "Pasta is a staple food of traditional Italian cuisine, with the first reference dating to 1154 in Sicily.",
          allergens: ["gluten"],
          day: "monday"
        }
      ]
    };
  },
  components: {
    "lunch-item": LunchItem,
    "todays-lunch": TodaysLunch
  },
  created: function() {
    console.log("getting data from server");
    this.$http.get(
      "/api/lunches",
      successResponse => {
        this.lunches = successResponse.body;
      },
      errorResponse => {
        console.error(errorResponse);
      }
    );
  },
  methods: {
    createLunch(event) {
      console.log("creating lunch");
      console.log(this.newLunch);
      this.lunches.push(this.newLunch);
      this.newLunch = {};
      // this.$http.post(
      //   "/api/lunches",
      //   successResponse => {
      //     this.$http.get(
      //       "/api/lunches",
      //       successResponse => {
      //         this.lunches = successResponse.body;
      //       },
      //       errorResponse => {
      //         console.error(errorResponse);
      //       }
      //     );
      //   },
      //   errorResponse => {
      //     console.error(errorResponse);
      //   }
      // );

      event.preventDefault();
    },
    likedIt(lunchId) {
      console.log("liked it: " + lunchId);
      this.$http.post("/api/lunches/" + lunchId + "/rating").then(
        successResponse => {
          console.log(successResponse.status);
        },
        errorResponse => {
          console.error(errorResponse);
        }
      );
    },
    hatedIt(lunchId) {
      console.log("hated it: " + lunchId);
      this.$http.delete("/api/lunches/" + lunchId + "/rating").then(
        successResponse => {
          console.log(successResponse.status);
        },
        errorResponse => {
          console.error(errorResponse);
        }
      );
    }
  }
};
</script>

<style>

</style>
