import dynamic from 'next/dynamic'

type Props = {
  name: string
}

export default function Icon({ name }: Props) {
  const DynamicIcon = dynamic(() => import(`@/assets/icons/${name}.svg`))
  return <DynamicIcon />
}
