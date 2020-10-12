import { BiHomeHeart } from "react-icons/bi"
import { GiBeveledStar } from "react-icons/gi"

import { HouseIcon } from "assets/icons"
import { HeaderContainer, CoupleName, Title, StartWrapper } from "./styles"

export function Header() {
  return (
    <HeaderContainer>
      <CoupleName>
        <BiHomeHeart size={30} color="#8a6365" />
        <span>Allef {"&"} Sinara</span>
      </CoupleName>

      <HouseIcon size={80} />

      <StartWrapper top="70px" left="40px">
        <GiBeveledStar size={14} color="white" />
      </StartWrapper>

      <StartWrapper top="105px" left="80px">
        <GiBeveledStar size={16} color="white" />
      </StartWrapper>

      <StartWrapper top="70px" left="125px">
        <GiBeveledStar size={22} color="white" />
      </StartWrapper>

      <StartWrapper top="100px" right="125px">
        <GiBeveledStar size={18} color="white" />
      </StartWrapper>

      <StartWrapper top="115px" right="45px">
        <GiBeveledStar size={19} color="white" />
      </StartWrapper>

      <StartWrapper top="40px" right="25px">
        <GiBeveledStar size={14} color="white" />
      </StartWrapper>

      <Title>
        LISTA DE CHÁ DE
        <br />
        <span>CASA NOVA</span>
      </Title>
    </HeaderContainer>
  )
}
