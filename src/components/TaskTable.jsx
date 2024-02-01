import styled from "styled-components";
import { FaTasks } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const TaskTable = () => {
  const getTask = useSelector((state) => state.myReducer.data);
  console.log(getTask);

  return (
    <Container>
      <table>
        <tr>
          <th>taskID</th>
          <th>....</th>
          <th>TaskTitle</th>
          <th>Date</th>
          <th>Status</th>
          <th>Description</th>
        </tr>
        {getTask?.map(({ task, date, status, description, id }, i) => (
          <tr key={i}>
            <td>#{id}</td>
            <td>
              <NavLink
                to={`/task/${id}`}
                style={{
                  textDecoration: "none",
                  color: "#000",
                }}
              >
                <Avatar>
                  <FaTasks />
                </Avatar>
              </NavLink>
            </td>

            <Desc>
              <NavLink
                to={`/task/${id}`}
                style={{
                  textDecoration: "none",
                  color: "#000",
                }}
              >
                {" "}
                <strong> {task} </strong>{" "}
              </NavLink>
            </Desc>

            <td
              style={{
                color: "#3D6CF6",
              }}
            >
              {date}
            </td>
            <td>
              {status === "complected" ? (
                <StatusTag bgCol="green"> {status} </StatusTag>
              ) : (
                <StatusTag bgCol="goldenrod"> {status} </StatusTag>
              )}
            </td>
            <Desc> {description} </Desc>
          </tr>
        ))}
      </table>
    </Container>
  );
};

export default TaskTable;

const Container = styled.div`
  overflow-x: auto;
  /* overflow: hidden; */
  table {
    width: 100%;
    border: 1px solid #e1e1e1;
  }
  th,
  td {
    /* border: 1px solid #ddd; */
    padding: 5px;
    height: 30px;
    font-size: 12px;
    font-weight: 500;
  }

  tr:nth-child(even) {
    background-color: #f9f9f9;
    border-top: 1px solid #dddddd;
  }

  tr:hover {
    background-color: #eee;
    cursor: pointer;
  }

  th {
    color: #000000;
    text-align: left;
    font-weight: bold;
  }

  td {
    text-transform: capitalize;
  }
`;
const Avatar = styled.div`
  height: 30px;
  width: 30px;
  border-radius: 40px;
  background-color: #fca311;
  /* background-color: #7B68EE; */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  color: #fff;
`;

const StatusTag = styled.div`
  height: 30px;
  width: 130px;
  border-radius: 100px;
  color: #fff;
  font-weight: 600;
  background-color: ${(props) => props.bgCol};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Desc = styled.td`
  max-width: 150px; /* Adjust the maximum width as needed */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
