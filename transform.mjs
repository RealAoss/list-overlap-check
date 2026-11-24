function fail(message) {
    throw new Error(message);
}
const lines = text => text.split(/\r?\n/).map(line => line.trim()).filter(Boolean);
export function transform(s) {
    if (!s.trim()) fail('Enter some source text.');
    const parts = s.split(/^---\s*$/m);
    if (parts.length !== 2) fail('Use one separator line containing ---');
    const [a, b] = parts.map(p => new Set(lines(p)));
    return ['Both', ...[...a].filter(x => b.has(x)), '', 'Only first', ...[...a].filter(x => !b.has(x)), '', 'Only second', ...[...b].filter(x => !a.has(x))].join('\n')
}
