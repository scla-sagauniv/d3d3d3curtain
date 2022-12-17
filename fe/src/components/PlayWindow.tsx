import { createSignal, Setter } from "solid-js";
import Detection from "~/components/Detection";

type Props = {
  phase: number;
  setPhase: Setter<number>;
  setAngle: Setter<number>;
  setCanvasUrl: Setter<string>;
};

export default function PlayWindow(props: Props) {
  const [capture, setCapture] = createSignal<boolean>(false);
  const click = () => {
    setCapture(true);
    props.setPhase(props.phase + 1);
  };
  const captureButtonClasses = [
    "bg-btn_blue",
    "py-6",
    "text-font_blue",
    "text-xl",
    "px-10",
    "rounded-tl-2xl",
    "absolute",
    "bottom-0",
    "right-0",
  ];
  return (
    <>
      <main class="mx-auto w-full h-full bg-white">
        <Detection
          capture={capture()}
          setAngle={props.setAngle}
          setCanvasUrl={props.setCanvasUrl}
        ></Detection>
        <button class={`${captureButtonClasses.join(" ")}`} onclick={click}>
          <img class="w-10 h-10" src="../../public/camera.png" />
        </button>
      </main>
    </>
  );
}
