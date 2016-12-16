heroku create $1;
heroku addons:create papertrail:choklad --app $1;
heroku addons:create mongolab:sandbox --app $1;
while read i; do heroku config:set $i; done < .env;
git push heroku master
heroku addons:open papertrail --app $1;
heroku logs --tail --app $1;
