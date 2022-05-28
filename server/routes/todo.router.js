const express = require('express');
const todoRouter = express.Router();

const pool = require('../modules/pool');


// creating the router 
todoRouter.post('/', (req,res) => {
    let newTask = req.body; 
    //check to see if object got sent over 
    console.log('Adding new task', newTask); 
    const sqlQuery = `
    INSERT INTO "todo" ("task", "details", "when", "completed")
    VALUES ($1, $2, $3, $4);
    `;

    const sqlParams = [
    
        newTask.task,
        newTask.details,
        newTask.when,
        newTask.completed
    ];

    console.log(sqlParams); 

    pool.query(sqlQuery, sqlParams)
        .then(() => {
            res.sendStatus(201);
        })
        .catch((err) => {
            console.log(`POST to db failed: ${err}`);
            res.sendStatus(500);
        });
});


module.exports = todoRouter;