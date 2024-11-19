import React from "react";
import Image from "next/image";

interface Socials {
  twitter?: boolean;
  linkedin?: boolean;
  facebook?: boolean;
  ig?: boolean;
}

export default function SocialButton({
  twitter,
  ig,
  linkedin,
  facebook,
}: Socials) {
  let iconSrc = "";
  let altText = "";

  if (twitter) {
    iconSrc = "/x.svg";
    altText = "Twitter";
  } else if (ig) {
    iconSrc = "/ig-ico.svg";
    altText = "Instagram";
  } else if (linkedin) {
    iconSrc = "/linkedin.svg";
    altText = "LinkedIn";
  } else if (facebook) {
    iconSrc = "/facebook.svg";
    altText = "Facebook";
  }

  return (
    <a href="#">
      <Image width={35} height={35} src={iconSrc} alt={altText} />
    </a>
  );
}
