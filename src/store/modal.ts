import { ModalType } from '@/app/components/modals/registry'
import { create } from 'zustand'

type OpenedModal = {
  id: ModalType
  data?: Record<string, unknown>
}
interface UseModals {
  openModals: Array<OpenedModal>
  openModal: (id: ModalType, data?: Record<string, unknown>) => void
  closeModal: () => void
  isModalOpen: (id: ModalType) => boolean
}

export const useModal = create<UseModals>((set, get) => ({
  openModals: [],
  isModalOpen: (modalId) => get().openModals.some(({ id }) => id === modalId),
  openModal: (id, data) =>
    !get().isModalOpen(id) && set((state) => ({ openModals: [...state.openModals, { id, data }] })),
  closeModal: (modalId?: ModalType) =>
    set((state) => ({
      openModals: modalId
        ? state.openModals.filter(({ id }) => id !== modalId)
        : state.openModals.slice(0, -1),
    })),
}))
