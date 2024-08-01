import messager from "./messager";

messager.subscribe();


messager.invoke({
    method: "cccc",
    data: 111
}).then(res => console.log("res:", res))


messager.invoke({
    method: "oneway",
    data: 111
}, {
    sendOnly: true,
}).then(res => console.log("oneway request res:", res))


messager.on("continuous-event", function onEvent(data) {
    console.log("continuous-event:", data);
})

