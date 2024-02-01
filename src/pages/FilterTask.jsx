import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { filterTask } from "../services/ReduxState/Action";
import FilterTable from "../components/FilterTable";

const FilterTask = () => {
  const tasks = useSelector((state) => state.myReducer.data);
  const filter = useSelector((state) => state.myReducer.filter);
  const dispatch = useDispatch();

  const filteredTasks = tasks.filter((task) => {
    if (filter === "all") {
      return true;
    }
    return task.status === filter;
  });
  return (
    <Container>
      <Wrapper>
        <PageTitleHold>
          <PageTitle>Filter Your Tasks</PageTitle>
          <PageDesc>Know Complected and Not complected Task</PageDesc>
        </PageTitleHold>
        <PageDataMain>
          <PageDataHold>
            <DataTitle>Make Filter</DataTitle>
            <FilterLabel>
              <FilterSelect
                value={filter}
                onChange={(e) => dispatch(filterTask(e.target.value))}
              >
                <option value="all">All</option>
                <option value="complected">Completed</option>
                <option value="pending">Pending</option>
              </FilterSelect>
            </FilterLabel>
            <DataTable>
              {/* {filteredTasks.map((task) => (
                <div key={task.id}>
                  {task.task} - {task.status}
                </div>
              ))} */}

              <FilterTable filteredTasks={filteredTasks} />
            </DataTable>
          </PageDataHold>
        </PageDataMain>
      </Wrapper>
    </Container>
  );
};

export default FilterTask;

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
// const DataSearchInputHold = styled.div`
//   display: flex;
//   justify-content: space-between;
//   flex-wrap: wrap;
//   /* background-color: hotpink; */

//   @media (max-width: 800px) {
//     justify-content: center;
//   }

//   input {
//     height: 35px;
//     width: 285px;
//     /* width: 20%; */
//     font-family: montserrat;
//     font-weight: 700;
//     padding-left: 5px;
//     border: none;
//     outline: none;
//     background-color: #f8f8f8;
//     margin: 10px 0;
//     @media (max-width: 800px) {
//       width: 100%;
//     }
//   }

//   button {
//     height: 35px;
//     width: 150px;
//     font-family: montserrat;
//     font-size: 15px;
//     font-weight: 700;
//     color: #fff;
//     background-color: #fca311;
//     /* background-color: #3d6cf6; */
//     border: none;
//     cursor: pointer;
//     margin: 10px 0;

//     @media (max-width: 1000px) {
//       width: 285px;
//     }
//     @media (max-width: 800px) {
//       width: 100%;
//     }
//   }
// `;

const FilterLabel = styled.label`
  margin-right: 10px;
`;

const FilterSelect = styled.select`
  height: 35px;
  width: 285px;
  width: 20%;
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
`;
const DataTable = styled.div`
  overflow-x: auto;
  margin: 15px 0;
`;
