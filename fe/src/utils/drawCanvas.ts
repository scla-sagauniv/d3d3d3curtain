import { drawConnectors, drawLandmarks } from "@mediapipe/drawing_utils";
import {
  HAND_CONNECTIONS,
  Results,
  NormalizedLandmark,
} from "@mediapipe/hands";
import { Setter } from "solid-js";

/**
 * cnavasに描画する
 * @param ctx canvas context
 * @param results 手の検出結果
 */
export const drawCanvas = (
  ctx: CanvasRenderingContext2D,
  results: Results,
  setAngle: Setter<number> | undefined
) => {
  // const width = ctx.canvas.width;
  // const height = ctx.canvas.height;
  const width = 1920;
  const height = 1080;

  ctx.save();
  ctx.clearRect(0, 0, width, height);
  // canvas の左右反転
  ctx.scale(-1, 1);
  ctx.translate(-width, 0);
  // capture image の描画
  ctx.drawImage(results.image, 0, 0, width, height);
  // 手の描画
  if (results.multiHandLandmarks[0]) {
    // 骨格の描画
    for (const landmarks of results.multiHandLandmarks) {
      drawConnectors(ctx, landmarks, HAND_CONNECTIONS, {
        color: "#00FF00",
        lineWidth: 10,
      });
      drawLandmarks(ctx, landmarks, {
        color: "#FF0000",
        lineWidth: 10,
        radius: 10,
      });
    }
    const res = calcAngle(
      results.multiHandLandmarks[0][5],
      results.multiHandLandmarks[0][8],
      results.multiHandLandmarks[0][9],
      results.multiHandLandmarks[0][12]
    );
    console.log(res);
    if (setAngle) {
      setAngle(Math.trunc(res * 100) / 100);
    }
  }
  ctx.restore();
};

function calcAngle(
  indexFingerMCP: NormalizedLandmark,
  indexFingerTIP: NormalizedLandmark,
  middleFingerMCP: NormalizedLandmark,
  middleFingerTIP: NormalizedLandmark
): number {
  const indexVec = [
    indexFingerTIP.x - indexFingerMCP.x,
    indexFingerTIP.y - indexFingerMCP.y,
  ];
  const middleVec = [
    middleFingerTIP.x - middleFingerMCP.x,
    middleFingerTIP.y - middleFingerMCP.y,
  ];
  const cosx =
    (indexVec[0] * middleVec[0] + indexVec[1] * middleVec[1]) /
    (Math.sqrt(indexVec[0] ** 2 + indexVec[1] ** 2) *
      Math.sqrt(middleVec[0] ** 2 + middleVec[1] ** 2));
  const radianX = Math.acos(cosx);
  const degreeX = radianX * (180 / Math.PI);
  return degreeX;
}
