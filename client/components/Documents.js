import React from 'react'
import Link from 'next/link'
import Query from '../apollo/query'
import DOCUMENTS_QUERY from '../apollo/queries/documents'
import { formatDate } from '../utils/date'

export default () => (
	<div className="card-group">
		<div className="card -header">
			<span>Titel</span>
			<span>Beschrijving</span>
			<span>Laatst bewerkt</span>
		</div>
		<Query query={DOCUMENTS_QUERY} id={null}>
			{({ data: { documents } }) =>
				documents.map(({ id, Titel, Beschrijving, updated_at }) => (
					<Link key={id} href={{ pathname: 'document', query: { id } }}>
						<div className="card">
							<span>{Titel}</span>
							<span>{Beschrijving}</span>
							<span>{formatDate(updated_at)}</span>
						</div>
					</Link>
				))
			}
		</Query>
		<style jsx>{`
      .card-group {
        display: flex;
        flex-direction: column;
      }

      .-header {
        margin-bottom: 1rem;
        background: #eee;
      }

      .card {
        display: flex;
        align-items: center;
        border-bottom: 1px solid #eee;
        padding: 1rem;
        cursor: pointer;
      }

      .card > * {
        flex: 1;
      }
    `}</style>
	</div>
)
