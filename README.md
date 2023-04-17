
# TGH TODO LIST APIS - NODEJS

It is an web app to keep track of all your todos made using NODEJS, Express, JWT, Bcrypt, MongoDb, ejs.




## Demo

Link to demo: 
### https://todolist-92ov.onrender.com




## API Reference

####  Login
```http
  Get /
```

| Description                       |
| :-------------------------------- |
| **Required**. Render login page|

#### Get all Todos

```http
  GET /home
```

|       Description                |
|  :------------------------- |
|  **Required**. Get all Todos & count of completed, pending, cancelled Todos in sorted priority wise|

####  Add Todos

```http
  Post /addtodos
```

| Description                       |
| :-------------------------------- |
| **Required**. Create new Todo and save to Database |

####  Delete Todo
```http
  Delete /todo/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Delete Todo with given id|

####  Complete Todo
```http
  Get /todo/complete/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Mark completed with given id|

####  Cancel Todo
```http
  Get /todo/cancel/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Mark cancelled with given id|

####  Registration
```http
  Get /registration
```

| Description                       |
| :-------------------------------- |
| **Required**. Render register page|

 ####  Register User
```http
  Post /registration
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| User Details      | `Object` | **Required**. Register User and save to Database|

####  Login User
```http
  Post /login
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| Email & password      | `Object` | **Required**. Login user & create token |

####  Login User
```http
  Post /login
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| id      | `String` | **Required**. Logout User |