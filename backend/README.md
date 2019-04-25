# other

## deploy to heroku (subtree)

https://medium.com/@shalandy/deploy-git-subdirectory-to-heroku-ea05e95fce1f

### add Procfile

```
web: gunicorn gettingstarted.wsgi --log-file -
```

### add Procfile.windows

```
web: python manage.py runserver 0.0.0.0:5000
```

```bash
heroku login
heroku git:remote -a guarded-badlands-69959
heroku config:set DISABLE_COLLECTSTATIC=1
git subtree push --prefix backend heroku master
heroku ps:scale web=1
```

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

# query

```graphql
query {
  articles {
    id
    title
    content
  }
}
```
