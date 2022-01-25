// Callback
const f1 = (call)=>{
    setTimeout(()=>{
        console.log("hi");
        call("bye")
    },5000);
}

f1((message)=>{
    console.log(message)
})



// Promise
const f2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("hi");
        resolve("bye")
    },5000);
})

f2.then((data)=>{
    console.log(data);
})

// async await
const f3 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("hi");
        resolve("bye")
    },5000);
})


async function f4() {
    let data = await f3;
    console.log(data);
}

f4();