import svgPaths from "./svg-hfol4960mw";
import imgImage from "figma:asset/44a7b08043397377cded3a4db6ad42835fb3744e.png";

function Frame2() {
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
    <div className="relative size-[12px]" data-name="Icon">
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
      <p className="flex-[1_0_0] font-['Alibaba_PuHuiTi_3.0:55_Regular',sans-serif] leading-[0] min-h-px min-w-px not-italic relative text-[#101019] text-[14px]">
        <span className="leading-[normal]">{`李雨桐 `}</span>
        <span className="leading-[normal]">·</span>
        <span className="leading-[normal]">{` 高一`}</span>
      </p>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <Icon5 />
        </div>
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative size-[12px]" data-name="Icon">
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
      <p className="flex-[1_0_0] font-['Alibaba_PuHuiTi_3.0:55_Regular',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[#101019] text-[14px]">数学</p>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <Icon6 />
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-h-px min-w-px relative">
      <CustomSelect />
      <CustomSelect1 />
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex gap-[2px] items-center leading-[1.5] relative shrink-0 text-[14px] whitespace-nowrap">
      <p className="font-['Avenir:Roman','Noto_Sans_JP:Regular',sans-serif] relative shrink-0 text-[#838bab]" style={{ fontVariationSettings: "'wght' 400", fontFeatureSettings: "'lnum', 'pnum'" }}>
        剩余
      </p>
      <p className="font-['Avenir:Roman',sans-serif] not-italic relative shrink-0 text-[#e0443f]" style={{ fontFeatureSettings: "'lnum', 'pnum'" }}>
        1
      </p>
      <p className="font-['Avenir:Roman','Noto_Sans_JP:Regular',sans-serif] relative shrink-0 text-[#838bab]" style={{ fontVariationSettings: "'wght' 400", fontFeatureSettings: "'lnum', 'pnum'" }}>
        /100次
      </p>
    </div>
  );
}

function Frame51() {
  return (
    <div className="relative shrink-0 size-[18px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Frame 2036084199">
          <circle cx="9" cy="9" id="Ellipse 2504" r="6" stroke="var(--stroke-0, black)" strokeOpacity="0.1" strokeWidth="2.5" />
          <path d={svgPaths.p7be5e20} id="Ellipse 2506" stroke="var(--stroke-0, #FA5A57)" strokeLinecap="round" strokeWidth="2.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Frame42 />
      <Frame51 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <Frame4 />
      <Frame50 />
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_652_3747)" id="Frame">
          <path d={svgPaths.p3bf75200} id="Vector" stroke="var(--stroke-0, #E0443F)" strokeLinejoin="round" strokeWidth="1.2" />
          <path clipRule="evenodd" d={svgPaths.p2657fb80} fill="var(--fill-0, #E0443F)" fillRule="evenodd" id="Vector_2" />
          <path d="M7 4.5V7.16667" id="Vector_3" stroke="var(--stroke-0, #E0443F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        </g>
        <defs>
          <clipPath id="clip0_652_3747">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Frame />
      <p className="font-['Alibaba_PuHuiTi_3.0:65_Medium',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#e0443f] text-[14px] whitespace-nowrap">规划即将全部完成</p>
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Alibaba_PuHuiTi_3.0:55_Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#838bab] text-[12px] whitespace-nowrap">
        <span className="leading-[1.5]">该学生当前学科规划</span>
        <span className="leading-[1.5]">即将全部学完，建议重新进行诊断。</span>
      </p>
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-h-px min-w-px relative">
      <Frame46 />
      <Frame45 />
    </div>
  );
}

function Frame44() {
  return (
    <div className="bg-[#fff0eb] relative rounded-[8px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative w-full">
          <Frame43 />
          <div className="bg-white content-stretch flex h-[32px] items-center justify-center px-[16px] py-[6px] relative rounded-[18px] shrink-0 w-[100px]" data-name="按钮-中-32">
            <div aria-hidden="true" className="absolute border border-[#fca5a2] border-solid inset-0 pointer-events-none rounded-[18px]" />
            <p className="font-['Alibaba_PuHuiTi_3.0:55_Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#e0443f] text-[14px] text-center whitespace-nowrap">布置诊断</p>
          </div>
          <div className="absolute flex items-center justify-center left-[663.51px] size-[16.971px] top-[-8px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
            <div className="flex-none rotate-45">
              <div className="relative size-[12px]">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                  <path d={svgPaths.p2b51eff0} fill="var(--fill-0, #FFF0EB)" id="Rectangle 346242152" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Frame26 />
      <Frame44 />
    </div>
  );
}

function Frame24() {
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

function Frame38() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-h-px min-w-px relative">
      <CustomSelect2 />
      <CustomSelect3 />
    </div>
  );
}

