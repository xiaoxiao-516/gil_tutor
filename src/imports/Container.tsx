import svgPaths from "./svg-sgcuydomb";

function Frame() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <path d={svgPaths.p2b997400} id="Vector" stroke="var(--stroke-0, #646B8A)" strokeLinejoin="round" strokeWidth="1.2" />
          <path d={svgPaths.p8200a00} id="Vector_2" stroke="var(--stroke-0, #646B8A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}

function TextInput() {
  return (
    <div className="bg-white col-1 h-[40px] justify-self-stretch relative rounded-[8px] row-1 shrink-0" data-name="Text Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[12px] py-[8px] relative size-full">
          <Frame />
          <p className="font-['Alibaba_PuHuiTi_3.0:55_Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#838bab] text-[14px] whitespace-nowrap">请输入学生姓名</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(223,227,240,0.5)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_561_54)" id="Icon">
          <path clipRule="evenodd" d={svgPaths.p2b53a4d0} fill="var(--fill-0, #646B8A)" fillRule="evenodd" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_561_54">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function CustomSelect() {
  return (
    <div className="bg-white col-2 content-stretch flex h-[40px] items-center justify-between px-[13px] py-px relative rounded-[8px] row-1 shrink-0 w-[221px]" data-name="CustomSelect">
      <div aria-hidden="true" className="absolute border border-[rgba(223,227,240,0.5)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Alibaba_PuHuiTi_3.0:55_Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#838bab] text-[14px] whitespace-nowrap">请选择科目</p>
      <Icon />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative size-[12px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.paf34680} fill="var(--fill-0, #2043F0)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function CustomSelect1() {
  return (
    <div className="bg-white col-3 content-stretch flex h-[40px] items-center justify-between px-[13px] py-px relative rounded-[8px] row-1 shrink-0 w-[221px]" data-name="CustomSelect">
      <div aria-hidden="true" className="absolute border border-[rgba(223,227,240,0.5)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Alibaba_PuHuiTi_3.0:55_Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#2043f0] text-[14px] w-[111px]">近七天</p>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <Icon1 />
        </div>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_561_54)" id="Icon">
          <path clipRule="evenodd" d={svgPaths.p2b53a4d0} fill="var(--fill-0, #646B8A)" fillRule="evenodd" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_561_54">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function CustomSelect2() {
  return (
    <div className="bg-white col-4 content-stretch flex h-[40px] items-center justify-between px-[13px] py-px relative rounded-[8px] row-1 shrink-0 w-[221px]" data-name="CustomSelect">
      <div aria-hidden="true" className="absolute border border-[rgba(223,227,240,0.5)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Alibaba_PuHuiTi_3.0:55_Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#838bab] text-[14px] whitespace-nowrap">测评状态</p>
      <Icon2 />
    </div>
  );
}

function Container1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[repeat(1,fit-content(100%))] relative w-full">
        <TextInput />
        <CustomSelect />
        <CustomSelect1 />
        <CustomSelect2 />
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <path d="M14 2.66667V8" id="Vector" stroke="var(--stroke-0, #2043F0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2 8V13.3333" id="Vector_2" stroke="var(--stroke-0, #2043F0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2c2b0280} id="Vector_3" stroke="var(--stroke-0, #2043F0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex gap-[4px] items-center left-1/2 top-[calc(50%+0.5px)]">
      <Frame1 />
      <p className="font-['Alibaba_PuHuiTi_3.0:65_Medium',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#2043f0] text-[14px] text-center whitespace-nowrap">重置</p>
    </div>
  );
}

function Button() {
  return (
    <div className="relative rounded-[16777200px] self-stretch shrink-0 w-[60px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Frame2 />
      </div>
    </div>
  );
}

export default function Container() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative size-full" data-name="Container">
      <Container1 />
      <Button />
    </div>
  );
}