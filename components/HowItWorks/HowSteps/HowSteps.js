import style from "../../../styles/HowItWorks/HowSteps.module.css";
import Image from "next/image";
import Link from "next/link";
import { CgArrowRight } from "react-icons/cg";

const datas = [
  {
    imgSrc: "/howItWork/how-step-1_1300x.png",
    count: 1,
    title: "Start things off by mentioning a statement.",
    text1:
      "Select your administration, time required to circle back, and picture intricacy. We'll give you a gauge immediately, and afterward you'll get an altered statement inside 45 minutes.",
    text2:
      "Our default completion time for picture alters is 24 hours, yet you can choose quicker circle back if necessary. Not in a hurry? Pick a more drawn out completion time and get a rebate. ",
    btn: true,
  },
  {
    imgSrc: "/howItWork/how-step-2_1300x.png",
    count: 2,
    title: "Upload your photograph.",
    text1:
      "Upload your images utilizing your internet browser or FTP (everything is secure and encoded). You can transfer any of these record types:",
    lists: [
      "JPG (Preferred)",
      "PSD",
      "TIFF",
      "PNG",
      "NEF",
      "RAW",
      "CR2",
      "DNG",
      "PDF",
    ],
  },
  {
    imgSrc: "/howItWork/how-step-3_1300x.png",
    count: 3,
    title: "Make any changes and approve your quote.",
    text1:
      "Whenever you have your quote, you can make any last changes in accordance with timing, a number of pictures, record arrangement, and you can add free fixing, editing, or resizing to your request. At the point when you're good to go, endorse your quote and we'll get to work.",
  },
  {
    imgSrc: "/howItWork/how-step-4_1300x.png",
    count: 4,
    title: "Return to the tomfoolery stuff while we edit your pictures.",
    text1:
      "When those monotonous edits are off your plate, you can return to the pieces of your work you appreciate most. ",
    text2:
      "We'll cautiously edit your pictures the hard way. Each picture will then, at that point, be twofold checked for flawlessness before we send you the completed records.",
  },
  {
    imgSrc: "/howItWork/how-step-5_1300x.png",
    count: 5,
    title: "Get back your professionally edited pictures.",
    text1:
      "Once your photographs are prepared, we'll email you a connection to download the documents, all set. ",
  },
];

function HowSteps() {
  return (
    <section className={style.section}>
      <div className="container">
        <div className={style.wrapper}>
          {datas.map((data, index) => (
            <div key={index} className={style.steps}>
              <div className={style.step_img}>
                <div className="next-img-container">
                  <Image
                    src={data.imgSrc}
                    alt={data.title}
                    className="next-image"
                    layout="fill"
                  />
                </div>
              </div>
              <div className={style.step_content}>
                <h2>Stage {data.count}</h2>
                <h4>{data.title}</h4>
                <p>
                  {data.text1}{" "}
                  {data.text2 && (
                    <>
                      <br />
                      <br />
                      {data.text2}
                    </>
                  )}
                </p>
                {data.btn && (
                  <div className={style.action}>
                    <Link href="/">
                      <a className="main-btn d-inline-block">
                        Get Started <CgArrowRight />
                      </a>
                    </Link>
                  </div>
                )}
                {data.lists && (
                  <ul className={style.list}>
                    {data.lists.map((list, index) => (
                      <li key={index}>{list}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowSteps;
