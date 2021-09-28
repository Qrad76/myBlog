import { useState } from "react";

export default function SectionSkill() {
  const [openWeb, setOpenWeb] = useState(null);
  const [openWeb2, setOpenWeb2] = useState(null);
  const [openWeb3, setOpenWeb3] = useState(null);
  return (
    <section>
      <div
        className={["section1", openWeb].join(" ")}
        onClick={() => {
          if (openWeb === null) setOpenWeb("openWeb");
          else {
            setOpenWeb(null);
          }
        }}
      >
        <div className="inner">
          <div className="web">
            <h3>웹 표준</h3>
            <p>
              HTML + CSS + JAVASCRIPT 사용하여 퍼블리싱을 할수 있습니다.
              <br />
              <br />
              <br />
              <br />
              <a
                href="https://gallant-snyder-272144.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                스타벅스 클론 페이지
              </a>
            </p>
            <img
              src="https://zunoxi.github.io//assets/img/dev/language/html/html.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div
        className={["section2", openWeb2].join(" ")}
        onClick={() => {
          if (openWeb2 === null) setOpenWeb2("openWeb2");
          else {
            setOpenWeb2(null);
          }
        }}
      >
        <div className="inner">
          <div className="web">
            <h3>Scss (Sass)</h3>
            <p>
              Scss (Sass)를 활용할수 있습니다.
              <br />
              <br />
              현재 페이지도 Scss를 이용하여 구현하였습니다.
            </p>
            <img
              src="https://www.pngfind.com/pngs/b/452-4521456_sass-logo-png.png"
              alt="Sass"
            />
          </div>
        </div>
      </div>
      <div
        className={["section3", openWeb3].join(" ")}
        onClick={() => {
          if (openWeb3 === null) setOpenWeb3("openWeb3");
          else {
            setOpenWeb3(null);
          }
        }}
      >
        <div className="inner">
          <div className="web">
            <h3>React</h3>
            <p>
              React.js를 공부중입니다.
              <br />
              <br />
              현재 페이지도 React.js로 구현중입니다. <br />
              React-router-dom 을 이용하여 SPA 를 구현할수 있습니다.
            </p>
            <img src="img/React.png" alt="React" />
          </div>
        </div>
      </div>
    </section>
  );
}
