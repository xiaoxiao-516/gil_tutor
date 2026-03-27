import svgPaths from "./svg-sd5zgzfq5y";

export default function Select() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[4px] items-center justify-center px-[16px] py-[2px] relative rounded-[28px] size-full" data-name="选择器 select">
      <div aria-hidden="true" className="absolute border border-[#e9ecf5] border-solid inset-0 pointer-events-none rounded-[28px]" />
      <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-name="内容">
        <p className="font-['Alibaba_PuHuiTi_3.0:55_Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#101019] text-[12px] whitespace-nowrap">10条/页</p>
      </div>
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="ic_arrow_down">
        <div className="absolute inset-[35.94%_17.19%_32.81%_17.11%]" data-name>
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.1985 4.37503">
            <path clipRule="evenodd" d={svgPaths.p1adb3300} fill="var(--fill-0, #646B8A)" fillRule="evenodd" />
          </svg>
        </div>
      </div>
    </div>
  );
}