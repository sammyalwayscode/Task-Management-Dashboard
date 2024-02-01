import styled from "styled-components";
import BoardHeader from "../static/BoardHeader";
import BoardSideBar from "../static/BoardSideBarMain/BoardSideBar";
import { Outlet } from "react-router-dom";
import AddTaskModal from "../components/AddTaskModal";

const BoardLayout = () => {
  return (
    <LayoutContainer>
      <BoardHeader />
      <BoardSideBar />
      <OutletContainer>
        <AddTaskModal />
        <Outlet />
      </OutletContainer>
    </LayoutContainer>
  );
};

export default BoardLayout;

const LayoutContainer = styled.div`
  display: flex;
`;
const OutletContainer = styled.div`
  width: 100vw;
  margin-top: 50px;
  margin-left: 220px;
  min-height: calc(100vh - 50px);
  height: 100%;
  background-color: #f0f1f3;

  @media (max-width: 800px) {
    margin-left: 50px;
  }
  @media (max-width: 500px) {
    margin-left: 0px;
  }
`;
