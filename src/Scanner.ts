import { Char } from './Char';

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
  private rows: string[];

  /**
   * 遍历指针
   *
   * @private
   * @type {number}
   * @memberof Scanner
   */
  private cursor: number;

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
    this.cursor = 0;
  }

  /**
   * scan
   */
  public scan() {
    while (!this.eos()) {
      const char = this.template[this.cursor];
      if (Char.isLeftBrackets(char)) {

      }

    }

  }

  /**
   * skip
   */
  public skip() {
    this.cursor++;
    this.tail = this.template.slice(this.cursor, this.template.length);
  }

  /**
   * scanUntil
   */
  public scanUntil() {

  }

  private eos() {
    return this.tail.length === 0;
  }

}