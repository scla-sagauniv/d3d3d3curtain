import Home_Button from "../components/Home_Button";

export default function Home() {
  return (
    <main class="mx-auto w-full h-full bg-bg_yellow">
      <div class="flex justify-center flex-col">
        <p class="text-font_blue not-italic font-normal text-5xl mt-32 text-center">
          ピースの角度は何十度？？
        </p>
        <div class="flex flex-col mx-auto mt-11 w-36 h-auto justify-center">
          <Home_Button name="ゲームスタート" url="/question" />
          <Home_Button name="フリーモード" url="" />
          <Home_Button name="ランキング" url="/ranking" />
        </div>
      </div>
    </main>
  );
}
