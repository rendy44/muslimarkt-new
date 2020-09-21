import Connector from "./connector";

export default class Experience {
    static add(key, args) {
        return new Connector('experience/' + key, 'post', args)
    }

    static get(key) {
        return new Connector('experience/' + key, 'get')
    }

    static detail(key, slug) {
        return new Connector('experience/' + slug + '/' + key, 'get')
    }

    static update(key, slug, args) {
        return new Connector('experience/' + slug + '/' + key, 'put', args)
    }

    static delete(key, slug) {
        return new Connector('experience/' + slug + '/' + key, 'delete')
    }
}