let instance = null;

export default class Game {

    constructor(canvas) {
        if (instance) {
            return instance; 
        }
        instance = this;
    }
}