import styled, { createGlobalStyle } from 'styled-components';
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
} from 'react-router-dom';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: sans-serif;
    background-color: #f4f5f7;
  }
`;

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 90px;
  background-color: #4f46e5;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 56px;
  box-sizing: border-box;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
  z-index: 100;
`;

const Logo = styled.h1`
  font-size: 28px;
  margin: 0;
`;

const Nav = styled.nav`
  display: flex;
  gap: 28px;
  align-items: center;
`;

const StyledNavLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  font-size: 22px;
  padding: 16px 24px;
  border-radius: 14px;
  opacity: 0.85;

  &:hover {
    background-color: rgba(255, 255, 255, 0.18);
    opacity: 1;
  }

  &.active {
    background-color: rgba(255, 255, 255, 0.24);
    font-weight: bold;
    opacity: 1;
  }
`;

const Main = styled.main`
  min-height: 100vh;
  padding-top: 150px;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
`;

const Card = styled.div`
  width: 80%;
  max-width: 1100px;
  background-color: white;
  border-radius: 18px;
  padding: 56px 48px;
  text-align: center;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  box-sizing: border-box;
`;

const PageTitle = styled.h2`
  font-size: 32px;
  color: #1f2937;
  margin: 0 0 28px;
`;

const PageText = styled.p`
  font-size: 22px;
  color: #6b7280;
  margin: 0;
`;

const Home = () => {
  return (
    <Card>
      <PageTitle>ホームページへようこそ！</PageTitle>
      <PageText>
        このサイトでは様々な情報を提供しています。メニューからご興味のあるページをご覧ください。
      </PageText>
    </Card>
  );
};

const Profile = () => {
  return (
    <Card>
      <PageTitle>あなたのプロフィールです。</PageTitle>
      <PageText>
        こちらでプロフィール情報を確認・編集できます。
      </PageText>
    </Card>
  );
};

const Contact = () => {
  return (
    <Card>
      <PageTitle>お問い合わせはこちらからどうぞ。</PageTitle>
      <PageText>
        ご質問やご相談がありましたら、お気軽にお問い合わせください。
      </PageText>
    </Card>
  );
};

const NotFound = () => {
  return (
    <Card>
      <PageTitle>404 Not Found</PageTitle>
      <PageText>
        お探しのページは見つかりませんでした。
      </PageText>
    </Card>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />

      <Header>
        <Logo>MyApp</Logo>

        <Nav>
          <StyledNavLink to="/">🏠 ホーム</StyledNavLink>
          <StyledNavLink to="/profile">👤 プロフィール</StyledNavLink>
          <StyledNavLink to="/contact">📧 お問い合わせ</StyledNavLink>
        </Nav>
      </Header>

      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Main>
    </BrowserRouter>
  );
};

export default App;

