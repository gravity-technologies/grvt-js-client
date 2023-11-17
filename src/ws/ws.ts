export class WS extends WebSocket {
  private readonly _onopenListeners: Array<(ev: Event) => any> = []
  private readonly _onmessageListeners: Array<(ev: MessageEvent) => any> = []
  private readonly _onerrorListeners: Array<(ev: Event) => any> = []
  private readonly _oncloseListeners: Array<(ev: CloseEvent) => any> = []

  constructor (url: string) {
    super(url)

    this.onopen = (...args) => { this._onopen(...args) }
    this.onmessage = (...args) => { this._onmessage(...args) }
    this.onerror = (...args) => { this._onerror(...args) }
    this.onclose = (...args) => { this._onclose(...args) }
  }

  private _onopen (event: Event) {
    for (const listener of this._onopenListeners) {
      listener(event)
    }
  }

  onOpen (listener: (ev: Event) => any) {
    return this._onopenListeners.push(listener) - 1
  }

  removeOnOpen (index: number) {
    this._onopenListeners.splice(index, 1)
    return this
  }

  private _onmessage (event: MessageEvent) {
    for (const listener of this._onmessageListeners) {
      listener(event)
    }
  }

  onMessage (listener: (ev: MessageEvent) => any) {
    return this._onmessageListeners.push(listener) - 1
  }

  removeOnMessage (index: number) {
    this._onmessageListeners.splice(index, 1)
    return this
  }

  private _onerror (event: Event) {
    for (const listener of this._onerrorListeners) {
      listener(event)
    }
  }

  onError (listener: (ev: Event) => any) {
    return this._onerrorListeners.push(listener) - 1
  }

  removeOnError (index: number) {
    this._onerrorListeners.splice(index, 1)
    return this
  }

  private _onclose (event: CloseEvent) {
    for (const listener of this._oncloseListeners) {
      listener(event)
    }
  }

  onClose (listener: (ev: CloseEvent) => any) {
    return this._oncloseListeners.push(listener) - 1
  }

  removeOnClose (index: number) {
    this._oncloseListeners.splice(index, 1)
    return this
  }
}
