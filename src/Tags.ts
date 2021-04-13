export class Tags {
  /**
   * 空白字符
   * @static
   * @memberof Tags
   */
  public static Space = /\s*/;

  /**
   * 开始标记
   * @static
   * @memberof Tags
   */
  public static Begin = /\{\{\s*/;

  /**
   * 结束标记
   * @static
   * @memberof Tags
   */
  public static End = /\s*\}\}/;

  /**
   * 数组标记
   * @static
   * @memberof Tags
   */
  public static ArrayTag = /#|\//;

}