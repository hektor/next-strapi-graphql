import gql from 'graphql-tag'

const DOCUMENTS_QUERY = gql`
  query Documents {
    documents {
      id
      Titel
      Beschrijving
      updated_at
    }
  }
`

export default DOCUMENTS_QUERY
