const logError = (error, next) => {
    next(error)
}

module.exports = logError