const express = require("express")
const app = express()
const cors = require("cors");

const PORT = process.env.PORT || 8000

// Enable CORS for React client on port 3000
app.use(cors({ origin: "http://localhost:3000" }));

// placeholder home page
app.get("/", (req, res) => {
  return res.json({
    title: "Welcome to Delizioso!",
    subtitle: "Experience the Best of Italian Cuisine",
    description: "We are committed to providing you with the freshest ingredients and the most delicious recipes. Explore our menu and place your order today!",
  })
})

// Restaurant Website

// Order Status Inquiry Form
app.post("/orderStatus", (req, res) => {
  // this post request will accept an order id number and return the status of that order.
  return res.send("Order#" + req.body + " is in progress.")
})

// new order
app.post("/newOrder", (req, res) => {
  // this post request will accept form data with a list of food items and create an appropriate entry
  // in the database, creating an order ID and setting the status to "READY_FOR_DELIVERY"

  //Hey this is Tyler, how would ordering work? I was thinking a box where you input the amount you want for an item
  //beside the item like "Spaghetti [3]" and it will take 3 orders of Spaghetti
  return res.send("New order received!")
})

// get menu
app.get("/menu", (req, res) => {
  // this will eventually respond with a JSON object with the names and prices of our menu items
  const menuItems = [
    { name: "Spaghetti", price: "$5.99" },
    { name: "Lasagna", price: "$7.99" },
    { name: "Pizza", price: "$6.99" },
    // Add more items as needed
  ];
  return res.json(menuItems);
})

// Order Processing Website

// current orders
app.get("/activeOrders", (req, res) => {
  // this will eventually respond with a JSON Object containing all orders in the database with the "Active" status
  return res.send("No active orders.")
})

// order history
app.get("/allOrders", (req, res) => {
  // this will eventually respond with a JSON Object containing all orders in the database
  return res.send("There are no orders!")
})

// change order
app.post("/modifyOrder", (req, res) => {
  // this allow the user to submit a form with the id of an order and the contents of the fields they want changed
  return res.send("Order modified!")
})

// Delivery Driver Website

// register a new driver
app.post("/register", (req, res) => {
  // this allow the user to submit a form with thier username and password to create a new driver profile
  return res.send("New user registered!")
})

// login
app.post("/login", (req, res) => {
  // this allow the user to submit a form with thier login credentials
  // and reply with either "Access granted" or "Access denied" depending on if profile is in the system
  // Then the frontend can redirect them accordingly
  return res.send("Access granted!")
})

// drivers see orders
app.get("/ordersForDelivery", (req, res) => {
// this will eventually respond with a JSON Object containing all orders in the database with status = READY_FOR_DELIVERY
  return res.send("No orders!")
})

// drivers see orders
app.post("/myOrders", (req, res) => {
  // this will accept the driver's ID will eventually respond with a JSON Object containing all orders in the database with status = IN_TRANSIT
  // and a driver id in the "driver" field corresponding to the post request
    return res.send("No orders!")
  })

// delivery claiming post request
app.post("/claimOrder", (req, res) => {
  // this will accept a driver's driver id and an order id, then update the status of the order to IN TRANSIT
  // in the database (checking first if it is READY_FOR_DELIVERY) and add their driver ID to the "driver" field
    return res.send("Order claimed!")
  })

  // delivery fulfillment post request
app.post("/fulfilledOrder", (req, res) => {
  // this will accept a driver's driver id, an order id, and a picture. then update the status of the order to DELIVERED
  // in the database (checking first if it is IN TRANSIT and assigned to that driver) and save the photo
  // with the photo's name being the order ID
    return res.send("Order delivered! Thank you!")
  })

const onServerStart = () => {
  console.log(`The server started running at http://localhost:${PORT}`);
  console.log(`Press Ctrl+c to stop`);
}
app.listen(PORT, onServerStart)
