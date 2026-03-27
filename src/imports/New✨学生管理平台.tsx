import svgPaths from "./svg-dirvqrzw9m";
import imgImage from "figma:asset/8e70990d6104e43028f05c9340c57c6d1586c867.png";
import imgImage1 from "figma:asset/71afa2264d74fb6b684627a2891e580a8732d737.png";

function IcBtnArrow() {
  return (
    <div className="h-[12px] relative shrink-0 w-[8px]" data-name="ic_btn_arrow">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 12">
        <g id="ic_btn_arrow">
          <path d="M1 5L4 8L7 5" id="Vector 3278" stroke="var(--stroke-0, #444963)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}

function IcBtnArrow1() {
  return (
    <div className="h-[12px] relative shrink-0 w-[8px]" data-name="ic_btn_arrow">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 12">
        <g id="ic_btn_arrow">
          <path d="M1 5L4 8L7 5" id="Vector 3278" stroke="var(--stroke-0, #444963)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}

function Component() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0" data-name="选择">
      <div className="content-stretch flex gap-[6px] h-[32px] items-center justify-center px-[16px] relative rounded-[18px] shrink-0 w-[102px]" data-name="线框按钮-灰背景">
        <div aria-hidden="true" className="absolute border border-[#e9ecf5] border-solid inset-0 pointer-events-none rounded-[18px]" />
        <div className="flex flex-col font-['Alibaba_PuHuiTi_3.0:65_Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444963] text-[14px] whitespace-nowrap">
          <p className="leading-[1.5]">学段</p>
        </div>
        <IcBtnArrow />
      </div>
      <div className="content-stretch flex gap-[6px] h-[32px] items-center justify-center px-[16px] relative rounded-[18px] shrink-0 w-[102px]" data-name="线框按钮-灰背景">
        <div aria-hidden="true" className="absolute border border-[#e9ecf5] border-solid inset-0 pointer-events-none rounded-[18px]" />
        <div className="flex flex-col font-['Alibaba_PuHuiTi_3.0:65_Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444963] text-[14px] whitespace-nowrap">
          <p className="leading-[1.5]">数学</p>
        </div>
        <IcBtnArrow1 />
      </div>
    </div>
  );
}

function Tab() {
  return (
    <div className="h-[64px] relative shrink-0 w-full" data-name="一级页面-返回+tab+搜索+筛选按钮">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[24px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Alibaba_PuHuiTi_3.0:75_SemiBold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#101019] text-[20px]">
            <p className="leading-[1.5]">试听课管理</p>
          </div>
          <Component />
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return <div className="h-0 shrink-0 w-[1111px]" data-name="Container" />;
}

function Container6() {
  return <div className="absolute border border-[#e9ecf5] border-solid h-[746px] left-0 rounded-[16px] top-0 w-[266px]" data-name="Container" />;
}

function Text() {
  return (
    <div className="h-[21px] relative shrink-0 w-[109.484px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Alibaba_PuHuiTi_3.0:55_Regular_L3','Noto_Sans_JP:Regular','Noto_Sans:Regular',sans-serif] leading-[21px] left-0 text-[#101019] text-[14px] top-[-0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
          高一·人教版必修1
        </p>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_156_9163)" id="Icon">
          <path clipRule="evenodd" d={svgPaths.p2b53a4d0} fill="var(--fill-0, #838BAB)" fillRule="evenodd" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_156_9163">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function CustomSelect() {
  return (
    <div className="absolute bg-white content-stretch flex h-[37px] items-center justify-between left-[20px] px-[13px] py-px rounded-[6px] top-[74px] w-[226px]" data-name="CustomSelect">
      <div aria-hidden="true" className="absolute border border-[#dfe3f0] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <Text />
      <Icon />
    </div>
  );
}

function Icon1() {
  return (
    <div className="h-[4px] relative shrink-0 w-[7px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 4">
        <g clipPath="url(#clip0_156_9168)" id="Icon">
          <path d={svgPaths.p36d9f980} fill="var(--fill-0, #646B8A)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_156_9168">
            <rect fill="white" height="4" width="7" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function TreeArrow() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="TreeArrow">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[2.5px] relative size-full">
        <Icon1 />
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="flex-[1_0_0] h-[21px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Alibaba_PuHuiTi_3.0:55_Regular_L3','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] leading-[21px] left-0 text-[#101019] text-[14px] top-[-0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
          集合与常用逻辑用语
        </p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex gap-[10px] h-[21px] items-center relative shrink-0 w-full" data-name="Container">
      <TreeArrow />
      <Text1 />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-white h-[38px] relative rounded-[6px] shrink-0 w-[226px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8.5px] px-[8px] relative size-full">
        <Container9 />
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="h-[4px] relative shrink-0 w-[7px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 4">
        <g clipPath="url(#clip0_156_9168)" id="Icon">
          <path d={svgPaths.p36d9f980} fill="var(--fill-0, #646B8A)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_156_9168">
            <rect fill="white" height="4" width="7" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function TreeArrow1() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="TreeArrow">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[2.5px] relative size-full">
        <Icon2 />
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="flex-[1_0_0] h-[21px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Alibaba_PuHuiTi_3.0:65_Medium',sans-serif] leading-[21px] left-0 not-italic text-[#4a4fed] text-[14px] top-[-0.5px] whitespace-nowrap">集合</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex gap-[10px] h-[21px] items-center relative shrink-0 w-full" data-name="Container">
      <TreeArrow1 />
      <Text2 />
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#ebf1ff] h-[38px] relative rounded-[6px] shrink-0 w-[226px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[22px] pr-[8px] pt-[8.5px] relative size-full">
        <Container12 />
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="flex-[1_0_0] h-[21px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Alibaba_PuHuiTi_3.0:55_Regular_L3','Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[21px] left-0 text-[#101019] text-[14px] top-[-0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
          1.1.1 集合及表示方法
        </p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex h-[21px] items-center relative shrink-0 w-full" data-name="Container">
      <Text3 />
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[6px] w-[226px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[36px] pr-[12px] pt-[8.5px] relative size-full">
        <Container15 />
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[38px] relative shrink-0 w-[226px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Button2 />
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="flex-[1_0_0] h-[21px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Alibaba_PuHuiTi_3.0:55_Regular_L3','Noto_Sans:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] leading-[21px] left-0 text-[#101019] text-[14px] top-[-0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
          1.1.2 集合间的基本关系
        </p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex h-[21px] items-center relative shrink-0 w-full" data-name="Container">
      <Text4 />
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[6px] w-[226px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[36px] pr-[12px] pt-[8.5px] relative size-full">
        <Container17 />
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[38px] relative shrink-0 w-[226px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Button3 />
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="flex-[1_0_0] h-[21px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Alibaba_PuHuiTi_3.0:55_Regular_L3','Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[21px] left-0 text-[#101019] text-[14px] top-[-0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
          1.1.3 集合的基本运算
        </p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex h-[21px] items-center relative shrink-0 w-full" data-name="Container">
      <Text5 />
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[6px] w-[226px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[36px] pr-[12px] pt-[8.5px] relative size-full">
        <Container19 />
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[226px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Button4 />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[226px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Container14 />
        <Container16 />
        <Container18 />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[226px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Button1 />
        <Container13 />
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="h-[4px] relative shrink-0 w-[7px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 4">
        <g clipPath="url(#clip0_156_9168)" id="Icon">
          <path d={svgPaths.p36d9f980} fill="var(--fill-0, #646B8A)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_156_9168">
            <rect fill="white" height="4" width="7" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function TreeArrow2() {
  return (
    <div className="relative size-[12px]" data-name="TreeArrow">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[4px] relative size-full">
        <Icon3 />
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="flex-[1_0_0] h-[21px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Alibaba_PuHuiTi_3.0:55_Regular_L3','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] leading-[21px] left-0 text-[#101019] text-[14px] top-[-0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
          常用逻辑用语
        </p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex gap-[10px] h-[21px] items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0 size-[12px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <TreeArrow2 />
        </div>
      </div>
      <Text6 />
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[6px] w-[226px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[22px] pr-[8px] pt-[8.5px] relative size-full">
        <Container21 />
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[38px] relative shrink-0 w-[226px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Button5 />
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[226px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Container11 />
        <Container20 />
      </div>
    </div>
  );
}

function TreeNodeItem() {
  return (
    <div className="h-[248px] relative shrink-0 w-[226px]" data-name="TreeNodeItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Button />
        <Container10 />
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="h-[4px] relative shrink-0 w-[7px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 4">
        <g clipPath="url(#clip0_156_9168)" id="Icon">
          <path d={svgPaths.p36d9f980} fill="var(--fill-0, #646B8A)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_156_9168">
            <rect fill="white" height="4" width="7" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function TreeArrow3() {
  return (
    <div className="relative size-[12px]" data-name="TreeArrow">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[4px] relative size-full">
        <Icon4 />
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="flex-[1_0_0] h-[21px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Alibaba_PuHuiTi_3.0:55_Regular_L3','Noto_Sans_JP:Regular',sans-serif] leading-[21px] left-0 text-[#101019] text-[14px] top-[-0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
          函数
        </p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex gap-[10px] h-[21px] items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0 size-[12px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <TreeArrow3 />
        </div>
      </div>
      <Text7 />
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[6px] w-[226px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8.5px] px-[8px] relative size-full">
        <Container22 />
      </div>
    </div>
  );
}

function TreeNodeItem1() {
  return (
    <div className="h-[38px] relative shrink-0 w-[226px]" data-name="TreeNodeItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Button6 />
      </div>
    </div>
  );
}

function Text8() {
  return (
    <div className="flex-[1_0_0] h-[21px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Alibaba_PuHuiTi_3.0:55_Regular_L3','Noto_Sans_JP:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[21px] left-0 text-[#101019] text-[14px] top-[-0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
          指数函数与对数函数
        </p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex h-[21px] items-center relative shrink-0 w-full" data-name="Container">
      <Text8 />
    </div>
  );
}

function Button7() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[6px] w-[226px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[8px] pr-[12px] pt-[8.5px] relative size-full">
        <Container23 />
      </div>
    </div>
  );
}

function TreeNodeItem2() {
  return (
    <div className="h-[38px] relative shrink-0 w-[226px]" data-name="TreeNodeItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Button7 />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[599px] items-start left-[20px] overflow-clip top-[123px] w-[226px]" data-name="Container">
      <TreeNodeItem />
      <TreeNodeItem1 />
      <TreeNodeItem2 />
    </div>
  );
}

function Button8() {
  return (
    <div className="absolute content-stretch flex h-[32px] items-center justify-center left-[3px] rounded-[4px] top-[3px] w-[110px]" data-name="Button">
      <p className="font-['Alibaba_PuHuiTi_3.0:55_Regular_L3','Noto_Sans_JP:Regular',sans-serif] leading-[21px] relative shrink-0 text-[#646b8a] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        初中
      </p>
    </div>
  );
}

function Button9() {
  return (
    <div className="absolute bg-white content-stretch flex h-[32px] items-center justify-center left-[113px] rounded-[4px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.08)] top-[3px] w-[110px]" data-name="Button">
      <p className="font-['Alibaba_PuHuiTi_3.0:65_Medium',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#4a4fed] text-[14px] text-center whitespace-nowrap">高中</p>
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute bg-[#f0f1f5] h-[38px] left-[20px] rounded-[6px] top-[24px] w-[226px]" data-name="Container">
      <Button8 />
      <Button9 />
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute h-[746px] left-0 top-0 w-[266px]" data-name="Container">
      <CustomSelect />
      <Container8 />
      <Container24 />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute h-[746px] left-0 rounded-[16px] top-0 w-[266px]" data-name="Container">
      <Container6 />
      <Container7 />
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[746px] relative shrink-0 w-[266px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container5 />
      </div>
    </div>
  );
}

function Container27() {
  return <div className="absolute border border-[#e9ecf5] border-solid h-[216px] left-0 rounded-[16px] top-0 w-[829px]" data-name="Container" />;
}

function Text9() {
  return (
    <div className="bg-[#fa9524] h-[18px] relative rounded-[4px] shrink-0 w-[31.617px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[4px] relative size-full">
        <p className="font-['Alibaba_PuHuiTi_3.0:65_Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">推荐</p>
      </div>
    </div>
  );
}

function Text10() {
  return (
    <div className="h-[24px] relative shrink-0 w-[145.477px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Alibaba_PuHuiTi_3.0:75_SemiBold',sans-serif] leading-[24px] left-0 not-italic text-[#444963] text-[16px] top-[-0.5px] whitespace-nowrap">1.1.1 集合及表示方法</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="h-[24px] relative shrink-0 w-[781px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text9 />
        <Text10 />
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[36%_39.01%_42.25%_43.75%]" data-name="Vector">
        <div className="absolute inset-[-14.39%_-18.12%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.75917 4.48158">
            <path d={svgPaths.p15bf0e70} fill="var(--fill-0, #838BAB)" id="Vector" stroke="var(--stroke-0, #838BAB)" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[9.38%_12.5%_15.63%_12.5%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
          <path d={svgPaths.p21160c00} fill="var(--fill-0, #838BAB)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function CourseIcon() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 size-[16px] top-[5px]" data-name="CourseIcon">
      <Icon5 />
    </div>
  );
}

function Container33() {
  return (
    <div className="h-[21px] relative shrink-0 w-[16px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <CourseIcon />
      </div>
    </div>
  );
}

function Text11() {
  return (
    <div className="h-[21px] relative shrink-0 w-[55.109px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Alibaba_PuHuiTi_3.0:65_Medium',sans-serif] leading-[21px] left-0 not-italic text-[#444963] text-[14px] top-[-0.5px] whitespace-nowrap">课程学习</p>
      </div>
    </div>
  );
}

function Text12() {
  return (
    <div className="flex-[1_0_0] h-[21px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Alibaba_PuHuiTi_3.0:65_Medium',sans-serif] leading-[21px] left-0 not-italic text-[#444963] text-[14px] top-[-0.5px] whitespace-nowrap">(约51分钟)</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[131.125px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Text11 />
        <Text12 />
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="flex-[1_0_0] h-[21px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container35 />
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="h-[21px] relative shrink-0 w-[153.125px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-start relative size-full">
        <Container33 />
        <Container34 />
      </div>
    </div>
  );
}

function Container37() {
  return <div className="absolute border border-[#dfe3f0] border-solid h-[32px] left-0 rounded-[18px] top-0 w-[87.109px]" data-name="Container" />;
}

function Button10() {
  return (
    <div className="absolute bg-white h-[32px] left-0 rounded-[18px] top-0 w-[87.109px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Alibaba_PuHuiTi_3.0:55_Regular_L3','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[21px] left-[44px] text-[#444963] text-[14px] text-center top-[5px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        预览课程
      </p>
      <Container37 />
    </div>
  );
}

function Container36() {
  return (
    <div className="h-[32px] relative shrink-0 w-[87.109px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Button10 />
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="bg-[#f4f7fe] h-[60px] relative rounded-[12px] shrink-0 w-[781px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[12px] relative size-full">
        <Container32 />
        <Container36 />
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[73.25%_12.5%_18.75%_34.38%]" data-name="Vector">
        <div className="absolute inset-[-39.08%_-7.27%_-39.09%_-5.88%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.61821 2.27938">
            <path d={svgPaths.pbc50a00} id="Vector" stroke="var(--stroke-0, #838BAB)" strokeLinecap="square" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[12.5%_21.39%_15.63%_15.63%]" data-name="Vector">
        <div className="absolute inset-[-4.35%_-4.96%_0_-4.96%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.0776 12">
            <path d={svgPaths.p10bf2000} id="Vector" stroke="var(--stroke-0, #838BAB)" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function PracticeIcon() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 size-[16px] top-[5px]" data-name="PracticeIcon">
      <Icon6 />
    </div>
  );
}

function Container40() {
  return (
    <div className="h-[21px] relative shrink-0 w-[16px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <PracticeIcon />
      </div>
    </div>
  );
}

function Text13() {
  return (
    <div className="h-[21px] relative shrink-0 w-[55.109px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Alibaba_PuHuiTi_3.0:65_Medium',sans-serif] leading-[21px] left-0 not-italic text-[#444963] text-[14px] top-[-0.5px] whitespace-nowrap">巩固练习</p>
      </div>
    </div>
  );
}

function Text14() {
  return (
    <div className="flex-[1_0_0] h-[21px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Alibaba_PuHuiTi_3.0:65_Medium',sans-serif] leading-[21px] left-0 not-italic text-[#444963] text-[14px] top-[-0.5px] whitespace-nowrap">(5种题型，约18分钟)</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[194.359px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Text13 />
        <Text14 />
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="flex-[1_0_0] h-[21px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container42 />
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="h-[21px] relative shrink-0 w-[216.359px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-start relative size-full">
        <Container40 />
        <Container41 />
      </div>
    </div>
  );
}

function Container44() {
  return <div className="absolute border border-[#dfe3f0] border-solid h-[32px] left-0 rounded-[18px] top-0 w-[87.109px]" data-name="Container" />;
}

function Button11() {
  return (
    <div className="absolute bg-white h-[32px] left-0 rounded-[18px] top-0 w-[87.109px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Alibaba_PuHuiTi_3.0:55_Regular_L3','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[21px] left-[44px] text-[#444963] text-[14px] text-center top-[5px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        预览课程
      </p>
      <Container44 />
    </div>
  );
}

function Container43() {
  return (
    <div className="h-[32px] relative shrink-0 w-[87.109px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Button11 />
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="bg-[#f4f7fe] flex-[1_0_0] min-h-px min-w-px relative rounded-[12px] w-[781px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[12px] relative size-full">
        <Container39 />
        <Container43 />
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[781px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Container31 />
        <Container38 />
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[216px] items-start left-0 pl-[24px] py-[24px] top-0 w-[829px]" data-name="Container">
      <Container29 />
      <Container30 />
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute h-[216px] left-0 rounded-[16px] top-0 w-[829px]" data-name="Container">
      <Container27 />
      <Container28 />
    </div>
  );
}

function Container46() {
  return <div className="absolute border border-[#e9ecf5] border-solid h-[216px] left-0 rounded-[16px] top-0 w-[829px]" data-name="Container" />;
}

function Text15() {
  return (
    <div className="bg-[#fa9524] h-[18px] relative rounded-[4px] shrink-0 w-[31.617px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[4px] relative size-full">
        <p className="font-['Alibaba_PuHuiTi_3.0:65_Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">推荐</p>
      </div>
    </div>
  );
}

function Text16() {
  return (
    <div className="h-[24px] relative shrink-0 w-[163.461px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Alibaba_PuHuiTi_3.0:75_SemiBold',sans-serif] leading-[24px] left-0 not-italic text-[#444963] text-[16px] top-[-0.5px] whitespace-nowrap">1.1.2 集合间的基本关系</p>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="h-[24px] relative shrink-0 w-[781px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text15 />
        <Text16 />
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[36%_39.01%_42.25%_43.75%]" data-name="Vector">
        <div className="absolute inset-[-14.39%_-18.12%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.75917 4.48158">
            <path d={svgPaths.p15bf0e70} fill="var(--fill-0, #838BAB)" id="Vector" stroke="var(--stroke-0, #838BAB)" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[9.38%_12.5%_15.63%_12.5%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
          <path d={svgPaths.p21160c00} fill="var(--fill-0, #838BAB)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function CourseIcon1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 size-[16px] top-[5px]" data-name="CourseIcon">
      <Icon7 />
    </div>
  );
}

function Container52() {
  return (
    <div className="h-[21px] relative shrink-0 w-[16px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <CourseIcon1 />
      </div>
    </div>
  );
}

function Text17() {
  return (
    <div className="h-[21px] relative shrink-0 w-[55.109px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Alibaba_PuHuiTi_3.0:65_Medium',sans-serif] leading-[21px] left-0 not-italic text-[#444963] text-[14px] top-[-0.5px] whitespace-nowrap">课程学习</p>
      </div>
    </div>
  );
}

function Text18() {
  return (
    <div className="flex-[1_0_0] h-[21px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Alibaba_PuHuiTi_3.0:65_Medium',sans-serif] leading-[21px] left-0 not-italic text-[#444963] text-[14px] top-[-0.5px] whitespace-nowrap">(约35分钟)</p>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[131.125px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Text17 />
        <Text18 />
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="flex-[1_0_0] h-[21px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container54 />
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="h-[21px] relative shrink-0 w-[153.125px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-start relative size-full">
        <Container52 />
        <Container53 />
      </div>
    </div>
  );
}

function Container56() {
  return <div className="absolute border border-[#dfe3f0] border-solid h-[32px] left-0 rounded-[18px] top-0 w-[87.109px]" data-name="Container" />;
}

function Button12() {
  return (
    <div className="absolute bg-white h-[32px] left-0 rounded-[18px] top-0 w-[87.109px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Alibaba_PuHuiTi_3.0:55_Regular_L3','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[21px] left-[44px] text-[#444963] text-[14px] text-center top-[5px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        预览课程
      </p>
      <Container56 />
    </div>
  );
}

function Container55() {
  return (
    <div className="h-[32px] relative shrink-0 w-[87.109px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Button12 />
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="bg-[#f4f7fe] h-[60px] relative rounded-[12px] shrink-0 w-[781px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[12px] relative size-full">
        <Container51 />
        <Container55 />
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[73.25%_12.5%_18.75%_34.38%]" data-name="Vector">
        <div className="absolute inset-[-39.08%_-7.27%_-39.09%_-5.88%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.61821 2.27938">
            <path d={svgPaths.pbc50a00} id="Vector" stroke="var(--stroke-0, #838BAB)" strokeLinecap="square" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[12.5%_21.39%_15.63%_15.63%]" data-name="Vector">
        <div className="absolute inset-[-4.35%_-4.96%_0_-4.96%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.0776 12">
            <path d={svgPaths.p10bf2000} id="Vector" stroke="var(--stroke-0, #838BAB)" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function PracticeIcon1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 size-[16px] top-[5px]" data-name="PracticeIcon">
      <Icon8 />
    </div>
  );
}

function Container59() {
  return (
    <div className="h-[21px] relative shrink-0 w-[16px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <PracticeIcon1 />
      </div>
    </div>
  );
}

function Text19() {
  return (
    <div className="h-[21px] relative shrink-0 w-[55.109px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Alibaba_PuHuiTi_3.0:65_Medium',sans-serif] leading-[21px] left-0 not-italic text-[#444963] text-[14px] top-[-0.5px] whitespace-nowrap">巩固练习</p>
      </div>
    </div>
  );
}

function Text20() {
  return (
    <div className="flex-[1_0_0] h-[21px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Alibaba_PuHuiTi_3.0:65_Medium',sans-serif] leading-[21px] left-0 not-italic text-[#444963] text-[14px] top-[-0.5px] whitespace-nowrap">(4种题型，约12分钟)</p>
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[194.359px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Text19 />
        <Text20 />
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="flex-[1_0_0] h-[21px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container61 />
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="h-[21px] relative shrink-0 w-[216.359px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-start relative size-full">
        <Container59 />
        <Container60 />
      </div>
    </div>
  );
}

function Container63() {
  return <div className="absolute border border-[#dfe3f0] border-solid h-[32px] left-0 rounded-[18px] top-0 w-[87.109px]" data-name="Container" />;
}

function Button13() {
  return (
    <div className="absolute bg-white h-[32px] left-0 rounded-[18px] top-0 w-[87.109px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Alibaba_PuHuiTi_3.0:55_Regular_L3','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[21px] left-[44px] text-[#444963] text-[14px] text-center top-[5px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        预览课程
      </p>
      <Container63 />
    </div>
  );
}

function Container62() {
  return (
    <div className="h-[32px] relative shrink-0 w-[87.109px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Button13 />
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="bg-[#f4f7fe] flex-[1_0_0] min-h-px min-w-px relative rounded-[12px] w-[781px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[12px] relative size-full">
        <Container58 />
        <Container62 />
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[781px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Container50 />
        <Container57 />
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[216px] items-start left-0 pl-[24px] py-[24px] top-0 w-[829px]" data-name="Container">
      <Container48 />
      <Container49 />
    </div>
  );
}

function Container45() {
  return (
    <div className="absolute h-[216px] left-0 rounded-[16px] top-[224px] w-[829px]" data-name="Container">
      <Container46 />
      <Container47 />
    </div>
  );
}

function Container65() {
  return <div className="absolute border border-[#e9ecf5] border-solid h-[216px] left-0 rounded-[16px] top-0 w-[829px]" data-name="Container" />;
}

function Text21() {
  return (
    <div className="h-[24px] relative shrink-0 w-[147.719px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Alibaba_PuHuiTi_3.0:75_SemiBold',sans-serif] leading-[24px] left-0 not-italic text-[#444963] text-[16px] top-[-0.5px] whitespace-nowrap">1.1.3 集合的基本运算</p>
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div className="h-[24px] relative shrink-0 w-[781px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Text21 />
      </div>
    </div>
  );
}

function Icon9() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[36%_39.01%_42.25%_43.75%]" data-name="Vector">
        <div className="absolute inset-[-14.39%_-18.12%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.75917 4.48158">
            <path d={svgPaths.p15bf0e70} fill="var(--fill-0, #838BAB)" id="Vector" stroke="var(--stroke-0, #838BAB)" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[9.38%_12.5%_15.63%_12.5%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
          <path d={svgPaths.p21160c00} fill="var(--fill-0, #838BAB)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function CourseIcon2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 size-[16px] top-[5px]" data-name="CourseIcon">
      <Icon9 />
    </div>
  );
}

function Container71() {
  return (
    <div className="h-[21px] relative shrink-0 w-[16px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <CourseIcon2 />
      </div>
    </div>
  );
}

function Text22() {
  return (
    <div className="h-[21px] relative shrink-0 w-[55.109px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Alibaba_PuHuiTi_3.0:65_Medium',sans-serif] leading-[21px] left-0 not-italic text-[#444963] text-[14px] top-[-0.5px] whitespace-nowrap">课程学习</p>
      </div>
    </div>
  );
}

function Text23() {
  return (
    <div className="flex-[1_0_0] h-[21px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Alibaba_PuHuiTi_3.0:65_Medium',sans-serif] leading-[21px] left-0 not-italic text-[#444963] text-[14px] top-[-0.5px] whitespace-nowrap">(约40分钟)</p>
      </div>
    </div>
  );
}

function Container73() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[131.125px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Text22 />
        <Text23 />
      </div>
    </div>
  );
}

function Container72() {
  return (
    <div className="flex-[1_0_0] h-[21px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container73 />
      </div>
    </div>
  );
}

function Container70() {
  return (
    <div className="h-[21px] relative shrink-0 w-[153.125px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-start relative size-full">
        <Container71 />
        <Container72 />
      </div>
    </div>
  );
}

function Container75() {
  return <div className="absolute border border-[#dfe3f0] border-solid h-[32px] left-0 rounded-[18px] top-0 w-[87.109px]" data-name="Container" />;
}

function Button14() {
  return (
    <div className="absolute bg-white h-[32px] left-0 rounded-[18px] top-0 w-[87.109px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Alibaba_PuHuiTi_3.0:55_Regular_L3','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[21px] left-[44px] text-[#444963] text-[14px] text-center top-[5px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        预览课程
      </p>
      <Container75 />
    </div>
  );
}

function Container74() {
  return (
    <div className="h-[32px] relative shrink-0 w-[87.109px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Button14 />
      </div>
    </div>
  );
}

function Container69() {
  return (
    <div className="bg-[#f4f7fe] h-[60px] relative rounded-[12px] shrink-0 w-[781px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[12px] relative size-full">
        <Container70 />
        <Container74 />
      </div>
    </div>
  );
}

function Icon10() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[73.25%_12.5%_18.75%_34.38%]" data-name="Vector">
        <div className="absolute inset-[-39.08%_-7.27%_-39.09%_-5.88%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.61821 2.27938">
            <path d={svgPaths.pbc50a00} id="Vector" stroke="var(--stroke-0, #838BAB)" strokeLinecap="square" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[12.5%_21.39%_15.63%_15.63%]" data-name="Vector">
        <div className="absolute inset-[-4.35%_-4.96%_0_-4.96%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.0776 12">
            <path d={svgPaths.p10bf2000} id="Vector" stroke="var(--stroke-0, #838BAB)" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function PracticeIcon2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 size-[16px] top-[5px]" data-name="PracticeIcon">
      <Icon10 />
    </div>
  );
}

function Container78() {
  return (
    <div className="h-[21px] relative shrink-0 w-[16px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <PracticeIcon2 />
      </div>
    </div>
  );
}

function Text24() {
  return (
    <div className="h-[21px] relative shrink-0 w-[55.109px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Alibaba_PuHuiTi_3.0:65_Medium',sans-serif] leading-[21px] left-0 not-italic text-[#444963] text-[14px] top-[-0.5px] whitespace-nowrap">巩固练习</p>
      </div>
    </div>
  );
}

function Text25() {
  return (
    <div className="flex-[1_0_0] h-[21px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Alibaba_PuHuiTi_3.0:65_Medium',sans-serif] leading-[21px] left-0 not-italic text-[#444963] text-[14px] top-[-0.5px] whitespace-nowrap">(6种题型，约15分钟)</p>
      </div>
    </div>
  );
}

function Container80() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[194.359px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Text24 />
        <Text25 />
      </div>
    </div>
  );
}

function Container79() {
  return (
    <div className="flex-[1_0_0] h-[21px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container80 />
      </div>
    </div>
  );
}

function Container77() {
  return (
    <div className="h-[21px] relative shrink-0 w-[216.359px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-start relative size-full">
        <Container78 />
        <Container79 />
      </div>
    </div>
  );
}

function Container82() {
  return <div className="absolute border border-[#dfe3f0] border-solid h-[32px] left-0 rounded-[18px] top-0 w-[87.109px]" data-name="Container" />;
}

function Button15() {
  return (
    <div className="absolute bg-white h-[32px] left-0 rounded-[18px] top-0 w-[87.109px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Alibaba_PuHuiTi_3.0:55_Regular_L3','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[21px] left-[44px] text-[#444963] text-[14px] text-center top-[5px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        预览课程
      </p>
      <Container82 />
    </div>
  );
}

function Container81() {
  return (
    <div className="h-[32px] relative shrink-0 w-[87.109px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Button15 />
      </div>
    </div>
  );
}

function Container76() {
  return (
    <div className="bg-[#f4f7fe] flex-[1_0_0] min-h-px min-w-px relative rounded-[12px] w-[781px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[12px] relative size-full">
        <Container77 />
        <Container81 />
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[781px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Container69 />
        <Container76 />
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[216px] items-start left-0 pl-[24px] py-[24px] top-0 w-[829px]" data-name="Container">
      <Container67 />
      <Container68 />
    </div>
  );
}

function Container64() {
  return (
    <div className="absolute h-[216px] left-0 rounded-[16px] top-[448px] w-[829px]" data-name="Container">
      <Container65 />
      <Container66 />
    </div>
  );
}

function Container25() {
  return (
    <div className="flex-[1_0_0] h-[746px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Container26 />
        <Container45 />
        <Container64 />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[1111px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-start relative size-full">
        <Container4 />
        <Container25 />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[1111px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container3 />
      </div>
    </div>
  );
}

function OnboardingPage() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[12px] w-[1159px]" data-name="OnboardingPage">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[24px] py-[24px] relative size-full">
        <Container1 />
        <Container2 />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[1207px]" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[24px] pl-[24px] pt-[16px] relative size-full">
          <OnboardingPage />
        </div>
      </div>
    </div>
  );
}

function MainContent() {
  return (
    <div className="absolute content-stretch flex flex-col h-[880px] items-start left-[180px] overflow-clip top-0 w-[1207px]" data-name="Main Content">
      <Tab />
      <Container />
    </div>
  );
}

function Image() {
  return (
    <div className="relative rounded-[100px] shrink-0 size-[32px]" data-name="Image (小鹿爱学)">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none rounded-[100px] size-full" src={imgImage} />
    </div>
  );
}

function Text26() {
  return (
    <div className="h-[27px] relative shrink-0 w-[75.172px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Alibaba_PuHuiTi_3.0:65_Medium',sans-serif] leading-[27px] left-0 not-italic text-[#101019] text-[18px] top-0 tracking-[1.08px] whitespace-nowrap">小鹿爱学</p>
      </div>
    </div>
  );
}

function Container84() {
  return (
    <div className="h-[48px] relative shrink-0 w-[140px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center justify-center px-[12.414px] relative size-full">
        <Image />
        <Text26 />
      </div>
    </div>
  );
}

function Icon11() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%_8.32%_8.33%_8.34%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.667 14.667">
            <path d={svgPaths.p2ae0b200} id="Vector" stroke="var(--stroke-0, #4A4FED)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[12.5%_16.67%_70.83%_83.33%]" data-name="Vector">
        <div className="absolute inset-[-25%_-0.67px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.33333 4">
            <path d="M0.666667 0.666667V3.33333" id="Vector" stroke="var(--stroke-0, #4A4FED)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[79.17%] left-3/4 right-[8.33%] top-[20.83%]" data-name="Vector">
        <div className="absolute inset-[-0.67px_-25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 1.33333">
            <path d="M3.33333 0.666667H0.666667" id="Vector" stroke="var(--stroke-0, #4A4FED)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[70.83%_83.33%_20.83%_16.67%]" data-name="Vector">
        <div className="absolute inset-[-50%_-0.67px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.33333 2.66667">
            <path d="M0.666667 0.666667V2" id="Vector" stroke="var(--stroke-0, #4A4FED)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/4 left-[12.5%] right-[79.17%] top-3/4" data-name="Vector">
        <div className="absolute inset-[-0.67px_-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.66667 1.33333">
            <path d="M2 0.666667H0.666667" id="Vector" stroke="var(--stroke-0, #4A4FED)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Text27() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon11 />
      </div>
    </div>
  );
}

function Text28() {
  return (
    <div className="flex-[1_0_0] h-[24px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Alibaba_PuHuiTi_3.0:85_Bold',sans-serif] leading-[24px] left-0 not-italic text-[#4a4fed] text-[16px] top-[-0.5px] whitespace-nowrap">体验管理</p>
      </div>
    </div>
  );
}

function Container87() {
  return (
    <div className="h-[24px] relative shrink-0 w-[86.977px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Text27 />
        <Text28 />
      </div>
    </div>
  );
}

function Container86() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pl-[12px] pr-[41.023px] relative size-full">
          <Container87 />
        </div>
      </div>
    </div>
  );
}

function Button16() {
  return (
    <div className="h-[39px] relative rounded-[8px] shrink-0 w-[140px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Alibaba_PuHuiTi_3.0:55_Regular_L3','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[21px] left-[37px] text-[#646b8a] text-[14px] top-[8.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
          诊断管理
        </p>
      </div>
    </div>
  );
}

function Button17() {
  return (
    <div className="bg-gradient-to-r from-[rgba(255,255,255,0.6)] h-[39px] relative rounded-[8px] shrink-0 to-[rgba(255,255,255,0.3)] w-[140px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Alibaba_PuHuiTi_3.0:85_Bold',sans-serif] leading-[21px] left-[37px] not-italic text-[#4a4fed] text-[14px] top-[8.5px] whitespace-nowrap">试听课管理</p>
      </div>
    </div>
  );
}

function Button18() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[8px] w-[140px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Alibaba_PuHuiTi_3.0:55_Regular_L3','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] leading-[21px] left-[37px] text-[#646b8a] text-[14px] top-[8.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
          体验账号管理
        </p>
      </div>
    </div>
  );
}

function Container88() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] h-[121px] items-start relative shrink-0 w-full" data-name="Container">
      <Button16 />
      <Button17 />
      <Button18 />
    </div>
  );
}

function Container85() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[140px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Container86 />
        <Container88 />
      </div>
    </div>
  );
}

function Icon12() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%_16.67%]" data-name="Vector">
        <div className="absolute inset-[-5%_-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 14.6667">
            <path d={svgPaths.p3e5daf60} id="Vector" stroke="var(--stroke-0, #646B8A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[31.25%_37.5%_52.08%_37.5%]" data-name="Vector">
        <div className="absolute inset-[-25%_-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.33333 4">
            <path d={svgPaths.p207459c0} id="Vector" stroke="var(--stroke-0, #646B8A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Text29() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon12 />
      </div>
    </div>
  );
}

function Text30() {
  return (
    <div className="flex-[1_0_0] h-[24px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Alibaba_PuHuiTi_3.0:85_Bold',sans-serif] leading-[24px] left-0 not-italic text-[#646b8a] text-[16px] top-[-0.5px] whitespace-nowrap">督学管理</p>
      </div>
    </div>
  );
}

function Container91() {
  return (
    <div className="h-[24px] relative shrink-0 w-[86.977px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Text29 />
        <Text30 />
      </div>
    </div>
  );
}

function Container90() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pl-[12px] pr-[41.023px] relative size-full">
          <Container91 />
        </div>
      </div>
    </div>
  );
}

function Button19() {
  return (
    <div className="h-[39px] relative rounded-[8px] shrink-0 w-[140px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Alibaba_PuHuiTi_3.0:55_Regular_L3','Noto_Sans_JP:Regular',sans-serif] leading-[21px] left-[37px] text-[#646b8a] text-[14px] top-[8.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
          布置
        </p>
      </div>
    </div>
  );
}

function Button20() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[8px] w-[140px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Alibaba_PuHuiTi_3.0:55_Regular_L3','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] leading-[21px] left-[37px] text-[#646b8a] text-[14px] top-[8.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
          学员管理
        </p>
      </div>
    </div>
  );
}

function Container92() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] h-[80px] items-start relative shrink-0 w-full" data-name="Container">
      <Button19 />
      <Button20 />
    </div>
  );
}

function Container89() {
  return (
    <div className="h-[122px] relative shrink-0 w-[140px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Container90 />
        <Container92 />
      </div>
    </div>
  );
}

function Icon13() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%_12.43%]" data-name="Vector">
        <div className="absolute inset-[-5%_-5.54%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3568 14.6667">
            <path d={svgPaths.p311dbd80} id="Vector" stroke="var(--stroke-0, #646B8A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
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

function Text31() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon13 />
      </div>
    </div>
  );
}

function Text32() {
  return (
    <div className="flex-[1_0_0] h-[24px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Alibaba_PuHuiTi_3.0:85_Bold',sans-serif] leading-[24px] left-0 not-italic text-[#646b8a] text-[16px] top-[-0.5px] whitespace-nowrap">人员管理</p>
      </div>
    </div>
  );
}

function Container95() {
  return (
    <div className="h-[24px] relative shrink-0 w-[86.977px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Text31 />
        <Text32 />
      </div>
    </div>
  );
}

function Container94() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pl-[12px] pr-[41.023px] relative size-full">
          <Container95 />
        </div>
      </div>
    </div>
  );
}

function Button21() {
  return (
    <div className="h-[39px] relative rounded-[8px] shrink-0 w-[140px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Alibaba_PuHuiTi_3.0:55_Regular_L3','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] leading-[21px] left-[37px] text-[#646b8a] text-[14px] top-[8.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
          用户信息
        </p>
      </div>
    </div>
  );
}

function Button22() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[8px] w-[140px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Alibaba_PuHuiTi_3.0:55_Regular_L3','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] leading-[21px] left-[37px] text-[#646b8a] text-[14px] top-[8.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
          老师管理
        </p>
      </div>
    </div>
  );
}

function Container96() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] h-[80px] items-start relative shrink-0 w-full" data-name="Container">
      <Button21 />
      <Button22 />
    </div>
  );
}

