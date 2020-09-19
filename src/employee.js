import Connector from "./connector";

export default class Employee {

    static detail(key) {
        return new Connector('employee/' + key, 'get')
    }

    static update(key, args) {
        return new Connector('employee/' + key, 'put', args)
    }
}