function Frame1() {
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

function Component4() {
  return (
    <div className="bg-white content-stretch flex gap-[2px] h-[32px] items-center justify-center px-[16px] py-[6px] relative rounded-[18px] shrink-0 w-[100px]" data-name="按钮-中-32">
      <div aria-hidden="true" className="absolute border border-[#9cb1fc] border-solid inset-0 pointer-events-none rounded-[18px]" />
      <Frame1 />
      <p className="font-['Alibaba_PuHuiTi_3.0:55_Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#6574fc] text-[14px] text-center whitespace-nowrap">补充任务</p>
    </div>
  );
}

function Frame3() {
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

function Component5() {
  return (
    <div className="bg-[#6574fc] content-stretch flex gap-[4px] h-[32px] items-center justify-center px-[20px] py-[8px] relative rounded-[20px] shrink-0 w-[100px]" data-name="按钮-大-36">
      <Frame3 />
      <p className="font-['Alibaba_PuHuiTi_3.0:65_Medium',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">智能布置</p>
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <Component4 />
      <Component5 />
    </div>
  );
}

function Frame41() {
  return (
    <div className="absolute content-stretch flex gap-[12px] items-center left-0 top-0 w-[736px]">
      <Frame38 />
      <Frame40 />
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
              <path d={svgPaths.p368abc58} id="Vector 5593" stroke="var(--stroke-0, #101019)" strokeWidth="0.711684" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center leading-[1.5] not-italic relative shrink-0 text-center whitespace-nowrap">
      <p className="font-['Alibaba_PuHuiTi_3.0:65_Medium',sans-serif] relative shrink-0 text-[#444963] text-[14px]">暂无布置清单</p>
      <p className="font-['Alibaba_PuHuiTi_3.0:55_Regular',sans-serif] relative shrink-0 text-[#838bab] text-[12px]">请点击 [智能布置] 去添加</p>
    </div>
  );
}

function Frame48() {
  return (
    <div className="absolute bg-[rgba(244,247,254,0.6)] content-stretch flex flex-col gap-[4px] h-[160px] items-center justify-center left-0 px-[12px] py-[40px] rounded-[8px] top-[44px] w-[736px]">
      <Component2 />
      <Frame49 />
    </div>
  );
}

function Component1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px overflow-clip relative w-full" data-name="数据表-空">
      <Frame41 />
      <Frame48 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col h-[260px] items-start relative shrink-0 w-full">
      <Frame24 />
      <Component1 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <p className="font-['Alibaba_PuHuiTi_3.0:55_Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#838bab] text-[12px] whitespace-nowrap">共60节</p>
      <div className="h-[8px] relative shrink-0 w-0">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 8">
            <path d="M0.5 0V8" id="Vector 5653" stroke="var(--stroke-0, #CFD5E8)" />
          </svg>
        </div>
      </div>
      <p className="font-['Alibaba_PuHuiTi_3.0:55_Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#838bab] text-[12px] whitespace-nowrap">已学58节</p>
      <div className="h-[8px] relative shrink-0 w-0">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 8">
            <path d="M0.5 0V8" id="Vector 5653" stroke="var(--stroke-0, #CFD5E8)" />
          </svg>
        </div>
      </div>
      <p className="font-['Alibaba_PuHuiTi_3.0:55_Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#838bab] text-[12px] whitespace-nowrap">未学2节</p>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex gap-[8px] items-center py-[16px] relative shrink-0 w-full">
      <p className="font-['Alibaba_PuHuiTi_3.0:75_SemiBold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#101019] text-[16px] whitespace-nowrap">学习规划</p>
      <Frame33 />
    </div>
  );
}

function Component6() {
  return (
    <div className="bg-white h-[48px] relative rounded-[8px] shrink-0 w-full" data-name="按钮-大-36">
      <div aria-hidden="true" className="absolute border border-[#dfe3f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[2px] items-center justify-center px-[20px] py-[8px] relative size-full">
          <p className="font-['Alibaba_PuHuiTi_3.0:65_Medium',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#444963] text-[14px] text-center whitespace-nowrap">已学1～21章</p>
          <div className="flex items-center justify-center relative shrink-0">
            <div className="-scale-y-100 flex-none">
              <div className="overflow-clip relative size-[16px]" data-name="ic_arrow_down_16">
                <div className="absolute inset-[37.7%_21.29%_34.96%_21.22%]" data-name>
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.1985 4.37503">
                    <path clipRule="evenodd" d={svgPaths.p1adb3300} fill="var(--fill-0, #646B8A)" fillRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TaskManagementPage() {
  return (
    <div className="bg-white relative rounded-[3px] shrink-0 size-[16px]" data-name="TaskManagementPage">
      <div aria-hidden="true" className="absolute border border-[#cfd5e8] border-solid inset-0 pointer-events-none rounded-[3px]" />
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Alibaba_PuHuiTi_3.0:65_Medium',sans-serif] leading-[21px] left-0 not-italic text-[#101019] text-[14px] top-[-0.5px] whitespace-nowrap">22. 诗歌吟课 1</p>
    </div>
  );
}

function Icon7() {
  return (
    <div className="h-[4.469px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[11.18%_13.3%]">
        <div className="absolute inset-[-14.4%_-18.1%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.75656 4.46961">
            <path d={svgPaths.p2684cd00} fill="var(--fill-0, #838BAB)" id="Vector 2075" stroke="var(--stroke-0, #838BAB)" strokeWidth="0.998387" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute content-stretch flex flex-col h-[4.469px] items-start left-[6.5px] top-[5.27px] w-[3.758px]" data-name="Container">
      <Icon7 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="h-[12.195px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.1953 12.1953">
        <path d={svgPaths.p1319d700} fill="var(--fill-0, #838BAB)" id="Subtract" />
      </svg>
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[1.9px] size-[12.195px] top-[1.4px]" data-name="Container">
      <Icon8 />
    </div>
  );
}

function Ic() {
  return (
    <div className="absolute left-0 size-[14px] top-[2px]" data-name="Ic">
      <Container19 />
      <Container20 />
    </div>
  );
}

function Text13() {
  return (
    <div className="h-[18px] relative shrink-0 w-[41.102px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Ic />
        <p className="absolute font-['Alibaba_PuHuiTi_3.0:55_Regular_L3','Noto_Sans:Regular','Noto_Sans_SC:Regular',sans-serif] leading-[18px] left-[18px] text-[#838bab] text-[12px] top-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
          AI课
        </p>
      </div>
    </div>
  );
}

function Text14() {
  return (
    <div className="h-[18px] relative shrink-0 w-[4.289px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Alibaba_PuHuiTi_3.0:55_Regular_L3','Noto_Sans:Regular',sans-serif] leading-[18px] left-0 text-[#dfe3f0] text-[12px] top-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
          ·
        </p>
      </div>
    </div>
  );
}

function Text15() {
  return (
    <div className="h-[18px] relative shrink-0 w-[73.039px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Alibaba_PuHuiTi_3.0:55_Regular_L3','Noto_Sans_SC:Regular','Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[18px] left-0 text-[#838bab] text-[12px] top-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
          预计 30 分钟
        </p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex gap-[6px] h-[18px] items-center relative shrink-0 w-full" data-name="Container">
      <Text13 />
      <Text14 />
      <Text15 />
    </div>
  );
}

function TaskManagementPage1() {
  return (
    <div className="flex-[284_0_0] h-[41px] min-h-px min-w-px relative" data-name="TaskManagementPage">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Container17 />
        <Container18 />
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="col-1 justify-self-stretch relative rounded-[6px] row-1 self-stretch shrink-0" data-name="Label">
      <div aria-hidden="true" className="absolute border border-[#dfe3f0] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[17px] py-px relative size-full">
          <TaskManagementPage />
          <TaskManagementPage1 />
        </div>
      </div>
    </div>
  );
}

function TaskManagementPage2() {
  return (
    <div className="bg-white relative rounded-[3px] shrink-0 size-[16px]" data-name="TaskManagementPage">
      <div aria-hidden="true" className="absolute border border-[#cfd5e8] border-solid inset-0 pointer-events-none rounded-[3px]" />
    </div>
  );
}

function Container21() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Alibaba_PuHuiTi_3.0:65_Medium',sans-serif] leading-[21px] left-0 not-italic text-[#101019] text-[14px] top-[-0.5px] whitespace-nowrap">23.诗歌巩固练习 1</p>
    </div>
  );
}

