# Map and Set

These exercises demonstrate how JavaScript `Map` and `Set` collections store, update, search, and remove values.

## Task 1: User Roles with `Map`

Create a `Map` where each user ID is a key and the user's role is the value.

Requirements:

- Get the role of user `307`.
- Check whether user `500` exists.
- Change user `205`'s role to `moderator`.
- Delete user `412`.
- Print the number of users.
- Iterate over the remaining entries.

Expected iteration output:

```text
101 -> admin
205 -> moderator
307 -> moderator
```

Solution file: [`task1.js`](./task1.js)

## Task 2: Word Counter with `Map`

Count how many times each word appears in the provided array, using a `Map` to store the results.

Expected result:

```text
apple -> 3
banana -> 2
orange -> 2
kiwi -> 1
```

Solution file: [`task2.js`](./task2.js)

## Task 3: Unique IDs with `Set`

Use a `Set` to remove duplicate user IDs and manage the unique collection.

Requirements:

- Get only the unique IDs.
- Find the number of unique users.
- Check whether `307` exists.
- Check whether `999` exists.
- Add `600`.
- Delete `205`.

Solution file: [`task3.js`](./task3.js)

These files are educational examples of collection operations such as `get`, `set`, `has`, `delete`, `size`, `add`, and iteration.
