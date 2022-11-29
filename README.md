NOTE FOR REACT!!!!! if you are using this for the frontend and backend, make sure you dont put backend on port 3000, react scripts (start) default to that port and they conflict


STEPS TO COME LATER!# switchTOpgsql

-clone your project in fresh copy

-remove backend folder from fresh copy and delete remainder

-insure it is not in any way connected to your project on heroku (hopefully it doesnt have .env)

-replace you current files with the ones from repo

-.env (fill in the keys that are missing the rest are default settings from postgres app)
-package.json and package-lock.json

-run npm install

npm start should now work and listen on port 3000

AFTER the npm start works you should


make sure your postgresapp server is running 

npx dotenv sequelize db:migrate
npx dotenv sequelize db:seed:all

and now you are ready to use postman to test!
!!!!!!!!!!MAKE SURE YOU ADD .env BACK INTO THE .gitignore FILE!!!!!!!!

make sure to use a seperate environment for port 3000

if you want to use postgresapp to see tables after migration
double click db 
should open up pgsql terminal for database
NOTE all commands have a \ before NOT /

/d 
shows database tables





