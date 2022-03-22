
const f1 = (call)=>{
    console.log("hi");
    setTimeout(()=>{
        call("bye")
    },5000);
}

f1((message)=>{
    console.log(message)
})

const fn_1 = (callback)=>{
    console.log("inside callback");
    callback("Hi!");
}
    
fn_1((message)=>{
    console.log("Print callback message: ",message);
})

