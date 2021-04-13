import { Scanner } from './Scanner';
import { Token } from './Token';

export const parse = <T>(template: string, data: T): string => {

  const scanner = new Scanner(template);
  const tokens = scanner.tokenization();

  // TODO: merge tokens and data
  console.dir(tokens);

  return render(tokens, data);
}

const render = <T>(tokens: Token[], data: T): string => {
  return '';
}