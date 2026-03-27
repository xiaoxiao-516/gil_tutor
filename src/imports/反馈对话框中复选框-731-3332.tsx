import svgPaths from "./svg-gl0as5wg90";

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row items-center size-full">
      <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[5px] relative w-full">{children}</div>
    </div>
  );
}

function Button() {
  return (
    <div className="relative rounded-[4px] shrink-0">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center relative">
          <div className="relative shrink-0 size-[14px]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
              <g clipPath="url(#clip0_731_3364)" id="icon-wrapper">
                <path clipRule="evenodd" d={svgPaths.p36936200} fill="var(--fill-0, #646B8A)" fillRule="evenodd" id="Union" />
              </g>
              <defs>
                <clipPath id="clip0_731_3364">
                  <rect fill="white" height="14" width="14" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[16px] shadow-[0px_8px_32px_0px_rgba(16,18,25,0.1)] size-full" data-name="反馈-对话框/中/复选框">
      <div className="bg-white relative shrink-0 w-full" data-name="header">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-start p-[24px] relative w-full">
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
              <div className="flex flex-col font-['Alibaba_PuHuiTi_3.0:75_SemiBold',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#101019] text-[20px] w-[min-content]">
                <p className="leading-[1.5]">发布时间</p>
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
      <div className="h-[160px] relative shrink-0 w-full" data-name="时间选择">
        <div className="content-stretch flex flex-col gap-[12px] items-start px-[24px] relative size-full">
          <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
            <p className="font-['Alibaba_PuHuiTi_3.0:55_Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#838bab] text-[12px] w-full">发布时间</p>
            <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="DatePicker 日期选择框">
              <div aria-hidden="true" className="absolute border border-[#cfd5e8] border-solid inset-0 pointer-events-none rounded-[6px]" />
              <Wrapper>
                <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px overflow-clip relative" data-name="时间">
                  <p className="font-['Alibaba_PuHuiTi_3.0:55_Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#101019] text-[14px] w-[210px]">立即发布</p>
                </div>
                <Button />
              </Wrapper>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
            <p className="font-['Alibaba_PuHuiTi_3.0:55_Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#838bab] text-[12px] w-full">要求完成时间</p>
            <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="DatePicker 日期选择框">
              <div aria-hidden="true" className="absolute border border-[#e9ecf5] border-solid inset-0 pointer-events-none rounded-[6px]" />
              <Wrapper>
                <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px overflow-clip relative" data-name="时间">
                  <p className="flex-[1_0_0] font-['Avenir:Roman',sans-serif] leading-[1.5] min-h-px min-w-px not-italic relative text-[#101019] text-[14px]" style={{ fontFeatureSettings: "'lnum', 'pnum'" }}>
                    2022-11-27 12:20
                  </p>
                </div>
                <Button />
              </Wrapper>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="footer">
        <div className="flex flex-row items-center justify-end size-full">
          <div className="content-stretch flex items-center justify-end pb-[20px] pt-[24px] px-[24px] relative w-full">
            <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
              <div className="bg-white h-[36px] relative rounded-[18px] shrink-0 w-[96px]" data-name="按钮-大-36">
                <div aria-hidden="true" className="absolute border border-[#dfe3f0] border-solid inset-0 pointer-events-none rounded-[18px]" />
                <div className="flex flex-row items-center justify-center size-full">
                  <div className="content-stretch flex items-center justify-center px-[20px] py-[8px] relative size-full">
                    <p className="font-['Alibaba_PuHuiTi_3.0:65_Medium',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#444963] text-[14px] text-center whitespace-nowrap">取消</p>
                  </div>
                </div>
              </div>
              <div className="bg-[#6574fc] h-[36px] relative rounded-[18px] shrink-0" data-name="按钮-大-36">
                <div className="flex flex-row items-center justify-center size-full">
                  <div className="content-stretch flex h-full items-center justify-center px-[20px] py-[8px] relative">
                    <p className="font-['Alibaba_PuHuiTi_3.0:65_Medium',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">确认发布</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}