import smasfiit from "../assets/smarfiit.png";
import "../App.css";

export const Presentation = ({ onNext }) => {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center vh-100 bg-white">
        <div className="text-center bg-white ">
          <h1 className="mb-4">Bienvenido a SmatShan</h1>
          <img
            src={smasfiit}
            alt="Smashfit Logo"
            className="img-fluid mb-4"
            style={{ maxWidth: "200px" }}
          />
          <div>
            <button className="btn btn-primary mt-4" onClick={onNext}>
              Continuar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
