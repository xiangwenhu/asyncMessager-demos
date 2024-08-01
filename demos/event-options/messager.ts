import { BaseAsyncMessager, BaseReqData } from "async-messager";
import emitter from "./events";

// 初始化异步Messager
const messager = new BaseAsyncMessager({
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

export default messager