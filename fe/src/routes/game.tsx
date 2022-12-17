import { createSignal } from "solid-js";
import PlayWindow from "~/components/PlayWindow";
import Question from "~/components/question";
import Result from "~/components/result";

export default function Game() {
  const [phase, setPhese] = createSignal<number>(1);
  const [angle, setAngle] = createSignal<number>(0);
  const [captureUrl, setCaptureUrl] = createSignal<string>("");
  switch (phase()) {
    case 0:
      return <Question phase={phase()} setPhase={setPhese} />;
    case 1:
      return (
        <>
          <PlayWindow
            phase={phase()}
            setPhase={setPhese}
            setAngle={setAngle}
            setCanvasUrl={setCaptureUrl}
          />
        </>
      );
    case 2:
      return <Result angle={angle()} score={0.9} captureUrl={captureUrl()} />;
  }
  // return (
  //   <>
  //     {phase() === 0 && <Question phase={phase()} setPhase={setPhese} />}
  //     {phase() === 1 && <PlayWindow phase={phase()} setPhase={setPhese} />}
  //     {phase() === 2 && (
  //       <Result
  //         angle={30}
  //         score={0.3}
  //         captureUrl={
  //           "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/A_cat_on_a_motorcycle_in_the_medina_of_Tunis_20171017_131525.jpg/1200px-A_cat_on_a_motorcycle_in_the_medina_of_Tunis_20171017_131525.jpg"
  //         }
  //       />
  //     )}
  //   </>
  // );
}
