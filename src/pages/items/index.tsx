import { CheckItem, Header, Modal } from "components";
import { useRef, useState } from "react";
import { BiBed } from "react-icons/bi";
import { MdKitchen } from "react-icons/md";
import { FaShower } from "react-icons/fa";
import { FiPlus, FiMinus } from "react-icons/fi";
import { GiSofa } from "react-icons/gi";
import { setItem } from "services/item.service";
import * as S from "../../assets/styles/items/styles";
import { Item } from "core/types";
import { useListItems } from "hooks/useListItems";

export default function Items() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [currentItem, setCurrentItem] = useState<Item>();

  const [kitchenToggle, setKitchenToggle] = useState(true);
  const [bathroomToggle, setBathroomToggle] = useState(true);
  const [bedroomToggle, setBedroomToggle] = useState(true);
  const [roomToggle, setRoomToggle] = useState(true);

  const kitchenRef = useRef<HTMLDivElement | null>(null);
  const bathroomRef = useRef<HTMLDivElement | null>(null);
  const bedroomRef = useRef<HTMLDivElement | null>(null);
  const roomRef = useRef<HTMLDivElement | null>(null);

  const {
    items,
    kitchenItems,
    bathroomItems,
    bedroomItems,
    roomItems,
  } = useListItems();

  function handleModalOpen() {
    setModalOpen(true);
  }

  function handleModalClose() {
    setModalOpen(false);
  }

  function handleAddOwner(item: Item) {
    setModalTitle(item.name);
    setCurrentItem(item);
    handleModalOpen();
  }

  function handleAnonymous() {
    handleModalClose();
    updateOwner("Anônimo");
  }

  function handleMyName(myName: string) {
    if (myName.length < 2) {
      return alert('Informe seu nome ou clique em "Anônimo"');
    }

    handleModalClose();
    updateOwner(myName);
  }

  function updateOwner(ownerName: string) {
    if (!currentItem) return;
    if (ownerName.length < 2) {
      return alert('Informe seu nome ou clique em "Anônimo"');
    }
    const newItem: Item = {
      ...currentItem,
      owner: ownerName,
    };
    setItem(newItem);
  }

  return (
    <S.Container>
      <Header />

      <Modal
        open={modalOpen}
        onClose={handleModalClose}
        title={modalTitle}
        onAnonymous={handleAnonymous}
        onMyName={handleMyName}
      />

      {!items || items?.length <= 0 ? (
        <S.Loading>
          <span>Carregando...</span>
        </S.Loading>
      ) : (
        <S.ListsWrapper>
          <S.ItemList>
            <S.IconWrapper
              onClick={() => setRoomToggle((prevState) => !prevState)}
            >
              <GiSofa size={90} color="#327FA6" />
              <h1>Sala</h1>
              {roomToggle ? (
                <FiMinus size={30} color="#327FA6" />
              ) : (
                <FiPlus size={30} color="#327FA6" />
              )}
            </S.IconWrapper>

            <S.Separator />

            <S.Accordion
              ref={roomRef}
              open={roomToggle}
              height={`${roomRef.current?.scrollHeight}px`}
            >
              {roomItems.map((item) => (
                <CheckItem
                  key={item.id}
                  item={item}
                  onAddOwner={() => handleAddOwner(item)}
                />
              ))}
            </S.Accordion>
          </S.ItemList>

          <S.ItemList>
            <S.IconWrapper
              onClick={() => setBedroomToggle((prevState) => !prevState)}
            >
              <BiBed size={90} color="#327FA6" />
              <h1>Quarto</h1>
              {bedroomToggle ? (
                <FiMinus size={30} color="#327FA6" />
              ) : (
                <FiPlus size={30} color="#327FA6" />
              )}
            </S.IconWrapper>

            <S.Separator />

            <S.Accordion
              ref={bedroomRef}
              open={bedroomToggle}
              height={`${bedroomRef.current?.scrollHeight}px`}
            >
              {bedroomItems.map((item) => (
                <CheckItem
                  key={item.id}
                  item={item}
                  onAddOwner={() => handleAddOwner(item)}
                />
              ))}
            </S.Accordion>
          </S.ItemList>

          <S.ItemList>
            <S.IconWrapper
              onClick={() => setBathroomToggle((prevState) => !prevState)}
            >
              <FaShower size={90} color="#327FA6" />
              <h1>Banheiro</h1>
              {bathroomToggle ? (
                <FiMinus size={30} color="#327FA6" />
              ) : (
                <FiPlus size={30} color="#327FA6" />
              )}
            </S.IconWrapper>

            <S.Separator />
            <S.Accordion
              ref={bathroomRef}
              open={bathroomToggle}
              height={`${bathroomRef.current?.scrollHeight}px`}
            >
              {bathroomItems.map((item) => (
                <CheckItem
                  key={item.id}
                  item={item}
                  onAddOwner={() => handleAddOwner(item)}
                />
              ))}
            </S.Accordion>
          </S.ItemList>

          <S.ItemList>
            <S.IconWrapper
              onClick={() => setKitchenToggle((prevState) => !prevState)}
            >
              <MdKitchen size={90} color="#327FA6" />
              <h1>Cozinha</h1>
              {kitchenToggle ? (
                <FiMinus size={30} color="#327FA6" />
              ) : (
                <FiPlus size={30} color="#327FA6" />
              )}
            </S.IconWrapper>

            <S.Separator />
            <S.Accordion
              ref={kitchenRef}
              open={kitchenToggle}
              height={`${kitchenRef.current?.scrollHeight}px`}
            >
              {kitchenItems.map((item) => (
                <CheckItem
                  key={item.id}
                  item={item}
                  onAddOwner={() => handleAddOwner(item)}
                />
              ))}
            </S.Accordion>
          </S.ItemList>
        </S.ListsWrapper>
      )}
    </S.Container>
  );
}