function Icon9() {
  return (
    <div className="h-[1.188px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-1/2 left-[6.19%] right-[6.19%] top-1/2">
        <div className="absolute inset-[-0.6px_-7.03%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.68201 1.19296">
            <path d="M0.596482 0.596482H9.08553" id="Vector 5647" stroke="var(--stroke-0, #838BAB)" strokeLinecap="round" strokeWidth="1.19296" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute content-stretch flex flex-col h-[1.188px] items-start left-[4.91px] top-[12.41px] w-[9.688px]" data-name="Container">
      <Icon9 />
    </div>
  );
}

function Icon10() {
  return (
    <div className="h-[10.672px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.86718 10.6719">
        <path d={svgPaths.pc994300} fill="var(--fill-0, #838BAB)" id="Vector" />
      </svg>
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute content-stretch flex flex-col h-[10.672px] items-start left-[1.66px] top-[1.23px] w-[9.867px]" data-name="Container">
      <Icon10 />
    </div>
  );
}

function Ic1() {
  return (
    <div className="absolute left-0 size-[14px] top-[2px]" data-name="Ic">
      <Container23 />
      <Container24 />
    </div>
  );
}

function Text16() {
  return (
    <div className="h-[18px] relative shrink-0 w-[65.234px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Ic1 />
        <p className="absolute font-['Alibaba_PuHuiTi_3.0:55_Regular_L3','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] leading-[18px] left-[18px] text-[#838bab] text-[12px] top-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
          巩固练习
        </p>
      </div>
    </div>
  );
}

function Text17() {
  return (
    <div className="h-[18px] relative shrink-0 w-[4.289px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Alibaba_PuHuiTi_3.0:55_Regular_L3','Noto_Sans:Regular',sans-serif] leading-[18px] left-0 text-[#838bab] text-[12px] top-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
          ·
        </p>
      </div>
    </div>
  );
}

function Text18() {
  return (
    <div className="h-[18px] relative shrink-0 w-[73.039px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Alibaba_PuHuiTi_3.0:55_Regular_L3','Noto_Sans_SC:Regular','Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[18px] left-0 text-[#838bab] text-[12px] top-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
          预计 22 分钟
        </p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex gap-[6px] h-[18px] items-center relative shrink-0 w-full" data-name="Container">
      <Text16 />
      <Text17 />
      <Text18 />
    </div>
  );
}

function TaskManagementPage3() {
  return (
    <div className="flex-[284_0_0] h-[41px] min-h-px min-w-px relative" data-name="TaskManagementPage">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Container21 />
        <Container22 />
      </div>
    </div>
  );
}

function Label1() {
  return (
    <div className="col-2 justify-self-stretch relative rounded-[6px] row-1 self-stretch shrink-0" data-name="Label">
      <div aria-hidden="true" className="absolute border border-[#dfe3f0] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[17px] py-px relative size-full">
          <TaskManagementPage2 />
          <TaskManagementPage3 />
        </div>
      </div>
    </div>
  );
}

function TaskManagementPage4() {
  return (
    <div className="bg-white relative rounded-[3px] shrink-0 size-[16px]" data-name="TaskManagementPage">
      <div aria-hidden="true" className="absolute border border-[#cfd5e8] border-solid inset-0 pointer-events-none rounded-[3px]" />
    </div>
  );
}

function Container25() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Alibaba_PuHuiTi_3.0:65_Medium',sans-serif] leading-[21px] left-0 not-italic text-[#101019] text-[14px] top-[-0.5px] whitespace-nowrap">24. 诗歌吟课 3</p>
    </div>
  );
}

function Icon11() {
  return (
    <div className="h-[4.469px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[11.18%_13.3%]">
        <div className="absolute inset-[-14.4%_-18.1%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.75656 4.46961">
            <path d={svgPaths.p2684cd00} fill="var(--fill-0, #838BAB)" id="Vector 2075" stroke="var(--stroke-0, #838BAB)" strokeWidth="0.998387" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute content-stretch flex flex-col h-[4.469px] items-start left-[6.5px] top-[5.27px] w-[3.758px]" data-name="Container">
      <Icon11 />
    </div>
  );
}

function Icon12() {
  return (
    <div className="h-[12.195px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.1953 12.1953">
        <path d={svgPaths.p1319d700} fill="var(--fill-0, #838BAB)" id="Subtract" />
      </svg>
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[1.9px] size-[12.195px] top-[1.4px]" data-name="Container">
      <Icon12 />
    </div>
  );
}

function Ic2() {
  return (
    <div className="absolute left-0 size-[14px] top-[2px]" data-name="Ic">
      <Container27 />
      <Container28 />
    </div>
  );
}

function Text19() {
  return (
    <div className="h-[18px] relative shrink-0 w-[41.102px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Ic2 />
        <p className="absolute font-['Alibaba_PuHuiTi_3.0:55_Regular_L3','Noto_Sans:Regular','Noto_Sans_SC:Regular',sans-serif] leading-[18px] left-[18px] text-[#838bab] text-[12px] top-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
          AI课
        </p>
      </div>
    </div>
  );
}

