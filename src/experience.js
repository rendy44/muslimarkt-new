import Connector from "./connector";

export default class Experience {
    static add(key, args) {
        return new Connector('experience/' + key, 'post', args)
    }
}