# apa ini?

aplikasi backend sederhana menggunakan django & django-rest-framework

# GRAPHQL

howtographql.com[https://www.howtographql.com/basics]

## kenapa graphql?

untuk sekarang yang saya tahu. ini berguna buat menghindari overfetching (download data yang tidak dibutuhkan). underfetching (1 endpoint tidak cukup memberikan informasi yang dibutuhkan, perlu hit beberapa endpoint)
contoh:

- saya mau data nama, judul blog & 3 follower terbaru dari user.
- REST-API: butuh 3 kali fetch, dengan kemungkinan ada data tambahan yang sebenarnya tidak dibutuhkan
- GRAPHQL: 1x fetch

## fitur

- SDL (Schema Definition Language)
  artinya, mirip di database,
  - kita bisa tentukan relasi antar table (one-to-many etc)
  - custom argument. misal, ambil 10 data terbaru
    ```query(last 10) {
          name
        }
    ```
  - nested query (pengambilan data bersarang)
  ```
    query {
      name {
        posts {
          title
        }
      }
    }
  ```
- Mutation (perubahan data) : Add, Modify, Delete

```
mutation {
  createPerson (name: "Luffy", age: 26) {
    name
    age
  }
}
```

- Fragment
  mirip subQuery kalau di SQL

# CONTOH

## query

```graphql
query {
  articles {
    id
    title
    content
  }
}
```

```graphql
query {
  users {
    username
  }
}
```

## mutation

```graphql
mutation {
  createArticle(title: "it works", content: "yup") {
    id
    content
    title
  }
}
```

```graphql
mutation {
  createUser(username: "guest", password: "password", email: "-") {
    user {
      id
      email
      password
      username
    }
  }
}
```
