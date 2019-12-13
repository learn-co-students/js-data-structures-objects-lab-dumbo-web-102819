// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(driver, key, value){
    let newDriver = Object.assign({}, driver)
    newDriver[key] = value;
    return newDriver;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
    driver[key] = value
    return driver
}

function deleteFromDriverByKey(driver, key){
    let newDriv = Object.assign({}, driver)
    delete newDriv[key]
    return newDriv
}

function destructivelyDeleteFromDriverByKey(driver, key){
    delete driver[key]
    return driver;
}