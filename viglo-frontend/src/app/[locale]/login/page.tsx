"use cliente";
import Col from "@/components/ui/col";
import Wrapper from "@/components/ui/wrapper";
import Row from "@/components/ui/row";

import { ModeToggle } from "@/components/ui/mode-togle";
import { LanguageChanger } from "@/components/ui/language-changer";
import FormLogin from "@/components/auth/form-login";

const HomePage = () => {
  return (
    <Wrapper className="h-screen bg-cover bg-center bg-[url('/imgs/login_background.webp')]">
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <Row className="grow-0 z-10">
        <Col className="items-end ">
          <Row className="justify-between gap-2">
            <LanguageChanger />
            <ModeToggle />
          </Row>
        </Col>
      </Row>
      <Row className="grow z-10">
        <Col className=" justify-center items-center sm:items-center mr00 sm:mr-16  ">
          <FormLogin />
        </Col>
      </Row>
    </Wrapper>
  );
};

export default HomePage;
