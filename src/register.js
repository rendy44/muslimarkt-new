import Connector from "./connector";

export default class Register {
    static do(args) {
        return new Connector('register', 'post', args)
    }
}