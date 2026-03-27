import svgPaths from "./svg-fx843yhfwi";

export default function Modal() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[16px] shadow-[0px_8px_32px_0px_rgba(16,18,25,0.1)] size-full" data-name="Modal对话框">
      <div className="bg-white relative shrink-0 w-full" data-name="header">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[24px] py-[20px] relative w-full">
            <div className="flex flex-[1_0_0] flex-col font-['Alibaba_PuHuiTi_3.0:75_SemiBold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#101019] text-[20px]">
              <p className="leading-[1.5]">标题</p>
            </div>
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="close">
              <div className="absolute inset-[14.94%]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.0237 14.0237">
                  <path clipRule="evenodd" d={svgPaths.p37c48700} fill="var(--fill-0, #646B8A)" fillRule="evenodd" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Custom part">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-start px-[24px] relative w-full">
            <div className="bg-[#e0eaff] content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="layout布局模块/base基础">
              <div aria-hidden="true" className="absolute border border-[#facfc5] border-dashed inset-[-0.5px] pointer-events-none" />
              <div className="flex flex-col font-['PingFang_SC:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 size-[32px] text-[#e64c44] text-[12px] text-center">
                <p className="leading-[20px]">Base</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="footer">
        <div className="flex flex-row items-center justify-end size-full">
          <div className="content-stretch flex items-center justify-end pb-[20px] pt-[24px] px-[24px] relative w-full">
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
      </div>
    </div>
  );
}