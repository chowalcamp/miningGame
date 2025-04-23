'use client'

import ComponentHeader from '@/components/common/layout/componentHeader'
import Layout from '@/components/common/layout/layout'
import InviteImg from '@/components/component/invite/invite'

export default function InvitePage() {
  return (
    <Layout>
      <ComponentHeader title="INVITE" />
      <InviteImg />
    </Layout>
  )
}
