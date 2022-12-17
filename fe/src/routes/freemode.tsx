import Side_Button from "~/components/side_Button";

export default function FreeMode() {
  return (
    <>
      <main class="mx-auto w-full h-full bg-white">
        <Side_Button
          name="戻る"
          url="/"
          posi_x="right"
          posi_y="bottom"
          corner="tl"
        ></Side_Button>
        <Side_Button
          name="30°"
          url=""
          posi_x="right"
          posi_y="top"
          corner="bl"
        ></Side_Button>
      </main>
    </>
  );
}
