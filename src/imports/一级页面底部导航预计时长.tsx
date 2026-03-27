import svgPaths from "./svg-3g6fnutf14";

export default function Component() {
  return (
    <div className="bg-white content-stretch flex gap-[12px] items-center justify-end px-[24px] py-[16px] relative shadow-[0px_8px_32px_0px_rgba(16,18,25,0.1)] size-full" data-name="一级页面-底部导航+预计时长">
      <div className="bg-[#f4f7fe] content-stretch flex gap-px items-center relative rounded-[18px] shrink-0" data-name="按钮_大_ 36_预估时长">
        <div aria-hidden="true" className="absolute border border-[#dfe3f0] border-solid inset-0 pointer-events-none rounded-[18px]" />
        <div className="content-stretch flex gap-[8px] items-center pl-[12px] relative rounded-bl-[4px] rounded-tl-[4px] shrink-0" data-name="前端">
          <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="预估时长">
            <div className="flex flex-col font-['Alibaba_PuHuiTi_3.0:65_Medium',sans-serif] h-[20.25px] justify-center leading-[0] not-italic relative shrink-0 text-[#646b8a] text-[12px] text-right w-[48px]">
              <p className="leading-[1.5]">预估时长</p>
            </div>
            <div className="relative shrink-0 size-[10px]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
                <g id="Vector" opacity="0.7">
                  <path d={svgPaths.p1d658600} fill="var(--fill-0, #646B8A)" />
                  <path d={svgPaths.p13298800} fill="var(--fill-0, #646B8A)" />
                  <path clipRule="evenodd" d={svgPaths.p8c28e40} fill="var(--fill-0, #646B8A)" fillRule="evenodd" />
                </g>
              </svg>
            </div>
          </div>
          <div className="flex h-[36px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
            <div className="flex-none rotate-90">
              <div className="h-0 relative w-[36px]">
                <div className="absolute inset-[-1px_0_0_0]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 1">
                    <line id="Line 1" stroke="var(--stroke-0, #DFE3F0)" x2="36" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[10px] items-start justify-center px-[10px] py-[8px] relative shrink-0" data-name="后端">
          <div className="h-[8px] relative shrink-0 w-0">
            <div className="absolute inset-[0_-0.5px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 8">
                <path d="M0.5 0V8" id="Vector 3306" stroke="var(--stroke-0, #CFD5E8)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white content-stretch flex h-[36px] items-center justify-center px-[20px] py-[8px] relative rounded-[18px] shrink-0" data-name="按钮-大-36">
        <div aria-hidden="true" className="absolute border border-[#dfe3f0] border-solid inset-0 pointer-events-none rounded-[18px]" />
        <p className="font-['Alibaba_PuHuiTi_3.0:65_Medium',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#444963] text-[14px] text-center whitespace-nowrap">取消布置</p>
      </div>
      <div className="bg-[#f0f2f7] content-stretch flex h-[36px] items-center justify-center px-[20px] py-[8px] relative rounded-[18px] shrink-0" data-name="按钮-大-36">
        <div aria-hidden="true" className="absolute border border-[#dfe3f0] border-solid inset-0 pointer-events-none rounded-[18px]" />
        <p className="font-['Alibaba_PuHuiTi_3.0:65_Medium',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#abb4d1] text-[14px] text-center whitespace-nowrap">已加入(0)</p>
      </div>
      <div className="bg-[#bbcbfc] content-stretch flex h-[36px] items-center justify-center px-[20px] py-[8px] relative rounded-[18px] shrink-0" data-name="按钮-大-36">
        <p className="font-['Alibaba_PuHuiTi_3.0:65_Medium',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">下一步</p>
      </div>
    </div>
  );
}