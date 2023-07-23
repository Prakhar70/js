function updateAccount(product, cb) {
    setTimeout(() => {
        console.log(product + " purchased");
        cb();
    }, 2000);
}


function promiseUpdateAccount(product) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log(product + " purchased");
            resolve();
        }, 2000);
    })
}

module.exports = {
    updateAccount: updateAccount,
    promiseUpdateAccount: promiseUpdateAccount
}