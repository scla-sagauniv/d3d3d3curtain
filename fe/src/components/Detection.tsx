import { createEffect, createSignal } from "solid-js";
import { Camera } from "@mediapipe/camera_utils";
import { Hands, Results } from "@mediapipe/hands";
import { drawCanvas } from "~/utils/drawCanvas";

export default function Detection() {
  let videoRef: HTMLVideoElement | undefined = undefined;
  let canvasRef: HTMLCanvasElement | undefined = undefined;

  const onResults = (results: Results) => {
    const canvasCtx = canvasRef!.getContext("2d")!;
    drawCanvas(canvasCtx, results);
  };

  createEffect(async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    if (videoRef) {
      videoRef.srcObject = stream;
    }

    const hands = new Hands({
      locateFile: (file) => {
        return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
      },
    });

    hands.setOptions({
      maxNumHands: 1,
      modelComplexity: 1,
      minDetectionConfidence: 0.5,
      minTrackingConfidence: 0.5,
    });

    hands.onResults(onResults);

    if (videoRef) {
      const camera = new Camera(videoRef, {
        onFrame: async () => {
          await hands.send({ image: videoRef! });
        },
        width: 300,
        height: 255,
      });
      camera.start();
    }
  });

  return (
    <>
      <video
        ref={videoRef}
        autoplay
        playsinline
        muted
        width="300"
        height="200"
      ></video>
      <canvas ref={canvasRef} style={{ width: "300px", height: "255px" }} />
    </>
  );
}
