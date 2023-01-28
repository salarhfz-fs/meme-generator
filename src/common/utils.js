function getRandomIntegerInRange(min, max) {
    if (min < max && [min, max].every(Number.isInteger)) {
        return Math.floor(Math.random() * max - min + 1);
    }
    return null
}

export {
    getRandomIntegerInRange,
}
