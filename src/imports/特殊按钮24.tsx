export default function Component() {
  return (
    <div className="bg-[#ebf1ff] content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[4px] relative rounded-[18px] size-full" data-name="特殊按钮-24">
      <div aria-hidden="true" className="absolute border border-[#e0eaff] border-solid inset-0 pointer-events-none rounded-[18px]" />
      <div className="flex flex-col font-['Alibaba_PuHuiTi_3.0:65_Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6574fc] text-[10px] whitespace-nowrap">
        <p className="leading-[1.5]">发消息</p>
      </div>
    </div>
  );
}