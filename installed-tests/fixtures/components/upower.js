'use strict';

const {GObject} = imports.gi;


var Component = GObject.registerClass({
    GTypeName: 'GSConnectMockBattery',
    Signals: {
        'changed': {flags: GObject.SignalFlags.RUN_FIRST},
    },
}, class MockBattery extends GObject.Object {

    get charging() {
        if (this._charging === undefined)
            this._charging = false;

        return this._charging;
    }

    get level() {
        if (this._level === undefined)
            this._level = 0;

        return this._level;
    }

    get threshold() {
        if (this._threshold === undefined)
            this._threshold = 0;

        return this._threshold;
    }

    update(obj) {
        for (let [propertyName, propertyValue] of Object.entries(obj))
            this[`_${propertyName}`] = propertyValue;

        this.emit('changed');
    }
});
