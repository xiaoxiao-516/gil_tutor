import svgPaths from "./svg-5qwzow06qy";
import imgImage from "figma:asset/44a7b08043397377cded3a4db6ad42835fb3744e.png";

function Frame1() {
  return (
    <div className="absolute content-stretch flex items-center left-[180px] px-[24px] py-[32px] top-0 w-[1100px]">
      <p className="font-['Alibaba_PuHuiTi_3.0:85_Bold',sans-serif] leading-[30px] not-italic relative shrink-0 text-[#101019] text-[20px] whitespace-nowrap">布置</p>
    </div>
  );
}

function Image() {
  return (
    <div className="relative rounded-[12px] shrink-0 size-[24px]" data-name="Image (小鹿爱学)">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgImage} />
    </div>
  );
}

function Text() {
  return (
    <div className="h-[27px] relative shrink-0 w-[75.172px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Alibaba_PuHuiTi_3.0:65_Medium',sans-serif] leading-[27px] left-0 not-italic text-[#101019] text-[18px] top-0 tracking-[1.08px] whitespace-nowrap">小鹿爱学</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[48px] relative shrink-0 w-[140px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center pl-[14px] relative size-full">
        <Image />
        <Text />
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%_8.32%_8.33%_8.34%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.667 14.667">
            <path d={svgPaths.p2ae0b200} id="Vector" stroke="var(--stroke-0, #646B8A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[12.5%_16.67%_70.83%_83.33%]" data-name="Vector">
        <div className="absolute inset-[-25%_-0.67px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.33333 4">
            <path d="M0.666667 0.666667V3.33333" id="Vector" stroke="var(--stroke-0, #646B8A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[79.17%] left-3/4 right-[8.33%] top-[20.83%]" data-name="Vector">
        <div className="absolute inset-[-0.67px_-25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 1.33333">
            <path d="M3.33333 0.666667H0.666667" id="Vector" stroke="var(--stroke-0, #646B8A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[70.83%_83.33%_20.83%_16.67%]" data-name="Vector">
        <div className="absolute inset-[-50%_-0.67px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.33333 2.66667">
            <path d="M0.666667 0.666667V2" id="Vector" stroke="var(--stroke-0, #646B8A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/4 left-[12.5%] right-[79.17%] top-3/4" data-name="Vector">
        <div className="absolute inset-[-0.67px_-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.66667 1.33333">
            <path d="M2 0.666667H0.666667" id="Vector" stroke="var(--stroke-0, #646B8A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon />
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="flex-[1_0_0] h-[24px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Alibaba_PuHuiTi_3.0:85_Bold',sans-serif] leading-[24px] left-[16px] not-italic text-[#646b8a] text-[16px] text-center top-[-0.5px] whitespace-nowrap">体验</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[24px] relative shrink-0 w-[55.492px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Text1 />
        <Text2 />
      </div>
    </div>
  );
}

function Text3() {
  return <div className="shrink-0 size-[16px]" data-name="Text" />;
}

function Button() {
  return (
    <div className="h-[40px] relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[12px] relative size-full">
          <Container3 />
          <Text3 />
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="h-[39px] relative rounded-[12px] shrink-0 w-[140px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Alibaba_PuHuiTi_3.0:55_Regular_L3','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[21px] left-[37px] text-[#646b8a] text-[14px] top-[8.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
          诊断管理
        </p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[12px] w-[140px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Alibaba_PuHuiTi_3.0:55_Regular_L3','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] leading-[21px] left-[37px] text-[#646b8a] text-[14px] top-[8.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
          新课建档
        </p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] h-[80px] items-start relative shrink-0 w-full" data-name="Container">
      <Button1 />
      <Button2 />
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[122px] relative shrink-0 w-[140px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Button />
        <Container4 />
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%_16.67%]" data-name="Vector">
        <div className="absolute inset-[-5%_-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 14.6667">
            <path d={svgPaths.p3e5daf60} id="Vector" stroke="var(--stroke-0, #4A4FED)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[31.25%_37.5%_52.08%_37.5%]" data-name="Vector">
        <div className="absolute inset-[-25%_-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.33333 4">
            <path d={svgPaths.p207459c0} id="Vector" stroke="var(--stroke-0, #4A4FED)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon1 />
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="flex-[1_0_0] h-[24px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Alibaba_PuHuiTi_3.0:85_Bold',sans-serif] leading-[24px] left-[16px] not-italic text-[#4a4fed] text-[16px] text-center top-[-0.5px] whitespace-nowrap">督学</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[24px] relative shrink-0 w-[55.492px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Text4 />
        <Text5 />
      </div>
    </div>
  );
}

function Text6() {
  return <div className="shrink-0 size-[16px]" data-name="Text" />;
}

function Button3() {
  return (
    <div className="h-[40px] relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[12px] relative size-full">
          <Container6 />
          <Text6 />
        </div>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-white h-[39px] relative rounded-[12px] shrink-0 w-[140px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#dfe3f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Alibaba_PuHuiTi_3.0:85_Bold',sans-serif] leading-[21px] left-[37px] not-italic text-[#4a4fed] text-[14px] top-[8.5px] whitespace-nowrap">任务管理</p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[12px] w-[140px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Alibaba_PuHuiTi_3.0:55_Regular_L3','Noto_Sans_JP:Regular',sans-serif] leading-[21px] left-[37px] text-[#646b8a] text-[14px] top-[8.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
          今日看板
        </p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] h-[80px] items-start relative shrink-0 w-full" data-name="Container">
      <Button4 />
      <Button5 />
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[122px] relative shrink-0 w-[140px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Button3 />
        <Container7 />
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%_12.43%]" data-name="Vector">
        <div className="absolute inset-[-5%_-5.54%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3568 14.6667">
            <path d={svgPaths.p19943e40} id="Vector" stroke="var(--stroke-0, #646B8A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.33333 5.33333">
            <path d={svgPaths.p36446d40} id="Vector" stroke="var(--stroke-0, #646B8A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon2 />
      </div>
    </div>
  );
}

function Text8() {
  return (
    <div className="flex-[1_0_0] h-[24px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Alibaba_PuHuiTi_3.0:85_Bold',sans-serif] leading-[24px] left-[16px] not-italic text-[#646b8a] text-[16px] text-center top-[-0.5px] whitespace-nowrap">管理</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[24px] relative shrink-0 w-[53.492px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Text7 />
        <Text8 />
      </div>
    </div>
  );
}

function Text9() {
  return <div className="shrink-0 size-[16px]" data-name="Text" />;
}

function Button6() {
  return (
    <div className="h-[40px] relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[12px] relative size-full">
          <Container9 />
          <Text9 />
        </div>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="h-[39px] relative rounded-[12px] shrink-0 w-[140px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Alibaba_PuHuiTi_3.0:55_Regular_L3','Noto_Sans_JP:Regular',sans-serif] leading-[21px] left-[37px] text-[#646b8a] text-[14px] top-[8.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
          督学管理
        </p>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="h-[39px] relative rounded-[12px] shrink-0 w-[140px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Alibaba_PuHuiTi_3.0:55_Regular_L3','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] leading-[21px] left-[37px] text-[#646b8a] text-[14px] top-[8.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
          用户信息
        </p>
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[12px] w-[140px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Alibaba_PuHuiTi_3.0:55_Regular_L3','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[21px] left-[37px] text-[#646b8a] text-[14px] top-[8.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
          阶段学情
        </p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] h-[121px] items-start relative shrink-0 w-full" data-name="Container">
      <Button7 />
      <Button8 />
      <Button9 />
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[163px] relative shrink-0 w-[140px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Button6 />
        <Container10 />
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[12.5%_8.32%_16.67%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-5.88%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.669 12.6668">
            <path d={svgPaths.p45d7c00} id="Vector" stroke="var(--stroke-0, #646B8A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Text10() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon3 />
      </div>
    </div>
  );
}

function Text11() {
  return (
    <div className="flex-[1_0_0] h-[24px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Alibaba_PuHuiTi_3.0:85_Bold',sans-serif] leading-[24px] left-[16px] not-italic text-[#646b8a] text-[16px] text-center top-[-0.5px] whitespace-nowrap">资源</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[24px] relative shrink-0 w-[53.492px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Text10 />
        <Text11 />
      </div>
    </div>
  );
}

function Text12() {
  return <div className="shrink-0 size-[16px]" data-name="Text" />;
}

function Button10() {
  return (
    <div className="h-[40px] relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[12px] relative size-full">
          <Container12 />
          <Text12 />
        </div>
      </div>
    </div>
  );
}

function Button11() {
  return (
    <div className="h-[39px] relative rounded-[12px] shrink-0 w-[140px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Alibaba_PuHuiTi_3.0:55_Regular_L3','Noto_Sans_SC:Regular',sans-serif] leading-[21px] left-[37px] text-[#646b8a] text-[14px] top-[8.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
          题库
        </p>
      </div>
    </div>
  );
}

function Button12() {
  return (
    <div className="h-[39px] relative rounded-[12px] shrink-0 w-[140px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Alibaba_PuHuiTi_3.0:55_Regular_L3','Noto_Sans_JP:Regular',sans-serif] leading-[21px] left-[37px] text-[#646b8a] text-[14px] top-[8.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
          智能工具
        </p>
      </div>
    </div>
  );
}

function Button13() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[12px] w-[140px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Alibaba_PuHuiTi_3.0:55_Regular_L3','Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[21px] left-[37px] text-[#646b8a] text-[14px] top-[8.5px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
          SOP管理
        </p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] h-[121px] items-start relative shrink-0 w-full" data-name="Container">
      <Button11 />
      <Button12 />
      <Button13 />
    </div>
  );
}

function Container11() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[140px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Button10 />
        <Container13 />
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[140px]" data-name="Navigation">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start overflow-clip relative rounded-[inherit] size-full">
        <Container2 />
        <Container5 />
        <Container8 />
        <Container11 />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex flex-col h-[652px] items-start left-[20px] top-[26px] w-[140px]" data-name="Container">
      <Container1 />
      <Navigation />
    </div>
  );
}

function Container15() {
  return <div className="h-0 rounded-[12px] shrink-0 w-[140px]" data-name="Container" />;
}

function Button14() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[12px] w-[140px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#dfe3f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Alibaba_PuHuiTi_3.0:65_Medium',sans-serif] leading-[18px] left-[70.38px] not-italic text-[#646b8a] text-[12px] text-center top-[9.5px] whitespace-nowrap">退出登录</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[44px] items-start left-[20px] top-[821px] w-[140px]" data-name="Container">
      <Container15 />
      <Button14 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="h-[58px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[0.88%_4.55%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 56.9756">
          <path d={svgPaths.p13d89d00} fill="var(--fill-0, #DFE3F0)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[0.88%_4.55%]" data-name="Vector">
        <div className="absolute inset-[-0.92%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 58.0236">
            <path d={svgPaths.p1c6f4d80} id="Vector" stroke="var(--stroke-0, #CFD5E8)" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[41.38%_36.36%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 10.0001">
          <path clipRule="evenodd" d={svgPaths.p3f5f7100} fill="var(--fill-0, #838BAB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Button15() {
  return (
    <div className="absolute content-stretch flex flex-col h-[58px] items-start left-[169px] top-[411.5px] w-[11px]" data-name="Button">
      <Icon4 />
    </div>
  );
}

function Sidebar() {
  return (
    <div className="absolute bg-[#ebf1ff] h-[801px] left-0 overflow-clip top-0 w-[180px]" data-name="Sidebar">
      <Container />
      <Container14 />
      <Button15 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_652_3761)" id="Icon">
          <path clipRule="evenodd" d={svgPaths.p2b53a4d0} fill="var(--fill-0, #646B8A)" fillRule="evenodd" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_652_3761">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function CustomSelect() {
  return (
    <div className="bg-[#f4f7fe] content-stretch flex gap-[8px] h-[32px] items-center px-[12px] relative rounded-[8px] shrink-0 w-[200px]" data-name="CustomSelect">
      <p className="flex-[1_0_0] font-['Alibaba_PuHuiTi_3.0:55_Regular',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[#838bab] text-[14px]">请选择学生</p>
      <Icon5 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_652_3761)" id="Icon">
          <path clipRule="evenodd" d={svgPaths.p2b53a4d0} fill="var(--fill-0, #646B8A)" fillRule="evenodd" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_652_3761">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function CustomSelect1() {
  return (
    <div className="bg-[#f4f7fe] content-stretch flex gap-[8px] h-[32px] items-center px-[12px] relative rounded-[8px] shrink-0 w-[200px]" data-name="CustomSelect">
      <p className="flex-[1_0_0] font-['Alibaba_PuHuiTi_3.0:55_Regular',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[#838bab] text-[14px]">请选择学科</p>
      <Icon6 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-h-px min-w-px relative">
      <CustomSelect />
      <CustomSelect1 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <Frame3 />
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Frame25 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex items-center py-[16px] relative shrink-0 w-full">
      <p className="font-['Alibaba_PuHuiTi_3.0:75_SemiBold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#101019] text-[16px] whitespace-nowrap">布置清单</p>
    </div>
  );
}

function IconWrapper() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="icon-wrapper">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_652_4248)" id="icon-wrapper">
          <path clipRule="evenodd" d={svgPaths.p36936200} fill="var(--fill-0, #646B8A)" fillRule="evenodd" id="Union" />
        </g>
        <defs>
          <clipPath id="clip0_652_4248">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function CustomSelect2() {
  return (
    <div className="bg-[#f4f7fe] content-stretch flex h-[32px] items-center justify-between px-[12px] relative rounded-[8px] shrink-0 w-[200px]" data-name="CustomSelect">
      <p className="font-['Alibaba_PuHuiTi_3.0:55_Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#838bab] text-[14px] whitespace-nowrap">请选择时间</p>
      <div className="relative rounded-[4px] shrink-0" data-name="Button 按钮">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative">
          <IconWrapper />
        </div>
      </div>
    </div>
  );
}

function IconWrapper1() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="icon-wrapper">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_652_4248)" id="icon-wrapper">
          <path clipRule="evenodd" d={svgPaths.p36936200} fill="var(--fill-0, #646B8A)" fillRule="evenodd" id="Union" />
        </g>
        <defs>
          <clipPath id="clip0_652_4248">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function CustomSelect3() {
  return (
    <div className="bg-[#f4f7fe] content-stretch flex h-[32px] items-center justify-between px-[12px] relative rounded-[8px] shrink-0 w-[200px]" data-name="CustomSelect">
      <p className="font-['Alibaba_PuHuiTi_3.0:55_Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#838bab] text-[14px] whitespace-nowrap">请选择学习时长</p>
      <div className="relative rounded-[4px] shrink-0" data-name="Button 按钮">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative">
          <IconWrapper1 />
        </div>
      </div>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-h-px min-w-px relative">
      <CustomSelect2 />
      <CustomSelect3 />
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <path d={svgPaths.p1beb1380} id="Vector" stroke="var(--stroke-0, #6574FC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
          <path d="M3.33333 8H12.6667" id="Vector_2" stroke="var(--stroke-0, #6574FC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}

function Component5() {
  return (
    <div className="bg-white content-stretch flex gap-[2px] h-[32px] items-center justify-center px-[16px] py-[6px] relative rounded-[18px] shrink-0 w-[100px]" data-name="按钮-中-32">
      <div aria-hidden="true" className="absolute border border-[#9cb1fc] border-solid inset-0 pointer-events-none rounded-[18px]" />
      <Frame />
      <p className="font-['Alibaba_PuHuiTi_3.0:55_Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#6574fc] text-[14px] text-center whitespace-nowrap">补充任务</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_652_3776)" id="Frame 2036084149">
          <path d={svgPaths.p13f62700} id="Rectangle 346242151" stroke="var(--stroke-0, white)" strokeLinejoin="round" strokeWidth="1.2" />
        </g>
        <defs>
          <clipPath id="clip0_652_3776">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Component6() {
  return (
    <div className="bg-[#6574fc] content-stretch flex gap-[4px] h-[32px] items-center justify-center px-[20px] py-[8px] relative rounded-[20px] shrink-0 w-[100px]" data-name="按钮-大-36">
      <Frame2 />
      <p className="font-['Alibaba_PuHuiTi_3.0:65_Medium',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">智能布置</p>
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <Component5 />
      <Component6 />
    </div>
  );
}

function Frame38() {
  return (
    <div className="absolute content-stretch flex gap-[12px] items-center left-0 top-0 w-[736px]">
      <Frame36 />
      <Frame37 />
    </div>
  );
}

function Component2() {
  return (
    <div className="relative shrink-0 size-[68px]" data-name="数据表-空">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 68 68">
        <g id="æ°æ®è¡¨-ç©º">
          <path d={svgPaths.p3d603500} fill="var(--fill-0, #E0EAFF)" id="Vector 5610" />
          <path d={svgPaths.p2b60d980} fill="var(--fill-0, #E0EAFF)" id="Vector 5596" />
          <path d={svgPaths.p715d300} fill="var(--fill-0, #F4F7FE)" id="Rectangle 34624359" />
          <path d={svgPaths.p3434b00} fill="var(--fill-0, #101019)" id="Union" />
          <g id="Group 1912054722">
            <path d={svgPaths.p1e289a80} fill="var(--fill-0, white)" id="Rectangle 34624360" />
            <g id="Group 1912054720">
              <path d={svgPaths.pe4af00} fill="var(--fill-0, #EBF1FF)" id="Rectangle 34624354" />
            </g>
            <path d="M20.9667 30.0334H53.8334" id="Vector 5622" stroke="var(--stroke-0, #EBF1FF)" strokeWidth="2.26667" />
            <g id="Group 1912054721">
              <path d={svgPaths.p2bc34c80} fill="var(--fill-0, #EBF1FF)" id="Rectangle 34624354_2" />
            </g>
            <path d="M20.9667 38.5334H53.2667" id="Vector 5642" stroke="var(--stroke-0, #EBF1FF)" strokeWidth="2.26667" />
          </g>
          <g id="Group 1912054723">
            <path d={svgPaths.p2d4a700} id="Vector 5632" stroke="var(--stroke-0, black)" strokeWidth="0.711684" />
            <g id="Group 1912054717">
              <path d={svgPaths.p15039e00} fill="var(--fill-0, #2DC01F)" id="Vector 5592" />
              <path d={svgPaths.p1a0152c0} id="Vector 5593" stroke="var(--stroke-0, #101019)" strokeWidth="0.711684" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center leading-[1.5] not-italic relative shrink-0 text-center whitespace-nowrap">
      <p className="font-['Alibaba_PuHuiTi_3.0:65_Medium',sans-serif] relative shrink-0 text-[#444963] text-[14px]">暂无布置清单</p>
      <p className="font-['Alibaba_PuHuiTi_3.0:55_Regular',sans-serif] relative shrink-0 text-[#838bab] text-[12px]">请选择时间后，一键智能布置</p>
    </div>
  );
}

function Frame40() {
  return (
    <div className="absolute bg-[rgba(244,247,254,0.6)] content-stretch flex flex-col gap-[4px] h-[160px] items-center justify-center left-0 px-[12px] py-[40px] rounded-[8px] top-[44px] w-[736px]">
      <Component2 />
      <Frame41 />
    </div>
  );
}

function Component1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px overflow-clip relative w-full" data-name="数据表-空">
      <Frame38 />
      <Frame40 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col h-[260px] items-start relative shrink-0 w-full">
      <Frame23 />
      <Component1 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex gap-[8px] items-center py-[16px] relative shrink-0 w-full">
      <p className="font-['Alibaba_PuHuiTi_3.0:75_SemiBold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#101019] text-[16px] whitespace-nowrap">学习规划</p>
    </div>
  );
}

function Component3() {
  return (
    <div className="relative shrink-0 size-[68px]" data-name="数据表-空">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 68 68">
        <g id="æ°æ®è¡¨-ç©º">
          <path d={svgPaths.p3d603500} fill="var(--fill-0, #E0EAFF)" id="Vector 5610" />
          <path d={svgPaths.p2b60d980} fill="var(--fill-0, #E0EAFF)" id="Vector 5596" />
          <path d={svgPaths.p715d300} fill="var(--fill-0, #F4F7FE)" id="Rectangle 34624359" />
          <path d={svgPaths.p3434b00} fill="var(--fill-0, #101019)" id="Union" />
          <g id="Group 1912054722">
            <path d={svgPaths.p1e289a80} fill="var(--fill-0, white)" id="Rectangle 34624360" />
            <g id="Group 1912054720">
              <path d={svgPaths.pe4af00} fill="var(--fill-0, #EBF1FF)" id="Rectangle 34624354" />
            </g>
            <path d="M20.9667 30.0334H53.8334" id="Vector 5622" stroke="var(--stroke-0, #EBF1FF)" strokeWidth="2.26667" />
            <g id="Group 1912054721">
              <path d={svgPaths.p2bc34c80} fill="var(--fill-0, #EBF1FF)" id="Rectangle 34624354_2" />
            </g>
            <path d="M20.9667 38.5334H53.2667" id="Vector 5642" stroke="var(--stroke-0, #EBF1FF)" strokeWidth="2.26667" />
          </g>
          <g id="Group 1912054723">
            <path d={svgPaths.p2d4a700} id="Vector 5632" stroke="var(--stroke-0, black)" strokeWidth="0.711684" />
            <g id="Group 1912054717">
              <path d={svgPaths.p15039e00} fill="var(--fill-0, #2DC01F)" id="Vector 5592" />
              <path d={svgPaths.p1a0152c0} id="Vector 5593" stroke="var(--stroke-0, #101019)" strokeWidth="0.711684" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0">
      <p className="font-['Alibaba_PuHuiTi_3.0:65_Medium',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#444963] text-[14px] text-center whitespace-nowrap">暂无学习规划</p>
    </div>
  );
}

function Frame42() {
  return (
    <div className="bg-[rgba(244,247,254,0.6)] flex-[1_0_0] min-h-px min-w-px relative rounded-[8px] w-[736px]">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-center justify-center px-[12px] py-[40px] relative size-full">
          <Component3 />
          <Frame43 />
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-full">
      <Frame26 />
      <Frame42 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[614px] items-start left-[20px] py-[20px] top-0 w-[736px]">
      <Frame39 />
      <Frame24 />
      <Frame4 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="absolute h-[716px] left-[204px] top-[94px] w-[776px]">
      <div className="absolute h-[614px] left-0 top-0 w-[776px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 776 614">
          <path d={svgPaths.p10d3d100} fill="var(--fill-0, white)" id="Rectangle 346242149" />
        </svg>
      </div>
      <Frame29 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex items-center justify-center py-[7px] relative shrink-0 w-full">
      <div className="relative shrink-0 size-[8px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" id="Ellipse 2502" r="3" stroke="var(--stroke-0, #6574FC)" strokeWidth="2" />
        </svg>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[14px]">
      <Frame14 />
      <div className="h-[145px] relative shrink-0 w-0">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 145">
            <path d="M0.5 0V145" id="Vector 5651" stroke="var(--stroke-0, #6574FC)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex font-['Alibaba_PuHuiTi_3.0:55_Regular',sans-serif] gap-[4px] items-center leading-[1.75] not-italic relative shrink-0 text-[#838bab] text-[12px] whitespace-nowrap">
      <p className="relative shrink-0">2026-03-25</p>
      <p className="relative shrink-0">刚刚发布</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full">
      <p className="font-['Alibaba_PuHuiTi_3.0:55_Regular',sans-serif] leading-[1.75] not-italic relative shrink-0 text-[#838bab] text-[12px] whitespace-nowrap">正确率：84%</p>
      <div className="h-[7.5px] relative shrink-0 w-0">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 7.5">
            <path d="M0.5 0V7.5" id="Vector 5650" stroke="var(--stroke-0, #CFD5E8)" />
          </svg>
        </div>
      </div>
      <p className="font-['Alibaba_PuHuiTi_3.0:55_Regular',sans-serif] leading-[1.75] not-italic relative shrink-0 text-[#838bab] text-[12px] whitespace-nowrap">完成时间：36分钟</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <p className="font-['Alibaba_PuHuiTi_3.0:65_Medium',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#444963] text-[14px] w-full">数学课程 (4节)</p>
      <Frame5 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="bg-[#f4f7fe] relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[12px] py-[8px] relative w-full">
          <p className="font-['Alibaba_PuHuiTi_3.0:55_Regular',sans-serif] leading-[1.75] not-italic relative shrink-0 text-[#838bab] text-[12px] w-[171px]">备注：函数概念已掌握，方程仍需巩固</p>
        </div>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
      <Frame10 />
      <Frame6 />
      <Frame7 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <Frame15 />
      <Frame11 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex h-[22px] items-center justify-center py-[4px] relative shrink-0 w-full">
      <div className="relative shrink-0 size-[8px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, #CFD5E8)" id="Ellipse 2503" r="3" stroke="var(--stroke-0, #F0F2F7)" strokeWidth="2" />
        </svg>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[14px]">
      <Frame17 />
      <div className="h-[145px] relative shrink-0 w-0">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 145">
            <path d="M0.5 0V145" id="Vector 5652" stroke="var(--stroke-0, #ABB4D1)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Alibaba_PuHuiTi_3.0:55_Regular',sans-serif] leading-[1.75] not-italic relative shrink-0 text-[#838bab] text-[12px] whitespace-nowrap">2026-03-24</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full">
      <p className="font-['Alibaba_PuHuiTi_3.0:55_Regular',sans-serif] leading-[1.75] not-italic relative shrink-0 text-[#838bab] text-[12px] whitespace-nowrap">正确率：84%</p>
      <div className="h-[7.5px] relative shrink-0 w-0">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 7.5">
            <path d="M0.5 0V7.5" id="Vector 5650" stroke="var(--stroke-0, #CFD5E8)" />
          </svg>
        </div>
      </div>
      <p className="font-['Alibaba_PuHuiTi_3.0:55_Regular',sans-serif] leading-[1.75] not-italic relative shrink-0 text-[#838bab] text-[12px] whitespace-nowrap">完成时间：36分钟</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <p className="font-['Alibaba_PuHuiTi_3.0:65_Medium',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#444963] text-[14px] w-full">数学课程 (3节)</p>
      <Frame9 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="bg-[#f4f7fe] relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[12px] py-[8px] relative w-full">
          <p className="font-['Alibaba_PuHuiTi_3.0:55_Regular',sans-serif] leading-[1.75] not-italic relative shrink-0 text-[#838bab] text-[12px] w-[171px]">备注：函数概念已掌握，方程仍需巩固</p>
        </div>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
      <Frame13 />
      <Frame8 />
      <Frame20 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <Frame18 />
      <Frame12 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="h-[22px] relative shrink-0 w-[14px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 22">
        <g id="Frame 2036084165">
          <circle cx="7" cy="11" fill="var(--fill-0, #CFD5E8)" id="Ellipse 2503" r="3" stroke="var(--stroke-0, #F0F2F7)" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Alibaba_PuHuiTi_3.0:55_Regular',sans-serif] leading-[1.75] not-italic relative shrink-0 text-[#838bab] text-[12px] whitespace-nowrap">2026-03-23</p>
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full">
      <p className="font-['Alibaba_PuHuiTi_3.0:55_Regular',sans-serif] leading-[1.75] not-italic relative shrink-0 text-[#838bab] text-[12px] whitespace-nowrap">正确率：84%</p>
      <div className="h-[7.5px] relative shrink-0 w-0">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 7.5">
            <path d="M0.5 0V7.5" id="Vector 5650" stroke="var(--stroke-0, #CFD5E8)" />
          </svg>
        </div>
      </div>
      <p className="font-['Alibaba_PuHuiTi_3.0:55_Regular',sans-serif] leading-[1.75] not-italic relative shrink-0 text-[#838bab] text-[12px] whitespace-nowrap">完成时间：36分钟</p>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <p className="font-['Alibaba_PuHuiTi_3.0:65_Medium',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#444963] text-[14px] w-full">数学课程 (5节)</p>
      <Frame33 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="bg-[#f4f7fe] relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[12px] py-[8px] relative w-full">
          <p className="font-['Alibaba_PuHuiTi_3.0:55_Regular',sans-serif] leading-[1.75] not-italic relative shrink-0 text-[#838bab] text-[12px] w-[171px]">备注：函数概念已掌握，方程仍需巩固</p>
        </div>
      </div>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
      <Frame31 />
      <Frame32 />
      <Frame34 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <Frame28 />
      <Frame30 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame16 />
      <Frame19 />
      <Frame21 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[12px] h-[614px] items-start left-[992px] px-[12px] py-[20px] rounded-[20px] top-[94px] w-[264px]">
      <p className="font-['Alibaba_PuHuiTi_3.0:75_SemiBold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#101019] text-[16px] w-full">近期布置</p>
      <Frame22 />
    </div>
  );
}

function Component4() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[12px] items-center justify-end px-[24px] py-[16px] right-0 top-[732px] w-[1100px]" data-name="一级页面-底部导航+添加题目">
      <div aria-hidden="true" className="absolute border-[#e9ecf5] border-solid border-t inset-0 pointer-events-none" />
      <p className="font-['Alibaba_PuHuiTi_3.0:65_Medium',sans-serif] leading-[0] not-italic relative shrink-0 text-[#6574fc] text-[14px] text-center whitespace-nowrap">
        <span className="leading-[1.5] text-[#444963]">共</span>
        <span className="leading-[1.5]">{` 0 `}</span>
        <span className="leading-[1.5] text-[#444963]">个任务</span>
      </p>
      <p className="font-['Alibaba_PuHuiTi_3.0:65_Medium',sans-serif] leading-[0] not-italic relative shrink-0 text-[#6574fc] text-[14px] text-center whitespace-nowrap">
        <span className="leading-[1.5] text-[#444963]">预计</span>
        <span className="leading-[1.5]">{` 0 `}</span>
        <span className="leading-[1.5] text-[#444963]">分钟 (目标60分钟)</span>
      </p>
      <div className="bg-[#bbcbfc] content-stretch flex h-[36px] items-center justify-center px-[20px] py-[8px] relative rounded-[18px] shrink-0" data-name="按钮-大-36">
        <p className="font-['Alibaba_PuHuiTi_3.0:65_Medium',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">确认布置</p>
      </div>
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-[#f5faff] relative size-full" data-name="布置 - 默认状态 - 未选姓名/未布置清单">
      <Frame1 />
      <Sidebar />
      <Frame35 />
      <Frame27 />
      <Component4 />
    </div>
  );
}