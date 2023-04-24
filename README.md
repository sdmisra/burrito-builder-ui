# Burrito Builder UI

Our company is building a prototype ticketing system for a local burrito shop. Unfortunately, the form dev on the project recently quit, leaving behind a broken app and little to no documentation. It's your job to save the project!

## Setup

* Fork this repo
* Clone down your forked repo and change into the cloned down directory
* Run `npm install` to install dependencies
* Run `npm start` to start your development server

Be sure to setup the [backend repo for Burrito Builder](https://github.com/turingschool-examples/burrito-builder-api) to be able to retrieve and save burrito orders.

## Iterations 

### Iteration 1

Right now the app has serveral bugs in it. Run the dev server and fix whatever bugs are causing the app to crash. 

### Iteration 2

Connect the front end to the backend so that when the app loads, all existing orders are fetched from the server.

### Iteration 3 

Add functionality to allow submission of the form when there is at least once ingredient, and a name added to the order. If one of these two things is missing, you should not be able to submit an order. If the order is submitted, a POST request should be made to the server.

New orders should only be displayed on the page IF the POST request is successful. On refresh, the new order should persist on the page. (You shouldn't _need_ to refresh the page to see the new order, though.)

### Iteration 4

Identify and test 3 user flows.
Leave your identified flows as comments above the test code.
Be sure to consider the goal of the user and the content they expect to see when thinking about the assertions you need to make.
You are expected to intercept and stub any existing network requests

Here are some things to consider
- What should the user see upon page load?
- What goal of the user on this page? 
- How does the user interact with this page?

## Extensions (only to be attempted if all prior iterations are complete)

* Add delete functionality for an order (the server-side endpoint exists already) so that when the order is ready it can be removed from the ticketing system.
* Test the deleting functionality.
* Right now, an order can contain duplicates of ingredients. Bring some logic into the form so that an order can contain only two of the same ingredient.
* Add a total cost for the order. Add prices to each ingredient and total each order based on the ingredient cost. Display this for each order. The backend should be able to handle any extra data beyond `name` and `ingredients`.
* Style the form - it's hideous, and the team is sad about it.
* Style the container so that orders are nice and tidy, especially when ingredient amounts vary between orders.

## User Flows for Testing:


 A user is curious as to what this page is (their friends have been raving about it), so they navigate to it simply to read the contents. 


 A user wants a burrito, and knows what they'd like, so they proceed to make an order with their specific demands and submit it.

 A user is worried that their order did not go through - they revisit the page simply to see their entry appear. --- 
 ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
INCOMPLETE PATH AS OF TURN IN, what I would do here is set up a fourth stub, that mocks up a version of fakeData that would have one more entry in it that simulates the user flow from the submission test. That way, I can pretend that the submission went through successfully without actually affecting my  live API endpoints





