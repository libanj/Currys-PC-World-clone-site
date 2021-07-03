import "./App.css";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import styled from "styled-components";
function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Wrapper>
        <Content role="main"></Content>
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
