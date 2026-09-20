const MIN_COUNT = 1;
const MAX_COUNT = 20;

const clampCount = (value) => Math.min(MAX_COUNT, Math.max(MIN_COUNT, value));

const parseCountInput = (value) => {
    const valueRex = /^[0-9]*$/;
    if (!valueRex.test(value)) return null;
    if (value === "") return 1;
    return Math.min(MAX_COUNT, Number(value))
}

export {
    MIN_COUNT,
    MAX_COUNT,
    clampCount,
    parseCountInput,
}