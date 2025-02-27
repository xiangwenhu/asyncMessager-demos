import emitterAsyncMessenger from "./messenger";

emitterAsyncMessenger.activate();


// key相同，返回相同
emitterAsyncMessenger.invoke({
    method: "method1",
    data: "data2",
    requestId: "key2"
}).then(res=>console.log("res1_key2", res));

emitterAsyncMessenger.invoke({
    method: "method1",
    data: "data1",
    requestId: "key1"
}).then(res=>console.log("res_key1", res));
