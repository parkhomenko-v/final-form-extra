function joinNames(name1: string, name2: string): string {
    if (!name1) {
        return name2;
    }

    return (
        name2[0] === '['
            ? `${name1}${name2}`
            : `${name1}.${name2}`
    );
}

export default joinNames;
