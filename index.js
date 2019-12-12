let driver = {}
function updateDriverWithKeyAndValue(obj, key, value){
    return Object.assign({}, obj, { [key]: value });
}


function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
    return Object.assign(driver, {[key]: value})
}

function deleteFromDriverByKey(driver, key){
    const newDriver = Object.assign({}, driver)
    delete newDriver[key];
    return newDriver;
}

function destructivelyDeleteFromDriverByKey(driver, key){
    delete driver[key]
    return driver
}