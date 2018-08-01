//this file will be used to store functions that will be used to communicate with the socket on the backend.


import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:5000');


function getBranchData(cb){
    console.log('receiving branch data')
    socket.on('timer', timestamp => {
        console.log(timestamp)
    });
    
    socket.emit('getBranchData', 1000);
}

export { getBranchData };