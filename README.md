# Burrito Builder UI

Our company is building a prototype ticketing system for a local burrito shop. Unfortunately, the form dev on the project recently quit, leaving behind a broken app and little to no documentation. It's your job to save the project!

### Iteration 1

Right now the app has serveral bugs in it. Run the dev server and fix whatever bugs are causing the app to crash. 

### Iteration 2

Connect the front end to the backend so that when the app loads, all existing orders are fetched from the server.

### Iteration 3 

Add functionality to allow submission of the form when there is at least once ingredient, and a name added to the order. If one of these two things is missing, you should not be able to submit an order. If the order is submitted, a POST request should be made to the server.

New orders should only be displayed on the page IF the POST request is successful. On refresh, the new order should persist on the page. (You shouldn't _need_ to refresh the page to see the new order, though.)

### Iteration 4

Identify and test 3 user flows.

## User Flows for Testing:


 A user is curious as to what this page is (their friends have been raving about it), so they navigate to it simply to read the contents. 


 A user wants a burrito, and knows what they'd like, so they proceed to make an order with their specific demands and submit it.

 A user is worried that their order did not go through - they revisit the page simply to see their entry appear. --- 
 ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
INCOMPLETE PATH AS OF TURN IN, what I would do here is set up a fourth stub, that mocks up a version of fakeData that would have one more entry in it that simulates the user flow from the submission test. That way, I can pretend that the submission went through successfully without actually affecting my  live API endpoints





