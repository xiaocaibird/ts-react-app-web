import { AApp } from 'ts-react-app-infrastructure';
import { appHp } from '../../helper';
export abstract class AWebApp<TInitData, TAppConfig> extends AApp<TInitData, TAppConfig> {
    isDebug() {
        return appHp.isDebug();
    }
    //非继承成员
    abstract getImageFullPath(imgName: string): string;
}
