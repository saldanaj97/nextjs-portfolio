export default function HeroButton({ buttonText, href }: { href: string; buttonText: string }) {
  return (
    <button className="mx-2 rounded-md bg-accent p-2 font-semibold text-white md:mx-4 md:p-3 md:text-base xl:text-xl">
      {buttonText}
    </button>
  )
}
