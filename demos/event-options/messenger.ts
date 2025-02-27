import { BaseAsyncMessenger, BaseReqData } from "async-messenger-js";
import emitter from "./events";

// messenger
const messenger = new BaseAsyncMessenger({
    // logUnhandledEvent: false,
    subscribe(onMessage) {
        emitter.on("message", onMessage as any);
        return () => {
            emitter.off("message", onMessage as any);
        }
    },

    request(data: BaseReqData, key?: string) {
        emitter.emit("message-request", data);
    }
});

export default messenger