import { styled } from "styled-components";
import { FiSearch } from "react-icons/fi";
import admin from "../assets/png/Asset1.png";
import { SiGoogleclassroom } from "react-icons/si";
import { HiMenuAlt1 } from "react-icons/hi";
import { useContext } from "react";
import { GlobalContext } from "../services/ContextState/GlobalContext";

const BoardHeader = () => {
  const { mobHandler } = useContext(GlobalContext);
  return (
    <Container>
      <Wrapper>
        <Logo>
          {" "}
          <SiGoogleclassroom
            size="25px"
            style={{
              marginRight: "5px",
            }}
          />{" "}
          TMA
        </Logo>
        <RightBox>
          <SearchBar>
            <FiSearch style={{ fontSize: "20px" }} />
            <input type="search" placeholder="Make a Search" />
          </SearchBar>
          <DetailNotify>
            <NameDesc>
              <UserName>Olorunda Smauel</UserName>
              <Desc>Admin</Desc>
            </NameDesc>
            <Avatar>
              <img src={admin} alt="" />
            </Avatar>
            <MobNav>
              <AvatarMob>
                <img src={admin} alt="" />
              </AvatarMob>
              <Bugger onClick={mobHandler}>
                <HiMenuAlt1 />
              </Bugger>
            </MobNav>
          </DetailNotify>
        </RightBox>
      </Wrapper>
    </Container>
  );
};

export default BoardHeader;

const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 50px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  border-bottom: 2px solid #f2f4f4;
`;
const Wrapper = styled.div`
  width: 95%;
  /* background-color: green; */
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Logo = styled.div`
  font-weight: 900;
  font-size: 18px;
  display: flex;
  align-items: center;
`;
const RightBox = styled.div`
  display: flex;
  align-items: center;
`;
const SearchBar = styled.div`
  height: 35px;
  width: 350px;
  background-color: #f6f5f5;
  border-radius: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;

  @media (max-width: 700px) {
    display: none;
  }

  input {
    background-color: transparent;
    border: none;
    outline: none;
    font-family: Montserrat;
    width: 100%;
    height: 100%;
    font-weight: 600;
    margin-left: 5px;
  }
`;
const DetailNotify = styled.div`
  display: flex;
  align-items: center;
`;

const NameDesc = styled.div`
  text-align: right;
  margin-right: 5px;
  @media (max-width: 700px) {
    display: none;
  }
`;
const UserName = styled.div`
  font-size: 14px;
  font-weight: 700;
`;
5;
const Desc = styled.div`
  font-size: 11px;
  font-weight: 600;
`;
const Avatar = styled.div`
  height: 40px;
  width: 40px;
  background-color: purple;
  border-radius: 30px;
  cursor: pointer;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 30px;
  }
  @media (max-width: 700px) {
    display: none;
  }
`;
const Bugger = styled.div`
  font-size: 20px;
  margin-left: 10px;
  cursor: pointer;
`;

const MobNav = styled.div`
  display: none;

  @media (max-width: 500px) {
    display: block;
    display: flex;
    align-items: center;
  }
`;

const AvatarMob = styled.div`
  height: 28px;
  width: 28px;
  background-color: green;
  border-radius: 100px;
  border: 1px solid silver;
  margin-left: 10px;
  img {
    height: 100%;
    width: 100%;
    border-radius: 100px;
    object-fit: cover;
  }
`;
