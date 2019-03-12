
const html = (h: string[]) => h.join('')


class CSS {
  static head = document.head
  static throw = (msg: string) => {
    throw new Error(`CSS injector: ${msg}`)
  }
  private _prefix?: string
  private sheet?: string
  private style?: HTMLStyleElement
  private addPrefix(sheet: string) {
    const { _prefix } = this
    return sheet.replace(/^([\s\b\t]*[\.>#*])/g, (part) => {
      return `${part.slice(0, -1)}.${_prefix} ${part[part.length-1]}`
    })
  }
  private getSheet(_stylesheet: string[], vars: any[]) {
    return _stylesheet.reduce((accum, part, i) => {
      accum.push(part, vars[i]);
      return accum;
    }, [] as string[]).join('')
  }
  private getTag(sheet: string, withPrefix: boolean) {
    const style = document.createElement('style')
  
    style.type = 'text/css'
    style.setAttribute('lit-inject', this._prefix || '')
    style.appendChild(document.createTextNode(sheet))
  
    return style
  }
  public get root() {
    return this._prefix
  }
  public async mount(withPrefix = false) {
    if(withPrefix && this.sheet && !this.style) {
      this.sheet = this.addPrefix(this.sheet)
    }
    return new Promise(ff => {
      const { sheet } = this
      if(!sheet) {
        CSS.throw('cannot mount undefined style!')
      } else {
        const style = this.getTag(sheet, withPrefix)
        this.style = style
        const listener = () => {
          style.removeEventListener('load', listener)
          ff(withPrefix ? this._prefix : '')
        }
        style.addEventListener('load', listener)
        CSS.head.insertBefore(style, CSS.head.lastElementChild)
      }
    })
  }
  public async unmount() {
    if(!this.style) {
      CSS.throw('cannot unmount undefined style!')
    } else {
      this.style.remove()
    }
  }
  constructor(_stylesheet?: string[], vars?: any[]) {
    if(_stylesheet && vars) {
      this._prefix = 'a-' + String((Math.random()*1e7) | 0)
      this.sheet = this.getSheet(_stylesheet, vars)
    } else {
      CSS.throw('bad arguments.')
    }
  }
}

const css = (_stylesheet: string[], ...vars: any[]) => {
  return new CSS(_stylesheet, vars)
}

const cssinject = async (_stylesheet: string[], ...vars: any[]) => {
  const css = new CSS(_stylesheet, vars)
  await css.mount()
}

export { html, css, cssinject }