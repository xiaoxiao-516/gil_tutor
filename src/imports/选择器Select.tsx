import svgPaths from "./svg-1ref337nr6";

function Component() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-[192px]" data-name="内容">
      <p className="font-['Alibaba_PuHuiTi_3.0:55_Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#838bab] text-[14px] whitespace-nowrap">请选择</p>
    </div>
  );
}

export default function Select() {
  return (
    <div className="bg-white content-stretch flex items-center justify-between px-[12px] py-[8px] relative rounded-[6px] size-full" data-name="选择器 select">
      <div aria-hidden="true" className="absolute border border-[#6574fc] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <Component />
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