import styled from "styled-components";
import { FaTasks } from "react-icons/fa";
import { HiMiniUserGroup } from "react-icons/hi2";
import { MdAdd } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { IoSettingsOutline } from "react-icons/io5";
import { FaFilter } from "react-icons/fa6";
import { GlobalContext } from "../../services/ContextState/GlobalContext";
import { useContext } from "react";

const BoardDesktopSidebar = () => {
  const { openModal } = useContext(GlobalContext);

  return (
    <Container>
      <Wrapper>
        <Navigations>
          <NavMain onClick={openModal}>
            <MainNav>
              <NavIcon>
                <MdAdd />
              </NavIcon>
              <span>Add New Task</span>
            </MainNav>
          </NavMain>
          <Nav to="/">
            <MainNav>
              <NavIcon>
                <FaTasks />
              </NavIcon>
              <span>All Tasks</span>
            </MainNav>
          </Nav>
          <Nav to="filter-task">
            <MainNav>
              <NavIcon>
                <FaFilter />
              </NavIcon>
              <span>Filter Tasks</span>
            </MainNav>
          </Nav>
          <Nav to="people">
            <MainNav>
              <NavIcon>
                <HiMiniUserGroup />
              </NavIcon>
              <span>People</span>
            </MainNav>
          </Nav>

          <Nav to="settings">
            <MainNav>
              <NavIcon>
                <IoSettingsOutline />
              </NavIcon>
              <span>Setting</span>
            </MainNav>
          </Nav>
        </Navigations>
      </Wrapper>
    </Container>
  );
};

export default BoardDesktopSidebar;

const Container = styled.div`
  position: fixed;
  height: 100vh;
  width: 220px;
  background-color: #fff;
  margin-top: 50px;
  border-right: 2px solid #f2f4f4;

  @media (max-width: 800px) {
    display: none;
  }
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const Navigations = styled.div`
  margin-top: 10px;
`;
const MainNav = styled.div`
  display: flex;
  align-items: center;
  /* background-color: red; */
`;

const Nav = styled(NavLink)`
  height: 40px;
  width: 200px;
  /* background-color: brown; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 5px 0;
  cursor: pointer;
  text-decoration: none;
  color: #0a0a0a;
  span {
    font-size: 14px;
    font-weight: 600;
  }
  &.active {
    /* background-color: #3d6cf6; */
    /* background-color: #7b68ee; */
    background-color: #fca311;
    color: #fff;
  }
`;
const NavMain = styled.div`
  height: 40px;
  width: 200px;
  background-color: #e1f1ff;
  background-color: #fad79c;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
  cursor: pointer;
  color: #fca311;
  /* color: #3f7afc; */

  span {
    font-size: 14px;
    font-weight: 600;
  }
`;
const NavIcon = styled.div`
  font-size: 18px;
  display: flex;
  align-items: center;
  margin: 0 7px;
`;
