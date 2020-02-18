import React from 'react'
import Link from 'next/link'
import { signout } from '../auth'
import cookie from 'js-cookie'
import { Bell, Phone, LogOut } from 'react-feather'

export default () => {
	return (
		<header>
			<div className="brand">
				<div>logo</div>
			</div>
			<button>
				<Bell />
				Noodnummers
			</button>

			{cookie.get('token') ? (
				<button onClick={signout}>
					<LogOut />
					Log uit
				</button>
			) : (
				<button>
					<Phone />
					<Link href="">
						<a>Contact</a>
					</Link>
				</button>
			)}
			<style jsx>{`
				header {
					display: flex;
					align-items: center;
					justify-content: space-between;
					background: #fff;
					border-bottom: 1px solid #eee;
				}

				.brand {
					padding: 0.5rem;
				}

				button {
					border: 1px solid #eee;
					border-width: 0px 1px;
					background: transparent;
				}

				.brand {
					display: flex;
					align-items: center;
					margin-right: auto;
				}
			`}</style>
		</header>
	)
}
