import Side_Button from "~/components/side_Button";

export default function Result() {
  return (
    <>
      <main class="mx-auto w-full h-full bg-white">
        <a
          class={`bg-btn_blue font-semibold text-font_blue text-center text-xl
      py-6 px-10 rounded-bl-2xl absolute top-0 right-0 z-10`}
        >
          30°
          <br />
          誤差:0.064°
        </a>

        <a
          class={`bg-btn_blue font-semibold text-font_blue text-xl
      py-6 px-10 rounded-tl-2xl absolute bottom-0 right-0 z-10`}
          href="/"
        >
          <button class="w-full h-full">戻る</button>
        </a>
      </main>
    </>
  );
}
