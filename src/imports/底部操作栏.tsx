export default function Component() {
  return (
    <div className="relative size-full" data-name="底部操作栏">
      <div className="absolute bg-white content-stretch flex gap-[12px] items-center justify-end left-0 px-[24px] py-[16px] top-0 w-[828px]" data-name="一级页面-底部导航+添加题目">
        <div aria-hidden="true" className="absolute border-[#e9ecf5] border-solid border-t inset-0 pointer-events-none shadow-[0px_8px_32px_0px_rgba(16,18,25,0.1)]" />
        <p className="font-['Alibaba_PuHuiTi_3.0:65_Medium',sans-serif] leading-[0] not-italic relative shrink-0 text-[#6574fc] text-[14px] text-center whitespace-nowrap">
          <span className="leading-[1.5] text-[#444963]">已添加</span>
          <span className="leading-[1.5]">{` 28 `}</span>
          <span className="leading-[1.5] text-[#444963]">题</span>
        </p>
        <div className="bg-white content-stretch flex h-[36px] items-center justify-center px-[20px] py-[8px] relative rounded-[18px] shrink-0" data-name="按钮-大-36">
          <div aria-hidden="true" className="absolute border border-[#dfe3f0] border-solid inset-0 pointer-events-none rounded-[18px]" />
          <p className="font-['Alibaba_PuHuiTi_3.0:65_Medium',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#444963] text-[14px] text-center whitespace-nowrap">取消布置</p>
        </div>
        <div className="bg-[#6574fc] content-stretch flex h-[36px] items-center justify-center px-[20px] py-[8px] relative rounded-[18px] shrink-0" data-name="按钮-大-36">
          <p className="font-['Alibaba_PuHuiTi_3.0:65_Medium',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">去布置</p>
        </div>
      </div>
    </div>
  );
}