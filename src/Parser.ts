import { Scanner } from './Scanner';

export const parse = <T>(template: string, data: T): string => {
  // <div>{{ name }}</div>
  // const scanner = new Scanner(template);
  // scanner.scan();

  console.log(template.trim());

  return template;
}