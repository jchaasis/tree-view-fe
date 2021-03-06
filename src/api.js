//this file will be used to store functions that will be used to communicate with the socket on the backend.

import openSocket from 'socket.io-client';
const socket = openSocket('https://secret-eyrie-65426.herokuapp.com/');

//retrieve all the branch data
function getBranchData(cb){
    //pass in callback so we can do something with the data
    socket.on('branches', data => cb(data, null));
    //send event
    socket.emit('getBranchData', 1000);
}

//add a new branch
function addBranch(b){
    socket.emit('addBranch', b)
}

//delete an existing branch
function deleteBranch(b){
    //pass back the branch id so that we can identify it in the table for deletion
    socket.emit('deleteBranch', b)
}

//updateBranch
function updateBranch(b){
    socket.emit('updateBranch', b);
}

function throwError(message){
    //throw an error alert when a form error has occured
    socket.on('formError', message => {
        alert(message);
    });
}

export { getBranchData, addBranch, deleteBranch, updateBranch, throwError};