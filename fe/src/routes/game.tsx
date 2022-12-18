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
  ResultInput,
} from "~/graphql/generated/graphql";

const GetTargetQueryDocument = gql`
  query Query {
    target {
      angle
    }
  }
`;
const AddResultMutationDocumet = gql`
  mutation AddResult($resultinput: ResultInput!) {
    addResult(resultinput: $resultinput) {
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
    if (
      target().angle !== -1 &&
      angle() !== -1 &&
      score() === -1 &&
      phase() === 2
    ) {
      setScore(Math.trunc(Math.abs(target().angle - angle()) * 100) / 100);
      const body: ResultInput = {
        score: score(),
        target: target(),
        user: {
          name: "hoge-た",
        },
      };
      const [res] = newQuery<AddResultMutation>(
        AddResultMutationDocumet,
        () => ({ resultinput: body })
      );
      console.log("res", res()?.addResult.score, body);
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
