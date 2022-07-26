import { GrReactjs } from "react-icons/gr";
import {
  DiBootstrap,
  DiCss3Full,
  DiDatabase,
  DiHtml5,
  DiJavascript,
} from "react-icons/di";

export default function Skills() {
  return (
    <div>
      <div className="row justify-content-center">
        <h4 className="d-flex  align-items-center mb-2">
          <span></span>
          <span className="text-muted">Skills</span>
        </h4>

        <div className="col-md-4 col-lg-2 mb-5">
          <div
            className="portfolio-item mx-auto"
            data-bs-toggle="modal"
            data-bs-target="#portfolioModal1"
          >
            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100"></div>
            <DiHtml5 className="fs-1 w-100" />
          </div>
        </div>

        <div class="col-md-4 col-lg-2 mb-5">
          <div
            class="portfolio-item mx-auto"
            data-bs-toggle="modal"
            data-bs-target="#portfolioModal2"
          >
            <DiCss3Full className="fs-1 w-100" />
          </div>
        </div>

        <div className="col-md-4 col-lg-2 mb-5">
          <div
            className="portfolio-item mx-auto"
            data-bs-toggle="modal"
            data-bs-target="#portfolioModal3"
          >
            <DiJavascript className="fs-1 w-100" />
          </div>
        </div>

        <div className="col-md-4 col-lg-2 mb-5 mb-lg-0">
          <div
            className="portfolio-item mx-auto"
            data-bs-toggle="modal"
            data-bs-target="#portfolioModal4"
          >
            <DiBootstrap className="fs-1 w-100" />
          </div>
        </div>

        <div className="col-md-4 col-lg-2 mb-5 mb-md-0">
          <div
            className="portfolio-item mx-auto"
            data-bs-toggle="modal"
            data-bs-target="#portfolioModal5"
          >
            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100"></div>
            <DiDatabase className="fs-1 w-100" />
          </div>
        </div>

        <div className="col-md-4 col-lg-2">
          <div
            className="portfolio-item mx-auto"
            data-bs-toggle="modal"
            data-bs-target="#portfolioModal6"
          >
            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100"></div>
            <GrReactjs width="400" className="fs-1 w-100" />
          </div>
        </div>
      </div>
    </div>
  );
}
