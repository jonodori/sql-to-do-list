$(document).ready(handleReady)

function handleReady(){
    $('#addBtn').on('click', addTask);
    getTask(); // shows tasks 
    $('#viewTasks').on('click', '.deleteBtn', deleteTasks); 
    $('#viewTasks').on('click', '.markCompleteBtn', updateComplete);
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
        getTask();
        console.log(response)
    }).catch(function(error){
        console.log('error in todo post', error);
        alert('Error adding task');
    });

     //runs the get 

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
          <td data-completed-id="${task.completed}">
          <button type ="submit" class ="markCompleteBtn btn btn-success ms-1">Complete</button>
          </td>
          <td>
        
          <button type ="submit" class ="deleteBtn btn btn-danger">Delete</button>
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

function updateComplete(){
    const statusId = $(this).parents('tr').data('task-id');
    let td = $(this).parents('td');
    let completed = td.data('completed-id');
   
    console.log (completed);
    let updateStatus = {
        completed: completed
    };

//     if (updateStatus.completed === 'true'){
//         updateStatus.completed = false;
//    } else {updateStatus.completed = true};
    
    console.log(updateStatus);

    $.ajax({
        method: 'PUT',
        url: `todo/${statusId}`,
        data: updateStatus
      })
        .then((res) => {
          console.log('PUT success');
      
          //Getting update state from server
          getTask();
        })
        .catch((err) => {
          alert('it doesn\'t seem to be working');
          console.log('PUT failed:', err)
        })

}