import svgPaths from "./svg-mavcv2gimi";

function Group() {
  return (
    <div className="absolute inset-[6.25%_3.04%_8.45%_11.66%]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.151 13.151">
        <g id="Group 224104">
          <path clipRule="evenodd" d={svgPaths.p38519180} fill="var(--fill-0, #838BAB)" fillRule="evenodd" id="Ellipse 216 (Stroke)" />
          <path clipRule="evenodd" d={svgPaths.p2c8387f0} fill="var(--fill-0, #838BAB)" fillRule="evenodd" id="Vector 82 (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function IconTime() {
  return (
    <div className="absolute inset-[10.42%_14.58%_12.5%_8.33%]" data-name="icon-time-20">
      <Group />
    </div>
  );
}

export default function IcSearch() {
  return (
    <div className="relative size-full" data-name="ic_search">
      <IconTime />
    </div>
  );
}