function Container93() {
  return (
    <div className="h-[122px] relative shrink-0 w-[140px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Container94 />
        <Container96 />
      </div>
    </div>
  );
}

function Icon14() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[12.5%_8.32%_16.67%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-5.88%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.669 12.6668">
            <path d={svgPaths.p26c5db80} id="Vector" stroke="var(--stroke-0, #646B8A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Text33() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon14 />
      </div>
    </div>
  );
}

function Text34() {
  return (
    <div className="flex-[1_0_0] h-[24px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Alibaba_PuHuiTi_3.0:85_Bold',sans-serif] leading-[24px] left-0 not-italic text-[#646b8a] text-[16px] top-[-0.5px] whitespace-nowrap">资源</p>
      </div>
    </div>
  );
}

function Container99() {
  return (
    <div className="h-[24px] relative shrink-0 w-[55.492px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Text33 />
        <Text34 />
      </div>
    </div>
  );
}

function Container98() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pl-[12px] pr-[72.508px] relative size-full">
          <Container99 />
        </div>
      </div>
    </div>
  );
}

function Button23() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[8px] w-[140px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Alibaba_PuHuiTi_3.0:55_Regular_L3','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] leading-[21px] left-[37px] text-[#646b8a] text-[14px] top-[8.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
          公共资源
        </p>
      </div>
    </div>
  );
}

