export function capitalize(receive_string: string): string {
  receive_string = receive_string.toLowerCase();
  return receive_string.charAt(0).toUpperCase() + receive_string.slice(1);
}
