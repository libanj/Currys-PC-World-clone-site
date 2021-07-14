import "./App.css";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import styled from "styled-components";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Wrapper>
        <Content role="main">
          <Home />
        </Content>
      </Wrapper>
    </div>
  );
}

export default App;

const Wrapper = styled.div`
  min-height: 420px;
  background: #fff;
  width: 1240px;
  margin: 0 auto;
`;

const Content = styled.div`
  padding-right: 0px;
  padding-left: 0px;
  position: relative;
  clear: both;
`;
