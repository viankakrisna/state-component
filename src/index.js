let persist = false;
let ref = null;

export function setStateContainer(componentInstance, isPersist) {
  ref = componentInstance;
  persist = isPersist;
}

export function isPersist() {
  return persist;
}

export default function getStateContainer() {
  return ref;
}

export function getState(key, defaults) {
  if (key) {
    return getStateContainer().state[key] || defaults;
  }
  return getStateContainer().state;
}

export function setState(state, cb) {
  getStateContainer().setState(state, newState => {
    if (typeof cb === "function") {
      cb(newState);
    }
  });
}

export function loadState() {
  if (isPersist() && localStorage) {
    return JSON.parse(localStorage.getItem("state"));
  }
}
export function saveState(state) {
  if (isPersist() && localStorage) {
    return localStorage.setItem("state", JSON.stringify(state));
  }
}
