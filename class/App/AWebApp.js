import { AApp } from 'ts-react-app-infrastructure';
import { WebFactory as f } from '../Factory';
export class AWebApp extends AApp {
    constructor() {
        super(...arguments);
        this.versionInfoCookieKey = '_my__app_cookieVersion';
    }
    reset(msg = '请求超时！请稍后刷新页面！', callback) {
        f.Prompt.warningPopUp(msg, undefined, () => {
            if (typeof callback === 'function')
                callback();
            this.clearState();
            if (!f.Navigation.isEntry()) {
                f.Navigation.toEntry();
                f.Navigation.reload();
            }
            else {
                f.Navigation.reload();
            }
        });
    }
}
