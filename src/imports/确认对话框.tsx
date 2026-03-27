export default function Component() {
  return (
    <div className="bg-white relative rounded-[16px] size-full" data-name="确认对话框">
      <div className="content-stretch flex flex-col gap-[24px] items-end justify-center overflow-clip pb-[20px] pt-[24px] px-[24px] relative rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
          <div className="bg-white content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-[336px]" data-name="Modal-cell对话框元素/标题/yes">
            <div className="overflow-clip relative shrink-0 size-[24px]" data-name="info_warning">
              <div className="absolute inset-[4.17%]">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
                  <circle cx="11" cy="11" fill="var(--fill-0, #FA9524)" id="Ellipse 2302" r="11" />
                </svg>
              </div>
              <div className="absolute bottom-1/2 left-1/2 right-1/2 top-[29.17%]">
                <div className="absolute inset-[-20%_-1px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 7">
                    <path d="M1 1V6" id="Vector 5378" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-[31.25%] left-1/2 right-1/2 top-[66.67%]">
                <div className="absolute inset-[-300%_-1.5px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3.5">
                    <path d="M1.5 1.5V2" id="Vector 5377" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="3" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex flex-col font-['Alibaba_PuHuiTi_3.0:75_SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#101019] text-[20px] whitespace-nowrap">
              <p className="leading-[1.5]">警示标题</p>
            </div>
          </div>
          <div className="relative shrink-0 w-full" data-name="Text 说明文字">
            <div className="content-stretch flex items-start pl-[28px] relative w-full">
              <p className="flex-[1_0_0] font-['Alibaba_PuHuiTi_3.0:55_Regular',sans-serif] leading-[1.5] min-h-px min-w-px not-italic relative text-[#444963] text-[14px]">可以根据当前情况自定义模态正文文本。一旦按下确定按钮，此模式将立即关闭。</p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
          <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="复选框">
            <div className="bg-white relative rounded-[3px] shrink-0 size-[16px]" data-name="checkbox">
              <div aria-hidden="true" className="absolute border border-[#cfd5e8] border-solid inset-0 pointer-events-none rounded-[3px]" />
            </div>
            <p className="font-['Alibaba_PuHuiTi_3.0:55_Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#444963] text-[12px] text-center whitespace-nowrap">30天内不再提示</p>
          </div>
          <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
            <div className="bg-white content-stretch flex h-[36px] items-center justify-center px-[20px] py-[8px] relative rounded-[18px] shrink-0" data-name="按钮-大-36">
              <div aria-hidden="true" className="absolute border border-[#dfe3f0] border-solid inset-0 pointer-events-none rounded-[18px]" />
              <p className="font-['Alibaba_PuHuiTi_3.0:65_Medium',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#444963] text-[14px] text-center whitespace-nowrap">取消</p>
            </div>
            <div className="bg-[#6574fc] content-stretch flex h-[36px] items-center justify-center px-[20px] py-[8px] relative rounded-[18px] shrink-0" data-name="按钮-大-36">
              <p className="font-['Alibaba_PuHuiTi_3.0:65_Medium',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">确认</p>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e9ecf5] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_8px_32px_0px_rgba(16,18,25,0.1)]" />
    </div>
  );
}