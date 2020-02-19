import React from 'react'
import Layout from '../components/Layout'
import Carousel from 'nuka-carousel'
import Calendar from '../components/CustomCalendar'

export default () => {
	return (
		<Layout wrap row>
			<h1>Welkom bij Ouderenraad Gent</h1>
			<div className="container">
				<div className="news">
					<h2>Nieuws</h2>
					<div className="slider">
						<Carousel autoplay={true} autoplayInterval={5000}>
							<div className="news-card">
								<div className="card-header">
									<h3>News 01</h3>
									<small>{Date.now()}</small>
								</div>
								<div className="card-body">
									<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, harum possimus similique voluptatem porro quidem corrupti perferendis dolores iusto voluptas mollitia odio unde, ipsum quaerat suscipit modi debitis, magnam deleniti.Recusandae accusamus neque quae libero consequuntur cupiditate vero, totam odio ipsum tempora dolorum nihil necessitatibus delectus distinctio ducimus consectetur, iste, cumque eos fugiat voluptate excepturi exercitationem inventore? Saepe, corrupti odio!</p>
								</div>
							</div>
							<div className="news-card">
								<h3>News 02</h3>
							</div>
						</Carousel>
					</div>
				</div>
				<div className="calendar">
					<h2>Kalender</h2>
					<Calendar />
				</div>
				<style jsx>{`
      .container {
        display: flex;
        flex-wrap: wrap;
      }

      .container > * {
        flex: 1;
        display: flex;
        flex-direction: column;
        min-width: 20rem;
      }

      .slider {
        display: flex;
        background: var(--color-primary);
        border-radius: var(--border-radius);
        min-height: 62vh;
      }

      .news-card {
        display: flex;
        flex-direction: column;
        color: #fff;
      }

      .card-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: .8rem 1.6rem;
        background: var(--color-primary);
        border-radius: var(--border-radius);
      }

      .card-body {
        padding: .8rem 1.6rem;
      }

      .calendar {
        flex: 1;
        display: flex;
      }

			@media (min-width: 1024px) {
        .slider { margin-right: 2rem; }
      }

    `}</style>
			</div>
		</Layout>
	)
}

