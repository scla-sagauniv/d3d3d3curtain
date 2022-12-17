import { createSignal } from "solid-js";
import Detection from "~/components/Detection";

export default function About() {
  const [capture, setCapture] = createSignal<boolean>(false);
  const click = () => {
    setCapture(true);
  };
  return (
    <>
      <Detection capture={capture()}></Detection>
      <button onClick={click}>STOP</button>
    </>
  );
}
