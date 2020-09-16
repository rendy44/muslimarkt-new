import Connector from "./connector";

export default class User {
    static register(args) {
        return new Connector('register', 'post', args)
    }

    static activate(key) {
        return new Connector('validate/' + key, 'post')
    }

    static detail(key) {
        return new Connector('account/' + key, 'get')
    }

    static switchType(key, args) {
        return new Connector('account/' + key, 'post', args)
    }
}