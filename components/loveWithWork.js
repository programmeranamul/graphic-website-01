import Image from "next/image";
import { CgArrowRight } from "react-icons/cg";
import style from "../styles/common/LoveWithWork.module.css";

function LoveWithWork() {
  return (
    <div className="bg-deep-gray py-5 mt_5px">
      <div className="container">
        <div className="text-center pt-3">
          <Image
            src="/heart.svg"
            alt="Wark With Love"
            width="150px"
            height="150px"
          />
        </div>
        <h2 className="title-3 text-center mb-5">
        Set the opportunity to become enamored with your work once more
        </h2>
        <div className="text-center pb-4 ">
          <button className={`main-btn btn-center-with-icon ${style.btn} `}>
            Get Started{" "}
            <span>
              <CgArrowRight className="fs-24" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoveWithWork;
