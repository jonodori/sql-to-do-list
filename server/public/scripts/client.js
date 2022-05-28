$(document).ready(handleReady)

function handleReady(){
    $('#addBtn').on('click', addTask);
    getTask(); // shows tasks 
    $('#viewTasks').on('click', '.deleteBtn', deleteTasks); 
}


function addTask(){
    //Get info to send to the server
    const taskToSend = {
        task: $('#tasks-id').val(),
        details: $('#details-id').val(),
        when: $('#date-id').val(), 
        completed: Boolean 
    }

    console.log(taskToSend); // show that the object was created 

    $.ajax({
      type: 'POST',
      url: '/todo',
      data: taskToSend
    }).then(function(response){
        console.log(response)
    }).catch(function(error){
        console.log('error in todo post', error);
        alert('Error adding task');
    });

    getTask(); //runs the get 

    // $('.clear').val(''); // clear inputs
};

function getTask(){
    $.ajax({
        url: '/todo',
        method: 'GET'
    }).then((res) => {
        console.log('Receive data back');
        displayTask(res);
    }).catch(() => {
        console.log('Failed to get data back')
    })
}

function displayTask(tasks){
   $('#viewTasks').empty(); //clear duplicates 

    for (task of tasks) {
        let date = new Date(task.when)

        $('#viewTasks').append(`
        <tr data-task-id = ${task.id}>
          <td>${task.task}</td>
          <td>${task.details}</td>
          <td>${date.toLocaleDateString()}</td>
          <td>${task.completed}</td>
          <td>
          <button class ="markCompleteBtn">Complete</button>
          </td>
          <td>
          <button class ="deleteBtn">Delete</button>
          </td>
      </tr>
        `);
      }
}

function deleteTasks(){
    let tr = $(this).parents('tr');
    let taskId = tr.data('task-id');

    console.log('in deleteTasks()', taskId);

    $.ajax({
        method: 'DELETE',
        url:  `/todo/${taskId}`,
      })
          .then(() =>{
            console.log('DELETE /tasks succeeded')
            getTask();
          })
          .catch((err) => {
            alert('Failed to delete task. Sorry.')
            console.log('DELETE /tasks failed:', err)
          })
};
