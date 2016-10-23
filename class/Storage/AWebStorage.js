import { AStorage } from 'ts-react-app-infrastructure';
export class AWebStorage extends AStorage {
    clear() {
        if (window.localStorage)
            window.localStorage.clear();
    }
    getValue(key) {
        if (window.localStorage)
            return window.localStorage[key];
        return null;
    }
    setValue(key, value) {
        if (window.localStorage)
            window.localStorage.setItem(key, value);
    }
    remove(key) {
        if (window.localStorage)
            window.localStorage.removeItem(key);
    }
}
