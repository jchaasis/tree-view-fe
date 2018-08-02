//this file will be used to store functions that will be used to communicate with the socket on the backend.


import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:5000');

//retrieve all the branch data
function getBranchData(cb){
    //pass in callback so we can do something with the data
    socket.on('branches', data => cb(data, null));
    //send event
    socket.emit('getBranchData', 1000);
}

//add a new branch
function addBranch(b){

    // console.log(b)

    socket.on('newBranch', tree => {
        console.log(tree)
        
        // // return tree;
        // this.setstate({
        //     data: ['gree', 'red'] ,
        // })
    });

    socket.emit('addBranch', b)

    // client.on('addBranch', (formData)=> {
    //     console.log(formData);
    //     client.emit('newBranch', 'newBranch');
    // })
}

export { getBranchData, addBranch };