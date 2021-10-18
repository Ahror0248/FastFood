import styled from "styled-components";
import { ReactComponent as user } from "../../../assets/icon/user.svg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border-radius: 6px;
  width: 100%;
  height: 430px;
  max-height: fit-content;
  padding: 0 20px 20px 20px;
  margin-bottom: 10px;
  transition: all 0.3s;
  :hover {
    box-shadow: 0px 20px 25px rgba(176, 177, 181, 0.432802);
  }
  @media (max-width: 1450px) {
    padding: 0 15px 15px 15px;
  }
  @media (max-width: 1580px) {
    height: 480px;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: ${({ flex }) => flex && "column"};
  padding: 20px;
  width: 100%;
  align-items: ${({ align }) => align && "center"};
  padding-bottom: ${({ last }) => !last && "25px"};
  border-bottom: ${({ last }) => !last && "1px solid #d9d7d7"};
`;
export const Info = styled.div`
  display: flex;
`;
Info.OrderID = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 80px;
  max-width: fit-content;
  height: 36px;
  background: #20d472;
  border-radius: 18px;
  font-family: SFProDisplay;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.466667px;
  color: #ffffff;
  cursor: pointer;
  margin-right: 25px;
  @media (max-width: 1900px) {
    width: 60px;
    height: 30px;
    margin-right: 15px;
  }
  @media (max-width: 1600px) {
    width: 50px;
    height: 25px;
    margin-right: 10px;
  }
  @media (max-width: 1500px) {
    width: 40px;
    height: 30px;
    margin-right: 5px;
  }
  @media (max-width: 1300px) {
    width: 30px;
    height: 30px;
    margin-right: 5px;
  }
`;
Info.User = styled(user)`
  width: 24px;
  height: 24px;
  margin-right: 22px;
`;
export const SaveWrapper = styled.div`
  width: 36px;
  height: 36px;
  background: #edeff3;
  border-radius: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  @media (max-width: 1900px) {
    width: 40px;
    height: 30px;
  }
  @media (max-width: 1600px) {
    width: 20px;
    height: 20px;
  }
`;
export const Save = styled.img`
  width: 14px;
  height: 16px;
  @media (max-width: 1600px) {
    width: 12px;
    height: 12px;
  }
`;
export const ClockWrapper = styled.div`
  display: flex;
  margin-left: auto;
  align-items: center;
`;
export const Clock = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 5px;
  @media (max-width: 1900px) {
    width: 20px;
    height: 20px;
  }
  @media (max-width: 1900px) {
    width: 17px;
    height: 17px;
  }
`;
Info.Text = styled.div`
  font-family: SFProDisplay;
  font-size: 22px;
  line-height: 16px;
  color: #2d3a45;
  margin-top: ${({ margin }) => margin && "3px"};
  @media (max-width: 1900px) {
    font-size: 18px;
  }
  @media (max-width: 1700px) {
    font-size: 15px;
  }
  @media (max-width: 1550px) {
    font-size: 13px;
  }
`;
Info.Name = styled.div`
  font-family: SFProDisplay;
  font-size: 23px;
  line-height: 20px;
  letter-spacing: 0.533333px;
  color: #2d3a45;
  @media (max-width: 1900px) {
    font-size: 19px;
  }
  @media (max-width: 1700px) {
    font-size: 15px;
  }
`;
Info.Number = styled.div`
  font-family: SFProDisplay;
  font-size: 17px;
  line-height: 18px;
  letter-spacing: 0.4px;
  color: #2d3a45;
  mix-blend-mode: normal;
  opacity: 0.7;
  margin: 5px 0 20px 0;
  @media (max-width: 1900px) {
    font-size: 15px;
  }
  @media (max-width: 1700px) {
    font-size: 13px;
  }
  @media (max-width: 1500px) {
    font-size: 10px;
  }
`;
Info.Total = styled.div`
  font-family: SFProDisplay;
  font-size: 17px;
  line-height: 18px;
  letter-spacing: 0.366667px;
  color: #8d9ba8;
  margin-bottom: 5px;
  margin-top: ${({ top }) => top && "20px"};
  @media (max-width: 1900px) {
    font-size: 13px;
  }
`;
Info.Price = styled.div`
  font-family: SFProDisplay bold;
  font-size: 25px;
  line-height: 18px;
  letter-spacing: 0.666667px;
  color: #2d3a45;
  @media (max-width: 1900px) {
    font-size: 20px;
  }
  @media (max-width: 1412px) {
    font-size: 18px;
  }
`;
export const UserCard = styled.div`
  display: flex;
  margin-top: ${({ space }) => space && "20px"};
`;
UserCard.Titile = styled.div`
  display: flex;
  flex-direction: column;
`;
Info.Payme = styled.div`
  width: 15px;
  height: 15px;
  background: #14e5e4;
  border-radius: 50%;
  cursor: pointer;
  margin-left: auto;
  margin-right: 5px;
  @media (max-width: 1900px) {
    width: 13px;
    height: 13px;
  }
`;
Info.PaymeText = styled.div`
  font-family: SFProDisplay;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.466667px;
  color: #2d3a45;
  cursor: pointer;
  @media (max-width: 1900px) {
    font-size: 12px;
  }
`;
export const GenericWrapper = styled.div`
  display: flex;
  flex-direction: ${({done})=> done ? 'row': 'column'};
  margin-left: ${({done})=> done? '0':"auto"};
  justify-content: ${({done})=> done? 'center':'space-around'};
  margin-top: ${({done})=>done && '40px'};
`;
export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
export const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;
export const ModalV = styled.div`
  position: absolute;
  right: 0;
  /* position: sticky; */
  top: 78px;
  width: 400px;
  height: 100vh;
  background-color: #fff;
  border: 1px solid red;
  z-index: 2;
  padding: 30px 0 43px 0;
  box-sizing: border-box;
`;

export const MButton = styled.button`
  width: 40px;
  height: 50px;
  margin-left: -40px;
  margin-top: -20px;
  border-radius: 50px 0 0 50px;
  outline: none;
  border: none;
  background-color: #f1f1f1;
`;

export const TimeButton = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 1px;
  align-items: center;
  padding: 0 31px;
`;

export const ClockIcon = styled.div`
  display: flex;
  align-items: "center";
  justify-content: center;
`;

export const NameDiv = styled.div`
  margin: 0 auto;
  margin-top: 50px;
  width: 88%;
  height: 100px;
  background-color: #edeff3;
  mix-blend-mode: normal;
  border-radius: 6px;
  padding: 23px 0 0 22px;
`;

export const Userdiv = styled.div`
  display: flex;
`;

export const User = styled.img``;

export const NameInfo = styled.p`
  font-family: SFProDisplay;
  font-size: 24px;
  line-height: 24px;
  letter-spacing: 0.6px;
  color: #2d3a45;
  margin-left: 15px;
`;

export const UserPhone = styled.p`
  margin: 7px 0 0 30px;
  font-size: 20px;
  line-height: 18px;
  letter-spacing: 0.533333px;
  color: #2d3a45;
  mix-blend-mode: normal;
  opacity: 0.7;
`;

export const AboutData = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 40px 24px 0 24px;
`;

export const OperatorInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Operator = styled.p`
  font-size: 15px;
  line-height: 18px;
  letter-spacing: 0.433333px;
  color: #8d9ba8;
`;

export const OperatorName = styled.p`
  font-size: 18px;
  line-height: 20px;
  letter-spacing: 0.533333px;
  color: #2d3a45;
`;

export const Location = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LocationData = styled.p`
  font-size: 15px;
  line-height: 18px;
  letter-spacing: 0.433333px;
  color: #8d9ba8;
`;

export const LocationName = styled.p`
  font-size: 18px;
  line-height: 20px;
  letter-spacing: 0.533333px;
  color: #2d3a45;
`;

export const Hr = styled.hr`
  mix-blend-mode: normal;
  opacity: 0.2;
  color: #979797;
  margin: 30px 24px 35px 24px;
`;
export const ItemCost = styled.div`
  width: 100%;
  height: 30px;
  background: #f9fafb;
  padding: 0 105px 0 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 2px 2px rgba(174, 176, 181, 0.314986);
`;

export const Maxsulot = styled.p`
  font-size: 13px;
  line-height: 20px;
  letter-spacing: 0.333333px;
  color: #8d9ba8;
  text-transform: uppercase;
`;

export const Soni = styled.p`
  font-size: 13px;
  line-height: 20px;
  letter-spacing: 0.333333px;
  color: #8d9ba8;
  text-transform: uppercase;
`;

export const AllSum = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Shaurma = styled.div`
  display: flex;
  padding: 18px 114px 0 24px;
  justify-content: space-between;
`;

export const ShanurmaName = styled.p`
  font-size: 16px;
  line-height: 18px;
  letter-spacing: 0.466667px;
  color: #2d3a45;
`;

export const ShaurmaPrice = styled.div`
  font-size: 16px;
  line-height: 18px;
  letter-spacing: 0.466667px;
  color: #2d3a45;
`;

export const Sandwich = styled.div`
  display: flex;
  padding: 18px 113px 0 24px;
  justify-content: space-between;
`;

export const SandName = styled.p`
  font-size: 16px;
  line-height: 18px;
  letter-spacing: 0.466667px;
  color: #2d3a45;
`;

export const SandPrice = styled.p`
  font-size: 16px;
  line-height: 18px;
  letter-spacing: 0.466667px;
  color: #2d3a45;
`;

export const Cola = styled.div`
  display: flex;
  padding: 18px 123px 0 24px;
  justify-content: space-between;
`;

export const ColaName = styled.p`
  font-size: 16px;
  line-height: 18px;
  letter-spacing: 0.466667px;
  color: #2d3a45;
`;

export const ColaPrice = styled.p`
  font-size: 16px;
  line-height: 18px;
  letter-spacing: 0.466667px;
  color: #2d3a45;
`;

export const Cheque = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  margin-top: 135px;
  width: 88%;
  height: 120px;
  background: #edeff3;
  mix-blend-mode: normal;
  border-radius: 6px;
  padding: 25px 35px 0 21px;
`;

export const Clip = styled.div`
  display: flex;
`;

export const ClipIcon = styled.img`
  width: 14px;
  height: 18px;
  margin-right: 11px;
`;

export const ClipPrice = styled.p`
  font-size: 16px;
  line-height: 18px;
  letter-spacing: 0.466667px;
  color: #2d3a45;
`;

export const Delivery = styled.div`
  display: flex;
`;

export const DelIcon = styled.img`
  width: 18px;
  height: 15px;
`;

export const DelPrice = styled.p`
  font-size: 16px;
  line-height: 18px;
  letter-spacing: 0.466667px;
  color: #2d3a45;
  margin-left: 11px;
`;

export const PaymeColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Payme = styled.img`
  width: 65px;
  height: 25px;
  margin-top: 18px;
`;