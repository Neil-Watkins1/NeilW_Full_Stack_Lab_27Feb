<template lang="html">
  <div id="app">


  <bookings-form />
  <bookings-list :bookings="bookings" />
</div>
</template>


<script>

import bookingsList from './components/BookingsList';
import bookingsForm from './components/BookingsForm';
import { eventBus } from './main';

export default {
  name: 'app',
  data() {
    return {
      bookings: []
    }
  },
  components: {
    bookingsForm,
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
      const index = this.bookings.findIndex((bookings) =>
    { return booking._id === id
    });
    this.bookings.splice(index, 1);
    }
  }

};
</script>





<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

html {
  background: url('./assets/background.jpg') no-repeat;
  height: 140%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

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
