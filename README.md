# just-another-two-route-api
Just another two route api.

## usage
### client
* curl 'http://localhost:3000/api/post' -H 'Content-Type: application/json' --data '{"post":"Hello world"}'
* curl 'http://localhost:3000/api/post/1'

### server
* cd /to/path/of/repo
* npm install
* npm start
* make sure you have a mysql database with a table called wiki, a table posts(id int auto_increment primary key, post varchar(1000));
* dbconfig.js syntax is:  
`  module.exports = {
    host     : 'localhost',
    user     : '$user',
    password : '$password',
    database : 'wiki'
  }`

