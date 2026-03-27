import svgPaths from "./svg-cql4f9f1hr";

export default function Component() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[16px] shadow-[0px_8px_32px_0px_rgba(16,18,25,0.1)] size-full" data-name="反馈-对话框/中/复选框">
      <div className="bg-white relative shrink-0 w-full" data-name="header">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-start p-[24px] relative w-full">
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
              <div className="flex flex-col font-['Alibaba_PuHuiTi_3.0:75_SemiBold',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#101019] text-[20px] w-[min-content]">
                <p className="leading-[1.5]">主要标题</p>
              </div>
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
      <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0">
        <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip px-[24px] relative shrink-0 w-[520px]" data-name="Custom part">
          <p className="font-['Alibaba_PuHuiTi_3.0:65_Medium',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#444963] text-[16px] whitespace-nowrap">当前题目</p>
          <div className="content-stretch flex gap-[24px] items-start relative shrink-0" data-name="复选框组">
            <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="复选框">
              <div className="relative shrink-0 size-[16px]" data-name="复选框元素">
                <div className="absolute bg-white border border-[#cfd5e8] border-solid inset-0 rounded-[3px]" data-name="checkbox" />
              </div>
              <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0">
                <div className="flex flex-col font-['Alibaba_PuHuiTi_3.0:55_Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444963] text-[14px] whitespace-nowrap">
                  <p className="leading-[1.5]">题干错误</p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="复选框">
              <div className="relative shrink-0 size-[16px]" data-name="复选框元素">
                <div className="absolute bg-white border border-[#cfd5e8] border-solid inset-0 rounded-[3px]" data-name="checkbox" />
              </div>
              <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0">
                <div className="flex flex-col font-['Alibaba_PuHuiTi_3.0:55_Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444963] text-[14px] whitespace-nowrap">
                  <p className="leading-[1.5]">答案错误</p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="复选框">
              <div className="relative shrink-0 size-[16px]" data-name="复选框元素">
                <div className="absolute bg-white border border-[#cfd5e8] border-solid inset-0 rounded-[3px]" data-name="checkbox" />
              </div>
              <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0">
                <div className="flex flex-col font-['Alibaba_PuHuiTi_3.0:55_Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444963] text-[14px] whitespace-nowrap">
                  <p className="leading-[1.5]">解析错误</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip px-[24px] relative shrink-0 w-[520px]" data-name="Custom part">
          <p className="font-['Alibaba_PuHuiTi_3.0:65_Medium',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#444963] text-[16px] whitespace-nowrap">描述反馈问题</p>
          <div className="bg-white content-stretch flex flex-col h-[104px] items-start py-[6px] relative rounded-[6px] shrink-0 w-full" data-name="文本区域">
            <div aria-hidden="true" className="absolute border border-[#dfe3f0] border-solid inset-0 pointer-events-none rounded-[6px]" />
            <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="文本输入">
              <div className="overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex items-start pl-[12px] pr-[16px] relative size-full">
                  <p className="flex-[1_0_0] font-['Alibaba_PuHuiTi_3.0:55_Regular',sans-serif] leading-[1.5] min-h-px min-w-px not-italic relative text-[#838bab] text-[14px]">请尽可能详细描述您的问题</p>
                </div>
              </div>
            </div>
            <div className="relative shrink-0 w-full">
              <div className="flex flex-row justify-end size-full">
                <div className="content-stretch flex items-start justify-end pr-[8px] relative w-full">
                  <p className="font-['Avenir:Roman',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#838bab] text-[12px] whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'pnum'" }}>
                    0/100
                  </p>
                </div>
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