import styled from "styled-components";
import TaskTable from "../components/TaskTable";

const AllTask = () => {
  return (
    <Container>
      <Wrapper>
        <PageTitleHold>
          <PageTitle>All Tasks</PageTitle>
          <PageDesc>Manage All Your Daily Task</PageDesc>
        </PageTitleHold>
        <PageDataMain>
          <PageDataHold>
            <DataTitle>My Task</DataTitle>
            <DataSearchInputHold>
              <input type="search" placeholder="Make Your Search..." />
              <button>Search</button>
            </DataSearchInputHold>
            <DataTable>
              <TaskTable />
            </DataTable>
          </PageDataHold>
        </PageDataMain>
      </Wrapper>
    </Container>
  );
};

export default AllTask;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  overflow: hidden;
`;
const Wrapper = styled.div`
  width: 95%;
`;

const PageTitleHold = styled.div`
  margin: 12px 0;
`;
const PageTitle = styled.div`
  font-size: 20px;
  font-weight: 800;
`;
const PageDesc = styled.div`
  font-size: 12px;
  color: #a1a1a1;
`;

const PageDataMain = styled.div`
  min-height: 80vh;
  width: 100%;
  background-color: #fff;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const PageDataHold = styled.div`
  width: 95%;
  /* background-color: red; */
`;
const DataTitle = styled.div`
  font-size: 16px;
  font-weight: 800;
  margin-top: 10px;
`;
const DataSearchInputHold = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  /* background-color: hotpink; */

  @media (max-width: 800px) {
    justify-content: center;
  }

  input {
    height: 35px;
    width: 70%;
    /* width: 20%; */
    font-family: montserrat;
    font-weight: 700;
    padding-left: 5px;
    border: none;
    outline: none;
    background-color: #f8f8f8;
    margin: 10px 0;
    @media (max-width: 800px) {
      width: 100%;
    }
  }

  button {
    height: 35px;
    width: 150px;
    font-family: montserrat;
    font-size: 15px;
    font-weight: 700;
    color: #fff;
    background-color: #fca311;
    /* background-color: #3d6cf6; */
    border: none;
    cursor: pointer;
    margin: 10px 0;

    @media (max-width: 1000px) {
      width: 285px;
    }
    @media (max-width: 800px) {
      width: 100%;
    }
  }
`;
const DataTable = styled.div`
  overflow-x: auto;
  margin: 15px 0;
`;
