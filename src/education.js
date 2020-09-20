import Connector from "./connector";

export default class Education {
    static add(key, args) {
        return new Connector('education/' + key, 'post', args)
    }

    static get(key) {
        return new Connector('education/' + key, 'get')
    }

    static detail(key, slug) {
        return new Connector('education/' + slug + '/' + key, 'get')
    }

    static update(key, slug, args) {
        return new Connector('education/' + slug + '/' + key, 'put', args)
    }
}