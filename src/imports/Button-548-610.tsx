import svgPaths from "./svg-hv2m73wxoq";

function Frame() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame" opacity="0.8">
          <path d={svgPaths.p1beb1380} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
          <path d="M3.33333 8H12.6667" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex gap-[2px] items-center left-1/2 top-[7px]">
      <Frame />
      <p className="font-['Alibaba_PuHuiTi_3.0:65_Medium',sans-serif] leading-[22px] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">新建诊断</p>
    </div>
  );
}

export default function Button() {
  return (
    <div className="relative rounded-[36px] size-full" data-name="Button" style={{ backgroundImage: "linear-gradient(219.456deg, rgba(255, 255, 255, 0.2) 12.811%, rgba(255, 255, 255, 0) 64.413%), linear-gradient(90deg, rgb(83, 118, 255) 0%, rgb(83, 118, 255) 100%)" }}>
      <Frame1 />
    </div>
  );
}