import config from '@/payload.config'
import { getPayload } from 'payload'
import Certificates from '@/app/components/Certificates'

export default async function CertificatesServer() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const certificates = await payload.find({
    collection: 'certificates',
    depth: 2,
    page: 1,
    limit: 10,
    pagination: false,
  })

  return <Certificates certificates={certificates.docs} />
}
