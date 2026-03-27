export default function Component() {
  return (
    <div className="bg-white content-stretch flex gap-[12px] items-center justify-end px-[24px] py-[16px] relative size-full" data-name="一级页面-底部导航+添加题目">
      <div aria-hidden="true" className="absolute border-[#e9ecf5] border-solid border-t inset-0 pointer-events-none" />
      <p className="flex-[1_0_0] font-['Alibaba_PuHuiTi_3.0:65_Medium',sans-serif] leading-[0] min-h-px min-w-px not-italic relative text-[#6574fc] text-[14px]">
        <span className="leading-[1.5] text-[#444963]">预计</span>
        <span className="leading-[1.5]">{` 52 `}</span>
        <span className="leading-[1.5] text-[#444963]">分钟 (目标60分钟)</span>
      </p>
      <div className="bg-[#bbcbfc] h-[36px] relative rounded-[18px] shrink-0" data-name="按钮-大-36">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex h-full items-center justify-center px-[20px] py-[8px] relative">
            <p className="font-['Alibaba_PuHuiTi_3.0:65_Medium',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">确认布置</p>
          </div>
        </div>
      </div>
    </div>
  );
}