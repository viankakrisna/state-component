"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setStateContainer = setStateContainer;
exports.isPersist = isPersist;
exports.default = getStateContainer;
exports.getState = getState;
exports.setState = setState;
exports.loadState = loadState;
exports.saveState = saveState;
var persist = false;
var ref = null;

function setStateContainer(componentInstance, isPersist) {
    ref = componentInstance;
    persist = isPersist;
}

function isPersist() {
    return persist;
}

function getStateContainer() {
    return ref;
}

function getState(key, defaults) {
    if (key) {
        var val = getStateContainer().state[key];
        return defaults ? val || defaults : val;
    }
    return getStateContainer().state;
}

function setState(state, cb) {
    getStateContainer().setState(state, function(newState) {
        if (typeof cb === "function") {
            cb(newState);
        }
    });
}

function loadState() {
    if (isPersist() && localStorage) {
        return JSON.parse(localStorage.getItem("state"));
    }
}
function saveState(state) {
    if (isPersist() && localStorage) {
        return localStorage.setItem("state", JSON.stringify(state));
    }
}
