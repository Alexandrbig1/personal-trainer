import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Container, FooterContainer } from "../../components/Layout";
import ScrollBtn from "../../components/ScrollBtn/ScrollBtn";
import Footer from "../../components/Footer/Footer";
import Loader from "../../components/Loader/Loader";

function RootLayout() {
  return (
    <div>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <ScrollBtn />
      <FooterContainer>
        <Container>
          <Footer />
        </Container>
      </FooterContainer>
    </div>
  );
}

export default RootLayout;
