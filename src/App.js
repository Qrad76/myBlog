// import { useState } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./App.scss";
// import { Menu } from "@material-ui/icons/";
import SectionSkill from "./components/SectionSkill";
import SectionIntruduce from "./components/SectionIntruduce";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <div className="inner">
            <div className="logo">김준형</div>
            <ul className="headerMenu">
              <li>
                <Link to="/Skill">Skill</Link>
              </li>
              <li>
                <Link to="/Intruduce">Intruduce</Link>
              </li>
            </ul>

            {/* <Menu className="menu" /> */}
          </div>
        </header>
        <Route path="/Skill" component={SectionSkill} />
        <Route path="/Intruduce" component={SectionIntruduce} />
      </BrowserRouter>
      <footer>
        본 페이지는 상업적 목적이 아닌 개인 포트폴리오용으로 제작되었습니다.
      </footer>
    </div>
  );
}

export default App;
