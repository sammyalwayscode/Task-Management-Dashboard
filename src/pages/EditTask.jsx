import EditTaskInput from "../components/EditTaskInput";
import styled from "styled-components";

const EditTask = () => {
  return (
    <Container>
      <Wrapper>
        <PageTitleHold>
          <PageTitle>Edit Task</PageTitle>
          <PageDesc>Edit All your task</PageDesc>
        </PageTitleHold>
        <PageDataMain>
          <PageDataHold>
            <EditTaskInput />
          </PageDataHold>
        </PageDataMain>
      </Wrapper>
    </Container>
  );
};

export default EditTask;

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
  display: flex;
  justify-content: center;
  align-items: center;
`;
