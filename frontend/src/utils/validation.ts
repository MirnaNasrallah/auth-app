export function validateEmail(email: string): boolean {
  // Simple email regex
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function validateName(name: string): boolean {
  return name.trim().length >= 3;
}

export function validatePassword(password: string): boolean {
  // At least 8 chars, one letter, one number, one special char
  return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z\d]).{8,}$/.test(password);
} 