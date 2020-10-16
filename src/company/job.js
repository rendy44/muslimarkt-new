import Connector from "../connector";

export default class Job {
    static add(key, args) {
        return new Connector('job/' + key, 'post', args)
    }

    static detail(key, slug) {
        return new Connector('job/' + slug + '/' + key, 'get')
    }

    static update(key, slug, args) {
        return new Connector('job/' + slug + '/' + key, 'put', args)
    }
}