function Container100() {
  return (
    <div className="content-stretch flex flex-col h-[39px] items-start relative shrink-0 w-full" data-name="Container">
      <Button23 />
    </div>
  );
}

function Container97() {
  return (
    <div className="h-[81px] relative shrink-0 w-[140px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Container98 />
        <Container100 />
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[140px]" data-name="Navigation">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start overflow-clip relative rounded-[inherit] size-full">
        <Container85 />
        <Container89 />
        <Container93 />
        <Container97 />
      </div>
    </div>
  );
}

function Container83() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[22px] h-[570px] items-center left-[20px] overflow-clip top-[12px] w-[140px]" data-name="Container">
      <Container84 />
      <Navigation />
    </div>
  );
}

function Text35() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[72.836px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Alibaba_PuHuiTi_3.0:65_Medium',sans-serif] leading-[21px] left-0 not-italic text-[#101019] text-[14px] top-[-0.5px] whitespace-nowrap">陈子涵老师</p>
      </div>
    </div>
  );
}

function Text36() {
  return (
    <div className="h-[15px] relative shrink-0 w-[72.836px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="-translate-x-1/2 absolute font-['Alibaba_PuHuiTi_3.0:55_Regular_L3','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular','Noto_Sans:Regular',sans-serif] leading-[15px] left-[36px] text-[#838bab] text-[10px] text-center top-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
          教师 ID: 135121
        </p>
      </div>
    </div>
  );
}

function Container101() {
  return (
    <div className="absolute content-stretch flex flex-col h-[36px] items-start left-[48px] top-[8px] w-[72.836px]" data-name="Container">
      <Text35 />
      <Text36 />
    </div>
  );
}

function Image1() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Image (户头像)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
    </div>
  );
}

