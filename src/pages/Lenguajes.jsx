import React from "react";
import html5 from "../images/hmlt.jpg";
import css from "../images/CSS3.jpg";
import react from "../images/react.jfif";
import types from "../images/types.png";
import sql from "../images/sql.png";
import go from "../images/go.png";
import php from "../images/php.png";
import python from "../images/python.png";
import "../styles/card.css";
import '../styles/transition.css'

const Lenguajes = () => {
  return (
    <div className="container transition">
      <div className="row">
        <div className="col-md-12 ">
          <h1
            className="line animacion"
            style={{
              textAlign: "center",
              marginBottom: "30px",
              marginTop: "20px",
            }}
          >
            Lenguajes y tecnologías
          </h1>
        </div>
      </div>

      <div className="row" style={{ marginBottom: "20px" }}>
        <div className="col-md-5 ">
          <div
            className="card"
            style={{ borderRadius: "25px", position: "revert" }}
          >
            <img src={html5} alt="..." style={{ position: "revert" }} />
            <div className="card-body">
              <div className="progress-titulo">
                <h3>HTML5</h3>
                <div className="progress">
                  <div
                    className="progress-bar"
                    style={{ width: "65%", background: "#ff6666" }}
                  >
                    <div className="progress-value">80%</div>
                  </div>
                </div>
              </div>
              <a href="#" className="btn btn-dark offset-md-4  btn-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="40"
                  fill="currentColor"
                  class="bi bi-github"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-5  ms-auto">
          <div
            className="card"
            style={{ borderRadius: "25px", position: "revert" }}
          >
            <img
              src={css}
              alt="..."
              style={{ position: "revert", height: "280px" }}
            />
            <div className="card-body">
              <div className="progress-titulo">
                <h3>CSS</h3>
                <div className="progress">
                  <div
                    className="progress-bar"
                    style={{ width: "35%", background: "#00BFFF" }}
                  >
                    <div className="progress-value">35%</div>
                  </div>
                </div>
              </div>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="row" style={{ marginBottom: "20px" }}>
        <div className="col-md-5">
          <div
            className="card"
            style={{ borderRadius: "25px", position: "revert" }}
          >
            <img src={react} alt="..." style={{ position: "revert" }} />
            <div className="card-body">
              <div className="progress-titulo">
                <h3>JAVASCRIPT - ReactJS</h3>
                <div className="progress">
                  <div
                    className="progress-bar"
                    style={{ width: "65%", background: "#87CEFA" }}
                  >
                    <div className="progress-value">65%</div>
                  </div>
                </div>
              </div>
              <a href="#" className="btn btn-dark offset-md-4  btn-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="40"
                  fill="currentColor"
                  class="bi bi-github"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-5 ms-auto">
          <div
            className="card"
            style={{ borderRadius: "25px", position: "revert" }}
          >
            <img src={types} alt="..." style={{ position: "revert" }} />
            <div className="card-body">
              <div className="progress-titulo">
                <h3>TYPESCRIPT</h3>
                <div className="progress">
                  <div
                    className="progress-bar"
                    style={{ width: "40%", background: "#6495ED" }}
                  >
                    <div className="progress-value">40%</div>
                  </div>
                </div>
              </div>
              <a href="#" className="btn btn-dark offset-md-4  btn-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="40"
                  fill="currentColor"
                  class="bi bi-github"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="row" style={{ marginBottom: "20px" }}>
        <div className="col-md-5">
          <div
            className="card"
            style={{ borderRadius: "25px", position: "revert" }}
          >
            <img src={sql} alt="..." style={{ position: "revert" }} />
            <div className="card-body">
              <div className="progress-titulo">
                <h3>SQLSERVER</h3>
                <div className="progress">
                  <div
                    className="progress-bar"
                    style={{ width: "45%", background: "#FFD700" }}
                  >
                    <div className="progress-value">45%</div>
                  </div>
                </div>
              </div>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-5 ms-auto">
          <div
            className="card"
            style={{ borderRadius: "25px", position: "revert" }}
          >
            <img src={go} alt="..." style={{ position: "revert" }} />
            <div className="card-body">
              <div className="progress-titulo">
                <h3>GOLANG - GIN + PostgreSQL</h3>
                <div className="progress">
                  <div
                    className="progress-bar"
                    style={{ width: "65%", background: "#20B2AA" }}
                  >
                    <div className="progress-value">65%</div>
                  </div>
                </div>
              </div>
              <a href="#" className="btn btn-dark offset-md-4  btn-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="40"
                  fill="currentColor"
                  class="bi bi-github"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="row" style={{ marginBottom: "20px" }}>
        <div className="col-md-5">
          <div
            className="card"
            style={{ borderRadius: "25px", position: "revert" }}
          >
            <img src={php} alt="..." style={{ position: "revert" }} />
            <div className="card-body">
              <div className="progress-titulo">
                <h3>PHP - LARAVEL + PostgreSQL</h3>
                <div className="progress">
                  <div
                    className="progress-bar"
                    style={{ width: "70%", background: "#ff6666" }}
                  >
                    <div className="progress-value">70%</div>
                  </div>
                </div>
              </div>
              <a href="#" className="btn btn-dark offset-md-4  btn-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="40"
                  fill="currentColor"
                  class="bi bi-github"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-5 ms-auto">
          <div
            className="card"
            style={{ borderRadius: "25px", position: "revert" }}
          >
            <img src={python} alt="..." style={{ position: "revert" }} />
            <div className="card-body">
              <div className="progress-titulo">
                <h3>PYTHON - DJANGO REST</h3>
                <div className="progress">
                  <div
                    className="progress-bar"
                    style={{ width: "30%", background: "#6B8E23" }}
                  >
                    <div className="progress-value">30%</div>
                  </div>
                </div>
              </div>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lenguajes;
