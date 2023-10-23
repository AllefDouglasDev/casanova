import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;

  input {
    margin-bottom: 30px;
    height: 40px;
    font-size: 16px;
    padding: 0 10px 0 10px;
  }

  select {
    margin-bottom: 30px;
    height: 40px;
    font-size: 16px;
  }

  button {
    font-size: 16px;
    height: 40px;
    cursor: pointer;
  }

  label {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
  }
`;

export const Message = styled.span<{ kind: string }>`
  font-size: 16px;
  font-weight: 500;
  padding-top: 30px;

  color: ${({ kind }) => {
    switch (kind) {
      case "danger":
        return "red";
      default:
        return "green";
    }
  }};
`;

export const GoToListWrapper = styled.div`
  padding: 0 20px 20px;

  button {
    width: 100%;
  }
`;

export const CategoriesWrapper = styled.div`
  padding: 0 20px 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 780px) {
    grid-template-columns: 1fr;
  }

  summary {
    cursor: pointer;
    font-size: 18px;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  li {
    list-style: none;
    padding-left: 20px;
    display: flex;
    align-items: center;
    gap: 10px;

    :first-of-type {
      margin-top: 20px;
    }
  }

  span {
    font-size: 16px;

    &.empty {
      color: #aeaeae;
      display: inline-block;
      margin-top: 20px;
    }
  }

  button {
    font-size: 16px;
    background: transparent;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
