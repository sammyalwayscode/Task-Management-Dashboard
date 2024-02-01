import { useContext } from "react";
import styled from "styled-components";
import { GlobalContext } from "../../services/ContextState/GlobalContext";
import { NavLink } from "react-router-dom";
import { FaTasks } from "react-icons/fa";
import { FaFilter } from "react-icons/fa";
import { HiMiniUserGroup } from "react-icons/hi2";
import { MdAdd } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";

const BoardMobileSideBar = () => {
  const { mobDisplay, mobHandler, openModal } = useContext(GlobalContext);

  return (
    <div>
      {mobDisplay ? (
        <MobileContainer>
          <MobileWrapper>
            <NavsCtrl>
              <NavMain onClick={openModal}>
                <MainNavMob>
                  <NavIcon>
                    <MdAdd />
                  </NavIcon>
                  <span>Add New Task</span>
                </MainNavMob>
              </NavMain>
              <NavMob to="/" onClick={mobHandler}>
                <MainNav>
                  <NavIcon>
                    <FaTasks />
                  </NavIcon>
                  <span>Tasks</span>
                </MainNav>
              </NavMob>
              <NavMob to="/filter-task" onClick={mobHandler}>
                <MainNav>
                  <NavIcon>
                    <FaFilter />
                  </NavIcon>
                  <span>Filter Task</span>
                </MainNav>
              </NavMob>
              <NavMob to="/people" onClick={mobHandler}>
                <MainNav>
                  <NavIcon>
                    <HiMiniUserGroup />
                  </NavIcon>
                  <span>People</span>
                </MainNav>
              </NavMob>

              <NavMob to="/settings" onClick={mobHandler}>
                <MainNav>
                  <NavIcon>
                    <IoSettingsOutline />
                  </NavIcon>
                  <span>Setting</span>
                </MainNav>
              </NavMob>
            </NavsCtrl>
          </MobileWrapper>
        </MobileContainer>
      ) : null}
    </div>
  );
};

export default BoardMobileSideBar;

const MobileContainer = styled.div`
  display: none;
  @media (max-width: 500px) {
    display: block;
    margin-top: 50px;
    min-height: calc(100vh - 50px);
    background-color: #eeeeee;
    width: 200px;
    position: absolute;
  }
`;
const MobileWrapper = styled.div``;

const NavsCtrl = styled.div``;
const MainNavMob = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  text-decoration: none;
  /* border-top: 1px solid gray; */
  /* border-bottom: 1px solid gray; */

  cursor: pointer;
`;

// const NavMob = styled.div`
//   width: 85%;
//   display: flex;
//   align-items: center;
//   span {
//     font-size: x-small;
//     font-weight: 400;
//     margin-left: 5px;
//     color: #fff;
//     text-decoration: none;
//   }
// `;
const MainNav = styled.div`
  display: flex;
  align-items: center;
  /* background-color: red; */
`;

const NavMob = styled(NavLink)`
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
