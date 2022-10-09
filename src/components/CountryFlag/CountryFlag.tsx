const OFFSET = 127397;

export function CountryFlag({ className, country }: { className?: string; country: string }) {
  const emoji = country
    .toUpperCase()
    .replace(/./g, (char) => String.fromCodePoint(char.charCodeAt(0) + OFFSET));

  return <div className={className}>{emoji}</div>;
}
