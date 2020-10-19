
// Load the MySQL pool connection
const pool = require('../data/config');

const router = app => {

  // Display all users
app.get('/users', (request, response) => {
    pool.query('SELECT * FROM users', (error, result) => {
        if (error) throw error;
 
        response.send(result);
    });
});

//Get user by id
app.get('/users/:id', (request, response) => {
    const id = request.params.id;
 
    pool.query('SELECT * FROM users WHERE id = ?', id, (error, result) => {
        if (error) throw error;
 
        response.send(result);
    });
});

// Add a new user
app.post('/users', (request, response) => {
    pool.query('INSERT INTO users SET ?', request.body, (error, result) => {
        if (error) throw error;
 
        response.status(201).send(`User added with ID: ${result.insertId}`);
    });
});

// Update an existing user
app.put('/users/:id', (request, response) => {
    const id = request.params.id;
 
    pool.query('UPDATE users SET ? WHERE id = ?', [request.body, id], (error, result) => {
        if (error) throw error;
 
        response.send('User updated successfully.');
    });
});

// Delete a user
app.delete('/users/:id', (request, response) => {
    const id = request.params.id;
 
    pool.query('DELETE FROM users WHERE id = ?', id, (error, result) => {
        if (error) throw error;
        response.send('User deleted.');
    });
});


  // Display all tasks
  app.get('/tasks', (request, response) => {
    pool.query('SELECT * FROM user_tasks', (error, result) => {
        if (error) throw error;
 
        response.send(result);
    });
});

//Get task by id
app.get('/tasks/:id', (request, response) => {
    const id = request.params.id;
 
    pool.query('SELECT * FROM user_tasks WHERE taskid = ?', id, (error, result) => {
        if (error) throw error;
 
        response.send(result);
    });
});

app.get('/tasks/user/:userid', (request, response) => {
    const id = request.params.userid;
 
    pool.query('SELECT * FROM user_tasks WHERE userid = ?', id, (error, result) => {
        if (error) throw error;
 
        response.send(result);
    });
});

app.delete('/tasks/user/:userid', (request, response) => {
    const id = request.params.userid;
 
    pool.query('DELETE FROM user_tasks WHERE userid = ?', id, (error, result) => {
        if (error) throw error;
 
        response.send('User tasks deleted');
    });
});


// Add a new task
app.post('/tasks', (request, response) => {
    pool.query('INSERT INTO user_tasks SET ?', request.body, (error, result) => {
        if (error) throw error;
 
        response.status(201).send(`Task added with ID: ${result.insertId}`);
    });
});

// Update an existing task
app.put('/tasks/:id', (request, response) => {
    const id = request.params.id;
 
    pool.query('UPDATE user_tasks SET ? WHERE taskid = ?', [request.body, id], (error, result) => {
        if (error) throw error;
 
        response.send('Task updated successfully.');
    });
});

// Delete a task
app.delete('/tasks/:id', (request, response) => {
    const id = request.params.id;
 
    pool.query('DELETE FROM user_tasks WHERE taskid = ?', id, (error, result) => {
        if (error) throw error;
 
        response.send('Task deleted.');
    });
});


}





module.exports = router;