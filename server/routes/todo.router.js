const express = require('express');
const todoRouter = express.Router();

const pool = require('../modules/pool');


// creating the router for post 
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

// setting up get 
todoRouter.get('/', (req, res) => {
    let queryText = `
    SELECT * FROM todo;
    `;
    pool.query(queryText)
        .then((tacos) => {
            // Send back results to object
            res.send(tacos.rows)
        })
        .catch((err) => {
            console.log('Error getting tasks', err);
            res.sendStatus(500);
        });
    })

module.exports = todoRouter;

// delete method to remove from DB 
todoRouter.delete('/:id', (req,res) => {
    let taskId = req.params.id;
    console.log('in delete /id', taskId);

    const sqlQuery = `
    DELETE FROM "todo"
    WHERE id = $1;
    `

    const sqlParams = [
        taskId,
    ]

    pool.query(sqlQuery, sqlParams)
    .then(() => {
        res.sendStatus(204);
    })
    .catch((err) => {
      console.log(`DELETE failed: ${err}`);
      res.sendStatus(500);
    })
});


// PUT method 
todoRouter.put('/:id', (req, res) => {
    console.log('updating books', req.params.id, req.body)
  
    const sqlQuery =`
      UPDATE "todo"
      SET "completed" = $2
      WHERE id = $1;
      `;
  
      const sqlParams = [
        req.params.id,
        (req.body.completed)
      ];
  
      pool.query(sqlQuery, sqlParams)
          .then(() => {
              res.sendStatus(200);
          })
          .catch((err) => {
              console.log(`PUT /todo/${req.params.id} failed, ${err}`);
              res.sendStatus(500);
          });
  });