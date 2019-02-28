<template lang="html">
<div id="bookingsList">
  <div class="bookings" v-for="booking in bookings">
    <h3>{{ booking.name }}</h3>
    <p>{{ booking.email }}</p>
    <p>
<label for="checked_in">Checked In</label>
<input v-on:change="setCheckedIn"
type="checkbox" name="checked_in" v-model="bookings.checked_in" />

    </p>


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
},
setCheckedIn: function() {
  fetch(`http://localhost:3000/api/bookings/${this.bookings._id}`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: "PUT",
    body: JSON.stringify(this.bookings)
  });
}
}
}
</script>






<style lang="css" scoped>
#bookingsList {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
}

h2 {
	padding: 0;
	margin: 0;
}

.bookings {
	width: 30%;
  font-weight: bolder;
	background: rgba(255, 255, 255, 0.30);
	margin-bottom: 10px;
	padding: 10px;
}

button {
	color: #fff;
	border: none;
	font-size: 18px;
	padding: 10px;
	margin-top: 10px;
	background: skyblue;
}
</style>
