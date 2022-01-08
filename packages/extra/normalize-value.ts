function normalize(rawValue: any) {
    if (rawValue == null) {
        return null;
    }

    const value = (
        typeof rawValue === 'string'
            ? rawValue.trim()
            : rawValue
    );

    return value === '' ? null : value;
}

export default normalize;
