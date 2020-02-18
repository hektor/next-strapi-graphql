import css from 'styled-jsx/css'

export default css.global`
	:root {
		--base: 1rem;
		--font: Inter, Helvetica, Arial;
		--col: 12;
		--border-radius: 0.25rem;
    --color-primary: #63adf2 }

	body {
		font-family: var(--font);
		font-size: var(--base);
	}

  .hidden,
  [hidden] {
      display: none !important;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }
  
	button {
		display: flex;
		flex-direction: row;
		align-items: center;
		padding: 0.5rem 1rem 0.5rem 0.5rem;
    outline: none;
		border: none;
    transition: .1s cubic-bezier(0.2, 0, 0,38, 0.9)
	}

	button > svg {
		height: 1rem;
		margin-right: 0.5rem;
	}

  a {
    outline: none;
    transition: .1s cubic-bezier(0.2, 0, 0,38, 0.9)
  }

	.-outline {
		background: transparent;
		border: 1px solid;
	}

	form {
		display: flex;
		flex-direction: column;
	}

	label {
		margin-bottom: 0.5rem;
	}

	input,
	select,
	textarea {
		padding: 1rem;
		border-radius: var(--border-radius);
		border: 1px solid #eee;
	}

  h1,h2,h3,h4,h5,h6 {
    font-weight: 400;
  }
`
