import emitterAsyncMessager from "./messager";

emitterAsyncMessager.subscribe();


// key相同，返回相同
emitterAsyncMessager.invoke({
    method: "method1",
    data: "data2",
    requestId: "key2"
}).then(res=>console.log("res1_key2", res));

emitterAsyncMessager.invoke({
    method: "method1",
    data: "data1",
    requestId: "key1"
}).then(res=>console.log("res_key1", res));
