import Home_Button from "../components/Home_Button";
import { render } from "solid-js/web";
import { createSignal, For } from "solid-js";

export default function ranking() {
  const [cats, setCats] = createSignal([
    { id: "J---aiyznGQ", name: "hoge" },
    { id: "z_AbfPXTKms", name: "hoge" },
    { id: "OUtn3pvWmpg", name: "hoge" },
  ]);

  return (
    <main class="mx-auto w-full h-full bg-bg_yellow">
      <div class="flex justify-center flex-col">
        <p class="text-font_blue not-italic font-normal text-5xl mt-32 text-center">
          誤差
        </p>
        {/* ランキングの要素を生成 */}
        <div class="flex flex-col mx-auto w-50 h-auto justify-center">
          <For each={cats()}>
            {(cat, i) => (
              <p class="text-font_blue not-italic font-normal text-5xl mt-16 text-left">
                {i() + 1}位: {cat.name}°
              </p>
            )}
          </For>
        </div>
      </div>
    </main>
  );
}
