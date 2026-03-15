import dynamic from 'next/dynamic'

const modalIds = {
  CERT_DETAILS: 'CERT_DETAILS',
} as const

export type ModalType = keyof typeof modalIds

export const modalMap: Record<ModalType, React.ComponentType<any>> = {
  [modalIds.CERT_DETAILS]: dynamic(() => import('@/app/components/modals/CertificateDetailsModal')),
}
