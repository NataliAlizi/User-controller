# MOVEO project

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Visit my WebSite:

https://moveoprojectnatali.herokuapp.com/

### `Project Description:`

Using React.js and the RandomUser API I was able to display a Table of 100 users allowing to filter and sort them based on the properties:Firdt Name,Last Name, Email, and Age.

The table has pagination control (10 pages) and every page contains 10 rows.

By clicking on a user image or name it opens the "User Details” page and shows the data per user, and a link to send the user a new email.

## `Components List:`

## `App.js`

Getting data from the server and passing it to the components according to the current Route.


### `home page:`

Filters the original list according to the user's wishes and cuts the list so that there will be 10 users on each page`

### `User:`
A child component for the UsersList table, showing each and every user.
### `UserList:`
A component, mapping all the users in the table and containing the following components: SearchAndFilter, PageSelector.

### `UserData:`
Input (props):
1.A list containing users.

serDetails.js
A component, showing the data of each user.

Input (props):
A list containing Users.
The user name (as a query parameter).

### `SearchBox:`
Responsible for the box into which the user enters the details he wants to search for

### `Tabs:`
Responsible for the Tabs Within each Tab there is some information about the user

## `Tech Stack:`
1.HTML
2.CSS
3.REACT
4.RandonUser API
5.mui

