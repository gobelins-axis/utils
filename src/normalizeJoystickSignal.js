module.exports = function normalizeJoystickSignal(x, y) {
    const normalizedX = map(x, 0, 1023, -1, 1) * -1;
    const normalizedY = map(y, 0, 1023, -1, 1) * -1;
    return { x: normalizedX, y: normalizedY };
};
