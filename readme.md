# Git Commands

git init - Create a new git repo
git status - View the changes to your projects code
git add -Add files to staging area
git commit - Creates a new commit with files from staging area
git log - View recent commits
git push origin master

#Heroku
heroku login
heroku create insertnameofapp
git remote - heroku är tillagt i Git
git remote -v - visar länkar(fetch,push)
Måste lägga till "start": "node server/server.js" i package.json.
I server.js, port ska ändras till dynamiskt värde.
need to teach Heruko to run webpack :"heroku-postbuild": "yarn run build:prod"
git add .
git push
git push heroku master
heroku open - öppnar sidan
heroku -logs -visar log
