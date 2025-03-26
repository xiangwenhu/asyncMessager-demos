import { BaseAsyncMessenger, BaseReqData, BaseResData, GlobalReqOptions, listener } from "async-messenger-js";
import emitter from "./events";


class EmitterAsyncMessenger extends BaseAsyncMessenger {
    constructor(options: GlobalReqOptions = {}) {
        super(options);
    }
    override subscribe() {
        console.log("WebViewBridge: subscribe");
        emitter.on("message", this.onMessage);
        return () => {
            emitter.off("message", this.onMessage);
        }
    }

    protected request(data: BaseReqData) {
        emitter.emit("message-request", data);
    }

    /**
     * 被动监听
     * @param data 
     */
    @listener({ type: "continuous-event" })
    continuousEvent(data: BaseResData) {
        console.log("continuous-event:", data)
    }
}

export default new EmitterAsyncMessenger();


