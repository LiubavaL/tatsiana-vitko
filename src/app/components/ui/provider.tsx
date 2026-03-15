'use client'

import { ChakraProvider, defaultSystem, Dialog, Portal } from '@chakra-ui/react'
import { ColorModeProvider, type ColorModeProviderProps } from './color-mode'
import { useModal } from '@/store/modal'
import { modalMap } from '../modals/registry'

export function Provider(props: ColorModeProviderProps) {
  const openModals = useModal((state) => state.openModals)
  const closeModal = useModal((state) => state.closeModal)

  return (
    <>
      <ChakraProvider value={defaultSystem}>
        <ColorModeProvider {...props} />
        {openModals.map(({ id, data }) => {
          const ModalComponent = modalMap[id]
          return (
            <Dialog.Root
              key={id}
              lazyMount
              defaultOpen
              onOpenChange={(details) => !details.open && closeModal()}
            >
              <Portal>
                <Dialog.Backdrop />
                <ModalComponent {...data} />
              </Portal>
            </Dialog.Root>
          )
        })}
      </ChakraProvider>
    </>
  )
}
