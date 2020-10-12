import styled from "styled-components"

export const Container = styled.div`
  width: 100vw;
  height: 100%;
  background-color: #d2f2f1;
`

export const ListsWrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #d2f2f1;
`

export const ItemList = styled.div`
  max-width: 70%;
  min-width: 300px;
  display: flex;
  flex-direction: column;
`

export const IconWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  h1 {
    font-size: 35px;
    color: #327fa6;
    padding-left: 10px;
  }
`

export const Separator = styled.hr`
  margin: 20px 0;
`
