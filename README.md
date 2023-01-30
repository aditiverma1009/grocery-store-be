# Grocery App

### Problem statement: Create an online grocery shopping portal

### Day 1:

### Screen 1:

User opens the app for the first time then populate the initial inventory list in your db from https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/inventory. If db is pre-populated, do not populate again.
Create UI as given in pictures to enable the user to select products from different categories
User can select 1 or more products of each item. Max selection can be available quantity for product in inventory.
Plus and Minus will update the quantity in the cart. If 0 ensure item is removed from cart. Initial default selection for all items is 0
In case product available quantity is 0, show sold out card for the item
Items in each category should be sorted by availability. If sold out, they should be at the end of the list
Number of items in cart is to be total of all items including quantity of each item. If 2 apples and 1 orange is ordered = cart shows 3 as total count

### Tasks for today -

- Setup repository for both FE and BE and share on group
- Create appropriate API and screen
- Use ORM of choice
- Write tests for FE and BE
- Deploy BE and FE on AWS using free tier
- Prepare swagger documentation or postman collection
