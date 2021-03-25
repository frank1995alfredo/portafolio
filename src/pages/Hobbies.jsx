import React from "react";
import paladins from '../images/paladins.jpg'
import musica from "../images/musica.jpg"
import ejercicio from '../images/ejercicios.jpg'
import cine from '../images/cine.jpg'
import udemy from '../images/udemy.png'
import '../styles/transition.css'

const Hobbies = () => {
  return (
    <div className="container transition">
      <div className="row" style={{ marginBottom: "20px", marginTop: "20px" }}>

          <div className="col-md-6 offset-md-3">
            <div
              className="card"
              style={{ borderRadius: "25px", position: "revert" }}
            >
              <img src={paladins} alt="..." style={{ position: "revert" }} />
              <div className="card-body">
                <div className="progress-titulo">
                  <h3> Videojuegos</h3>
                  <p>
                    En mis tiempos libres me gusta jugar videojuegos ya que desde
                    que era pequeño he estado en contancto con las consolas.
                  </p>
                </div>
              </div>
            </div>
          </div>
      </div>

      <div className="row" style={{ marginBottom: "20px" }}>
        <div className="col-md-6 offset-md-3">
          <div
            className="card"
            style={{ borderRadius: "25px", position: "revert" }}
          >
            <img src={musica} alt="..." style={{ position: "revert" }} />
            <div className="card-body">
              <div className="progress-titulo">
                <h3>Música</h3>
                <p>
                  Nada mejor que un un buen rock para escribir código y
                  relajarce en los momentos de ocio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row" style={{ marginBottom: "20px" }}>
        <div className="col-md-6 offset-md-3">
        <div
            className="card"
            style={{ borderRadius: "25px", position: "revert" }}
          >
            <img src={ejercicio} alt="..." style={{ position: "revert" }} />
            <div className="card-body">
              <div className="progress-titulo">
                <h3>Ejercicios</h3>
                <p>
                   Me ayuda a mantenerme en forma y desestresarme.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row" style={{ marginBottom: "20px" }}>
        <div className="col-md-6 offset-md-3">
        <div
            className="card"
            style={{ borderRadius: "25px", position: "revert" }}
          >
            <img src={cine} alt="..." style={{ position: "revert" }} />
            <div className="card-body">
              <div className="progress-titulo">
                <h3>Cine</h3>
                <p>
                Debes en cuando para salir de la rutina.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 offset-md-3">
        <div
            className="card"
            style={{ borderRadius: "25px", position: "revert" }}
          >
            <img src={udemy} alt="..." style={{ position: "revert" }} />
            <div className="card-body">
              <div className="progress-titulo">
                <h3>Aprendizaje</h3>
                <p>
                 Realizo cursos en Udemy o Youtube para aprender nuevas tecnologías y estar actualizado
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hobbies;
