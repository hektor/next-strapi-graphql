import css from "styled-jsx/css";
export default css.global`
  body {
    font-family: Inter;
  }

  form {
    display: flex;
    flex-direction: column;
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
`;
