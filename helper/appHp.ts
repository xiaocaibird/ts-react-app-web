export namespace appHp {
    export const isDebug = () => {
        return process.env.NODE_ENV !== 'production';
    }
}