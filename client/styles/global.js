import css from "styled-jsx/css";

export default css.global`
	:root {
		--base: 1rem;
		--font: Inter, Helvetica, Arial;
		--col: 12;
		--border-radius: 0.25rem;
	}

	body {
		font-family: var(--font);
		font-size: var(--base);
	}

	button {
		display: flex;
		flex-direction: row;
		align-items: center;
		padding: 0.5rem 1rem 0.5rem 0.5rem;
		border: none;
	}

	.-outline {
		background: transparent;
		border: 1px solid;
	}

	button > svg {
		height: 1rem;
		margin-right: 0.5rem;
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
`;
