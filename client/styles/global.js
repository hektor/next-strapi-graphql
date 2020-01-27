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
  }

  button > svg {
    margin-right: 0.5rem;
  }
`;
