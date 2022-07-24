import chamba from './chamba.png'
import landi from './landi-page.png'
import sin from './Sin.png'
import sin2 from './Sin2.png'
export function Trabajos() {
  return (
    <section className="card">
      <div className="text-center card-title fs-4">En lo que eh trabajado</div>

      <div className="row p-3">
        <div className="col-md-6 ">
        <figure className="figure">
            <img src={chamba} className="figure-img img-fluid rounded" alt="..." />
            <figcaption className="figure-caption text-end">
                <a rel="noopener noreferrer" href="https://johandry8919.github.io/JS-Documentation/" Target="_blank">A caption for the above image.</a>
            </figcaption>
          </figure>
        </div>
        <div className="col-md-6 ">
        <figure className="figure">
            <img src={chamba} className="figure-img img-fluid rounded" alt="..." />
            <figcaption className="figure-caption text-end">
            <a rel="noopener noreferrer" href="https://johandry8919.github.io/JS-Documentation/" Target="_blank">A caption for the above image.</a>
            </figcaption>
          </figure>
        </div>
        <div className="col-md-6 ">
        <figure className="figure">
            <img src={chamba} className="figure-img img-fluid rounded" alt="..." />
            <figcaption className="figure-caption text-end">
            <a rel="noopener noreferrer" href="https://johandry8919.github.io/JS-Documentation/" Target="_blank">A caption for the above image.</a>
            </figcaption>
          </figure>
        </div>
        <div className="col-md-6 ">
        <figure className="figure">
            <img src={sin2} className="figure-img img-fluid rounded" alt="..." />
            <figcaption className="figure-caption text-end">
              <a rel="noopener noreferrer" href="https://johandry8919.github.io/freeCodeCamp/" Target="_blank">Dr. Norman Borlaug.</a>
            </figcaption>
          </figure>
        </div>
        <div className="col-md-6 ">
        <figure className="figure">
            <img src={sin} className="figure-img img-fluid rounded" alt="..." />
            <figcaption className="figure-caption text-end">
            <a rel="noopener noreferrer" Target="_blank" href="https://johandry8919.github.io/JS-Documentation/">JS Documentation.</a>
            </figcaption>
          </figure>
        </div>
        <div className="col-md-6 ">
          <figure className="figure">
            <img src={landi} className="figure-img img-fluid rounded" alt="..." />
            <figcaption className="figure-caption text-end">
            <a rel="noopener noreferrer" Target="_blank" href="https://johandry8919.github.io/Landing-page-Bootstrad-4/">Landing-page-Bootstrad-4.</a>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
};