function Text20() {
  return (
    <div className="h-[18px] relative shrink-0 w-[4.289px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Alibaba_PuHuiTi_3.0:55_Regular_L3','Noto_Sans:Regular',sans-serif] leading-[18px] left-0 text-[#838bab] text-[12px] top-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
          ·
        </p>
      </div>
    </div>
  );
}

function Text21() {
  return (
    <div className="h-[18px] relative shrink-0 w-[73.039px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Alibaba_PuHuiTi_3.0:55_Regular_L3','Noto_Sans_SC:Regular','Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[18px] left-0 text-[#838bab] text-[12px] top-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
          预计 35 分钟
        </p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex gap-[6px] h-[18px] items-center relative shrink-0 w-full" data-name="Container">
      <Text19 />
      <Text20 />
      <Text21 />
    </div>
  );
}

function TaskManagementPage5() {
  return (
    <div className="flex-[284_0_0] h-[41px] min-h-px min-w-px relative" data-name="TaskManagementPage">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Container25 />
        <Container26 />
      </div>
    </div>
  );
}

function Label2() {
  return (
    <div className="col-1 justify-self-stretch relative rounded-[6px] row-2 self-stretch shrink-0" data-name="Label">
      <div aria-hidden="true" className="absolute border border-[#dfe3f0] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[17px] py-px relative size-full">
          <TaskManagementPage4 />
          <TaskManagementPage5 />
        </div>
      </div>
    </div>
  );
}

function TaskManagementPage6() {
  return (
    <div className="bg-white relative rounded-[3px] shrink-0 size-[16px]" data-name="TaskManagementPage">
      <div aria-hidden="true" className="absolute border border-[#cfd5e8] border-solid inset-0 pointer-events-none rounded-[3px]" />
    </div>
  );
}

function Container29() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Alibaba_PuHuiTi_3.0:65_Medium',sans-serif] leading-[21px] left-0 not-italic text-[#101019] text-[14px] top-[-0.5px] whitespace-nowrap">25. 诗歌巩固练习 4</p>
    </div>
  );
}

function Icon13() {
  return (
    <div className="h-[1.188px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-1/2 left-[6.19%] right-[6.19%] top-1/2">
        <div className="absolute inset-[-0.6px_-7.03%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.68201 1.19296">
            <path d="M0.596482 0.596482H9.08553" id="Vector 5647" stroke="var(--stroke-0, #838BAB)" strokeLinecap="round" strokeWidth="1.19296" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute content-stretch flex flex-col h-[1.188px] items-start left-[4.91px] top-[12.41px] w-[9.688px]" data-name="Container">
      <Icon13 />
    </div>
  );
}

function Icon14() {
  return (
    <div className="h-[10.672px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.86718 10.6719">
        <path d={svgPaths.pc994300} fill="var(--fill-0, #838BAB)" id="Vector" />
      </svg>
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute content-stretch flex flex-col h-[10.672px] items-start left-[1.66px] top-[1.23px] w-[9.867px]" data-name="Container">
      <Icon14 />
    </div>
  );
}

function Ic3() {
  return (
    <div className="absolute left-0 size-[14px] top-[2px]" data-name="Ic">
      <Container31 />
      <Container32 />
    </div>
  );
}

function Text22() {
  return (
    <div className="h-[18px] relative shrink-0 w-[65.234px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Ic3 />
        <p className="absolute font-['Alibaba_PuHuiTi_3.0:55_Regular_L3','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] leading-[18px] left-[18px] text-[#838bab] text-[12px] top-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
          巩固练习
        </p>
      </div>
    </div>
  );
}

function Text23() {
  return (
    <div className="h-[18px] relative shrink-0 w-[4.289px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Alibaba_PuHuiTi_3.0:55_Regular_L3','Noto_Sans:Regular',sans-serif] leading-[18px] left-0 text-[#838bab] text-[12px] top-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
          ·
        </p>
      </div>
    </div>
  );
}

function Text24() {
  return (
    <div className="h-[18px] relative shrink-0 w-[73.039px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Alibaba_PuHuiTi_3.0:55_Regular_L3','Noto_Sans_SC:Regular','Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[18px] left-0 text-[#838bab] text-[12px] top-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
          预计 26 分钟
        </p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex gap-[6px] h-[18px] items-center relative shrink-0 w-full" data-name="Container">
      <Text22 />
      <Text23 />
      <Text24 />
    </div>
  );
}

function TaskManagementPage7() {
  return (
    <div className="flex-[284_0_0] h-[41px] min-h-px min-w-px relative" data-name="TaskManagementPage">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Container29 />
        <Container30 />
      </div>
    </div>
  );
}

function Label3() {
  return (
    <div className="col-2 justify-self-stretch relative rounded-[6px] row-2 self-stretch shrink-0" data-name="Label">
      <div aria-hidden="true" className="absolute border border-[#dfe3f0] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[17px] py-px relative size-full">
          <TaskManagementPage6 />
          <TaskManagementPage7 />
        </div>
      </div>
    </div>
  );
}

function TaskManagementPage8() {
  return (
    <div className="bg-white relative rounded-[3px] shrink-0 size-[16px]" data-name="TaskManagementPage">
      <div aria-hidden="true" className="absolute border border-[#cfd5e8] border-solid inset-0 pointer-events-none rounded-[3px]" />
    </div>
  );
}

function Container33() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Alibaba_PuHuiTi_3.0:65_Medium',sans-serif] leading-[21px] left-0 not-italic text-[#101019] text-[14px] top-[-0.5px] whitespace-nowrap">27. 诗歌巩固练习 6</p>
    </div>
  );
}

function Icon15() {
  return (
    <div className="h-[1.188px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-1/2 left-[6.19%] right-[6.19%] top-1/2">
        <div className="absolute inset-[-0.6px_-7.03%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.68201 1.19296">
            <path d="M0.596482 0.596482H9.08553" id="Vector 5647" stroke="var(--stroke-0, #838BAB)" strokeLinecap="round" strokeWidth="1.19296" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute content-stretch flex flex-col h-[1.188px] items-start left-[4.91px] top-[12.41px] w-[9.688px]" data-name="Container">
      <Icon15 />
    </div>
  );
}

