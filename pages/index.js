import Head from 'next/head'

import Layout from '@components/layout'
import { SITE_TITLE } from '@lib/constants'

export default function Index() {
  return (
    <>
      <Layout>
        <Head>
          <title>{SITE_TITLE}</title>
        </Head>
      </Layout>
    </>
  )
}
