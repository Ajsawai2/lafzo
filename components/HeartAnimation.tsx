"use client"

import Lottie from "lottie-react";

interface Props {
  isPlaying: boolean;
}

export default function HeartAnimation({ isPlaying }: Props) {
  return (
    <div className="absolute bottom-40 left-1/2 -translate-x-1/2 w-40 h-40 pointer-events-none">
      <Lottie
        animationData={require("../public/animations/heart-burst.json")}
        loop={false}
        autoplay={isPlaying}
      />
    </div>
  );
}
