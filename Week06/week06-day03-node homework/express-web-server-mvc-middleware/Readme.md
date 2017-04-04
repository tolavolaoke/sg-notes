HOMEWORK:
write tests for `POST` to `/books`
- write code to implement `POST` to `/books` endpoint
- write UI for adding a new book for a user – just put it after the ordered list of books as a separate form


the creation of a new book will have two phases:
- create a new book (with the `user` set to the user id)
- update the `books` property of the user, ie:
    - find the user with the specified user id
    - add the new book’s id to the end of the `books` array
    - don’t forget to save the user!
