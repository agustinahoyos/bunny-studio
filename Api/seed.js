const request = require('request');

// inject some data

//inject users

const user1 = {
    "name": "Spider Man"
    
};
const user2 = {
    "name": "Lara Croft"
    
};
const user3 = {
    "name": "Mario Bros"
    
};
 
request.post({
    url: 'http://localhost:3002/users',
    body: user1,
    json: true,
}, function (error, response, body) {
    console.log(body);
});

request.post({
    url: 'http://localhost:3002/users',
    body: user2,
    json: true,
}, function (error, response, body) {
    console.log(body);
});

request.post({
    url: 'http://localhost:3002/users',
    body: user3,
    json: true,
}, function (error, response, body) {
    console.log(body);
});



//inject tasks


const task1 = {
    "description": "Find enemies",
    "state": "done",
    "userid": "1"
    
};

const task2 = {
    "description": "Get weapon",
    "state": "to do",
    "userid": "1"
    
};

const task3 = {
    "description": "Eat",
    "state": "done",
    "userid": "2"
    
}
 
request.post({
    url: 'http://localhost:3002/tasks',
    body: task1,
    json: true,
}, function (error, response, body) {
    console.log(body);
});

request.post({
    url: 'http://localhost:3002/tasks',
    body: task2,
    json: true,
}, function (error, response, body) {
    console.log(body);
});

request.post({
    url: 'http://localhost:3002/tasks',
    body: task3,
    json: true,
}, function (error, response, body) {
    console.log(body);
});

