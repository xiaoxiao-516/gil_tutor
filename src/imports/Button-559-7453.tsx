import svgPaths from "./svg-18hjbja5pw";

function Frame() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <path d="M14 2.66667V8" id="Vector" stroke="var(--stroke-0, #2043F0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2 8V13.3333" id="Vector_2" stroke="var(--stroke-0, #2043F0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2c2b0280} id="Vector_3" stroke="var(--stroke-0, #2043F0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex gap-[4px] items-center left-1/2 top-[calc(50%+0.5px)]">
      <Frame />
      <p className="font-['Alibaba_PuHuiTi_3.0:65_Medium',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#2043f0] text-[14px] text-center whitespace-nowrap">重置</p>
    </div>
  );
}

export default function Button() {
  return (
    <div className="relative rounded-[16777200px] size-full" data-name="Button">
      <Frame1 />
    </div>
  );
}