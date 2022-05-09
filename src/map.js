module.exports = function map(axisValue, inMin, inMax, outMin, outMax) {
    return (axisValue - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
};
