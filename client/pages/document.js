import { useRouter } from 'next/router'
import Query from '../apollo/query'
import DOCUMENT_QUERY from '../apollo/queries/document'

import Layout from '../components/Layout'

export const Document = () => (
  <Layout>
    <Query query={DOCUMENT_QUERY} id={useRouter().query.id}>
      {({ data: { document } }) => <h1>{document.Titel}</h1>}
    </Query>
  </Layout>
)

export default Document
