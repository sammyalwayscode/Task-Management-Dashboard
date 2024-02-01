import { HiMiniUserGroup } from "react-icons/hi2";
import { IoSettingsOutline } from "react-icons/io5";
import { FaTasks } from "react-icons/fa";
import { FaFilter } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const BoardTabletSideBar = () => {
  return (
    <Container>
      <Wrapper>
        <TabNavigations>
          <TabNav to="/">
            <NavIcon>
              <FaTasks />
            </NavIcon>
          </TabNav>
          <TabNav to="/filter-task">
            <NavIcon>
              <FaFilter />
            </NavIcon>
          </TabNav>
          <TabNav to="/people">
            <NavIcon>
              <HiMiniUserGroup />
            </NavIcon>
          </TabNav>

          <TabNav to="/settings">
            <NavIcon>
              <IoSettingsOutline />
            </NavIcon>
          </TabNav>
        </TabNavigations>
      </Wrapper>
    </Container>
  );
};

export default BoardTabletSideBar;

const Container = styled.div`
  display: none;
  @media (max-width: 800px) {
    display: block;
    position: fixed;
    height: 100vh;
    width: 50px;
    /* background-color: darkviolet; */
    margin-top: 50px;
    border-right: 2px solid #f2f4f4;
    background-color: #fff;
  }
  @media (max-width: 500px) {
    display: none;
  }
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const TabNavigations = styled.div`
  margin-top: 10px;
`;
const TabNav = styled(NavLink)`
  height: 40px;
  width: 40px;
  /* background-color: red; */
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px 0;
  cursor: pointer;
  color: #000;

  &.active {
    background-color: #fca311;
    color: #fff;
  }
`;
const NavIcon = styled.div`
  font-size: 20px;
`;
