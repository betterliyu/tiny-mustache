export type Token = [string, string, Token[]?];

/**
 * nestToken
 */
export const nestToken = (tokens: Token[]) => {
  const nestedTokens: Token[] = [];
  let parentTokens: Token[] = nestedTokens;
  let stack: Token[] = []; // 用栈来保存递归上层信息

  for (let index = 0, len = tokens.length; index < len; index++) {
    const token = tokens[index];
    if (token[0] == '#') {
      // 遇到嵌套 入栈，以便记住上一层是哪个父节点
      stack.push(token);

      parentTokens.push(token);
      parentTokens = token[2] = [];
    } else if (token[0] == '/') {
      // 嵌套结束出栈，取上一层父节点
      stack.pop();
      parentTokens = stack.length > 0 ? stack[stack.length - 1][2] : nestedTokens;
    } else {
      parentTokens.push(token);
    }
  }
  return nestedTokens;
}