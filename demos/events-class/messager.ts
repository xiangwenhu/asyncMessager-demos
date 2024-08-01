import { BaseAsyncMessager, BaseReqData, GlobalReqOptions } from "async-messager";
import emitter from "./events";

type RequestData  = BaseReqData;
type ResponseData = RequestData;

class EmitterAsyncMessager extends BaseAsyncMessager {
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

    protected request(data: RequestData) {
        emitter.emit("message-request", data);
    }
}

export default new EmitterAsyncMessager();


