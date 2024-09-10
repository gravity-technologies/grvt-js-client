export class StringUtils {
  static randChars (length = 3, options = {
    alphabet: true,
    uppercase: true,
    numbers: false
  }): string {
    const seed = [
      ...(options.alphabet ? 'abcdefghijklmnopqrstuvwxyz' : ''),
      ...(options.uppercase ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' : ''),
      ...(options.numbers ? '0123456789' : '')
    ].join('')
    let result = ''
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * seed.length)
      result += seed[randomIndex]
    }
    return result
  }

  static toBigint (value: string | number): bigint {
    try {
      return BigInt(value)
    } catch (error) {
      return BigInt(0)
    }
  }
}
