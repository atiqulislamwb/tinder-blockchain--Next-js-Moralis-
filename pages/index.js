import Header from "../components/Header";
import Card from "../components/Card";
const style = {
  wrapper: `w-screen h-screen flex flex-col bg-[#222229] `,
  cardsContainer: `flex flex-col items-center justify-center  `,
};

export default function Home() {
  return (
    <div className={style.wrapper}>
      <Header />
      <div className={style.cardsContainer}>
        <Card />
      </div>
    </div>
  );
}
