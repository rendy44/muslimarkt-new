import Connector from "./connector";

export default class Experience {
    static add(key, args) {
        return new Connector('experience/' + key, 'post', args)
    }

    static get(key) {
        return new Connector('experience/' + key, 'get')
    }
}