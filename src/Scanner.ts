import { Tags } from './Tags';
import { Token, nestToken } from './Token';

export class Scanner {
  /**
   * 字符串模板
   *
   * @private
   * @type {string}
   * @memberof Scanner
   */
  private template: string;

  /**
   * 解析结果数组
   *
   * @private
   * @type {string[]}
   * @memberof Scanner
   */
  private tokens: Token[] = [];


  /**
   * 剩余字符串
   *
   * @private
   * @type {string}
   * @memberof Scanner
   */
  private tail: string;

  /**
   *
   */
  constructor(template: string) {
    this.template = template;
    this.tail = this.template;
  }

  /**
   * 把模板字符串转换为 tokens 数组
   */
  public tokenization() {
    while (!this.eos()) {

      const text = this.scanUntil(Tags.Begin);
      if (text) {
        this.tokens.push(['text', text]);
      }

      if (!this.scanHead(Tags.Begin)) {
        break;
      }
      const tagName = this.scanHead(Tags.ArrayTag) || 'name';

      const name = this.scanUntil(Tags.End);
      if (name) {
        this.tokens.push([tagName, name]);
        this.scanHead(Tags.End);
      }
    }
    return nestToken(this.tokens);
  }

  /**
   * 扫描剩余字符串开头是不是给定内容，如果是，则返回扫描结果，跳到后续位置，否则返回空值，不跳转
   */
  public scanHead(reg: RegExp) {
    const match = this.tail.match(reg);

    let scanned = '';
    if (match?.index === 0) {
      const headLength = match[0].length;
      scanned = this.tail.substring(0, headLength);
      this.tail = this.tail.substring(headLength);
    }

    return scanned;
  }

  /**
   * 扫描字符串，直到遇到给定字符，返回扫描结果，跳转到给定字符位置
   */
  public scanUntil(reg: RegExp) {
    const index = this.tail.search(reg);

    let scanned = '';

    if (index === -1) {
      scanned = this.tail;
      this.tail = '';
      return scanned
    }

    if (index > 0) {
      scanned = this.tail.substring(0, index);
      this.tail = this.tail.substring(index);
    }

    return scanned;
  }

  private eos() {
    return this.tail.length === 0;
  }
}