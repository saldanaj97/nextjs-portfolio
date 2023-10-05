import { Button } from '@nextui-org/button'

export default function HeroButton({ buttonText, href }: { href: string; buttonText: string }) {
  return (
    <Button className="mx-4 rounded-full bg-primary p-8 text-xl font-bold text-white" href={href}>
      {buttonText}
    </Button>
  )
}
