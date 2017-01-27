import { ANavigation } from 'ts-react-app-infrastructure';

export abstract class AWebNavigation extends ANavigation<ReactRouter.HistoryBase, string>  {
    push(route: ReactRouter.LocationDescriptor) {
        this.navigator.push(route);
    }

    replace(route: ReactRouter.LocationDescriptor) {
        this.navigator.replace(route);
    }

    resetTo(route: ReactRouter.LocationDescriptor) {
        this.replace(route);
    }
    jumpTo(route: ReactRouter.LocationDescriptor) {
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
