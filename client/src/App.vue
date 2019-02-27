<template lang="html">
  <bookings-list :bookings="bookings" />

</template>


<script>

import bookingsList from './components/BookingsList';
import { eventBus } from './main';

export default {
  name: 'app',
  data() {
    return {
      bookings: []
    }
  },
  components: {
    bookingsList
  },

mounted(){
  this.fetchData();

  eventBus.$on('booking-added', booking =>
this.bookings.push(booking))
eventBus.$on('booking-deleted', id => this.deleteBooking(id));

},


  methods: {
    fetchData(){
      fetch("http://localhost:3000/api/bookings")
      .then(res => res.json())
      .then(bookings => this.bookings = bookings);
    },
    deleteBooking(id){
      const index = this.bookings.findIndex((booking) =>
    { return booking._id === id
    });
    this.bookings.splice(index, 1);
    }
  }

};
</script>



<style lang="css" scoped>
</style>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
