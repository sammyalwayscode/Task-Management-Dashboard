import styled from "styled-components";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editTask } from "../services/ReduxState/Action";
import Swal from "sweetalert2";

const EditTaskInput = () => {
  const { id } = useParams();
  console.log(id);
  const navigate = useNavigate();

  const getTask = useSelector((state) => state.myReducer.data);
  console.log(getTask);
  const specificTask = getTask.find((task) => task.id === id);
  console.log("Special", specificTask);

  const [task, setTask] = useState(specificTask?.task || "");
  const [status, setStatus] = useState(specificTask?.status || "");
  const [date, setDate] = useState(specificTask?.date || "");
  const [description, setDescription] = useState(
    specificTask?.description || ""
  );
  const dispatch = useDispatch();

  const handleTask = (e) => {
    setTask(e.target.value);
  };
  const handleStatus = (e) => {
    setStatus(e.target.value);
  };
  const handleDate = (e) => {
    setDate(e.target.value);
  };
  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleEditTask = () => {
    const newData = {
      task,
      status,
      date,
      description,
    };
    console.log(task);
    dispatch(editTask({ id: id, newData }));
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Task Edited",
      showConfirmButton: false,
      timer: 2500,
    }).then(() => {
      navigate("/");
    });
  };

  return (
    <>
      <ModalWrapper>
        <ModalContent>
          <input
            value={task}
            type="text"
            placeholder="Enter your task Title"
            onChange={handleTask}
            defaultValue={specificTask?.task}
          />
          <SelectWrapper>
            <Select
              value={status}
              onChange={handleStatus}
              defaultValue={specificTask?.status}
            >
              <option value="pending">Pending</option>
              <option value="review">Review</option>
              <option value="complected">Complected</option>
            </Select>
          </SelectWrapper>
          <input
            type="date"
            value={date}
            onChange={handleDate}
            defaultValue={specificTask?.date}
          />
          <textarea
            placeholder="Your Task Description"
            value={description}
            onChange={handleDescription}
            defaultValue={specificTask?.description}
          />
          <button onClick={handleEditTask}>Edit Task</button>
        </ModalContent>
      </ModalWrapper>
    </>
  );
};

export default EditTaskInput;

const ModalWrapper = styled.div`
  width: 310px;
  background-color: white;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  input {
    height: 35px;
    width: 285px;
    /* width: 20%; */
    font-family: montserrat;
    font-weight: 700;
    padding-left: 10px;
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
    width: 305px;
    font-family: montserrat;
    font-size: 12px;
    font-weight: 700;
    color: #fff;
    background-color: #fca311;
    border: none;
    cursor: pointer;
    margin: 10px 0;
  }
  textarea {
    height: 100px;
    width: 285px;
    font-family: montserrat;
    font-weight: 700;
    padding: 10px;
    border: none;
    outline: none;
    background-color: #f8f8f8;
    resize: none;
  }
`;

const SelectWrapper = styled.div`
  width: 295px;
  height: 35px;
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  border: none;
  font-family: montserrat;
  outline: none;
  background-color: #f8f8f8;
  font-weight: 700;
  /* margin: 10px 0; */
  /* appearance: none;  */
`;
