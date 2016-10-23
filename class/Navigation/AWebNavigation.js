import { ANavigation } from 'ts-react-app-infrastructure';
import { strHp } from '../../helper';
export class AWebNavigation extends ANavigation {
    push(route) {
        this.navigator.push(route);
    }
    replace(route) {
        this.navigator.replace(route);
    }
    resetTo(route) {
        this.replace(route);
    }
    jumpTo(route) {
        this.push(route);
    }
    pop() {
        this.back();
    }
    back() {
        this.navigator.goBack();
    }
    forward() {
        this.navigator.goForward();
    }
    toEntry(isReset = true) {
        if (isReset)
            this.resetTo(this.entryScene);
        else
            this.jumpTo(this.entryScene);
    }
    toLogin(isReset = true) {
        if (isReset)
            this.resetTo(this.loginScene);
        else
            this.jumpTo(this.loginScene);
    }
    reload(forcedReload = false) {
        window.location.reload(forcedReload);
    }
    isEntry() {
        const nowUrl = strHp.trim(window.location.hash.toLowerCase());
        const s = ('#' + this.entryScene).toLowerCase();
        if (nowUrl != '' && nowUrl != '#/' && nowUrl != '#' && nowUrl.indexOf(s) == -1) {
            return false;
        }
        return true;
    }
    openUrl(url, target = '_top') {
        return window.open(url, target);
    }
}
