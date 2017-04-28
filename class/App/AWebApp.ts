import { AApp } from 'ts-react-app-infrastructure';

export abstract class AWebApp<TInitData, TAppConfig> extends AApp<TInitData, TAppConfig> {
    //非继承成员
    abstract getImageFullPath(imgName: string): string;
}
