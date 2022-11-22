function hash(str,prime) {
    let hash = 0;
    const len = String(str).length;
    for (let i = 0; i < len; i++) {
        let chr = String(str).charCodeAt(i);
        console.log(chr)
        hash = (hash * prime) + chr;
        console.log(hash)
        hash = hash % 61
    }
    return hash;
}