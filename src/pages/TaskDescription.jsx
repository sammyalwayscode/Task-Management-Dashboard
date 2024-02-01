import styled from "styled-components";
import { FaTasks } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { removeTask } from "../services/ReduxState/Action";
import Swal from "sweetalert2";

const TaskDescription = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  console.log(id);
  const getTask = useSelector((state) => state.myReducer.data);
  console.log(getTask);
  const specificTask = getTask.find((task) => task.id === id);
  console.log("Special", specificTask);

  const dispatch = useDispatch();

  const deleteTask = () => {
    dispatch(removeTask(id));
  };

  return (
    <Container>
      <Wrapper>
        <PageTitleHold>
          <PageTitle>Task Detail</PageTitle>
          <PageDesc>All major details here</PageDesc>
        </PageTitleHold>
        <PageDataMain>
          <PageDataHold>
            <MainDetails>
              <TaskAvatar>
                <FaTasks />
              </TaskAvatar>
              <TaskData>
                <TaskTitle>{specificTask?.task}</TaskTitle>
                <TaskDesc>{specificTask?.description}</TaskDesc>
                <TaskInfo>
                  <Title>Status:</Title>
                  <Info>{specificTask?.status}</Info>
                </TaskInfo>
                <TaskInfo>
                  <Title>Date:</Title>
                  <Info>{specificTask?.date}</Info>
                </TaskInfo>
              </TaskData>
              <BtnHold>
                <NavLink to={`/updatetask/${specificTask?.id}`}>
                  <button
                    style={{
                      backgroundColor: "goldenrod",
                    }}
                  >
                    Edit Task
                  </button>
                </NavLink>
                <button
                  style={{
                    backgroundColor: "red",
                  }}
                  onClick={() => {
                    Swal.fire({
                      title: "Are you sure?",
                      text: "You won't be able to revert this!",
                      icon: "warning",
                      showCancelButton: true,
                      confirmButtonColor: "#3085d6",
                      cancelButtonColor: "#d33",
                      confirmButtonText: "Yes, delete it!",
                    }).then((result) => {
                      if (result.isConfirmed) {
                        deleteTask();
                        Swal.fire(
                          "Deleted!",
                          "Your file has been deleted.",
                          "success"
                        );
                        navigate("/");
                      }
                    });
                  }}
                >
                  Delete Task
                </button>
              </BtnHold>
            </MainDetails>
          </PageDataHold>
        </PageDataMain>
      </Wrapper>
    </Container>
  );
};

export default TaskDescription;

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

const MainDetails = styled.div`
  /* background-color: red; */
  width: 100%;
  display: flex;
  margin: 30px 0;
  flex-wrap: wrap;
`;
const TaskAvatar = styled.div`
  width: 200px;
  height: 200px;
  background-color: #fca311;
  border-radius: 200px;
  margin-right: 50px;
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  color: #fff;

  img {
    width: 250px;
    height: 250px;
    border-radius: 200px;
    object-fit: cover;
  }
`;
const TaskData = styled.div`
  width: 500px;
  /* background-color: coral; */

  @media (max-width: 600px) {
    width: 90%;
  }
`;
const TaskTitle = styled.strong`
  font-size: 20px;
  font-weight: 800;
  @media (max-width: 600px) {
    font-size: 17px;
  }
`;
const TaskDesc = styled.p`
  font-size: 14px;
  color: #646464;
  @media (max-width: 600px) {
    font-size: 12px;
  }
`;
const TaskInfo = styled.div`
  display: flex;
  font-size: 15px;
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;
const Title = styled.p`
  width: 130px;
  color: #646464;
  font-weight: 500;
  /* background-color: red; */
`;
const Info = styled.p`
  font-weight: 700;
`;

const BtnHold = styled.div`
  button {
    height: 35px;
    width: 150px;
    font-family: montserrat;
    font-size: 12px;
    font-weight: 700;
    color: #fff;
    border: none;
    cursor: pointer;
    margin: 0 10px;
  }
`;
