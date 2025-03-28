import EventEmitter from "events";
import { BaseReqData } from "async-messenger-js"

const emitter = new EventEmitter();

setInterval(() => {
    emitter.emit('message', {
        method: 'continuous-event',
        data: new Date().toLocaleTimeString()
    })
}, 3000)

emitter.on("message-request", (data: BaseReqData) => {
    // 单向的，不回发消息
    if (data.method === "oneway") {
        return;
    }
    setTimeout(() => {
        emitter.emit("message", {
            method: data.method,
            data: `${data.method}--- data`
        })
    }, 3000)
})

export default emitter;