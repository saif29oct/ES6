/**
 * The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
 * Essentially, a promise is a returned object to which you attach callbacks, instead of passing callbacks into a function.
 * A Promise is in one of these states:
 *      pending: initial state, neither fulfilled nor rejected.
 *      fulfilled: meaning that the operation was completed successfully.
 *      rejected: meaning that the operation failed.
 *  A pending promise can either be fulfilled with a value or rejected with a reason (error).
 * 
 * Promise Chaining:
 *  The methods promise.then(), promise.catch(), and promise.finally() are used to associate further action with a promise that becomes settled.
 * 
 */

//  Problem-1:  Using Promise

const getId = (email, pass)=> new Promise((userId)=>{
    setTimeout(() => { userId(6) }, 1000);
})

const getData = (userId)=> new Promise((msgData)=>{
    setTimeout(() => { msgData(["msg1", "msg2"]) }, 1000);
})

const shareResource = (data)=> new Promise((success)=>{
    setTimeout(() => { success(1) }, 1000);
})

getId("email","pass").then((userId)=>{
    console.log("User Id: ", userId);
    getData(userId).then((msgData)=>{
        console.log("Messages Data: ", msgData)
        shareResource(msgData).then((success)=>{
            console.log("Shared Status: ", success);
        })
    })
}).then(()=>{
    setTimeout(() => { console.log("nested-1 after 1 sec") }, 1000);
}).then(()=>{
    setTimeout(() => { console.log("nested-2 after 2 sec") }, 1000);
})