## deploy to heroku (subtree)

https://medium.com/@shalandy/deploy-git-subdirectory-to-heroku-ea05e95fce1f

### add Procfile

```
web: gunicorn app_namep.wsgi --log-file -
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
heroku run python manage.py migrate
```

# run command

heroku run python manage.py xxx
