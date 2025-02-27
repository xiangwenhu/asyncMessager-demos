import messenger from "./messenger";

messenger.subscribe();


messenger.invoke({
    method: "cccc",
    data: 111
}).then(res => console.log("res:", res))


messenger.invoke({
    method: "oneway",
    data: 111
}, {
    sendOnly: true,
}).then(res => console.log("oneway request res:", res))


messenger.addListener("continuous-event", function onEvent(data) {
    console.log("continuous-event:", data);
})

