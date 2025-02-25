import { BaseReqData } from "async-messenger";
import EventEmitter from "events";

const emitter = new EventEmitter();

emitter.on("message-request", function (data: BaseReqData) {
    switch (data.method) {
        case "method1":
            setTimeout(function () {
                emitter.emit("message", {
                    method: data.method,
                    requestId: data.requestId,
                    data: `res_method1`
                })
            }, Math.random() * 2000)
            break;
    }
})


export default emitter;