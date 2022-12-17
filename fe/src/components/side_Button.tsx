// 使い方
// 寄せたい方向をposi_x,posi_yで指定。
// 【例：右下に配置したい！】
// posi_x="right",posi_y="bottom"
import { createSignal, createEffect } from "solid-js";

export default function Side_Button(props: {
  name: string;
  url: string;
  posi_x: string;
  posi_y: string;
  corner: string;
}) {
  return (
    <a
      class={`bg-btn_blue font-semibold text-font_blue text-xl
      py-6 px-10 rounded-${props.corner}-2xl absolute ${props.posi_x}-0 ${props.posi_y}-0`}
      href={props.url}
    >
      <button class="w-full h-full">{props.name}</button>
    </a>
  );
}

function Btn_posi() {}
