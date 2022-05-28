$(document).ready(handleReady)

function handleReady(){
    $('#addBtn').on('click', addTask);

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
    })
};