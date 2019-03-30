const Module = require('../module');

describe('TEST: module', () => {
    test('all good', () => {
        const module = new Module();
        expect(module.start()).toBe('name:default, type:default');
    });
});
