import React from 'react'
import Layout from '../components/Layout'
import {Mail, Phone} from 'react-feather'

export default () => (
	<Layout wrap>
		<h1>Communicatie & info</h1>
		<div className='container'>
			<div className="contact">
				<div className='contact-details'><h2>Contactgegevens</h2>
					<h3>Telefoon</h3>
					<span>0490 12 34 56</span>
					<h3>Email</h3>
					<span>info@ouderenraad.gent</span>
					<h3>Adres</h3>
					<span>Straatnaam 2<br />
					9000, Gent</span>
					<a className='btn -outline -primary' href="https://goo.gl/maps/8aR6AzQATyzkhv4V8" target='_blank' rel='noopener noreferrer'>Routebeschrijving</a>
				</div>
				<div className="email-action -primary-bg">
					<h2>contact opnemen?</h2>
					<div className="action-group">
						<div className="action">
							<Mail size={48} style={{marginright: '2rem'}} />
							<span>info@ouderenraad.gent</span> 
						</div>
						<div className="action">
							<Phone size={48} />
							<span>0490 12 34 56</span>
						</div>
					</div>
				</div>
			</div>
			<div>
				<h2>Info</h2>
				<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias repellat ad dolorum minima excepturi dolores recusandae consequuntur adipisci, fuga dicta quasi praesentium illum deleniti, nulla quam est rerum veniam enim.
          Veritatis, consequuntur sed.<br /> Doloremque nulla aperiam dignissimos temporibus sint earum voluptatum deserunt, quia quidem quibusdam! Assumenda minima, ipsa eaque fugit dolore deserunt cum dolorum laborum alias voluptatem, magni qui dolorem!
        Voluptates ad itaque nihil perferendis quae illo sunt, maxime ratione porro iure, expedita fugiat deserunt ipsam animi voluptatum sapiente vitae commodi voluptatem. Labore id qui vitae magnam maxime doloremque quod.</p>
			</div>
		</div>
		<style jsx>{`
      .container {
        flex: 1;
        display: flex;
        flex-wrap: wrap;
      }
      
      .container > * {
        flex: 1;
        display: flex;
        flex-direction: column;
        min-width: 20rem;
      }
      
			@media (min-width: 1024px) {
        .contact { margin-right: 2rem; }
      }

      .contact {
        display: flex;
        flex-direction: column;
      }

      .contact-details {
        flex: 1;
      }

      .email-action {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 2rem;
        border-radius: var(--border-radius);
      }

      .action-group {
        flex: 1;
        display: flex;
        min-height: 6.4rem;
      }

      .action {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
      }
    `}
		</style>
	</Layout>
)
