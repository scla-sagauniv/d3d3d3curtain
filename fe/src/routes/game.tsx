import { createEffect, createSignal, Match, Switch } from "solid-js";
import PlayWindow from "~/components/PlayWindow";
import Question from "~/components/question";
import Result from "~/components/result";
import { gql } from "@solid-primitives/graphql";
import { newQuery } from "~/utils/graphqlClient";
import {
  GetTargetQuery,
  AddResultMutation,
  Target,
} from "~/graphql/generated/graphql";

const GetTargetQueryDocument = gql`
  query Query {
    target {
      angle
    }
  }
`;
export default function Game() {
  const [phase, setPhese] = createSignal<number>(0);
  const [angle, setAngle] = createSignal<number>(0);
  const [captureUrl, setCaptureUrl] = createSignal<string>("");
  const [target, setTarget] = createSignal<Target>({ angle: 0 });

  const [targetData] = newQuery<GetTargetQuery>(GetTargetQueryDocument);
  createEffect(() => {
    if (targetData()) {
      setTarget(targetData()!.target);
    }
  });

  return (
    <Switch fallback={<p>{phase()} is between 5 and 10</p>}>
      <Match when={phase() === 0}>
        <Question phase={phase()} setPhase={setPhese} target={target()} />
      </Match>
      <Match when={phase() === 1}>
        <PlayWindow
          phase={phase()}
          setPhase={setPhese}
          setAngle={setAngle}
          setCanvasUrl={setCaptureUrl}
        />
      </Match>
      <Match when={phase() === 2}>
        <Result angle={angle()} score={0.9} captureUrl={captureUrl()} />
      </Match>
    </Switch>
  );
}
