import { Scanner } from './Scanner';
import { Token } from './Token';

export const parse = (template: string, data: any): string => {

  const scanner = new Scanner(template);
  const tokens = scanner.tokenizing();

  return render(tokens, data);
}

const render = (tokens: Token[], data: any): string => {
  const viewData = {
    '.': data, // 支持基本类型数组 {{.}}
    ...data
  };
  let htmlSnippet = '';
  for (let i = 0, len = tokens.length; i < len; i++) {
    const token = tokens[i];
    switch (token[0]) {
      case '#':
        htmlSnippet += renderArray(token[2], viewData[token[1]]);
        break;
      case 'name':
        htmlSnippet += viewData[token[1]];
        break;
      default:
        htmlSnippet += token[1];
        break;
    }
  }
  return htmlSnippet;
}

const renderArray = (tokens: Token[], data: any): string => {
  let htmlSnippet = '';
  for (let i = 0, len = data.length; i < len; i++) {
    htmlSnippet += render(tokens, data[i])
  }
  return htmlSnippet;
}
