import React from 'react'
import Layout from '../components/Layout'
import Carousel from 'nuka-carousel'

export default () => (
	<Layout>
			<div className="news">
				<h2>Nieuws</h2>
				<div className="slider">
					<Carousel autoplay={true} autoplayInterval={5000}> 
						<div className="news-card">
              <h3>News 01</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, harum possimus similique voluptatem porro quidem corrupti perferendis dolores iusto voluptas mollitia odio unde, ipsum quaerat suscipit modi debitis, magnam deleniti.Recusandae accusamus neque quae libero consequuntur cupiditate vero, totam odio ipsum tempora dolorum nihil necessitatibus delectus distinctio ducimus consectetur, iste, cumque eos fugiat voluptate excepturi exercitationem inventore? Saepe, corrupti odio!</p>
						</div>
						<div className="news-card">
							<h3>News 02</h3>
						</div>
					</Carousel>
				</div>
			</div>
			<div className="calendar">
				<h2>Kalender</h2>
			</div>
			<style jsx>{`

      .page-container > * {
        display: flex;
      }

      .news {
        flex: .25;
        margin-right: 4rem;
      }

      .slider {
        flex: 0.5;
        display: flex;
        background: var(--color-primary);
        border-radius: var(--border-radius);
      }

      .news-card {
        display: flex;
        flex-direction: column;
        padding: 2vw 2vw;
        color: #fff;
      }
    `}</style>
	</Layout>
)

