'use client'

import { Stack, Field, Input, Button, Textarea, Flex } from '@chakra-ui/react'
import { useState } from 'react'
import ErrorText from '../../ui/error-text'

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    inquiry: '',
  })
  function onSubmit() {}

  return (
    <form onSubmit={onSubmit}>
      <Stack gap="6" css={{ '--field-label-width': '96px' }}>
        <Flex gap="4">
          <Field.Root required invalid>
            <Input placeholder="Ваше имя" />
          </Field.Root>
          <Field.Root required>
            <Input placeholder="me@example.com" />
            <ErrorText />
          </Field.Root>
        </Flex>

        <Field.Root required>
          <Textarea placeholder="Опишите ваш запрос" height={'200px'} />
        </Field.Root>

        <Button type="submit" size="lg" rounded="2xl">
          Отправить
        </Button>
      </Stack>
    </form>
  )
}
