import { isReady } from './modules/read/isReady';
import { getProvider } from './modules/read/getProvider';
import { getNetworks } from './modules/read/getNetworks';
import { getAccount } from './modules/read/getAccount';
import { getBalance } from './modules/read/getBalance';
import { getStorage } from './modules/read/getStorage';
import { invokeRead } from './modules/read/invokeRead';
import { send } from './modules/write/send';
import { invoke } from './modules/write/invoke';
import { addEventListener, removeEventListener } from './modules/eventListener';
import { ArgumentDataType, EventName } from './constants';
declare const _default: {
    isReady: typeof isReady;
    getProvider: typeof getProvider;
    getNetworks: typeof getNetworks;
    getAccount: typeof getAccount;
    getBalance: typeof getBalance;
    getStorage: typeof getStorage;
    invokeRead: typeof invokeRead;
    send: typeof send;
    invoke: typeof invoke;
    addEventListener: typeof addEventListener;
    removeEventListener: typeof removeEventListener;
    Constants: {
        EventName: typeof EventName;
        ArgumentDataType: typeof ArgumentDataType;
    };
};
export default _default;
//# sourceMappingURL=index.d.ts.map