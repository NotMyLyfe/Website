export default function className(args: { [key: string]: boolean | string }): string {
    return Object.entries(args).reduce((acc: string, [key, value]) => {
        if (!value) return acc;
        if (typeof value === 'string') return acc === '' ? value : `${acc} ${value}`;
        return acc === '' ? key : `${acc} ${key}`;
    }, '');
}
