import Connector from "./connector";

export default class Media {
    static upload(key, file) {
        console.log(file)
        return new Connector('media/' + key, 'post', {file: file})
    }
}