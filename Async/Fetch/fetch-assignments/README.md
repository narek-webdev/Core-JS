# Fetch Assignments

These exercises practice fetching data from public APIs and using array methods such as `filter`, `find`, `reduce`, `sort`, and `map`.

## Included Files

- [users.js](users.js) - Assignment 1: retrieve and search users
- [random-people.js](random-people.js) - Assignment 2: filter people by age
- [store-products.js](store-products.js) - Assignment 3: analyze store products
- [user-posts.js](user-posts.js) - Assignment 4: retrieve posts for one user
- [user-todos.js](user-todos.js) - Assignment 5: analyze completed and incomplete tasks

## Assignments

### Assignment 1: All Users

API: [JSONPlaceholder Users](https://jsonplaceholder.typicode.com/users)

- Print only the names of all users.
- Print only the emails of all users.
- Find the user whose `username === "Bret"` and print the complete user object.

### Assignment 2: Random People by Age

API: [Random User API](https://randomuser.me/api/?results=20)

Fetch 20 random people. Each person has an age in `dob.age`.

- Print only people older than 18.
- Count how many people are older than 30.
- Print the names of all people younger than 25.

### Assignment 3: Store Products by Price

API: [Fake Store API Products](https://fakestoreapi.com/products)

- Print the names of products that cost less than `$50`.
- Find the most expensive product using `reduce` or sorting.
- Print only products in the `electronics` category.
- Calculate the average price of all products.

### Assignment 4: Posts by One User

API: [JSONPlaceholder User 2 Posts](https://jsonplaceholder.typicode.com/posts?userId=2)

- Print the number of posts returned for the user.
- Print only the post titles.
- Find the post with `id === 15`. Print `"not found"` when it does not exist.

### Assignment 5: Combined Todo Analysis

API: [JSONPlaceholder User 3 Todos](https://jsonplaceholder.typicode.com/todos?userId=3)

- Print only completed tasks where `completed === true`.
- Print only incomplete tasks.
- Print the total task count and completed task count in this format:

```text
Completed 7 of 20
```

## Running the Exercises

Node.js 18 or newer is recommended because it provides a built-in `fetch` implementation.

Run an exercise from the repository root:

```bash
node Async/Fetch/fetch-assignments/users.js
node Async/Fetch/fetch-assignments/random-people.js
node Async/Fetch/fetch-assignments/store-products.js
node Async/Fetch/fetch-assignments/user-posts.js
node Async/Fetch/fetch-assignments/user-todos.js
```

The exercises make live requests, so an internet connection is required.
