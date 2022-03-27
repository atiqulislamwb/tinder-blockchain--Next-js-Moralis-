import { useContext } from "react";
import { SiTinder } from "react-icons/si";
import CardHeader from "./CardHeader";
import CardFooter from "./CardFooter";
import TinderCardItem from "./TinderCardItem";
import { TinderContext } from "../context/TindeContext.js";

const style = {
  wrapper: `h-[45rem] w-[30rem] flex flex-col rounded-lg overflow-hidden mt-[3rem] `,
  cardMain: `w-full flex-1 relative flex flex-col justify-center items-center bg-gray-500`,
  noMoreWrapper: `flex flex-col justify-center items-center absolute`,
  tinderLogo: `text-5xl text-red-500 mb-4`,
  noMoreText: `text-xl text-white`,
  swipeContainer: `w-full h-full overflow-hidden`,
};

const Card = () => {
  const { cardData } = useContext(TinderContext);
  return (
    <div className={style.wrapper}>
      <CardHeader />

      <div className={style.cardMain}>
        <div className={style.noMoreWrapper}>
          <SiTinder className={style.tinderLogo} />
          <div className={style.noMoreText}>
            No More Profile in your Location....
          </div>
        </div>

        <div className={style.swipeContainer}>
          {cardData.map((card, i) => (
            <TinderCardItem card={card} key={i} />
          ))}
        </div>
      </div>
      <CardFooter />
    </div>
  );
};

export default Card;
