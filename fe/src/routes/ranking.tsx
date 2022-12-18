import Home_Button from "../components/Home_Button";
import { render } from "solid-js/web";
import { createEffect, createSignal, For } from "solid-js";
import Side_Button from "~/components/side_Button";
import { GetRankingQuery, Result } from "~/graphql/generated/graphql";
import { gql } from "@solid-primitives/graphql";
import { newQuery } from "~/utils/graphqlClient";

const GetRankingQueryDocument = gql`
  query Query {
    ranking {
      score
      user {
        name
      }
    }
  }
`;
export default function ranking() {
  const [ranks, setRanks] = createSignal([
    { userName: "hoge-ﾀ", score: 0.064 },
    { userName: "fizz", score: 0.078 },
    { userName: "buzz", score: 0.1 },
  ]);
  const [rankingData] = newQuery<GetRankingQuery>(GetRankingQueryDocument);
  createEffect(() => {
    if (rankingData()) {
      setRanks([
        {
          userName: rankingData()!.ranking![0].user.name,
          score: rankingData()!.ranking![0].score,
        },
        {
          userName: rankingData()!.ranking![1].user.name,
          score: rankingData()!.ranking![1].score,
        },
        {
          userName: rankingData()!.ranking![2].user.name,
          score: rankingData()!.ranking![2].score,
        },
      ]);
    }
  });

  const hoge = ["mt-8", ""];

  return (
    <main class="mx-auto w-full h-full bg-bg_yellow">
      <div class="flex justify-center flex-col">
        <p class="text-font_blue not-italic font-normal text-5xl mt-32 text-center">
          誤差
        </p>
        {/* ランキングの要素を生成 */}
        <div class="flex flex-col mx-auto w-3/4x h-auto justify-center">
          <div class="text-font_blue not-italic font-normal text-5xl text-left grid grid-cols-3 grid-rows-3">
            <For each={ranks()}>
              {(rank, i) => (
                <>
                  <div class="mt-8 hover:">{i() + 1}位:</div>
                  <div class="mt-8">{rank.score}°</div>
                  <div class="mt-8">{rank.userName}</div>
                </>
              )}
            </For>
          </div>
        </div>
      </div>
      <a
        class={`bg-btn_blue font-semibold text-font_blue text-xl
      py-6 px-10 rounded-tl-2xl absolute bottom-0 right-0 z-10`}
        href="/"
      >
        <button class="w-full h-full">戻る</button>
      </a>
    </main>
  );
}
