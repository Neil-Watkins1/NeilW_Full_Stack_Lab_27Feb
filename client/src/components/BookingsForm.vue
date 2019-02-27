<template lang="html">
  <form v-on:submit.prevent="addBooking" id="booking-form" v-model="newBooking">
<h3>Add a Booking</h3>
<div class="formWrap">
  <label for="name" >Name:</label>
  <input type="text" id="name" v-model="newBooking.name" required/>
</div>
<div class="formWrap">
  <label for="email">Email:</label>
  <input type="text" id="email" v-model="newBooking.email" required/>
  </div>
  <div class="formWrap">
    <label for="checked_in">Checked In?</label>
    <input type="checkbox" name="checked_in" id ="checked_in" v-model="newBooking.checked_in">

  </div>
  <input type="submit" value="save" id="save"/>

  </form>
</template>

<script>
import { eventBus } from '../main';
export default {
  name: "BookingsForm",
  data(){
    return {
      newBooking: {
        name: "",
        email: "",
        checked_in: false
      }
    }
  },
methods: {
  addBooking(){
    fetch("http://localhost:3000/api/bookings", {
      method: "POST",
      body: JSON.stringify(this.newBooking),
      headers: {'Content-Type': 'application/json'}
    })
    .then (res =>res.json())
    .then (data => eventBus.$emit('booking-added', data))
  }
}

}
</script>

<style lang="css" scoped>
h2 {
	margin: 10px 0;
	padding: 0;
}

form {
	width: 75%;
	margin: 0 auto;
	background: rgba(255, 255, 255, 0.3);
	padding: 10px;
	margin-bottom: 10px;
}

label {
	min-width: 50px;
	display: inline;
}

.formWrap {
	margin-bottom: 10px;
}
</style>
