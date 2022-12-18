import { createEffect, createSignal, Match, Switch } from "solid-js";
import PlayWindow from "~/components/PlayWindow";
import Question from "~/components/Question";
import Result from "~/components/Result";
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
const AddResultMutationDocumet = gql`
  mutation AddResult($score: Float!) {
    addResult(score: $score) {
      score
    }
  }
`;
export default function Game() {
  const [phase, setPhese] = createSignal<number>(0);
  const [angle, setAngle] = createSignal<number>(-1);
  const [captureUrl, setCaptureUrl] = createSignal<string>("");
  const [score, setScore] = createSignal<number>(-1);
  const [target, setTarget] = createSignal<Target>({ angle: -1 });
  const [targetData] = newQuery<GetTargetQuery>(GetTargetQueryDocument);
  createEffect(() => {
    if (targetData()) {
      setTarget(targetData()!.target);
    }
  });
  createEffect(() => {
    if (target().angle !== -1 && angle() !== -1 && score() === -1) {
      setScore(Math.abs(target().angle - angle()));
      const [res] = newQuery<AddResultMutation>(
        AddResultMutationDocumet,
        () => ({
          score: score(),
        })
      );
      console.log(res()?.addResult.score);
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
        <Result angle={angle()} score={score()} captureUrl={captureUrl()} />
      </Match>
    </Switch>
  );
}
