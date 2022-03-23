//  Problem-1:  Using Async/Await

const getId = async (email, pass)=>await new Promise((userId)=>{
    setTimeout(() => { userId(6) }, 1000);
})

const getData = (userId)=> new Promise((msgData)=>{
    setTimeout(() => { msgData(["msg1", "msg2"]) }, 1000);
})

const shareResource = (data)=> new Promise((success)=>{
    setTimeout(() => { success(1) }, 1000);
})



const id = getId("em","pass");
console.log("get id",id);