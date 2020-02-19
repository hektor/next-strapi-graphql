import React, { useState } from 'react'
import Link from './Link'
import Search from '../components/Search'
import {Menu, X} from 'react-feather'

export default () => {
	const [toggle, setToggle] = useState(false)
	return (
		<>
			<button
				className="toggle"
				onClick={() => setToggle(!toggle)}
			>
				<div className="icon">
					{toggle ? <X /> : <Menu />} 
				</div>
			</button>
			<nav>
				<Search />
				<div className="nav-group">
					<Link href="/">
						<a>Ouderenraad</a>
					</Link>
					<Link href="/communicatie-info">
						<a>Communicatie & info</a>
					</Link>
					<Link href="">
						<a>Gezondheid & zorg</a>
					</Link>
					<Link href="">
						<a>Infrastructuur</a>
					</Link>
					<Link href="">
						<a>Mobiliteit & transport</a>
					</Link>
					<Link href="">
						<a>Respect & inclusie</a>
					</Link>
					<Link href="">
						<a>Wonen</a>
					</Link>
					<Link href="">
						<a>Participatie</a>
					</Link>
					<Link href="/documents, /document">
						<a>Documenten</a>
					</Link>
				</div>
			</nav>
			<style jsx>{`
      
				nav {
          display: flex;
					position: absolute;
					bottom: 0;
					width: 100vw;
					height: 50vh;
					transform: translateY(${toggle ? '0' : '50vh'});
					flex-direction: column;
					background: #fff;
          transition:  0.15s cubic-bezier(0.4, 0.14, 0.3, 1); 
				}

        .nav-group {
          overflow-y: auto;
        }

				a {
					flex: 1;
					text-decoration: none;
					display: flex;
					align-items: center;
          padding: 1.6rem;
          border-bottom: 1px solid #eee;
          transition: 11ms cubic-bezier(0.2, 0.2, 0.38, 0.9);
				}

        a:hover {
          background: #eee;
        }

				.toggle {
          display: block;
          position: absolute;
          bottom: ${!toggle ? '0' : '46vh'};
					right: 0;
          width: 4rem;
          height: 4rem;
          padding: .8rem;
          padding-bottom: .4rem;
          margin: 2vw;
          border-radius: .8rem;
          outline: none;
          z-index: 1;
          transition:  0.15s cubic-bezier(0.4, 0.14, 0.3, 1); 
				}

				@media (min-width: 768px) {
					nav {
						position: static;
						width: auto;
            transform: none;
            height: 100%;
						display: flex;
					}

					.toggle {
						display: none;
					}

					.active {
						font-weight: bold;
						border-right: 2px solid;
					}
				}
			`}</style>
		</>
	)
}
