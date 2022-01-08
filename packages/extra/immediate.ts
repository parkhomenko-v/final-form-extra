export const NON_PRINTABLE_MARKER = '\u200b';

export function toImmediate(message: string) {
  return isImmediate(message) ? message : `${NON_PRINTABLE_MARKER}${message}`;
}

export function isImmediate(message: string) {
  return message && message[0] === NON_PRINTABLE_MARKER;
}
