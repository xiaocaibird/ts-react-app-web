import { setInfrastructureFactory } from 'ts-react-app-infrastructure';

import { AWebApp } from './App';
import { AWebStorage } from './Storage';
import { AWebRedux } from './Redux';
import { AWebRequest } from './Request';
import { AWebPrompt } from './Prompt';
import { AWebNavigation } from './Navigation';
import { AWebErrorHandler } from './Error';
import { AWebAsyncOperation } from './AsyncOperation';
import { AWebDevice } from './Device';
import { AWebUser } from './User';

class _WebFactory {
    App: AWebApp<any, any>;

    Storage: AWebStorage;

    Redux: AWebRedux<any, any>;

    Request: AWebRequest;

    Prompt: AWebPrompt;

    Navigation: AWebNavigation;

    ErrorHandler: AWebErrorHandler;

    AsyncOperation: AWebAsyncOperation;

    Device: AWebDevice;

    User: AWebUser<any>;
}

export const setWebFactory = (f: _WebFactory) => {
    setInfrastructureFactory(f);
    WebFactory.App = f.App;
    WebFactory.Storage = f.Storage;
    WebFactory.Redux = f.Redux;
    WebFactory.Request = f.Request;
    WebFactory.Prompt = f.Prompt;
    WebFactory.Navigation = f.Navigation;
    WebFactory.ErrorHandler = f.ErrorHandler;
    WebFactory.AsyncOperation = f.AsyncOperation;
    WebFactory.Device = f.Device;
    WebFactory.User = f.User;
}

export const WebFactory = new _WebFactory();