import { useState } from "react";
import MainHeader from "@Organisms/Main/Header";
import MainBody from "@Organisms/Main/Body";
import MainFooter from "@Organisms/Main/Footer";
import MainModal from "@Organisms/Main/Modal";
import { MainContainer } from "./styles";

const MainTemplate = () => {
  const [modal, setModal] = useState(false);

  const handleStartClick = () => {
    setModal((prev) => !prev);
  };

  return (
    <MainContainer>
      <MainHeader handleStartClick={handleStartClick} />
      <MainBody />
      <MainFooter />
      {modal && <MainModal />}
    </MainContainer>
  );
};

export default MainTemplate;
