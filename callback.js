
const f1 = (call)=>{
    console.log("hi");
    setTimeout(()=>{
        call("bye")
    },5000);
}

f1((message)=>{
    console.log(message)
})

