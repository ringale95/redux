const logger = params => store => next => action => {
    console.log("Logging using ", params);
}

export default logger;