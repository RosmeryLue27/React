import lueLoca from "../ddklsndfjh.jpg"
export function Carrusel() {
    return (
        <div><div id="carouselExample" className="carousel slide">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    {/*Importando imagen de public*/}
                    <img src="jinshisama.jpg" height={"550px"} width={"300px"} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    {/*Importando imagen de src*/}
                    <img src={lueLoca} height={"550px"} width={"300px"} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    {/*Importando con url externo*/}
                    <img src="https://generacionxbox.com/wp-content/uploads/2025/03/repo-guia-nuevos-jugadores.jpg" height={"550px"} width={"300px"} className="d-block w-100" alt="..." />
                </div>
            </div>
            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="next"
            >
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
            </button>
        </div>
        </div>
    )
}
