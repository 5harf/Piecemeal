// # Table of Contents

// ## Front-End

// #### [allDishes.controller.js](./allDishes.controller.html)
// List of all dishes - controller
// * Add, share, and remove dishes.

// #### [allDishes.factory.js](./allDishes.factory.html)
// List of all dishes - factory
// * Calculate the running total in the add Dish modal.

// #### [app.factory.js](./app.factory.html)
// App-wide factory and helper methods
// * Store data and shared functionality (updating sessions, dishes, logging out, etc.) for quick access by controllers and initialize socket event listeners.

// #### [app.module.js](./app.module.html)
// App module initializer
// * Initialize Piecemeal application

// #### [app.routes.js](./app.routes.html)
// App router
// * Route sub and nested views.

// #### [dashboard.controller.js](./dashboard.controller.html)
// Venmo authentication dashboard
// * Create and load bill after Venmo oAuth. Later, it will be built into an actual dashboard.

// #### [guestBill.controller.js](./guestBill.controller.html)
// Guest bill - controller
// * Reflect the dishes a user has added or shared and the subtotal. When host sends final bill with tip and tax, the user can choose to pay with Venmo or Cash.

// #### [home.controller.js](./home.controller.html)
// Home page - controller
// * Check if user is logged into Venmo, and if so, show logged out button.

// #### [home.factory.js](./home.factory.html)
// Home page - factory
// * Check if bill already exists or not and creates new bill.

// #### [hostBill.controller.js](./hostBill.controller.html)
// Host bill - controller
// * Allow host to see all dishes, enter tip and tax, and send final bill.

// #### [socket.module.js](./socket.module.html)
// Socket API
// * Custom SocketIO API integrated with Angular's digest cycle in a factory


// ## Back-End

// #### [server.js](./server.html)
// Main server file.

// #### [sockets.js](./sockets.html)
// Socket event handler

// #### [utility.js](./utility.html)
// Database helper functions

// #### [roomNames.js](./roomNames.html)
// List of room names

// #### [eventRouter.js](./eventRouter.html)
// Express router

// #### [oauthRouter.js](./oauthRouter.html)
// Express router for Auth

// #### [middleware.js](./middleware.html)
// List of middleware
