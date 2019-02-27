use hotel;
db.dropDatabase();

db.bookings.insertMany([
  {
    name: "Brian Brown",
    email: "Brian.brown@talktalk.com",
    checked_in: true
  },
  {
    name: "Brenda Black",
    email: "Brenda.black@talktalk.com",
    checked_in: true
  },
  {
    name: "Walter White",
    email: "Walter.white@talktalk.com",
    checked_in: false
  }
]);
