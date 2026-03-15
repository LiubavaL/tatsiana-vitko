import { Field } from '@chakra-ui/react'

export default function ErrorText(props: { text?: string } = { text: 'Поле обязательно' }) {
  return <Field.ErrorText>{props.text}</Field.ErrorText>
}
