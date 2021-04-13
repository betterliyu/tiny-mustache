export class Char {
  /**
   * isLeftBrackets
   */
  public static isLeftBrackets(char: string): boolean {
    return char === '{'
  }

  /**
   * isRightBrackets
   */
  public static isRightBrackets(char: string): boolean {
    return char === '}'
  }

  /**
  * isArrayHead
  */
  public static isArrayHead(char: string): boolean {
    return char === '#'
  }

  /**
   * isArrayTail
   */
  public static isArrayTail(char: string): boolean {
    return char === '/'
  }
}