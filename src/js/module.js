module.exports = class Module {
    constructor(name = 'default',type = 'default') {
        this.name = name;
        this.type = type;
    }

    start(){
        return `name:${this.name}, type:${this.type}`
    }
};
