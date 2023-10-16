export default function HeroButton({ buttonText, href }: { href: string; buttonText: string }) {
  return <button className="mx-4 rounded-md bg-accent p-3 text-lg font-semibold text-white">{buttonText}</button>
}
