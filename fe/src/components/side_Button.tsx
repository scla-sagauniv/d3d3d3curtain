// 使い方
// 寄せたい方向をposi_x,posi_yで指定。
// 【例：右下に配置したい！】
// posi_x="right",posi_y="bottom"

export default function Side_Button(props: {
  name: string;
  url: string;
  posi_x: string;
  posi_y: string;
}) {
  const name = props.name;
  const url = props.url;
  const posi_x = props.posi_x;
  const posi_y = props.posi_y;

  //   ボタンの丸角の位置についての処理
  var x_ini = posi_x.slice(0, 1);
  var y_ini = posi_y.slice(0, 1);

  if ((x_ini = "r")) {
    var x_ini = "l";
  } else {
    var x_ini = "r";
  }

  if ((y_ini = "b")) {
    var y_ini = "t";
  } else {
    var y_ini = "b";
  }

  const coord = y_ini + x_ini;

  return (
    <a
      class={`bg-btn_blue font-semibold text-font_blue text-xl py-6 px-10 
      mt-8 rounded-${coord}-2xl absolute ${props.posi_x}-0 ${props.posi_y}-0`}
      href={props.url}
    >
      <button class="w-full h-full">{props.name}</button>
    </a>
  );
}
