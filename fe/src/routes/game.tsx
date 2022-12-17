import Side_Button from "~/components/side_Button";

export default function Game() {
  return (
    <>
      <main class="mx-auto w-full h-full bg-white">
        <button
          class="bg-btn_blue py-6 text-font_blue text-xl 
        px-10 rounded-tl-2xl absolute bottom-0 right-0"
        >
          <img class="w-10 h-10" src="../../public/camera.png" />
        </button>
      </main>
    </>
  );
}
