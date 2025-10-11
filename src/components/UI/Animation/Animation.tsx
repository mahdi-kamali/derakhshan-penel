import { DotLottiePlayer, Props } from "@dotlottie/react-player";

export default function Animation(props: Props) {
  return (
    <DotLottiePlayer
      style={{
        width: "100%",
        height: "100%",
      }}
      {...props}
      autoplay></DotLottiePlayer>
  );
}
