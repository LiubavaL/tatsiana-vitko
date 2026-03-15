'use client'

import { Certificate } from '@/payload-types'
import { useModal } from '@/store/modal'
import { Button, CloseButton, Dialog, Grid, Heading, Portal, Text } from '@chakra-ui/react'
import Image from 'next/image'

export default function Certificates(props: { certificates: Certificate[] }) {
  const openModal = useModal((state) => state.openModal)
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap="6" margin={6}>
      <button onClick={() => openModal('CERT_DETAILS', {})}>Open modal</button>
      {props.certificates.map((certificate) => {
        return (
          <Dialog.Root key={certificate.id} size="full" motionPreset="slide-in-bottom">
            <Dialog.Trigger asChild>
              <button>
                <Image
                  src={certificate.documentImage.url}
                  alt={certificate?.title || 'Сертификат'}
                  width={200}
                  height={100}
                />
                {certificate.title && <Heading size="md">{certificate.title}</Heading>}
              </button>
            </Dialog.Trigger>
            <Portal>
              <Dialog.Backdrop />
              <Dialog.Positioner>
                <Dialog.Content>
                  {certificate.title && (
                    <Dialog.Header>
                      <Dialog.Title>Dialog Title</Dialog.Title>
                    </Dialog.Header>
                  )}
                  <Dialog.Body>
                    <Image
                      src={certificate.documentImage.url}
                      alt={certificate?.title || 'Сертификат'}
                      width={1280}
                      height={100}
                    />
                    {certificate.decription && <Text>{certificate.decription}</Text>}
                  </Dialog.Body>
                  <Dialog.CloseTrigger asChild>
                    <CloseButton size="sm" />
                  </Dialog.CloseTrigger>
                </Dialog.Content>
              </Dialog.Positioner>
            </Portal>
          </Dialog.Root>
        )
      })}
    </Grid>
  )
}
