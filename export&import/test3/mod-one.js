export default function calc(...args) {
    return args.reduce((a, b) => a + b, 0);
}