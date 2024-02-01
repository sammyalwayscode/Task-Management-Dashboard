import styled from "styled-components";
import { GlobalContext } from "../services/ContextState/GlobalContext";
import { useContext, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { addTask } from "../services/ReduxState/Action";
import Swal from "sweetalert2";

const AddTaskModal = () => {
  const { isModalOpen, closeModal } = useContext(GlobalContext);

  const [task, setTask] = useState("");
  const [status, setStatus] = useState("pending");
  const [date, setDate] = useState();
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const handleTask = (e) => {
    setTask(e.target.value);
  };

  const handleDate = (e) => {
    setDate(e.target.value);
  };
  const handleDescription = (e) => {
    setDescription(e.target.value);
  };
  const handleAddTask = () => {
    dispatch(
      addTask({
        task: task,
        status: status,
        date: date,
        description: description,
      }),
      setTask(""),
      setDate(""),
      setDescription(""),
      setStatus("")
    );
    Swal.fire({
      position: "center",
      icon: "success",
      title: "New Task Created",
      showConfirmButton: false,
      timer: 2500,
    }).then(() => {
      closeModal();
    });
  };

  return (
    <>
      {isModalOpen && (
        <>
          <Overlay onClick={closeModal} />
          <ModalWrapper>
            <CloseButton onClick={closeModal}>
              <RxCross2 />
            </CloseButton>
            <ModalContent>
              <input
                value={task}
                type="text"
                placeholder="Enter your task Title"
                onChange={handleTask}
                required
              />

              <input type="date" value={date} onChange={handleDate} />
              <textarea
                placeholder="Your Task Description"
                value={description}
                onChange={handleDescription}
              />
              <button onClick={handleAddTask}>Add New Task</button>
            </ModalContent>
          </ModalWrapper>
        </>
      )}
    </>
  );
};

export default AddTaskModal;

const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 1000;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

const CloseButton = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 20px;
  cursor: pointer;
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
