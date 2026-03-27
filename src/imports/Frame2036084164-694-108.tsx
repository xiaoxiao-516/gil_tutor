import svgPaths from "./svg-fnul1acw7u";

function Frame4() {
  return (
    <div className="content-stretch flex items-center justify-center py-[7px] relative shrink-0 w-full">
      <div className="relative shrink-0 size-[8px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" id="Ellipse 2502" r="3" stroke="var(--stroke-0, #6574FC)" strokeWidth="2" />
        </svg>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[14px]">
      <Frame4 />
      <div className="h-[110px] relative shrink-0 w-0">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 110">
            <path d="M0.5 0V110" id="Vector 5651" stroke="var(--stroke-0, #6574FC)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="bg-[#fff3e6] content-stretch flex gap-[2px] h-[16px] items-center px-[4px] relative rounded-[4px] shrink-0">
      <div className="relative shrink-0 size-[12px]" data-name="ic_课程_16">
        <div className="absolute h-[3px] left-[5.25px] top-[4.13px] w-[2.25px]">
          <div className="absolute inset-[-6.02%_-8.64%_-6.02%_-16.67%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.81938 3.36118">
              <path d={svgPaths.p2a4b5480} fill="var(--fill-0, #FA9524)" id="Vector 2075" stroke="var(--stroke-0, #FA9524)" strokeWidth="0.75" />
            </svg>
          </div>
        </div>
        <div className="absolute left-[1.07px] size-[9.149px] top-[0.79px]" data-name="Subtract">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.15039 9.15039">
            <path d={svgPaths.p2d6dd560} fill="var(--fill-0, #FA9524)" id="Subtract" />
          </svg>
        </div>
      </div>
      <p className="font-['Alibaba_PuHuiTi_3.0:55_Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#fa9524] text-[10px] whitespace-nowrap">AI课</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
      <p className="font-['Alibaba_PuHuiTi_3.0:65_Medium',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#444963] text-[14px] whitespace-nowrap">集合的概念</p>
      <Frame7 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full">
      <p className="font-['Alibaba_PuHuiTi_3.0:55_Regular',sans-serif] leading-[1.75] not-italic relative shrink-0 text-[#838bab] text-[12px] whitespace-nowrap">完成率：已完成</p>
      <div className="h-[7.5px] relative shrink-0 w-0">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 7.5">
            <path d="M0.5 0V7.5" id="Vector 5650" stroke="var(--stroke-0, #CFD5E8)" />
          </svg>
        </div>
      </div>
      <p className="font-['Alibaba_PuHuiTi_3.0:55_Regular',sans-serif] leading-[1.75] not-italic relative shrink-0 text-[#838bab] text-[12px] whitespace-nowrap">时长：36分钟</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame8 />
      <Frame />
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-[#f4f7fe] relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[12px] py-[8px] relative w-full">
          <p className="font-['Alibaba_PuHuiTi_3.0:55_Regular',sans-serif] leading-[1.75] not-italic relative shrink-0 text-[#838bab] text-[12px] w-[171px]">备注：函数概念已掌握，方程仍需巩固</p>
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
      <Frame1 />
      <Frame2 />
    </div>
  );
}

export default function Frame6() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative size-full">
      <Frame5 />
      <Frame3 />
    </div>
  );
}