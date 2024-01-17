export const titleCase = (input: string) =>
  input
    .replace(/^[\s-_]*(.)/, (_, c) => c.toUpperCase())
    .replace(/[\s-_]+(.)/g, (_, c) => ' ' + c.toUpperCase())
    .replace(/^[-_]|[-_]$/, '');