function Icon16() {
  return (
    <div className="h-[10.672px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.86718 10.6719">
        <path d={svgPaths.pc994300} fill="var(--fill-0, #838BAB)" id="Vector" />
      </svg>
    </div>
  );
}

function Container36() {
  return (
    <div className="absolute content-stretch flex flex-col h-[10.672px] items-start left-[1.66px] top-[1.23px] w-[9.867px]" data-name="Container">
      <Icon16 />
    </div>
  );
}

function Ic4() {
  return (
    <div className="absolute left-0 size-[14px] top-[2px]" data-name="Ic">
      <Container35 />
      <Container36 />
    </div>
  );
}

function Text25() {
  return (
    <div className="h-[18px] relative shrink-0 w-[65.234px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Ic4 />
        <p className="absolute font-['Alibaba_PuHuiTi_3.0:55_Regular_L3','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] leading-[18px] left-[18px] text-[#838bab] text-[12px] top-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
          巩固练习
        </p>
      </div>
    </div>
  );
}

function Text26() {
  return (
    <div className="h-[18px] relative shrink-0 w-[4.289px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Alibaba_PuHuiTi_3.0:55_Regular_L3','Noto_Sans:Regular',sans-serif] leading-[18px] left-0 text-[#838bab] text-[12px] top-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
          ·
        </p>
      </div>
    </div>
  );
}

function Text27() {
  return (
    <div className="h-[18px] relative shrink-0 w-[73.039px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Alibaba_PuHuiTi_3.0:55_Regular_L3','Noto_Sans_SC:Regular','Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[18px] left-0 text-[#838bab] text-[12px] top-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
          预计 26 分钟
        </p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex gap-[6px] h-[18px] items-center relative shrink-0 w-full" data-name="Container">
      <Text25 />
      <Text26 />
      <Text27 />
    </div>
  );
}

function TaskManagementPage9() {
  return (
    <div className="flex-[284_0_0] h-[41px] min-h-px min-w-px relative" data-name="TaskManagementPage">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Container33 />
        <Container34 />
      </div>
    </div>
  );
}

function Label4() {
  return (
    <div className="col-2 justify-self-stretch relative rounded-[6px] row-3 self-stretch shrink-0" data-name="Label">
      <div aria-hidden="true" className="absolute border border-[#dfe3f0] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[17px] py-px relative size-full">
          <TaskManagementPage8 />
          <TaskManagementPage9 />
        </div>
      </div>
    </div>
  );
}

function TaskManagementPage10() {
  return (
    <div className="bg-white relative rounded-[3px] shrink-0 size-[16px]" data-name="TaskManagementPage">
      <div aria-hidden="true" className="absolute border border-[#cfd5e8] border-solid inset-0 pointer-events-none rounded-[3px]" />
    </div>
  );
}

function Container37() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Alibaba_PuHuiTi_3.0:65_Medium',sans-serif] leading-[21px] left-0 not-italic text-[#101019] text-[14px] top-[-0.5px] whitespace-nowrap">26. 诗歌吟课 5</p>
    </div>
  );
}

function Icon17() {
  return (
    <div className="h-[4.469px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[11.18%_13.3%]">
        <div className="absolute inset-[-14.4%_-18.1%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.75656 4.46961">
            <path d={svgPaths.p2684cd00} fill="var(--fill-0, #838BAB)" id="Vector 2075" stroke="var(--stroke-0, #838BAB)" strokeWidth="0.998387" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="absolute content-stretch flex flex-col h-[4.469px] items-start left-[6.5px] top-[5.27px] w-[3.758px]" data-name="Container">
      <Icon17 />
    </div>
  );
}

function Icon18() {
  return (
    <div className="h-[12.195px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.1953 12.1953">
        <path d={svgPaths.p1319d700} fill="var(--fill-0, #838BAB)" id="Subtract" />
      </svg>
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[1.9px] size-[12.195px] top-[1.4px]" data-name="Container">
      <Icon18 />
    </div>
  );
}

function Ic5() {
  return (
    <div className="absolute left-0 size-[14px] top-[2px]" data-name="Ic">
      <Container39 />
      <Container40 />
    </div>
  );
}

function Text28() {
  return (
    <div className="h-[18px] relative shrink-0 w-[41.102px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Ic5 />
        <p className="absolute font-['Alibaba_PuHuiTi_3.0:55_Regular_L3','Noto_Sans:Regular','Noto_Sans_SC:Regular',sans-serif] leading-[18px] left-[18px] text-[#838bab] text-[12px] top-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
          AI课
        </p>
      </div>
    </div>
  );
}

function Text29() {
  return (
    <div className="h-[18px] relative shrink-0 w-[4.289px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Alibaba_PuHuiTi_3.0:55_Regular_L3','Noto_Sans:Regular',sans-serif] leading-[18px] left-0 text-[#838bab] text-[12px] top-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
          ·
        </p>
      </div>
    </div>
  );
}

function Text30() {
  return (
    <div className="h-[18px] relative shrink-0 w-[73.039px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Alibaba_PuHuiTi_3.0:55_Regular_L3','Noto_Sans_SC:Regular','Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[18px] left-0 text-[#838bab] text-[12px] top-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
          预计 30 分钟
        </p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex gap-[6px] h-[18px] items-center relative shrink-0 w-full" data-name="Container">
      <Text28 />
      <Text29 />
      <Text30 />
    </div>
  );
}

function TaskManagementPage11() {
  return (
    <div className="flex-[284_0_0] h-[41px] min-h-px min-w-px relative" data-name="TaskManagementPage">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Container37 />
        <Container38 />
      </div>
    </div>
  );
}

function Label5() {
  return (
    <div className="col-1 justify-self-stretch relative rounded-[6px] row-3 self-stretch shrink-0" data-name="Label">
      <div aria-hidden="true" className="absolute border border-[#dfe3f0] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[17px] py-px relative size-full">
          <TaskManagementPage10 />
          <TaskManagementPage11 />
        </div>
      </div>
    </div>
  );
}

