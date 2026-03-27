import svgPaths from "./svg-dzlf0fytij";

export default function Title() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative size-full" data-name="title">
      <div className="flex flex-col font-['Alibaba_PuHuiTi_3.0:75_SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#101019] text-[20px] whitespace-nowrap">
        <p className="leading-[1.5]">数学</p>
      </div>
      <div className="relative rounded-[10px] shrink-0 size-[20px]" data-name="ic_arrow__default">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[4px] items-center justify-center left-1/2 top-[calc(50%+1px)] w-[8px]">
            <div className="-scale-y-100 flex-none rotate-180">
              <div className="h-[4px] relative w-[8px]" data-name="arrow">
                <div className="absolute inset-[-18.75%_-9.38%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.5 5.5">
                    <path d={svgPaths.p14416700} id="arrow" stroke="var(--stroke-0, #444963)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#dfe3f0] border-solid inset-0 pointer-events-none rounded-[10px]" />
      </div>
    </div>
  );
}