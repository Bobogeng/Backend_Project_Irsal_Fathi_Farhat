# QuizApp
![Javascript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=white&style=flat) ![NodeJS](https://img.shields.io/badge/NodeJS-5FA04E?logo=nodedotjs&logoColor=white&style=flat) ![ExpressJS](https://img.shields.io/badge/ExpressJS-000000?logo=express&logoColor=white&style=flat) ![MySQL](https://img.shields.io/badge/MySQL-4479A1?logo=mysql&logoColor=white&style=flat) ![NPM](https://img.shields.io/badge/NPM-CB3837?logo=npm&logoColor=white&style=flat) ![NPM](https://img.shields.io/badge/Git-F05032?logo=git&logoColor=white&style=flat)

I created this **QuizApp** project to fulfill the Backend Project task for the [Sanber Foundation Bootcamp](https://acodemy.id/) - `Fullstack Javascript Developer` program. This project is a `server-side application` built with `NodeJS`, `ExpressJS` and `MySQL`, designed to create, manage, and take quizzes.

## Deployed Links

#### Description:

I've utilized the powerful combination of Google Cloud Platform (GCP) for hosting my SQL Server database and Vercel for deploying my ExpressJS application. With GCP's robust infrastructure and scalability, managing the SQL Server database becomes seamless, ensuring reliable data storage and retrieval. Vercel, on the other hand, provides a hassle-free deployment environment for my ExpressJS backend, offering fast and efficient serverless functions.

#### Vercel Link:

[https://quiz-app-sand-tau.vercel.app](https://quiz-app-sand-tau.vercel.app)

### Home Routes

#### Description:

Routes related to the home page.

| Endpoint | Method | Description |
| --- | --- | --- |
| `/` | GET | Get welcome message. |
| `/author` | GET | Get author details. |

---

### Authentication Routes

#### Description:

Routes related to user authentication.

| Endpoint | Method | Description |
| --- | --- | --- |
| `/auth/login` | POST | User login. |
| `/auth/register` | POST | User registration. |

**Status Headers:**

- 200 OK: Successful authentication.
- 400 Bad Request: Invalid request or missing parameters.
- 403 Forbidden: Unauthorized access.
- 404 Not Found: Username not found.
- 500 Internal Server Error: Server error.
    

---

### User Routes

#### Description:

Routes related to user management.

| Endpoint | Method | Description | Allowed Roles |
| --- | --- | --- | --- |
| `/user/` | GET | Get all users. | Superadmin |
| `/user/:id` | GET | Get user by ID. | Superadmin |
| `/user/:id` | PUT | Update user by ID. | Admin, Superadmin |
| `/user/:id` | DELETE | Delete user by ID. | Admin, Superadmin |

**Status Headers:**

- 200 OK: Successful operation.
- 400 Bad Request: Invalid request or missing parameters.
- 404 Not Found: User not found.
- 500 Internal Server Error: Server error.
    

---

### Quiz Routes

#### Description:

Routes related to quizzes.

| Endpoint | Method | Description | Allowed Roles |
| --- | --- | --- | --- |
| `/quiz/` | POST | Create a new quiz. | Admin, Superadmin |
| `/quiz/` | GET | Get all quizzes. | Admin, Superadmin, User |
| `/quiz/:id` | GET | Get quiz by ID. | Admin, Superadmin |
| `/quiz/:id` | PUT | Update quiz by ID. | Admin, Superadmin |
| `/quiz/:id` | DELETE | Delete quiz by ID. | Admin, Superadmin |

**Status Headers:**

- 200 OK: Successful operation.
- 400 Bad Request: Invalid request or missing parameters.
- 404 Not Found: Quiz / Foreign Key not found.
- 500 Internal Server Error: Server error.
    

---

### Quiz Category Routes

#### Description:

Routes related to quiz categories.

| Endpoint | Method | Description | Allowed Roles |
| --- | --- | --- | --- |
| `/quiz-category/` | POST | Create a new category. | Admin, Superadmin |
| `/quiz-category/` | GET | Get all categories. | Admin, Superadmin |
| `/quiz-category/:id` | GET | Get category by ID. | Admin, Superadmin |
| `/quiz-category/:id` | PUT | Update category by ID. | Admin, Superadmin |
| `/quiz-category/:id` | DELETE | Delete category by ID. | Admin, Superadmin |

**Status Headers:**

- 200 OK: Successful operation.
- 400 Bad Request: Invalid request or missing parameters.
- 404 Not Found: Quiz category not found.
- 500 Internal Server Error: Server error.
    

---

### Quiz Question Routes

#### Description:

Routes related to quiz questions.

| Endpoint | Method | Description | Allowed Roles |
| --- | --- | --- | --- |
| `/quiz-question/` | POST | Create a new question. | Admin, Superadmin |
| `/quiz-question/` | GET | Get all questions. | Admin, Superadmin |
| `/quiz-question/:id` | GET | Get question by ID. | Admin, Superadmin |
| `/quiz-question/:id` | PUT | Update question by ID. | Admin, Superadmin |
| `/quiz-question/:id` | DELETE | Delete question by ID. | Admin, Superadmin |

**Status Headers:**

- 200 OK: Successful operation.
- 400 Bad Request: Invalid request or missing parameters.
- 404 Not Found: Quiz question / Foreign Key not found.
- 500 Internal Server Error: Server error.
    

---

### Quiz Answer Routes

#### Description:

Routes related to quiz answers.

| Endpoint | Method | Description | Allowed Roles |
| --- | --- | --- | --- |
| `/quiz-answer/` | POST | Create a new answer. | Admin, Superadmin |
| `/quiz-answer/` | GET | Get all answers. | Admin, Superadmin |
| `/quiz-answer/:id` | GET | Get answer by ID. | Admin, Superadmin |
| `/quiz-answer/:id` | PUT | Update answer by ID. | Admin, Superadmin |
| `/quiz-answer/:id` | DELETE | Delete answer by ID. | Admin, Superadmin |

**Status Headers:**

- 200 OK: Successful operation.
- 400 Bad Request: Invalid request or missing parameters.
- 404 Not Found: Quiz answer / Foreign Key not found.
- 500 Internal Server Error: Server error.
    

---

### User Attempt Routes

#### Description:

Routes related to user attempts.

| Endpoint | Method | Description | Allowed Roles |
| --- | --- | --- | --- |
| `/user-attempt/` | POST | Create a new attempt. | Admin, Superadmin |
| `/user-attempt/` | GET | Get all attempts. | Admin, Superadmin |
| `/user-attempt/:id` | GET | Get attempt by ID. | Admin, Superadmin |
| `/user-attempt/:id` | PUT | Update attempt by ID. | Admin, Superadmin |
| `/user-attempt/:id` | DELETE | Delete attempt by ID. | Admin, Superadmin |

**Status Headers:**

- 200 OK: Successful operation.
- 400 Bad Request: Invalid request or missing parameters.
- 404 Not Found: User attempt / Foreign Key not found.
- 500 Internal Server Error: Server error.
    

---

### User Answer Routes

#### Description:

Routes related to user answers.

| Endpoint | Method | Description | Allowed Roles |
| --- | --- | --- | --- |
| `/user-answer/` | POST | Create a new user answer. | Admin, Superadmin |
| `/user-answer/` | GET | Get all user answers. | Admin, Superadmin |
| `/user-answer/:id` | GET | Get user answer by ID. | Admin, Superadmin |
| `/user-answer/:id` | PUT | Update user answer by ID. | Admin, Superadmin |
| `/user-answer/:id` | DELETE | Delete user answer by ID. | Admin, Superadmin |

**Status Headers:**

- 200 OK: Successful operation.
- 400 Bad Request: Invalid request or missing parameters.
- 404 Not Found: User answer / Foreign Key not found.
- 500 Internal Server Error: Server error.

## License
**QuizApp** is an open source project by **[Bobogeng](https://github.com/Bobogeng)** that is licensed under [MIT](https://opensource.org/license/MIT). I have reserve the right to change the license of future releases - see the [LICENSE](/LICENSE) file for details. 
