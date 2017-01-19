const app = getApp();

const globalData = {
    get(key){
        return app.$app.globalData[key];
    },
    set(key, value){
        Object.assign(app.$app.globalData[key], value);
    }
}

export {
    globalData
}
