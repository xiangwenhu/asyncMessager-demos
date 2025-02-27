import { BaseAsyncMessenger, BaseReqData, GlobalReqOptions } from "async-messenger-js";
import emitter from "./events";



class EmitterAsyncMessenger extends BaseAsyncMessenger {
    // eslint-disable-next-line no-useless-constructor
    constructor(options: GlobalReqOptions = {}) {
        super(options);
    }

    subscribe() {
        console.log("WebViewBridge: subscribe");
        emitter.on("message", this.onMessage);
        return () => {
            emitter.off("message", this.onMessage);
        }
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    protected request(data: BaseReqData, key?: string) {
        emitter.emit("message-request", data);
    }
}

const emitterAsyncMessenger = new EmitterAsyncMessenger();

export default emitterAsyncMessenger;