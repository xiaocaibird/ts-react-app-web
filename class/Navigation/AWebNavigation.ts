import { ANavigation } from 'ts-react-app-infrastructure';

export abstract class AWebNavigation extends ANavigation<RouterHistory.History, string>  {
    push(route: RouterHistory.LocationDescriptor, state?: any) {
        if (typeof route === 'object')
            this.navigator.push(route)
        else {
            this.navigator.push(route, state)
        }
    }

    replace(route: RouterHistory.LocationDescriptor, state?: any) {
        if (typeof route === 'object')
            this.navigator.push(route)
        else {
            this.navigator.push(route, state)
        }
    }

    resetTo(route: RouterHistory.LocationDescriptor, state?: any) {
        this.replace(route, state);
    }
    jumpTo(route: RouterHistory.LocationDescriptor, state?: any) {
        this.push(route, state);
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

    toEntry(isReset: boolean = true) {
        if (isReset)
            this.resetTo(this.entryScene)
        else
            this.jumpTo(this.entryScene)
    }

    toLogin(isReset: boolean = true) {
        if (isReset)
            this.resetTo(this.loginScene)
        else
            this.jumpTo(this.loginScene)
    }

    reload(forcedReload: boolean = false) {
        window.location.reload(forcedReload);
    }

    isEntry() {
        const nowUrl = window.location.hash.toLowerCase().trim();
        const s = ('#' + this.entryScene).toLowerCase();

        if (nowUrl != '' && nowUrl != '#/' && nowUrl != '#' && nowUrl.indexOf(s) == -1) {
            return false
        }

        return true;
    }

    openUrl(url: string, target: string = '_top') {
        return window.open(url, target)
    }
}
