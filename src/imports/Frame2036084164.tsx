function Frame5() {
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

function Frame6() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[14px]">
      <Frame5 />
      <div className="h-[145px] relative shrink-0 w-0">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 145">
            <path d="M0.5 0V145" id="Vector 5651" stroke="var(--stroke-0, #6574FC)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <p className="font-['Alibaba_PuHuiTi_3.0:55_Regular',sans-serif] leading-[1.75] not-italic relative shrink-0 text-[#838bab] text-[12px] whitespace-nowrap">2026-03-25</p>
      <div className="bg-[#ebf1ff] content-stretch flex h-[16px] items-center justify-center overflow-clip px-[4px] py-[0.5px] relative rounded-[2px] shrink-0" data-name="浅色标签 Tag-底色-方">
        <div className="flex flex-col font-['Alibaba_PuHuiTi_3.0:55_Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4a4fed] text-[10px] text-center whitespace-nowrap">
          <p className="leading-[1.5]">刚刚发布</p>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full">
      <p className="font-['Alibaba_PuHuiTi_3.0:55_Regular',sans-serif] leading-[1.75] not-italic relative shrink-0 text-[#838bab] text-[12px] whitespace-nowrap">正确率：84%</p>
      <div className="h-[7.5px] relative shrink-0 w-0">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 7.5">
            <path d="M0.5 0V7.5" id="Vector 5650" stroke="var(--stroke-0, #CFD5E8)" />
          </svg>
        </div>
      </div>
      <p className="font-['Alibaba_PuHuiTi_3.0:55_Regular',sans-serif] leading-[1.75] not-italic relative shrink-0 text-[#838bab] text-[12px] whitespace-nowrap">完成时间：36分钟</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <p className="font-['Alibaba_PuHuiTi_3.0:65_Medium',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#444963] text-[14px] w-full">数学课程 (4节)</p>
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

function Frame4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
      <Frame3 />
      <Frame1 />
      <Frame2 />
    </div>
  );
}

export default function Frame7() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative size-full">
      <Frame6 />
      <Frame4 />
    </div>
  );
}