import styled from "styled-components"

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
`

export const Message = styled.span<{ kind: string }>`
  font-size: 16px;
  font-weight: 500;
  padding-top: 30px;

  color: ${({ kind }) => {
    switch (kind) {
      case "danger":
        return "red"
      default:
        return "green"
    }
  }};
`

export const GoToListWrapper = styled.div`
  padding: 0 20px 20px;

  button {
    width: 100%;
  }
`
