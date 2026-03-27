import svgPaths from "./svg-57pg132w6m";

function IconWrapper() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="icon-wrapper">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_652_4248)" id="icon-wrapper">
          <path clipRule="evenodd" d={svgPaths.p36936200} fill="var(--fill-0, #646B8A)" fillRule="evenodd" id="Union" />
        </g>
        <defs>
          <clipPath id="clip0_652_4248">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

export default function Button() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[4px] size-full" data-name="Button 按钮">
      <IconWrapper />
    </div>
  );
}