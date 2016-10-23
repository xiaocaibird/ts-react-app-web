import { setInfrastructureFactory } from 'ts-react-app-infrastructure';
class _WebFactory {
}
export const setWebFactory = (f) => {
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
};
export const WebFactory = new _WebFactory();
