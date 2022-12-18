import { createEffect, Setter } from "solid-js";
import { Camera } from "@mediapipe/camera_utils";
import { Hands, Results } from "@mediapipe/hands";
import { drawCanvas } from "~/utils/drawCanvas";

type Props = {
  capture: boolean;
  setAngle: Setter<number> | undefined;
  setCanvasUrl: Setter<string> | undefined;
};

export default function Detection(props: Props) {
  let videoRef: HTMLVideoElement | undefined = undefined;
  let canvasRef: HTMLCanvasElement | undefined = undefined;
  let camera: Camera | undefined = undefined;

  const onResults = (results: Results) => {
    const canvasCtx = canvasRef!.getContext("2d")!;
    drawCanvas(canvasCtx, results, props.setAngle);
  };

  createEffect(async () => {
    const hands = new Hands({
      locateFile: (file) => {
        return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
      },
    });

    if (videoRef) {
      camera = new Camera(videoRef, {
        onFrame: async () => {
          await hands!.send({ image: videoRef! });
        },
        facingMode: "user",
        width: 1920,
        height: 1080,
      });
      camera.start();
    }

    hands.setOptions({
      maxNumHands: 1,
      modelComplexity: 1,
      minDetectionConfidence: 0.5,
      minTrackingConfidence: 0.5,
    });

    hands.onResults(onResults);
  });
  const capture = () => {
    if (props.setCanvasUrl) {
      props.setCanvasUrl!(canvasRef!.toDataURL("image/jpeg"));
      console.log(canvasRef!.toDataURL("image/jpeg"));
    }
    camera!.stop();
    videoRef = undefined;
  };
  createEffect(() => {
    if (props.capture) {
      capture();
    }
  });

  return (
    <>
      <video
        ref={videoRef}
        autoplay
        playsinline
        muted
        style={{ display: "none" }}
      ></video>
      <canvas
        ref={canvasRef}
        width={1920}
        height={1080}
        style={{ width: "100%", height: "100%", "object-fit": "cover" }}
      />
    </>
  );
}
