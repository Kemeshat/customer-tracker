// create custom records
let customers = [
  {name: "Toby Richards", email: "toby.richards@gmail.com", purchases: ["microwave", "Toaster"]},
  {name: "Kevin Reid", email: "kevinb@gmail.com", purchases: ["Airfryer", "Blender"]},
  {name: "Peter Knight", email: "peterkinight@gmail.com", purchases: ["Coffee Maker", "Kettle"]}
];
console.log (customers);

// Add a new customer to the array
customers.push({name: "Sarah Johnson", email: "sarah.johnson@gmail.com", purchases: ["washing machine", "dryer"]});
console.log (customers);


// Remove the first customer
customers.shift();
console.log (customers);

// Update the email of one existing customer
customers[0].email = "newemail@example.com";
console.log (customers);

//add a new purchase to one of the existing customers
customers[2].purchases.push("Air Conditioner");
console.log (customers);

customers.forEach(customer => { 
  console.log( `Name: ${customer.name}, Email: ${customer.email}, Purchases: ${customer.purchases.length}` );
});




