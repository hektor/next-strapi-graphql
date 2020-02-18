import React from 'react'
import Layout from '../components/Layout'
import Carousel from 'nuka-carousel'

export default () => (
	<Layout>
		<div className="page-container">
			<h1>Welkom bij Ouderenraad Gent</h1>
			<div className="news">
				<h2>Nieuws</h2>
				<Carousel autoplay={true} autoplayInterval={5000}> 
					<div className="news-card">
						<h3>News 01</h3>
					</div>
					<div className="news-card">
						<h3>News 02</h3>
					</div>
				</Carousel>
			</div>
			<div className="calendar">
				<h2>Kalender</h2>
			</div>
			<style jsx>{`

      .page-container {
        display: flex;
        flex: 1;
      }

      div {
        display: flex;
        flex-direction: column;
        flex: 1;
      }

      .news-card {
        padding: 8rem 2rem;
        background: var(--color-primary);
        border-radius: var(--border-radius);
      }
    `}</style>
		</div>
	</Layout>
)
