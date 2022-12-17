import { createSignal } from "solid-js";
import Detection from "~/components/Detection";

export default function FreeMode() {
  const commonClasses = [
    "bg-btn_blue",
    "font-semibold",
    "text-font_blue",
    "text-xl",
    "py-6",
    "px-10",
    "absolute",
    "right-0",
    "z-10",
  ];
  const angleWindowClasses = [...commonClasses, "top-0", "rounded-bl-2xl"];
  const returnButtonClasses = [...commonClasses, "bottom-0", "rounded-tl-2xl"];
  const [angle, setAngle] = createSignal<number>(0);
  return (
    <>
      <main class="mx-auto w-full h-full bg-white">
        <Detection
          capture={false}
          setAngle={setAngle}
          setCanvasUrl={undefined}
        ></Detection>
        <a class={`${returnButtonClasses.join(" ")}`} href="/">
          <button class="w-full h-full">戻る</button>
        </a>
        <a class={`${angleWindowClasses.join(" ")}`}>{angle}</a>
      </main>
    </>
  );
}
