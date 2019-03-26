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
