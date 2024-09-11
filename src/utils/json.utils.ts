export class JsonUtils {
  static parse <T = any>(text?: string | null, reviver?: Parameters<typeof JSON.parse>[1], _default?: T): T {
    try {
      return text
        ? JSON.parse(text, reviver) as T
        : _default as T
    } catch (error) {
      console.warn('JsonUtils.parse error', { text, error })
      return _default as T
    }
  }

  static bigintReplacer (key: string, value: any) {
    if (typeof value === 'bigint') {
      return value.toString()
    }
    return value
  }

  static bigintReviver (key: string, value: any) {
    if (typeof value === 'string' && (/^([+-])?\d+$/.test(value) || /^0x[0-9a-fA-F]+$/.test(value))) {
      return BigInt(value)
    }
    return value
  }
}
