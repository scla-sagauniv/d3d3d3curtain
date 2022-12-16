import { createEffect } from "solid-js";

export default function Camera() {
  let videoRef: HTMLVideoElement | undefined = undefined;

  createEffect(async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    if (videoRef) {
      videoRef.srcObject = stream;
    }
  });

  return (
    <video
      ref={videoRef}
      autoplay
      playsinline
      muted
      width="300"
      height="200"
    ></video>
  );
}
