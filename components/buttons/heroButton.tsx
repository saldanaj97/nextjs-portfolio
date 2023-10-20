export default function HeroButton({ buttonText, href }: { href: string; buttonText: string }) {
  return (
    <button className="mx-2 rounded-md bg-accent p-2 text-sm font-semibold text-white md:mx-4 md:p-3 lg:text-base xl:text-lg">
      {buttonText}
    </button>
  )
}
