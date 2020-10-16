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

export const IconWrapper = styled.a`
  width: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;

  h1 {
    flex: 1;
    font-size: 35px;
    color: #327fa6;
    padding-left: 10px;
  }
`

export const Separator = styled.hr`
  margin: 20px 0;
`

interface AccordionProps {
  open?: boolean
  height: string
}

export const Accordion = styled.div<AccordionProps>`
  overflow: hidden;
  max-height: ${({ open, height }) => (open ? height : "0px")};
  transition: max-height 0.4s ease-out;
`

export const Loading = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: center;

  span {
    font-size: 22px;
    color: #327fa6;
  }
`
