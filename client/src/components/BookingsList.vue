<template lang="html">
<div id="bookingsList">
  <div class="bookings" v-for="booking in bookings">
    <h2>{{ booking.name }}</h2>
    <h3>{{ booking.email }}</h3>
    <p>{{ booking.confirmed }}</p>

    <button v-on:click="deleteBooking(booking._id)">Remove Booking</button>

  </div>

</div>
</template>

<script>

import { eventBus } from '../main.js'

export default {
  name: "bookingsList",
  props: ["bookings"],

methods: {
deleteBooking(id) {
  fetch('http://localhost:3000/api/bookings/' + id, {
    method: "DELETE"
  }).then(() => eventBus.$emit('booking-deleted', id))
}
}
}
</script>





<style lang="css" scoped>
</style>