function Container102() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[4px] overflow-clip rounded-[16777200px] size-[36px] top-[8px]" data-name="Container">
      <Image1 />
    </div>
  );
}

function Button24() {
  return (
    <div className="absolute h-[52px] left-[20px] rounded-[12px] top-[812px] w-[140px]" data-name="Button">
      <Container101 />
      <Container102 />
    </div>
  );
}

function Icon15() {
  return (
    <div className="h-[62px] relative shrink-0 w-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 62">
        <g clipPath="url(#clip0_374_12661)" id="Icon">
          <path d={svgPaths.p14d38820} fill="var(--fill-0, #D6DBEB)" id="Vector" />
          <path d={svgPaths.p14d38820} id="Vector_2" stroke="var(--stroke-0, #CFD5E8)" />
          <path clipRule="evenodd" d={svgPaths.pdb1fa80} fill="var(--fill-0, #646B8A)" fillRule="evenodd" id="Vector_3" />
        </g>
        <defs>
          <clipPath id="clip0_374_12661">
            <rect fill="white" height="62" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button25() {
  return (
    <div className="absolute content-stretch flex h-[62px] items-center justify-center left-[164px] top-[409px] w-[16px]" data-name="Button">
      <Icon15 />
    </div>
  );
}

function Sidebar() {
  return (
    <div className="absolute bg-[#ebf1ff] h-[880px] left-0 top-0 w-[180px]" data-name="Sidebar">
      <Container83 />
      <Button24 />
      <Button25 />
    </div>
  );
}

export default function New() {
  return (
    <div className="bg-[#f5faff] relative size-full" data-name="new✨ 学生管理平台">
      <MainContent />
      <Sidebar />
    </div>
  );
}