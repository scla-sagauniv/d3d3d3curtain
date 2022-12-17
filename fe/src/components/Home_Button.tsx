import { mergeProps } from "solid-js";

export default function Home_Button(props: { name: string; url: string }) {
  const name = props.name;
  const url = props.url;

  return (
    <a
      class="bg-btn_blue font-semibold text-font_blue py-3 mt-8 rounded"
      href={props.url}
    >
      <button class="w-full h-full">{props.name}</button>
    </a>
  );
}
