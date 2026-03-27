import svgPaths from "./svg-9yu1wtcw4g";

function Frame() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <path d={svgPaths.p1beb1380} id="Vector" stroke="var(--stroke-0, #6574FC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
          <path d="M3.33333 8H12.6667" id="Vector_2" stroke="var(--stroke-0, #6574FC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}

function Component() {
  return (
    <div className="bg-white content-stretch flex gap-[2px] h-[32px] items-center justify-center px-[16px] py-[6px] relative rounded-[18px] shrink-0 w-[100px]" data-name="按钮-中-32">
      <div aria-hidden="true" className="absolute border border-[#9cb1fc] border-solid inset-0 pointer-events-none rounded-[18px]" />
      <Frame />
      <p className="font-['Alibaba_PuHuiTi_3.0:55_Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#6574fc] text-[14px] text-center whitespace-nowrap">补充任务</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_652_3776)" id="Frame 2036084149">
          <path d={svgPaths.p13f62700} id="Rectangle 346242151" stroke="var(--stroke-0, white)" strokeLinejoin="round" strokeWidth="1.2" />
        </g>
        <defs>
          <clipPath id="clip0_652_3776">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Component1() {
  return (
    <div className="content-stretch flex gap-[2px] h-[32px] items-center justify-center relative rounded-[36px] shrink-0 w-[100px]" data-name="按钮-大-36" style={{ backgroundImage: "linear-gradient(218.313deg, rgba(255, 255, 255, 0.2) 12.811%, rgba(255, 255, 255, 0) 64.413%), linear-gradient(90deg, rgb(83, 118, 255) 0%, rgb(83, 118, 255) 100%)" }}>
      <Frame1 />
      <p className="font-['Alibaba_PuHuiTi_3.0:65_Medium',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">智能布置</p>
    </div>
  );
}

export default function Frame2() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative size-full">
      <Component />
      <Component1 />
    </div>
  );
}