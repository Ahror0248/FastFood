import React, { useState } from "react";
import {
  Container,
  Dates,
  Wrapper,
  Image,
  Title,
  Action,
  ImageText,
  ButtonAll,
  RestoreButton,
  Restore,
  RestoreIcon,
  Input,
  Modal,
  ButtonX,
  ButtunInput,
  Inputs,
  WrapperIcons,
  Icons,
} from "./style";
import { data } from "../../../mock/mahsulotlar";
import Delete from "../../Generic/Delete";
import Edit from "../../Generic/Edit";
import Cancel from "../../Generic/Cancel";
import restoreIcon from "../../../assets/icon/restoreIcon.svg";
import Save from "../../Generic/Save";
import basket from "../../../assets/icon/basket.svg";
import kategro from "../../../assets/icon/kategro.svg";
import price from "../../../assets/icon/price.svg";

export const DND = (props) => {
  const [baza, setBaza] = useState(data);
  const [restore] = useState(data);
  const [categoriya, setCategoriya] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [qoshimcha, setQoshimcha] = useState("");
  const [selected, setSelected] = useState(null);
  const [currentCard, setCurrentCard] = useState(null);

  const onDelete = (value) => {
    const filtered = baza.filter((data) => data.id !== value.id);
    setBaza(filtered);
  };
  const onRestore = () => {
    setBaza(restore);
  };
  const onEdit = (value) => {
    setSelected(value.id);
    setTitle(value.title);
    setCategoriya(value.categoriya);
    setPrice(value.price);
    setQoshimcha(value.qoshimcha);
  };
  const dragStartHandler = (e, value) => {
    setCurrentCard(value);
  };
  const dragEndHandler = (e) => {
    e.target.style.background = "white";
  };
  const dragOverHandler = (e) => {
    e.preventDefault();
    e.target.style.background = "lightgray";
  };
  const dropHandler = (e, value) => {
    e.preventDefault();
    setBaza(
      baza.map((c) => {
        if (c.id === value.id) {
          return { ...c, order: currentCard.order };
        }
        if (c.id === currentCard.id) {
          return { ...c, order: value.order };
        }
        return c;
      })
    );
    e.target.style.background = "white";
  };
  const sortCards = (a, b) => {
    if (a.order < b.order) {
      return 1;
    } else {
      return -1;
    }
  };
  const onSave = () => {
    let newData = baza.map((value) =>
      value.id === selected
        ? {
            ...value,
            title: title,
            categoriya: categoriya,
            price: price,
            qoshimcha: qoshimcha,
            selected: value.id,
          }
        : value
    );
    setBaza(newData);
    setSelected(null);
  };

  return (
    <>
      <Container>
        {baza.length !== 0 ? (
          baza.sort(sortCards).map((value) => (
            <Wrapper
              onDragStart={(e) => dragStartHandler(e, value)}
              onDragLeave={(e) => dragEndHandler(e)}
              onDragEnd={(e) => dragEndHandler(e)}
              onDragOver={(e) => dragOverHandler(e)}
              onDrop={(e) => dropHandler(e, value)}
              draggable={true}
              key={value.id}
            >
              <Dates>
                <ImageText>
                  <Image src={value.Img} />
                  <Title left="true">
                    {selected === value.id ? (
                      <Input
                        onChange={(e) => setTitle(e.target.value)}
                        type="text"
                        value={title}
                      />
                    ) : (
                      value.title
                    )}
                  </Title>
                </ImageText>
                <Title>
                  {selected === value.id ? (
                    <Input
                      onChange={(e) => setCategoriya(e.target.value)}
                      type="text"
                      value={categoriya}
                    />
                  ) : (
                    value.categoriya
                  )}
                </Title>
                <Title>
                  {selected === value.id ? (
                    <Input
                      onChange={(e) => setPrice(e.target.value)}
                      type="text"
                      value={price}
                    />
                  ) : (
                    value.price + "UZS"
                  )}
                </Title>
                <Title>
                  {selected === value.id ? (
                    <Input
                      type="text"
                      onChange={(e) => setQoshimcha(e.target.value)}
                      value={qoshimcha}
                    />
                  ) : (
                    value.qoshimcha
                  )}
                </Title>
                <Action>
                  <div onClick={() => onDelete(value)}>
                    <Delete />
                  </div>
                  {selected === value.id ? (
                    <div style={{ display: "flex" }}>
                      <div onClick={onSave}>
                        <Save />
                      </div>
                      <div onClick={() => setSelected(null)}>
                        <Cancel />
                      </div>
                    </div>
                  ) : (
                    <div onClick={() => onEdit(value)}>
                      <Edit />
                    </div>
                  )}
                </Action>
              </Dates>
            </Wrapper>
          ))
        ) : (
          <ButtonAll onClick={onRestore}>
            <RestoreButton>
              <Restore className="btn-pill">
                <span>
                  <RestoreIcon src={restoreIcon} />
                  Restore
                </span>
              </Restore>
            </RestoreButton>
          </ButtonAll>
        )}
      </Container>
      {props.showModal && (
        <Modal>
          <ButtonX onClick={() => props.onModalCancel()}>X</ButtonX>
          <ButtunInput>
            <WrapperIcons>
              <Inputs placeholder="Maxsulotlarni kiritin..." />
              <Icons src={basket} />
            </WrapperIcons>
            <WrapperIcons>
              <Inputs placeholder="Kategoriyani kiritin..." />
              <Icons src={kategro} />
            </WrapperIcons>
            <WrapperIcons>
              <Inputs placeholder="Narxni kiritin..." />
              <Icons src={price} />
            </WrapperIcons>
            <Inputs />
          </ButtunInput>

          <ButtonAll width="true" onClick={restore}>
            <RestoreButton>
              <Restore width="true" className="btn-pill">
                <span>
                  <RestoreIcon src={restoreIcon} />
                  Restore
                </span>
              </Restore>
            </RestoreButton>
          </ButtonAll>
        </Modal>
      )}
    </>
  );
};
export default DND;