function TaskManagementPage12() {
  return (
    <div className="bg-white relative rounded-[3px] shrink-0 size-[16px]" data-name="TaskManagementPage">
      <div aria-hidden="true" className="absolute border border-[#cfd5e8] border-solid inset-0 pointer-events-none rounded-[3px]" />
    </div>
  );
}

function Container41() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Alibaba_PuHuiTi_3.0:65_Medium',sans-serif] leading-[21px] left-0 not-italic text-[#101019] text-[14px] top-[-0.5px] whitespace-nowrap">28. 诗歌吟课 7</p>
    </div>
  );
}

function Icon19() {
  return (
    <div className="h-[4.469px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[11.18%_13.3%]">
        <div className="absolute inset-[-14.4%_-18.1%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.75656 4.46961">
            <path d={svgPaths.p2684cd00} fill="var(--fill-0, #838BAB)" id="Vector 2075" stroke="var(--stroke-0, #838BAB)" strokeWidth="0.998387" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="absolute content-stretch flex flex-col h-[4.469px] items-start left-[6.5px] top-[5.27px] w-[3.758px]" data-name="Container">
      <Icon19 />
    </div>
  );
}

function Icon20() {
  return (
    <div className="h-[12.195px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.1953 12.1953">
        <path d={svgPaths.p1319d700} fill="var(--fill-0, #838BAB)" id="Subtract" />
      </svg>
    </div>
  );
}

function Container44() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[1.9px] size-[12.195px] top-[1.4px]" data-name="Container">
      <Icon20 />
    </div>
  );
}

function Ic6() {
  return (
    <div className="absolute left-0 size-[14px] top-[2px]" data-name="Ic">
      <Container43 />
      <Container44 />
    </div>
  );
}

function Text31() {
  return (
    <div className="h-[18px] relative shrink-0 w-[41.102px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Ic6 />
        <p className="absolute font-['Alibaba_PuHuiTi_3.0:55_Regular_L3','Noto_Sans:Regular','Noto_Sans_SC:Regular',sans-serif] leading-[18px] left-[18px] text-[#838bab] text-[12px] top-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
          AI课
        </p>
      </div>
    </div>
  );
}

function Text32() {
  return (
    <div className="h-[18px] relative shrink-0 w-[4.289px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Alibaba_PuHuiTi_3.0:55_Regular_L3','Noto_Sans:Regular',sans-serif] leading-[18px] left-0 text-[#838bab] text-[12px] top-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
          ·
        </p>
      </div>
    </div>
  );
}

function Text33() {
  return (
    <div className="h-[18px] relative shrink-0 w-[73.039px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Alibaba_PuHuiTi_3.0:55_Regular_L3','Noto_Sans_SC:Regular','Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[18px] left-0 text-[#838bab] text-[12px] top-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
          预计 30 分钟
        </p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex gap-[6px] h-[18px] items-center relative shrink-0 w-full" data-name="Container">
      <Text31 />
      <Text32 />
      <Text33 />
    </div>
  );
}

function TaskManagementPage13() {
  return (
    <div className="flex-[284_0_0] h-[41px] min-h-px min-w-px relative" data-name="TaskManagementPage">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Container41 />
        <Container42 />
      </div>
    </div>
  );
}

function Label6() {
  return (
    <div className="col-1 justify-self-stretch relative rounded-[6px] row-4 self-stretch shrink-0" data-name="Label">
      <div aria-hidden="true" className="absolute border border-[#dfe3f0] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[17px] py-px relative size-full">
          <TaskManagementPage12 />
          <TaskManagementPage13 />
        </div>
      </div>
    </div>
  );
}

function TaskManagementPage14() {
  return (
    <div className="bg-white relative rounded-[3px] shrink-0 size-[16px]" data-name="TaskManagementPage">
      <div aria-hidden="true" className="absolute border border-[#cfd5e8] border-solid inset-0 pointer-events-none rounded-[3px]" />
    </div>
  );
}

function Container45() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Alibaba_PuHuiTi_3.0:65_Medium',sans-serif] leading-[21px] left-0 not-italic text-[#101019] text-[14px] top-[-0.5px] whitespace-nowrap">29. 诗歌巩固练习 8</p>
    </div>
  );
}

function Icon21() {
  return (
    <div className="h-[1.188px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-1/2 left-[6.19%] right-[6.19%] top-1/2">
        <div className="absolute inset-[-0.6px_-7.03%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.68201 1.19296">
            <path d="M0.596482 0.596482H9.08553" id="Vector 5647" stroke="var(--stroke-0, #838BAB)" strokeLinecap="round" strokeWidth="1.19296" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="absolute content-stretch flex flex-col h-[1.188px] items-start left-[4.91px] top-[12.41px] w-[9.688px]" data-name="Container">
      <Icon21 />
    </div>
  );
}

function Icon22() {
  return (
    <div className="h-[10.672px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.86718 10.6719">
        <path d={svgPaths.pc994300} fill="var(--fill-0, #838BAB)" id="Vector" />
      </svg>
    </div>
  );
}

function Container48() {
  return (
    <div className="absolute content-stretch flex flex-col h-[10.672px] items-start left-[1.66px] top-[1.23px] w-[9.867px]" data-name="Container">
      <Icon22 />
    </div>
  );
}

function Ic7() {
  return (
    <div className="absolute left-0 size-[14px] top-[2px]" data-name="Ic">
      <Container47 />
      <Container48 />
    </div>
  );
}

function Text34() {
  return (
    <div className="h-[18px] relative shrink-0 w-[65.234px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Ic7 />
        <p className="absolute font-['Alibaba_PuHuiTi_3.0:55_Regular_L3','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] leading-[18px] left-[18px] text-[#838bab] text-[12px] top-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
          巩固练习
        </p>
      </div>
    </div>
  );
}

function Text35() {
  return (
    <div className="h-[18px] relative shrink-0 w-[4.289px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Alibaba_PuHuiTi_3.0:55_Regular_L3','Noto_Sans:Regular',sans-serif] leading-[18px] left-0 text-[#838bab] text-[12px] top-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
          ·
        </p>
      </div>
    </div>
  );
}

