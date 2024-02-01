import BoardDesktopSidebar from "./BoardDesktopSidebar";
import BoardMobileSideBar from "./BoardMobileSideBar";
import BoardTabletSideBar from "./BoardTabletSideBar";

const BoardSideBar = () => {
  return (
    <>
      <BoardDesktopSidebar />
      <BoardTabletSideBar />
      <BoardMobileSideBar />
    </>
  );
};

export default BoardSideBar;
