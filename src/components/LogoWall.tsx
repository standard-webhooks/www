import * as React from "react";
import NextImage from "next/image";
import Link from "next/link";

export type ServiceLogo = {
  img?: any;
  imgAspectRatio: {
    width: number;
    height: number;
  };
  company: string;
  link: string;
  // For logos whose text is small relative to their height (e.g. icon + short wordmark)
  size?: "lg";
};

interface LogoProps {
  testimonials: ServiceLogo[];
}

export default function LogoWall(props: LogoProps) {
  const logos = props.testimonials;

  return (
    <div>
      <div className="flex wrap w-full justify-evenly items-center flex-wrap gap-x-8 md:gap-x-12 gap-y-8">
        {logos.map((item) => (
          <React.Fragment key={item.company}>
            <Link className="max-w-[140px] w-full" href={item.link}>
              <NextImage
                className={`mx-auto w-auto ${
                  item.size === "lg" ? "h-8 md:h-9" : "h-6 md:h-7"
                }`}
                src={item.img}
                height={item.imgAspectRatio.height}
                width={item.imgAspectRatio.width}
                alt={item.company}
                title={item.company}
              />
            </Link>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
