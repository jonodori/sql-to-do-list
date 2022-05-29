# Project Name

[Project Instructions](./INSTRUCTIONS.md), this line may be removed once you have updated the README.md

## Description

Your project description goes here. What problem did you solve? How did you solve it?



Additional README details can be found [here](https://github.com/PrimeAcademy/readme-template/blob/master/README.md).



# PROJECT NAME
SQL TO DO LIST

## Description

I created a "to do app" to help people stay organized and up to date with their daily lives. 

It allows you to put in a task, the details of that task, and a due date. It then gets stored to a database to save and appends to the DOM. 

The complete button toggles the complete status to be true and highlights the task in green, as well as striking through it. It is a visual representation that the task is completed and ready to the delete.

Once you delete a task with the delete button, that task also gets removed from the DOM, as well as the database. 




_Duration: 2 days_


To see the fully functional site, please visit: [DEPLOYED VERSION OF APP](www.heroku.com)

## Screen Shot

image.png

### Prerequisites

Link to software that is required to install the app (e.g. node).

- [Node.js](https://nodejs.org/en/)
- List other prerequisites here

## Installation

How do you get your application up and running? This is a step by step list for how another developer could get this project up and running. The good target audience in terms of knowledge, would be a fellow Primer from another cohort being able to spin up this project. Note that you do not need a paragraph here to intro Installation. It should be step-by-step.

If your application has secret keys (for example --  Twilio), make sure you tell them how to set that up, both in getting the key and then what to call it in the `.env` file.

1. Create a database named `your database name`,
2. The queries in the `database.sql` file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries,
3. Open up your editor of choice and run an `npm install`
4. Run `npm install nodemon` in your terminal
5. Run `npm start` in your terminal, to start the server on nodemon.


## Usage


1. Click on the tasks input box and type in the task. On details, put in the details of your task (not required though.)
2. You need to add a date or select a date.
3. Then click add task and it should show up on the bottom.
4. Once task is completed. You can click on the task and it will highlight green and will cross out the task. 
5. When you no longer need the task, you can click on the delete button and delete the task.



## Built With

Express
AJAX
NodeJS
Jquery
Bootstrap 

## License
None

## Acknowledgement
Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality. (Thank your people)

## Support
If you have suggestions or issues, please email me at [jonopalalay@gmail.com.com]