function Text36() {
  return (
    <div className="h-[18px] relative shrink-0 w-[73.039px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Alibaba_PuHuiTi_3.0:55_Regular_L3','Noto_Sans_SC:Regular','Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[18px] left-0 text-[#838bab] text-[12px] top-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
          预计 26 分钟
        </p>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex gap-[6px] h-[18px] items-center relative shrink-0 w-full" data-name="Container">
      <Text34 />
      <Text35 />
      <Text36 />
    </div>
  );
}

function TaskManagementPage15() {
  return (
    <div className="flex-[284_0_0] h-[41px] min-h-px min-w-px relative" data-name="TaskManagementPage">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Container45 />
        <Container46 />
      </div>
    </div>
  );
}

function Label7() {
  return (
    <div className="col-2 justify-self-stretch relative rounded-[6px] row-4 self-stretch shrink-0" data-name="Label">
      <div aria-hidden="true" className="absolute border border-[#dfe3f0] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[17px] py-px relative size-full">
          <TaskManagementPage14 />
          <TaskManagementPage15 />
        </div>
      </div>
    </div>
  );
}

function TaskManagementPage16() {
  return (
    <div className="bg-white relative rounded-[3px] shrink-0 size-[16px]" data-name="TaskManagementPage">
      <div aria-hidden="true" className="absolute border border-[#cfd5e8] border-solid inset-0 pointer-events-none rounded-[3px]" />
    </div>
  );
}

function Container49() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Alibaba_PuHuiTi_3.0:65_Medium',sans-serif] leading-[21px] left-0 not-italic text-[#101019] text-[14px] top-[-0.5px] whitespace-nowrap">30. 诗歌吟课 7</p>
    </div>
  );
}

function Icon23() {
  return (
    <div className="h-[4.469px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[11.18%_13.3%]">
        <div className="absolute inset-[-14.4%_-18.1%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.75656 4.46961">
            <path d={svgPaths.p2684cd00} fill="var(--fill-0, #838BAB)" id="Vector 2075" stroke="var(--stroke-0, #838BAB)" strokeWidth="0.998387" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="absolute content-stretch flex flex-col h-[4.469px] items-start left-[6.5px] top-[5.27px] w-[3.758px]" data-name="Container">
      <Icon23 />
    </div>
  );
}

function Icon24() {
  return (
    <div className="h-[12.195px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.1953 12.1953">
        <path d={svgPaths.p1319d700} fill="var(--fill-0, #838BAB)" id="Subtract" />
      </svg>
    </div>
  );
}

function Container52() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[1.9px] size-[12.195px] top-[1.4px]" data-name="Container">
      <Icon24 />
    </div>
  );
}

function Ic8() {
  return (
    <div className="absolute left-0 size-[14px] top-[2px]" data-name="Ic">
      <Container51 />
      <Container52 />
    </div>
  );
}

function Text37() {
  return (
    <div className="h-[18px] relative shrink-0 w-[41.102px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Ic8 />
        <p className="absolute font-['Alibaba_PuHuiTi_3.0:55_Regular_L3','Noto_Sans:Regular','Noto_Sans_SC:Regular',sans-serif] leading-[18px] left-[18px] text-[#838bab] text-[12px] top-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
          AI课
        </p>
      </div>
    </div>
  );
}

function Text38() {
  return (
    <div className="h-[18px] relative shrink-0 w-[4.289px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Alibaba_PuHuiTi_3.0:55_Regular_L3','Noto_Sans:Regular',sans-serif] leading-[18px] left-0 text-[#838bab] text-[12px] top-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
          ·
        </p>
      </div>
    </div>
  );
}

function Text39() {
  return (
    <div className="h-[18px] relative shrink-0 w-[73.039px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Alibaba_PuHuiTi_3.0:55_Regular_L3','Noto_Sans_SC:Regular','Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[18px] left-0 text-[#838bab] text-[12px] top-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
          预计 30 分钟
        </p>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex gap-[6px] h-[18px] items-center relative shrink-0 w-full" data-name="Container">
      <Text37 />
      <Text38 />
      <Text39 />
    </div>
  );
}

function TaskManagementPage17() {
  return (
    <div className="flex-[284_0_0] h-[41px] min-h-px min-w-px relative" data-name="TaskManagementPage">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Container49 />
        <Container50 />
      </div>
    </div>
  );
}

function Label8() {
  return (
    <div className="col-1 justify-self-stretch relative rounded-[6px] row-5 self-stretch shrink-0" data-name="Label">
      <div aria-hidden="true" className="absolute border border-[#dfe3f0] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[17px] py-px relative size-full">
          <TaskManagementPage16 />
          <TaskManagementPage17 />
        </div>
      </div>
    </div>
  );
}

function TaskManagementPage18() {
  return (
    <div className="bg-white relative rounded-[3px] shrink-0 size-[16px]" data-name="TaskManagementPage">
      <div aria-hidden="true" className="absolute border border-[#cfd5e8] border-solid inset-0 pointer-events-none rounded-[3px]" />
    </div>
  );
}

function Container53() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Alibaba_PuHuiTi_3.0:65_Medium',sans-serif] leading-[21px] left-0 not-italic text-[#101019] text-[14px] top-[-0.5px] whitespace-nowrap">31. 诗歌巩固练习 8</p>
    </div>
  );
}

function Icon25() {
  return (
    <div className="h-[1.188px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-1/2 left-[6.19%] right-[6.19%] top-1/2">
        <div className="absolute inset-[-0.6px_-7.03%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.68201 1.19296">
            <path d="M0.596482 0.596482H9.08553" id="Vector 5647" stroke="var(--stroke-0, #838BAB)" strokeLinecap="round" strokeWidth="1.19296" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="absolute content-stretch flex flex-col h-[1.188px] items-start left-[4.91px] top-[12.41px] w-[9.688px]" data-name="Container">
      <Icon25 />
    </div>
  );
}

function Icon26() {
  return (
    <div className="h-[10.672px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.86718 10.6719">
        <path d={svgPaths.pc994300} fill="var(--fill-0, #838BAB)" id="Vector" />
      </svg>
    </div>
  );
}

