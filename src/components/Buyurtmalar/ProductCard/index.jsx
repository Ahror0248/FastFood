import React, { useState } from "react";
import {
  Clock,
  ClockWrapper,
  Container,
  Info,
  Save,
  SaveWrapper,
  Wrapper,
  UserCard,
  GenericWrapper,
  Footer,
  FooterWrapper,
  ModalV,
  MButton,
  TimeButton,
  ClockIcon,
  NameDiv,
  Userdiv,
  User,
  NameInfo,
  UserPhone,
  Operator,
  AboutData,
  OperatorInfo,
  OperatorName,
  Location,
  LocationData,
  LocationName,
  Hr,
  ItemCost,
  Maxsulot,
  Soni,
  AllSum,
  Shaurma,
  Sandwich,
  Cola,
  ShanurmaName,
  ShaurmaPrice,
  SandName,
  SandPrice,
  ColaName,
  ColaPrice,
  Cheque,
  ClipIcon,
  ClipPrice,
  Clip,
  Truck,
  Delivery,
  DelPrice,
  DelIcon,
  Payme,
  PaymeColumn,
} from "./style";
import save from "../../../assets/icon/bookmark.svg";
import clock from "../../../assets/icon/clock.svg";
import user from "../../../assets/icon/user.svg";
import car from "../../../assets/icon/car.svg";
import payme from "../../../assets/icon/payme.svg";
import clipboard from "../../../assets/icon/clipboard.svg";
import Cancel from "../../Generic/Cancel";
import Done from "../../Generic/Done";
import { BuyurtmaContext } from "../../../context/buyurtmalar";

export const ProductCard = ({ value }) => {
  const [card, setBuyurtmaData] = BuyurtmaContext();

  const onCancel = (value) => {
    let filtered = card[value.categoriya].filter(
      (data) => data.id !== value.id
    );
    let newData = { ...card, [value.categoriya]: filtered };
    setBuyurtmaData(newData);
  };
  const onDone = (value) => {};
  const [position, setPosition] = useState("none");
  return (
    <>
      <Container onClick={() => setPosition("flex")}>
        <Wrapper align>
          <Info.OrderID>{value.orderId}</Info.OrderID>
          <SaveWrapper>
            <Save src={save} />
          </SaveWrapper>
          <ClockWrapper>
            <Clock src={clock} />
          </ClockWrapper>
          <Info.Text>
            {`${value.time.getHours()} : ${value.time.getMinutes()}`}
          </Info.Text>
        </Wrapper>
        <Wrapper flex>
          <UserCard>
            <Info.User />
            <UserCard.Titile>
              <Info.Name>{value.user.name}</Info.Name>
              <Info.Number>+998 {value.user.phone}</Info.Number>
            </UserCard.Titile>
          </UserCard>
          <UserCard space>
            <div>
              <Info.Total>Umumiy summa</Info.Total>
              <Info.Price>{value.total} UZS</Info.Price>
            </div>
            <Info.Payme />
            <Info.PaymeText>Payme</Info.PaymeText>
          </UserCard>
        </Wrapper>
        <Wrapper last>
          <FooterWrapper>
            <Footer>
              <div>
                <Info.Total>Operator:</Info.Total>
                <Info.Name>{value.operator.name}</Info.Name>
              </div>
              <Info.Total top>Filial:</Info.Total>
              <Info.Name>
                {value.filial.title}
                <br />
                {value.filial.location}
              </Info.Name>
            </Footer>
            <GenericWrapper>
              <div onClick={() => onCancel(value)}>
                <Cancel />
              </div>
              <br />
              <div onClick={() => onDone(value)}>
                <Done />
              </div>
            </GenericWrapper>
          </FooterWrapper>
        </Wrapper>
      </Container>
      <ModalV style={{ display: position, flexDirection: "column" }}>
        <MButton onClick={() => setPosition("none")}>X</MButton>
        <TimeButton>
          <Info.OrderID>{value.orderId}</Info.OrderID>
          <ClockIcon>
            <Clock src={clock} />
            <Info.Text margin>
              {`${value.time.getHours()} : ${value.time.getMinutes()}`}
            </Info.Text>
          </ClockIcon>
        </TimeButton>
        <NameDiv>
          <Userdiv>
            <User src={user} alt="user" />
            <NameInfo>{value.user.name}</NameInfo>
          </Userdiv>
          <UserPhone>+998 {value.user.phone}</UserPhone>
        </NameDiv>
        <AboutData>
          <OperatorInfo>
            <Operator>Operator:</Operator>
            <OperatorName>{value.operator.name}</OperatorName>
          </OperatorInfo>
          <Location>
            <LocationData>Filial:</LocationData>
            <LocationName>{value.filial.title}</LocationName>
          </Location>
        </AboutData>
        <Hr />
        <ItemCost>
          <Maxsulot>Maxsulotlar</Maxsulot>
          <Soni>Soni | Narxi</Soni>
        </ItemCost>
        <AllSum>
          <Shaurma>
            <ShanurmaName>Shaurma o'rtacha</ShanurmaName>
            <ShaurmaPrice>4*15 000</ShaurmaPrice>
          </Shaurma>
          <Sandwich>
            <SandName>Klab Sandwich</SandName>
            <SandPrice>2*23 000</SandPrice>
          </Sandwich>
          <Cola>
            <ColaName>Coca Cola</ColaName>
            <ColaPrice>1*9 000</ColaPrice>
          </Cola>
        </AllSum>
        <Cheque>
          <Clip>
            <ClipIcon src={clipboard} alt="icon" />
            <ClipPrice>150 000 UZS</ClipPrice>
          </Clip>
          <PaymeColumn>
            <Delivery>
              <DelIcon src={car} alt="delivery" />
              <DelPrice>5 000 UZS</DelPrice>
            </Delivery>
            <Payme src={payme} alt="payme" />
          </PaymeColumn>
        </Cheque>
      </ModalV>
    </>
  );
};
export default ProductCard;
