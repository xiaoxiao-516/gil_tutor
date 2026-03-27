import svgPaths from "./svg-19pv0i3uah";

function Component2() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-name="内容">
      <p className="font-['Alibaba_PuHuiTi_3.0:55_Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#101019] text-[12px] whitespace-nowrap">10条/页</p>
    </div>
  );
}

function Component1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="页码">
      <div className="content-stretch flex items-center justify-center p-[6px] relative rounded-[28px] shrink-0 size-[28px]" data-name="分页元素/翻页器">
        <div className="overflow-clip relative shrink-0 size-[12px]" data-name="ic_arrow_left">
          <div className="absolute flex inset-[18.71%_35.42%_15.59%_33.33%] items-center justify-center">
            <div className="-scale-y-100 flex-none h-[9.198px] w-[4.375px]">
              <div className="relative size-full" data-name>
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.75003 7.88443">
                  <path clipRule="evenodd" d={svgPaths.p35c2f200} fill="var(--fill-0, #ABB4D1)" fillRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex items-center justify-center p-[2px] relative rounded-[28px] shrink-0 size-[28px]" data-name="分页元素/页码" style={{ backgroundImage: "linear-gradient(220.815deg, rgba(255, 255, 255, 0.2) 13.197%, rgba(255, 255, 255, 0) 86.803%), linear-gradient(90deg, rgb(83, 118, 255) 0%, rgb(83, 118, 255) 100%)" }}>
        <p className="font-['Avenir:Roman',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'pnum'" }}>
          1
        </p>
      </div>
      <div className="content-stretch flex items-center justify-center p-[2px] relative rounded-[28px] shrink-0 size-[28px]" data-name="分页元素/页码">
        <p className="font-['Avenir:Roman',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#444963] text-[14px] text-center whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'pnum'" }}>
          2
        </p>
      </div>
      <div className="content-stretch flex items-center justify-center p-[2px] relative rounded-[28px] shrink-0 size-[28px]" data-name="分页元素/页码">
        <p className="font-['Avenir:Roman',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#444963] text-[14px] text-center whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'pnum'" }}>
          3
        </p>
      </div>
      <div className="content-stretch flex items-center justify-center p-[2px] relative rounded-[28px] shrink-0 size-[28px]" data-name="分页元素/页码">
        <p className="font-['Avenir:Roman',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#444963] text-[14px] text-center whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'pnum'" }}>
          4
        </p>
      </div>
      <div className="content-stretch flex items-center justify-center p-[2px] relative rounded-[28px] shrink-0 size-[28px]" data-name="分页元素/页码">
        <p className="font-['Avenir:Roman',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#444963] text-[14px] text-center whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'pnum'" }}>
          5
        </p>
      </div>
      <div className="content-stretch flex items-center justify-center p-[6px] relative rounded-[28px] shrink-0 size-[28px]" data-name="分页元素/翻页器">
        <div className="overflow-clip relative shrink-0 size-[12px]" data-name="ic_arrow_right">
          <div className="absolute flex inset-[18.71%_33.33%_15.59%_35.42%] items-center justify-center">
            <div className="-scale-y-100 flex-none h-[9.198px] w-[4.375px]">
              <div className="relative size-full" data-name>
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.75003 7.88443">
                  <path clipRule="evenodd" d={svgPaths.p12537a00} fill="var(--fill-0, #444963)" fillRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[4px] h-[28px] items-center justify-center px-[16px] py-[2px] relative rounded-[28px] shrink-0" data-name="选择器 select">
        <div aria-hidden="true" className="absolute border border-[#e9ecf5] border-solid inset-0 pointer-events-none rounded-[28px]" />
        <Component2 />
        <div className="overflow-clip relative shrink-0 size-[14px]" data-name="ic_arrow_down">
          <div className="absolute inset-[35.94%_17.19%_32.81%_17.11%]" data-name>
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.1985 4.37503">
              <path clipRule="evenodd" d={svgPaths.p1adb3300} fill="var(--fill-0, #646B8A)" fillRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Component() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center relative size-full" data-name="分页">
      <Component1 />
    </div>
  );
}