function Container56() {
  return (
    <div className="absolute content-stretch flex flex-col h-[10.672px] items-start left-[1.66px] top-[1.23px] w-[9.867px]" data-name="Container">
      <Icon26 />
    </div>
  );
}

function Ic9() {
  return (
    <div className="absolute left-0 size-[14px] top-[2px]" data-name="Ic">
      <Container55 />
      <Container56 />
    </div>
  );
}

function Text40() {
  return (
    <div className="h-[18px] relative shrink-0 w-[65.234px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Ic9 />
        <p className="absolute font-['Alibaba_PuHuiTi_3.0:55_Regular_L3','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] leading-[18px] left-[18px] text-[#838bab] text-[12px] top-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
          巩固练习
        </p>
      </div>
    </div>
  );
}

function Text41() {
  return (
    <div className="h-[18px] relative shrink-0 w-[4.289px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Alibaba_PuHuiTi_3.0:55_Regular_L3','Noto_Sans:Regular',sans-serif] leading-[18px] left-0 text-[#838bab] text-[12px] top-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
          ·
        </p>
      </div>
    </div>
  );
}

function Text42() {
  return (
    <div className="h-[18px] relative shrink-0 w-[73.039px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Alibaba_PuHuiTi_3.0:55_Regular_L3','Noto_Sans_SC:Regular','Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[18px] left-0 text-[#838bab] text-[12px] top-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
          预计 26 分钟
        </p>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex gap-[6px] h-[18px] items-center relative shrink-0 w-full" data-name="Container">
      <Text40 />
      <Text41 />
      <Text42 />
    </div>
  );
}

function TaskManagementPage19() {
  return (
    <div className="flex-[284_0_0] h-[41px] min-h-px min-w-px relative" data-name="TaskManagementPage">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Container53 />
        <Container54 />
      </div>
    </div>
  );
}

function Label9() {
  return (
    <div className="col-2 justify-self-stretch relative rounded-[6px] row-5 self-stretch shrink-0" data-name="Label">
      <div aria-hidden="true" className="absolute border border-[#dfe3f0] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[17px] py-px relative size-full">
          <TaskManagementPage18 />
          <TaskManagementPage19 />
        </div>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="gap-x-[8px] gap-y-[8px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(5,minmax(0,1fr))] h-[367px] relative shrink-0 w-full" data-name="Container">
      <Label />
      <Label1 />
      <Label2 />
      <Label3 />
      <Label4 />
      <Label5 />
      <Label6 />
      <Label7 />
      <Label8 />
      <Label9 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Component6 />
      <Container16 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame27 />
      <Frame32 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[20px] py-[20px] top-0 w-[736px]">
      <Frame47 />
      <Frame25 />
      <Frame5 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="absolute h-[716px] left-[204px] top-[94px] w-[776px]">
      <div className="absolute h-[662px] left-0 top-0 w-[776px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 776 662">
          <path d={svgPaths.p20070a00} fill="var(--fill-0, white)" id="Rectangle 346242149" />
        </svg>
      </div>
      <Frame30 />
    </div>
  );
}

function Frame15() {
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

function Frame16() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[14px]">
      <Frame15 />
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

function Frame11() {
  return (
    <div className="content-stretch flex font-['Alibaba_PuHuiTi_3.0:55_Regular',sans-serif] gap-[4px] items-center leading-[1.75] not-italic relative shrink-0 text-[#838bab] text-[12px] whitespace-nowrap">
      <p className="relative shrink-0">2026-03-25</p>
      <p className="relative shrink-0">刚刚发布</p>
    </div>
  );
}

function Frame6() {
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

function Frame7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <p className="font-['Alibaba_PuHuiTi_3.0:65_Medium',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#444963] text-[14px] w-full">数学课程 (4节)</p>
      <Frame6 />
    </div>
  );
}

function Frame8() {
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
      <Frame11 />
      <Frame7 />
      <Frame8 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <Frame16 />
      <Frame12 />
    </div>
  );
}

function Frame18() {
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

function Frame19() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[14px]">
      <Frame18 />
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

function Frame14() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Alibaba_PuHuiTi_3.0:55_Regular',sans-serif] leading-[1.75] not-italic relative shrink-0 text-[#838bab] text-[12px] whitespace-nowrap">2026-03-24</p>
    </div>
  );
}

function Frame10() {
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

function Frame9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <p className="font-['Alibaba_PuHuiTi_3.0:65_Medium',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#444963] text-[14px] w-full">数学课程 (3节)</p>
      <Frame10 />
    </div>
  );
}

function Frame21() {
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

function Frame13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
      <Frame14 />
      <Frame9 />
      <Frame21 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <Frame19 />
      <Frame13 />
    </div>
  );
}

function Frame29() {
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

function Frame34() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Alibaba_PuHuiTi_3.0:55_Regular',sans-serif] leading-[1.75] not-italic relative shrink-0 text-[#838bab] text-[12px] whitespace-nowrap">2026-03-23</p>
    </div>
  );
}

function Frame36() {
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

function Frame35() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <p className="font-['Alibaba_PuHuiTi_3.0:65_Medium',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#444963] text-[14px] w-full">数学课程 (5节)</p>
      <Frame36 />
    </div>
  );
}

function Frame39() {
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

function Frame31() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
      <Frame34 />
      <Frame35 />
      <Frame39 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <Frame29 />
      <Frame31 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame17 />
      <Frame20 />
      <Frame22 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[12px] h-[614px] items-start left-[992px] px-[12px] py-[20px] rounded-[20px] top-[94px] w-[264px]">
      <p className="font-['Alibaba_PuHuiTi_3.0:75_SemiBold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#101019] text-[16px] w-full">近期布置</p>
      <Frame23 />
    </div>
  );
}

function Component3() {
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
    <div className="bg-[#f5faff] relative size-full" data-name="布置 - 去诊断">
      <Frame2 />
      <Sidebar />
      <Frame37 />
      <Frame28 />
      <Component3 />
    </div>
  );
}