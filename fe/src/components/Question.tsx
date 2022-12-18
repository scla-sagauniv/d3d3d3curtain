import { onMount, Setter } from "solid-js";
import { Target } from "~/graphql/generated/graphql";

type Props = {
  phase: number;
  setPhase: Setter<number>;
  target: Target;
};

export default function Question(props: Props) {
  const sleep = async (second: number) => {
    await new Promise((second) => setTimeout(second, 3000));
  };
  onMount(async () => {
    await sleep(3);
    props.setPhase(props.phase + 1);
  });
  return (
    <>
      <main class="mx-auto w-full h-full bg-bg_yellow">
        <div class="flex justify-center flex-col">
          <p class="text-font_blue not-italic font-normal text-5xl mt-32 text-center">
            目指せ！！
          </p>
          <p class="text-font_blue not-italic font-normal text-5xl mt-32 text-center">
            {props.target.angle}°
          </p>
        </div>
      </main>
    </>
  );
}
