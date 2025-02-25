import { BaseAsyncMessenger, BaseReqData, GlobalReqOptions } from "async-messenger";
import emitter from "./events";



class EmitterAsyncMessager extends BaseAsyncMessenger {
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

const emitterAsyncMessager = new EmitterAsyncMessager();

export default emitterAsyncMessager;