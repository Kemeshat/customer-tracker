// create custom records
let customers = [
  {
    name: "Kevin Bates",
    email: "kevinb@gmail.com",
    purchases: ["Airfryer", "Blender"]
  },
  {
    name: "Toby Richards",
    email: "toby.richards@gmail.com",
    purchases: ["microwave", "Toaster" ]
  },
  {
    name: "Peter Kinight",
    email: "peterkinight@gmail.com",
    purchases: ["Coffee Maker", "Kettle"]
  }
];
console.log (customers);

// Add a new customer to the array
customers.push({
  name: "Sarah Johnson",
  email: "sarah.johnson@gmail.com",
  purchases: ["washing machine", "dryer"]
});
console.log (customers);

// Remove the first customer
customers.shift();
console.log (customers);

// Update the email of one existing customer
customers[0].email = "toby.richards.new@gmail.com";
console.log (customers);

