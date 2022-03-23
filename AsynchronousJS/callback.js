// Solution: Problem-1  (Using Callback);
const getId = (email, pass, callback)=>{
    let id=0;
    setTimeout(() => {
        id = 6;
        callback(6)
    }, 1000);
}

const msgData = (userId, callback)=>{
    setTimeout(() => {
        const msg = ["msg1", "msg2"];
        callback(msg)
    }, 1000);
}

const shareResource = (resource,callback)=>{
    setTimeout(() => {
        callback(1)
    }, 1000);
}

const getIdCallback =(userId)=>{
    console.log("user Id: ", userId);
    msgData(userId,(msgData)=>{
        console.log("Messages: ", msgData);
        shareResource(msgData, (status)=>{
            console.log("Shared Status: ", status);
        })
    })
}




getId("id","pass",getIdCallback);