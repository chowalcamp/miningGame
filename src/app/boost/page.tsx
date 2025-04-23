import ComponentHeader from '@/components/common/layout/componentHeader'
import Layout from '@/components/common/layout/layout'
import BoostList from '@/components/component/boost/boostList'

export default function BoostPage() {
  return (
    <Layout>
      <ComponentHeader title="BOOST" />
      <BoostList />
    </Layout>
  )
}
