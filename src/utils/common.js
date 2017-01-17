const app = getApp();

const setToken = (data) => {
    let {tokenPamrs} = app.$app.globalData;
    Object.assign(tokenPamrs, data);
};

export {
    setToken
}
