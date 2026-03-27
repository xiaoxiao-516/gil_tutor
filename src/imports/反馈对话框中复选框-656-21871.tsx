import svgPaths from "./svg-qbs6ga3r8i";

function Frame() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
      <div className="flex flex-col font-['Alibaba_PuHuiTi_3.0:75_SemiBold',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#101019] text-[20px] w-[min-content]">
        <p className="leading-[1.5]">上传资源</p>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="header">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-start p-[24px] relative w-full">
          <Frame />
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
  );
}

function Component2() {
  return (
    <div className="relative shrink-0 w-full" data-name="文本输入">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-center leading-[1.5] not-italic pl-[12px] pr-[16px] relative w-full">
          <p className="font-['Alibaba_PuHuiTi_3.0:65_Medium',sans-serif] relative shrink-0 text-[#444963] text-[16px] whitespace-nowrap">点击支持单个文件上传，最大支持1G</p>
          <div className="font-['Alibaba_PuHuiTi_3.0:55_Regular',sans-serif] relative shrink-0 text-[#838bab] text-[14px] text-center w-[388px]">
            <p className="mb-[7px]">支持拓展名：pdf/doc/docx/xls/xlsx/ppt/pptx/jpg/</p>
            <p className="mb-[7px]">jpeg/png/mp3/mp4/</p>
            <p>&nbsp;</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Component1() {
  return (
    <div className="bg-[#f4f7fe] content-stretch flex flex-col gap-[16px] items-center pt-[24px] relative rounded-[6px] shrink-0 w-full" data-name="上传区域">
      <div aria-hidden="true" className="absolute border border-[#dfe3f0] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="overflow-clip relative shrink-0 size-[36px]" data-name="cloud-upload">
        <div className="absolute inset-[8.33%_36.48%_41.67%_2.78%]" data-name="Union">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.7988 27">
            <path d={svgPaths.pab5400} fill="var(--fill-0, #ABB4D1)" id="Union" />
          </svg>
        </div>
      </div>
      <Component2 />
    </div>
  );
}

function CustomPart() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip px-[24px] relative shrink-0 w-[520px]" data-name="Custom part">
      <Component1 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0">
      <CustomPart />
    </div>
  );
}

function ButtonGroup() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-end relative shrink-0" data-name="ButtonGroup 按钮组">
      <div className="bg-white content-stretch flex h-[36px] items-center justify-center px-[20px] py-[8px] relative rounded-[18px] shrink-0" data-name="按钮-大-36">
        <div aria-hidden="true" className="absolute border border-[#dfe3f0] border-solid inset-0 pointer-events-none rounded-[18px]" />
        <p className="font-['Alibaba_PuHuiTi_3.0:65_Medium',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#444963] text-[14px] text-center whitespace-nowrap">取 消</p>
      </div>
      <div className="bg-[#bbcbfc] content-stretch flex h-[36px] items-center justify-center px-[20px] py-[8px] relative rounded-[18px] shrink-0" data-name="按钮-大-36">
        <p className="font-['Alibaba_PuHuiTi_3.0:65_Medium',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">下一步</p>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="footer">
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-stretch flex items-center justify-end pb-[20px] pt-[24px] px-[24px] relative w-full">
          <ButtonGroup />
        </div>
      </div>
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[20px] size-full" data-name="反馈-对话框/中/复选框">
      <Header />
      <Frame1 />
      <Footer />
    </div>
  );
}