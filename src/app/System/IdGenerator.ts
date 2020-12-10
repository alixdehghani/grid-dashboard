export function generateId(): string {
    return `${char[Math.floor(Math.random()*10)]}_${Math.floor(Math.random()*1000)}_${char[Math.floor(Math.random()*10)]}`
}
const char = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j'
]