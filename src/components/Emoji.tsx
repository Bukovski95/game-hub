import React from "react";
import bullsEye from "../assets/bulls-eye.png";
import meh from "../assets/meh.jfif";
import thumbsUp from "../assets/thumbs-up.png";
import { Image, ImageProps } from "@chakra-ui/react";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "25px" },
    4: { src: thumbsUp, alt: "recommended", boxSize: "25px" },
    5: { src: bullsEye, alt: "exceptional", boxSize: "35px" },
  };

  return <Image {...emojiMap[rating]} borderRadius="25%" marginTop={5} />;
};

export default Emoji;
