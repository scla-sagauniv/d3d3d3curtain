type Props = {
  angle: number;
  score: number;
  captureUrl: string;
};

export default function Result(props: Props) {
  const commonClasses = [
    "bg-btn_blue",
    "font-semibold",
    "text-font_blue",
    "text-xl",
    "py-6",
    "px-10",
    "absolute",
    "right-0",
    "z-10",
  ];
  const resultWindowClasses = [
    ...commonClasses,
    "text-center",
    "top-0",
    "rounded-bl-2xl",
  ];
  const returnButtonClasses = [...commonClasses, "rounded-tl-2xl", "bottom-0"];
  return (
    <>
      <main class="mx-auto w-full h-full bg-white">
        <img
          src={props.captureUrl}
          style={{ width: "100%", height: "100%", "object-fit": "cover" }}
        ></img>
        <a class={`${resultWindowClasses.join(" ")}`}>
          {props.angle}°
          <br />
          誤差:{props.score}°
        </a>
        <a class={`${returnButtonClasses.join(" ")}`} href="/">
          <button class="w-full h-full">戻る</button>
        </a>
      </main>
    </>
  );
}
