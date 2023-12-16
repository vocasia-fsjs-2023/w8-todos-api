# My Todo List

List of available endpoints:

- `POST /todos`
- `GET /todos`
- `PUT /todos/:id`
- `PATCH /todos/:id`
- `DELETE /todos/:id`

### POST /todos

description:
create todo to insert it to database

Request:

- body:

```json
{
  "title": "Create POST in TODO App",
  "description": "Membuat API Post Pada Todos app untuk menambahkan todo list"
}
```

Response:

- status: 201
- body:

```json
{
  "id": 1,
  "title": "Create POST in TODO App",
  "description": "Membuat API Post Pada Todos app untuk menambahkan todo list",
  "status": "created",
  "createdAt": "2023-10-03T04:39:48.537Z",
  "updatedAt": "2023-10-03T04:39:48.537Z"
}
```

### GET /todos

description:
get all todo list

Response:

- status: 200
- body:

```json
{
  "todos": [
    {
      "id": 1,
      "title": "Create POST in TODO App",
      "description": "Membuat API Post Pada Todos app untuk menambahkan todo list",
      "status": "created",
      "createdAt": "2023-10-03T04:39:48.537Z",
      "updatedAt": "2023-10-03T04:39:48.537Z"
    }
  ]
}
```
### GET /todos/:id

description:
get single todo

Request:

- query param:

```json
{
  "id": 1
}
```

Response:

- status: 200
- body:

```json
{
  "id": 1,
  "title": "Create PUT in TODO App",
  "description": "Mengubah todo tentang post menjadi PUT pada TODO App",
  "status": "created",
  "createdAt": "2023-10-03T04:39:48.537Z",
  "updatedAt": "2023-10-03T04:39:48.537Z"
}
```

### PUT /todos/:id

description:
edit single todos data

Request:

- query param:

```json
{
  "id": 1
}
```

- body:

```json
{
  "title": "Create PUT in TODO App",
  "description": "Mengubah todo tentang post menjadi PUT pada TODO App"
}
```

Response:

- status: 200
- body:

```json
{
  "id": 1,
  "title": "Create PUT in TODO App",
  "description": "Mengubah todo tentang post menjadi PUT pada TODO App",
  "status": "created",
  "createdAt": "2023-10-03T04:39:48.537Z",
  "updatedAt": "2023-10-03T04:39:48.537Z"
}
```

### PATCH /todos/:id

description:
edit status Todo beetween enum created in_progress and done

Request:

- query param:

```json
{
  "id": 1
}
```

- body:

```json
{
  "status": "in_progress"
}
```

Response:

- status: 200
- body:

```json
{
  "id": 1,
  "title": "Create PUT in TODO App",
  "description": "Mengubah todo tentang post menjadi PUT pada TODO App",
  "status": "in_progress",
  "createdAt": "2023-10-03T04:39:48.537Z",
  "updatedAt": "2023-10-03T04:39:48.537Z"
}
```

### DELETE /todos/:id

description:
delete single todo

Request:

- query param:

```json
{
  "id": 1
}
```

- body:
  none

Response:

- status: 200
- body:

```json
{
  "message": "todo dengan id 1 dan judul Create PUT in TODO App berhasil dihapus"
}
```
