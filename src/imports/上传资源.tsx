import svgPaths from "./svg-pzealc5p9r";

function Frame4() {
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
          <Frame4 />
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
          <p className="font-['Alibaba_PuHuiTi_3.0:65_Medium',sans-serif] relative shrink-0 text-[#444963] text-[16px] whitespace-nowrap">点击支持单个文件上传，最大支持100MB</p>
          <div className="font-['Alibaba_PuHuiTi_3.0:55_Regular',sans-serif] relative shrink-0 text-[#838bab] text-[14px] text-center w-[380px]">
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
    <div className="bg-[#f4f7fe] content-stretch flex flex-col gap-[16px] items-center pt-[24px] relative rounded-[8px] shrink-0 w-full" data-name="上传区域">
      <div aria-hidden="true" className="absolute border border-[#dfe3f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
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

function Group() {
  return (
    <div className="absolute contents left-[5.25px] top-[3px]">
      <div className="absolute h-[30px] left-[5.25px] top-[3px] w-[25.5px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.5 30">
          <path d={svgPaths.p6f006f0} fill="var(--fill-0, #2091FF)" id="Rectangle 34624319" />
        </svg>
      </div>
      <div className="absolute inset-[8.33%_14.58%_70.83%_64.58%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.5 7.5">
          <path d={svgPaths.p17dc19f0} fill="var(--fill-0, white)" fillOpacity="0.3" id="Vector 2" />
        </svg>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Avenir:Black',sans-serif] justify-center leading-[0] left-[18px] not-italic text-[7.5px] text-center text-shadow-[0px_1.5px_1.5px_rgba(0,129,255,0.25)] text-white top-[21.5px] whitespace-nowrap">
        <p className="leading-[normal]">DOC</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <p className="font-['Alibaba_PuHuiTi_3.0:55_Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#101019] text-[14px] w-[90px]">上传文档.doc</p>
    </div>
  );
}

function Component3() {
  return (
    <div className="h-[4px] relative rounded-[59px] w-[50px]" data-name="进度条">
      <div className="absolute bg-[#6574fc] bottom-0 left-[-800px] rounded-[100px] top-0 w-[800px]" data-name="进度条背景" />
    </div>
  );
}

function Progress() {
  return (
    <div className="bg-[#f0f2f7] flex-[1_0_0] h-[4px] min-h-px min-w-px relative rounded-[100px]" data-name="Progress 数字进度条元素/组成元素">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pl-[30px] relative size-full">
          <div className="flex items-center justify-center relative shrink-0">
            <div className="-scale-y-100 flex-none">
              <Component3 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center py-[4px] relative shrink-0 w-full">
      <Progress />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-h-px min-w-px relative">
      <Frame2 />
      <Frame1 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative">
      <div className="overflow-clip relative shrink-0 size-[36px]" data-name="文件icon">
        <Group />
      </div>
      <Frame />
    </div>
  );
}

function CustomPart() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip px-[24px] relative shrink-0 w-[520px]" data-name="Custom part">
      <Component1 />
      <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Upload 上传元素">
        <div aria-hidden="true" className="absolute border border-[#dfe3f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[12px] items-center p-[12px] relative w-full">
            <Frame3 />
            <div className="overflow-clip relative shrink-0 size-[16px]" data-name="close">
              <div className="absolute inset-[20.83%]" data-name="Union">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 9.33333">
                  <path clipRule="evenodd" d={svgPaths.p3c061500} fill="var(--fill-0, #646B8A)" fillRule="evenodd" id="Union" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
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
      <div className="bg-[#6574fc] content-stretch flex h-[36px] items-center justify-center px-[20px] py-[8px] relative rounded-[18px] shrink-0" data-name="按钮-大-36">
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
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[20px] size-full" data-name="上传资源">
      <Header />
      <Frame5 />
      <Footer />
    </div>
  );
}