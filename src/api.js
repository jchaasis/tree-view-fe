//this file will be used to store functions that will be used to communicate with the socket on the backend.


import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:5000');

//retrieve all the branch data
function getBranchData(cb){
    console.log('receiving branch data')
    socket.on('branches', data => {
        console.log(data)
    });
    //send event
    socket.emit('getBranchData', 1000);
}

//add a new branch
function addBranch(b){

    console.log(b)

    socket.on('newBranch', data => {
        console.log(data)
    })

    socket.emit('addBranch', b)

    // client.on('addBranch', (formData)=> {
    //     console.log(formData);
    //     client.emit('newBranch', 'newBranch');
    // })
}

export { getBranchData, addBranch };