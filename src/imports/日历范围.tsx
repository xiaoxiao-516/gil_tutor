import svgPaths from "./svg-lasegsf2uj";

function Button() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center py-[4px] relative rounded-[4px] shrink-0" data-name="Button 按钮">
      <p className="font-['DFP_King_Gothic_GB_Medium:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#444963] text-[14px] text-center whitespace-nowrap">最近7天</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center py-[4px] relative rounded-[4px] shrink-0" data-name="Button 按钮">
      <p className="font-['DFP_King_Gothic_GB_Medium:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#444963] text-[14px] text-center whitespace-nowrap">最近两周</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center py-[4px] relative rounded-[4px] shrink-0" data-name="Button 按钮">
      <p className="font-['DFP_King_Gothic_GB_Medium:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#444963] text-[14px] text-center whitespace-nowrap">1个月内</p>
    </div>
  );
}

function LayoutX() {
  return (
    <div className="bg-[#f4f7fe] relative self-stretch shrink-0 w-[131px]" data-name="layout布局模块/纵向X5">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-start p-[32px] relative size-full">
          <Button />
          <Button1 />
          <Button2 />
        </div>
      </div>
    </div>
  );
}

function IconWrapper() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="icon-wrapper">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="icon-wrapper">
          <g id="Union">
            <path d={svgPaths.p3f689400} fill="var(--fill-0, #444963)" />
            <path d={svgPaths.p1df14e80} fill="var(--fill-0, #444963)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconWrapper1() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="icon-wrapper">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="icon-wrapper">
          <path clipRule="evenodd" d={svgPaths.p38acaf00} fill="var(--fill-0, #444963)" fillRule="evenodd" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Item() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="item">
      <div className="content-stretch flex items-center justify-center relative rounded-[3.429px] shrink-0" data-name="Button 按钮">
        <IconWrapper />
      </div>
      <div className="content-stretch flex items-center justify-center relative rounded-[3.429px] shrink-0" data-name="Button 按钮">
        <IconWrapper1 />
      </div>
    </div>
  );
}

function HeaderView() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="header-view">
      <div className="content-stretch flex flex-col items-center justify-center relative rounded-[4px] shrink-0" data-name="Button 按钮">
        <p className="font-['Alibaba_PuHuiTi_3.0:75_SemiBold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#101019] text-[16px] whitespace-nowrap">2025年</p>
      </div>
      <p className="font-['PingFang_SC:Medium',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#101019] text-[14px] text-center whitespace-nowrap">-</p>
      <div className="content-stretch flex flex-col items-center justify-center relative rounded-[4px] shrink-0" data-name="Button 按钮">
        <p className="font-['Alibaba_PuHuiTi_3.0:75_SemiBold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#101019] text-[16px] whitespace-nowrap">03月</p>
      </div>
    </div>
  );
}

function Item1() {
  return <div className="content-stretch flex gap-[8px] items-start shrink-0" data-name="item" />;
}

function PickerHeader() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="picker-header">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[20px] relative w-full">
          <Item />
          <HeaderView />
          <Item1 />
        </div>
      </div>
    </div>
  );
}

function Component1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
      <div className="flex flex-col font-['Avenir:Heavy','Noto_Sans_JP:Black',sans-serif] justify-center leading-[0] relative shrink-0 text-[#838bab] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wght' 900", fontFeatureSettings: "'lnum', 'pnum'" }}>
        <p className="leading-[1.5]">日</p>
      </div>
    </div>
  );
}

function Component2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
      <div className="flex flex-col font-['Avenir:Heavy','Noto_Sans_JP:Black',sans-serif] justify-center leading-[0] relative shrink-0 text-[#838bab] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wght' 900", fontFeatureSettings: "'lnum', 'pnum'" }}>
        <p className="leading-[1.5]">一</p>
      </div>
    </div>
  );
}

function Component3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
      <div className="flex flex-col font-['Avenir:Heavy','Noto_Sans_JP:Black',sans-serif] justify-center leading-[0] relative shrink-0 text-[#838bab] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wght' 900", fontFeatureSettings: "'lnum', 'pnum'" }}>
        <p className="leading-[1.5]">二</p>
      </div>
    </div>
  );
}

function Component4() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
      <div className="flex flex-col font-['Avenir:Heavy','Noto_Sans_JP:Black',sans-serif] justify-center leading-[0] relative shrink-0 text-[#838bab] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wght' 900", fontFeatureSettings: "'lnum', 'pnum'" }}>
        <p className="leading-[1.5]">三</p>
      </div>
    </div>
  );
}

function Component5() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
      <div className="flex flex-col font-['Avenir:Heavy','Noto_Sans_JP:Black',sans-serif] justify-center leading-[0] relative shrink-0 text-[#838bab] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wght' 900", fontFeatureSettings: "'lnum', 'pnum'" }}>
        <p className="leading-[1.5]">四</p>
      </div>
    </div>
  );
}

function Component6() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
      <div className="flex flex-col font-['Avenir:Heavy','Noto_Sans_JP:Black',sans-serif] justify-center leading-[0] relative shrink-0 text-[#838bab] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wght' 900", fontFeatureSettings: "'lnum', 'pnum'" }}>
        <p className="leading-[1.5]">五</p>
      </div>
    </div>
  );
}

function Component7() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
      <div className="flex flex-col font-['Avenir:Heavy','Noto_Sans_JP:Black',sans-serif] justify-center leading-[0] relative shrink-0 text-[#838bab] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wght' 900", fontFeatureSettings: "'lnum', 'pnum'" }}>
        <p className="leading-[1.5]">六</p>
      </div>
    </div>
  );
}

function Tr() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px overflow-clip relative w-full" data-name="tr">
      <div className="content-stretch flex flex-[1_0_0] flex-col h-[36px] items-center justify-center min-h-px min-w-px relative rounded-[14px]" data-name="日期状态">
        <Component1 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col h-[36px] items-center justify-center min-h-px min-w-px relative rounded-[14px]" data-name="日期状态">
        <Component2 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col h-[36px] items-center justify-center min-h-px min-w-px relative rounded-[14px]" data-name="日期状态">
        <Component3 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col h-[36px] items-center justify-center min-h-px min-w-px relative rounded-[14px]" data-name="日期状态">
        <Component4 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col h-[36px] items-center justify-center min-h-px min-w-px relative rounded-[14px]" data-name="日期状态">
        <Component5 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col h-[36px] items-center justify-center min-h-px min-w-px relative rounded-[14px]" data-name="日期状态">
        <Component6 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col h-[36px] items-center justify-center min-h-px min-w-px relative rounded-[14px]" data-name="日期状态">
        <Component7 />
      </div>
    </div>
  );
}

function Component8() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
      <div className="flex flex-col font-['Avenir:Heavy',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#abb4d1] text-[14px] text-center whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'pnum'" }}>
        <p className="leading-[1.5]">26</p>
      </div>
    </div>
  );
}

function Component9() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
      <div className="flex flex-col font-['Avenir:Heavy',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#abb4d1] text-[14px] text-center whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'pnum'" }}>
        <p className="leading-[1.5]">27</p>
      </div>
    </div>
  );
}

function Component10() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
      <div className="flex flex-col font-['Avenir:Heavy',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#abb4d1] text-[14px] text-center whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'pnum'" }}>
        <p className="leading-[1.5]">28</p>
      </div>
    </div>
  );
}

function Component11() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
      <div className="flex flex-col font-['Avenir:Heavy',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#abb4d1] text-[14px] text-center whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'pnum'" }}>
        <p className="leading-[1.5]">29</p>
      </div>
    </div>
  );
}

function Component12() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
      <div className="flex flex-col font-['Avenir:Heavy',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#abb4d1] text-[14px] text-center whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'pnum'" }}>
        <p className="leading-[1.5]">30</p>
      </div>
    </div>
  );
}

function Component13() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
      <div className="flex flex-col font-['Avenir:Heavy',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444963] text-[14px] text-center whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'pnum'" }}>
        <p className="leading-[1.5]">1</p>
      </div>
    </div>
  );
}

function Component14() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
      <div className="flex flex-col font-['Avenir:Heavy',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444963] text-[14px] text-center whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'pnum'" }}>
        <p className="leading-[1.5]">2</p>
      </div>
    </div>
  );
}

function Tr1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative w-full" data-name="tr">
      <div className="content-stretch flex flex-[1_0_0] flex-col h-[36px] items-center justify-center min-h-px min-w-px relative rounded-[14px]" data-name="日期状态">
        <Component8 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col h-[36px] items-center justify-center min-h-px min-w-px relative rounded-[14px]" data-name="日期状态">
        <Component9 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col h-[36px] items-center justify-center min-h-px min-w-px relative rounded-[14px]" data-name="日期状态">
        <Component10 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col h-[36px] items-center justify-center min-h-px min-w-px relative rounded-[14px]" data-name="日期状态">
        <Component11 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col h-[36px] items-center justify-center min-h-px min-w-px relative rounded-[14px]" data-name="日期状态">
        <Component12 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col h-[36px] items-center justify-center min-h-px min-w-px relative rounded-[14px]" data-name="日期状态">
        <Component13 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col h-[36px] items-center justify-center min-h-px min-w-px relative rounded-[14px]" data-name="日期状态">
        <Component14 />
      </div>
    </div>
  );
}

function Component15() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
      <div className="flex flex-col font-['Avenir:Heavy',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444963] text-[14px] text-center whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'pnum'" }}>
        <p className="leading-[1.5]">3</p>
      </div>
    </div>
  );
}

function Component16() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
      <div className="flex flex-col font-['Avenir:Heavy',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444963] text-[14px] text-center whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'pnum'" }}>
        <p className="leading-[1.5]">4</p>
      </div>
    </div>
  );
}

function Component17() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
      <div className="flex flex-col font-['Avenir:Heavy',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444963] text-[14px] text-center whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'pnum'" }}>
        <p className="leading-[1.5]">5</p>
      </div>
    </div>
  );
}

function Component18() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
      <div className="flex flex-col font-['Avenir:Heavy',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444963] text-[14px] text-center whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'pnum'" }}>
        <p className="leading-[1.5]">6</p>
      </div>
    </div>
  );
}

function Component19() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
      <div className="flex flex-col font-['Avenir:Heavy',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444963] text-[14px] text-center whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'pnum'" }}>
        <p className="leading-[1.5]">7</p>
      </div>
    </div>
  );
}

function Component20() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
      <div className="flex flex-col font-['Avenir:Heavy',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444963] text-[14px] text-center whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'pnum'" }}>
        <p className="leading-[1.5]">8</p>
      </div>
    </div>
  );
}

function Component21() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
      <div className="flex flex-col font-['Avenir:Heavy',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444963] text-[14px] text-center whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'pnum'" }}>
        <p className="leading-[1.5]">9</p>
      </div>
    </div>
  );
}

function Tr2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative w-full" data-name="tr">
      <div className="content-stretch flex flex-[1_0_0] flex-col h-[36px] items-center justify-center min-h-px min-w-px relative rounded-[14px]" data-name="日期状态">
        <Component15 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col h-[36px] items-center justify-center min-h-px min-w-px relative rounded-[14px]" data-name="日期状态">
        <Component16 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col h-[36px] items-center justify-center min-h-px min-w-px relative rounded-[14px]" data-name="日期状态">
        <Component17 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col h-[36px] items-center justify-center min-h-px min-w-px relative rounded-[14px]" data-name="日期状态">
        <Component18 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col h-[36px] items-center justify-center min-h-px min-w-px relative rounded-[14px]" data-name="日期状态">
        <Component19 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col h-[36px] items-center justify-center min-h-px min-w-px relative rounded-[14px]" data-name="日期状态">
        <Component20 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col h-[36px] items-center justify-center min-h-px min-w-px relative rounded-[14px]" data-name="日期状态">
        <Component21 />
      </div>
    </div>
  );
}

function Component22() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
      <div className="flex flex-col font-['Avenir:Heavy',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444963] text-[14px] text-center whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'pnum'" }}>
        <p className="leading-[1.5]">10</p>
      </div>
    </div>
  );
}

function Component23() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
      <div className="flex flex-col font-['Avenir:Heavy',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444963] text-[14px] text-center whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'pnum'" }}>
        <p className="leading-[1.5]">11</p>
      </div>
    </div>
  );
}

function Component24() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
      <div className="flex flex-col font-['Avenir:Heavy',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444963] text-[14px] text-center whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'pnum'" }}>
        <p className="leading-[1.5]">12</p>
      </div>
    </div>
  );
}

function Component25() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
      <div className="flex flex-col font-['Avenir:Heavy',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444963] text-[14px] text-center whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'pnum'" }}>
        <p className="leading-[1.5]">13</p>
      </div>
    </div>
  );
}

function Component26() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
      <div className="flex flex-col font-['Avenir:Heavy',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444963] text-[14px] text-center whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'pnum'" }}>
        <p className="leading-[1.5]">14</p>
      </div>
    </div>
  );
}

function Component27() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
      <div className="flex flex-col font-['Avenir:Heavy',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444963] text-[14px] text-center whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'pnum'" }}>
        <p className="leading-[1.5]">15</p>
      </div>
    </div>
  );
}

function Component28() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
      <div className="flex flex-col font-['Avenir:Heavy',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444963] text-[14px] text-center whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'pnum'" }}>
        <p className="leading-[1.5]">16</p>
      </div>
    </div>
  );
}

function Tr3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative w-full" data-name="tr">
      <div className="content-stretch flex flex-[1_0_0] flex-col h-[36px] items-center justify-center min-h-px min-w-px relative rounded-[14px]" data-name="日期状态">
        <Component22 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col h-[36px] items-center justify-center min-h-px min-w-px relative rounded-[14px]" data-name="日期状态">
        <Component23 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col h-[36px] items-center justify-center min-h-px min-w-px relative rounded-[14px]" data-name="日期状态">
        <Component24 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col h-[36px] items-center justify-center min-h-px min-w-px relative rounded-[14px]" data-name="日期状态">
        <Component25 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col h-[36px] items-center justify-center min-h-px min-w-px relative rounded-[14px]" data-name="日期状态">
        <Component26 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col h-[36px] items-center justify-center min-h-px min-w-px relative rounded-[14px]" data-name="日期状态">
        <Component27 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col h-[36px] items-center justify-center min-h-px min-w-px relative rounded-[14px]" data-name="日期状态">
        <Component28 />
      </div>
    </div>
  );
}

function Component29() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
      <div className="flex flex-col font-['Avenir:Heavy',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444963] text-[14px] text-center whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'pnum'" }}>
        <p className="leading-[1.5]">17</p>
      </div>
    </div>
  );
}

function Component30() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
      <div className="flex flex-col font-['Avenir:Heavy',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444963] text-[14px] text-center whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'pnum'" }}>
        <p className="leading-[1.5]">18</p>
      </div>
    </div>
  );
}

function Component31() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
      <div className="flex flex-col font-['Avenir:Heavy',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444963] text-[14px] text-center whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'pnum'" }}>
        <p className="leading-[1.5]">19</p>
      </div>
    </div>
  );
}

function Component32() {
  return (
    <div className="h-0 relative shrink-0 w-[4px]" data-name="当前">
      <div className="absolute inset-[0_0_-4px_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <g id="å½å">
            <circle cx="2" cy="2" fill="var(--fill-0, #6574FC)" id="Ellipse 5" r="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Component33() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#6574fc] content-stretch flex flex-col h-[28px] items-center justify-center left-1/2 px-[6px] py-[5px] rounded-[16px] top-[4px] w-[29px]" data-name="时间">
      <div className="flex flex-col font-['Avenir:Heavy',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-full" style={{ fontFeatureSettings: "'lnum', 'pnum'" }}>
        <p className="leading-[1.5]">20</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 size-[36px]">
      <Component33 />
    </div>
  );
}

function Tr4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative w-full" data-name="tr">
      <div className="content-stretch flex flex-[1_0_0] flex-col h-[36px] items-center justify-center min-h-px min-w-px relative rounded-[14px]" data-name="日期状态">
        <Component29 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col h-[36px] items-center justify-center min-h-px min-w-px relative rounded-[14px]" data-name="日期状态">
        <Component30 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col h-[36px] items-center min-h-px min-w-px relative rounded-[14px]" data-name="日期状态">
        <Component31 />
        <Component32 />
      </div>
      <div className="bg-[#ebf1ff] content-stretch flex items-start relative rounded-bl-[36px] rounded-tl-[36px] shrink-0 w-[36px]" data-name="日期状态">
        <Frame />
      </div>
      <div className="bg-[#ebf1ff] flex-[1_0_0] h-[36px] min-h-px min-w-px relative" data-name="日期状态">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center p-[4px] relative size-full">
            <div className="flex flex-col font-['Avenir:Heavy',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444963] text-[14px] text-center whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'pnum'" }}>
              <p className="leading-[1.5]">21</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#ebf1ff] flex-[1_0_0] h-[36px] min-h-px min-w-px relative" data-name="日期状态">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center p-[4px] relative size-full">
            <div className="flex flex-col font-['Avenir:Heavy',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444963] text-[14px] text-center whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'pnum'" }}>
              <p className="leading-[1.5]">22</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#ebf1ff] flex-[1_0_0] h-[36px] min-h-px min-w-px relative" data-name="日期状态">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center p-[4px] relative size-full">
            <div className="flex flex-col font-['Avenir:Heavy',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444963] text-[14px] text-center whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'pnum'" }}>
              <p className="leading-[1.5]">23</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Tr5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative w-full" data-name="tr">
      <div className="bg-[#ebf1ff] flex-[1_0_0] h-[36px] min-h-px min-w-px relative" data-name="日期状态">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center p-[4px] relative size-full">
            <div className="flex flex-col font-['Avenir:Heavy',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444963] text-[14px] text-center whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'pnum'" }}>
              <p className="leading-[1.5]">24</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#ebf1ff] flex-[1_0_0] h-[36px] min-h-px min-w-px relative" data-name="日期状态">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center p-[4px] relative size-full">
            <div className="flex flex-col font-['Avenir:Heavy',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444963] text-[14px] text-center whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'pnum'" }}>
              <p className="leading-[1.5]">25</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#ebf1ff] flex-[1_0_0] h-[36px] min-h-px min-w-px relative" data-name="日期状态">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center p-[4px] relative size-full">
            <div className="flex flex-col font-['Avenir:Heavy',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444963] text-[14px] text-center whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'pnum'" }}>
              <p className="leading-[1.5]">26</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#ebf1ff] flex-[1_0_0] h-[36px] min-h-px min-w-px relative" data-name="日期状态">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center p-[4px] relative size-full">
            <div className="flex flex-col font-['Avenir:Heavy',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444963] text-[14px] text-center whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'pnum'" }}>
              <p className="leading-[1.5]">27</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#ebf1ff] flex-[1_0_0] h-[36px] min-h-px min-w-px relative" data-name="日期状态">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center p-[4px] relative size-full">
            <div className="flex flex-col font-['Avenir:Heavy',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444963] text-[14px] text-center whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'pnum'" }}>
              <p className="leading-[1.5]">28</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#ebf1ff] flex-[1_0_0] h-[36px] min-h-px min-w-px relative" data-name="日期状态">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center p-[4px] relative size-full">
            <div className="flex flex-col font-['Avenir:Heavy',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444963] text-[14px] text-center whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'pnum'" }}>
              <p className="leading-[1.5]">29</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#ebf1ff] flex-[1_0_0] h-[36px] min-h-px min-w-px relative" data-name="日期状态">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center p-[4px] relative size-full">
            <div className="flex flex-col font-['Avenir:Heavy',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444963] text-[14px] text-center whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'pnum'" }}>
              <p className="leading-[1.5]">30</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Tr6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative w-full" data-name="tr">
      <div className="bg-[#ebf1ff] flex-[1_0_0] h-[36px] min-h-px min-w-px relative" data-name="日期状态">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center p-[4px] relative size-full">
            <div className="flex flex-col font-['Avenir:Heavy',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444963] text-[14px] text-center whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'pnum'" }}>
              <p className="leading-[1.5]">31</p>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col h-[36px] items-center justify-center min-h-px min-w-px rounded-[14px]" data-name="日期状态" />
      <div className="content-stretch flex flex-[1_0_0] flex-col h-[36px] items-center justify-center min-h-px min-w-px rounded-[14px]" data-name="日期状态" />
      <div className="content-stretch flex flex-[1_0_0] flex-col h-[36px] items-center justify-center min-h-px min-w-px rounded-[14px]" data-name="日期状态" />
      <div className="content-stretch flex flex-[1_0_0] flex-col h-[36px] items-center justify-center min-h-px min-w-px rounded-[14px]" data-name="日期状态" />
      <div className="content-stretch flex flex-[1_0_0] flex-col h-[36px] items-center justify-center min-h-px min-w-px rounded-[14px]" data-name="日期状态" />
    </div>
  );
}

function PickerBody() {
  return (
    <div className="bg-white h-[310px] relative shrink-0 w-full" data-name="picker-body">
      <div aria-hidden="true" className="absolute border-[#e9ecf5] border-r-[0.5px] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[4px] items-start pl-[16px] pr-[12px] py-[16px] relative size-full">
        <Tr />
        <Tr1 />
        <Tr2 />
        <Tr3 />
        <Tr4 />
        <Tr5 />
        <Tr6 />
      </div>
    </div>
  );
}

function DatePickerDropdown1() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[320px]" data-name="DatePicker-dropdown日期选择框下拉菜单">
      <PickerHeader />
      <PickerBody />
    </div>
  );
}

function Item2() {
  return <div className="content-stretch flex gap-[8px] items-start shrink-0" data-name="item" />;
}

function HeaderView1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="header-view">
      <div className="content-stretch flex flex-col items-center justify-center relative rounded-[4px] shrink-0" data-name="Button 按钮">
        <p className="font-['Alibaba_PuHuiTi_3.0:75_SemiBold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#101019] text-[16px] whitespace-nowrap">2025年</p>
      </div>
      <p className="font-['PingFang_SC:Medium',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#101019] text-[14px] text-center whitespace-nowrap">-</p>
      <div className="content-stretch flex flex-col items-center justify-center relative rounded-[4px] shrink-0" data-name="Button 按钮">
        <p className="font-['Alibaba_PuHuiTi_3.0:75_SemiBold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#101019] text-[16px] whitespace-nowrap">04月</p>
      </div>
    </div>
  );
}

function IconWrapper2() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="icon-wrapper">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="icon-wrapper">
          <path clipRule="evenodd" d={svgPaths.p180e7c00} fill="var(--fill-0, #444963)" fillRule="evenodd" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function IconWrapper3() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="icon-wrapper">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="icon-wrapper">
          <g id="Union">
            <path d={svgPaths.p356ace80} fill="var(--fill-0, #444963)" />
            <path d={svgPaths.p363968b2} fill="var(--fill-0, #444963)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Item3() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="item">
      <div className="content-stretch flex items-center justify-center relative rounded-[3.429px] shrink-0" data-name="Button 按钮">
        <IconWrapper2 />
      </div>
      <div className="content-stretch flex items-center justify-center relative rounded-[3.429px] shrink-0" data-name="Button 按钮">
        <IconWrapper3 />
      </div>
    </div>
  );
}

function PickerHeader1() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="picker-header">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[20px] relative w-full">
          <Item2 />
          <HeaderView1 />
          <Item3 />
        </div>
      </div>
    </div>
  );
}

function Component34() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
      <div className="flex flex-col font-['Avenir:Heavy','Noto_Sans_JP:Black',sans-serif] justify-center leading-[0] relative shrink-0 text-[#838bab] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wght' 900", fontFeatureSettings: "'lnum', 'pnum'" }}>
        <p className="leading-[1.5]">日</p>
      </div>
    </div>
  );
}

function Component35() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
      <div className="flex flex-col font-['Avenir:Heavy','Noto_Sans_JP:Black',sans-serif] justify-center leading-[0] relative shrink-0 text-[#838bab] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wght' 900", fontFeatureSettings: "'lnum', 'pnum'" }}>
        <p className="leading-[1.5]">一</p>
      </div>
    </div>
  );
}

function Component36() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
      <div className="flex flex-col font-['Avenir:Heavy','Noto_Sans_JP:Black',sans-serif] justify-center leading-[0] relative shrink-0 text-[#838bab] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wght' 900", fontFeatureSettings: "'lnum', 'pnum'" }}>
        <p className="leading-[1.5]">二</p>
      </div>
    </div>
  );
}

function Component37() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
      <div className="flex flex-col font-['Avenir:Heavy','Noto_Sans_JP:Black',sans-serif] justify-center leading-[0] relative shrink-0 text-[#838bab] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wght' 900", fontFeatureSettings: "'lnum', 'pnum'" }}>
        <p className="leading-[1.5]">三</p>
      </div>
    </div>
  );
}

function Component38() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
      <div className="flex flex-col font-['Avenir:Heavy','Noto_Sans_JP:Black',sans-serif] justify-center leading-[0] relative shrink-0 text-[#838bab] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wght' 900", fontFeatureSettings: "'lnum', 'pnum'" }}>
        <p className="leading-[1.5]">四</p>
      </div>
    </div>
  );
}

function Component39() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
      <div className="flex flex-col font-['Avenir:Heavy','Noto_Sans_JP:Black',sans-serif] justify-center leading-[0] relative shrink-0 text-[#838bab] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wght' 900", fontFeatureSettings: "'lnum', 'pnum'" }}>
        <p className="leading-[1.5]">五</p>
      </div>
    </div>
  );
}

function Component40() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
      <div className="flex flex-col font-['Avenir:Heavy','Noto_Sans_JP:Black',sans-serif] justify-center leading-[0] relative shrink-0 text-[#838bab] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wght' 900", fontFeatureSettings: "'lnum', 'pnum'" }}>
        <p className="leading-[1.5]">六</p>
      </div>
    </div>
  );
}

function Tr7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px overflow-clip relative w-full" data-name="tr">
      <div className="content-stretch flex flex-[1_0_0] flex-col h-[36px] items-center justify-center min-h-px min-w-px relative rounded-[14px]" data-name="日期状态">
        <Component34 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col h-[36px] items-center justify-center min-h-px min-w-px relative rounded-[14px]" data-name="日期状态">
        <Component35 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col h-[36px] items-center justify-center min-h-px min-w-px relative rounded-[14px]" data-name="日期状态">
        <Component36 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col h-[36px] items-center justify-center min-h-px min-w-px relative rounded-[14px]" data-name="日期状态">
        <Component37 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col h-[36px] items-center justify-center min-h-px min-w-px relative rounded-[14px]" data-name="日期状态">
        <Component38 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col h-[36px] items-center justify-center min-h-px min-w-px relative rounded-[14px]" data-name="日期状态">
        <Component39 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col h-[36px] items-center justify-center min-h-px min-w-px relative rounded-[14px]" data-name="日期状态">
        <Component40 />
      </div>
    </div>
  );
}

function Component41() {
  return (
    <div className="absolute bg-[#6574fc] content-stretch flex flex-col h-[28px] items-center justify-center left-[4px] py-[5px] right-[4px] rounded-[16px] top-[4px]" data-name="时间">
      <div className="flex flex-col font-['Avenir:Heavy',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'pnum'" }}>
        <p className="leading-[1.5]">5</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0 size-[36px]">
      <Component41 />
    </div>
  );
}

function Component42() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
      <div className="flex flex-col font-['Avenir:Heavy',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444963] text-[14px] text-center whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'pnum'" }}>
        <p className="leading-[1.5]">6</p>
      </div>
    </div>
  );
}

function Tr8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative w-full" data-name="tr">
      <div className="content-stretch flex flex-[1_0_0] flex-col h-[36px] items-center justify-center min-h-px min-w-px rounded-[14px]" data-name="日期状态" />
      <div className="bg-[#ebf1ff] flex-[1_0_0] h-[36px] min-h-px min-w-px relative" data-name="日期状态">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center p-[4px] relative size-full">
            <div className="flex flex-col font-['Avenir:Heavy',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444963] text-[14px] text-center whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'pnum'" }}>
              <p className="leading-[1.5]">1</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#ebf1ff] flex-[1_0_0] h-[36px] min-h-px min-w-px relative" data-name="日期状态">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center p-[4px] relative size-full">
            <div className="flex flex-col font-['Avenir:Heavy',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444963] text-[14px] text-center whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'pnum'" }}>
              <p className="leading-[1.5]">2</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#ebf1ff] flex-[1_0_0] h-[36px] min-h-px min-w-px relative" data-name="日期状态">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center p-[4px] relative size-full">
            <div className="flex flex-col font-['Avenir:Heavy',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444963] text-[14px] text-center whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'pnum'" }}>
              <p className="leading-[1.5]">3</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#ebf1ff] flex-[1_0_0] h-[36px] min-h-px min-w-px relative" data-name="日期状态">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center p-[4px] relative size-full">
            <div className="flex flex-col font-['Avenir:Heavy',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444963] text-[14px] text-center whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'pnum'" }}>
              <p className="leading-[1.5]">4</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#ebf1ff] content-stretch flex flex-[1_0_0] items-center justify-center min-h-px min-w-px relative rounded-br-[36px] rounded-tr-[36px]" data-name="日期状态">
        <Frame1 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col h-[36px] items-center justify-center min-h-px min-w-px relative rounded-[14px]" data-name="日期状态">
        <Component42 />
      </div>
    </div>
  );
}

function Component43() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
      <div className="flex flex-col font-['Avenir:Heavy',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444963] text-[14px] text-center whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'pnum'" }}>
        <p className="leading-[1.5]">7</p>
      </div>
    </div>
  );
}

function Component44() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
      <div className="flex flex-col font-['Avenir:Heavy',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444963] text-[14px] text-center whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'pnum'" }}>
        <p className="leading-[1.5]">8</p>
      </div>
    </div>
  );
}

function Component45() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
      <div className="flex flex-col font-['Avenir:Heavy',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444963] text-[14px] text-center whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'pnum'" }}>
        <p className="leading-[1.5]">9</p>
      </div>
    </div>
  );
}

function Component46() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
      <div className="flex flex-col font-['Avenir:Heavy',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444963] text-[14px] text-center whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'pnum'" }}>
        <p className="leading-[1.5]">10</p>
      </div>
    </div>
  );
}

function Component47() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
      <div className="flex flex-col font-['Avenir:Heavy',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444963] text-[14px] text-center whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'pnum'" }}>
        <p className="leading-[1.5]">11</p>
      </div>
    </div>
  );
}

function Component48() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
      <div className="flex flex-col font-['Avenir:Heavy',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444963] text-[14px] text-center whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'pnum'" }}>
        <p className="leading-[1.5]">12</p>
      </div>
    </div>
  );
}

function Component49() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
      <div className="flex flex-col font-['Avenir:Heavy',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444963] text-[14px] text-center whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'pnum'" }}>
        <p className="leading-[1.5]">13</p>
      </div>
    </div>
  );
}

function Tr9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative w-full" data-name="tr">
      <div className="content-stretch flex flex-[1_0_0] flex-col h-[36px] items-center justify-center min-h-px min-w-px relative rounded-[14px]" data-name="日期状态">
        <Component43 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col h-[36px] items-center justify-center min-h-px min-w-px relative rounded-[14px]" data-name="日期状态">
        <Component44 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col h-[36px] items-center justify-center min-h-px min-w-px relative rounded-[14px]" data-name="日期状态">
        <Component45 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col h-[36px] items-center justify-center min-h-px min-w-px relative rounded-[14px]" data-name="日期状态">
        <Component46 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col h-[36px] items-center justify-center min-h-px min-w-px relative rounded-[14px]" data-name="日期状态">
        <Component47 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col h-[36px] items-center justify-center min-h-px min-w-px relative rounded-[14px]" data-name="日期状态">
        <Component48 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col h-[36px] items-center justify-center min-h-px min-w-px relative rounded-[14px]" data-name="日期状态">
        <Component49 />
      </div>
    </div>
  );
}

function Component50() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
      <div className="flex flex-col font-['Avenir:Heavy',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444963] text-[14px] text-center whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'pnum'" }}>
        <p className="leading-[1.5]">14</p>
      </div>
    </div>
  );
}

function Component51() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
      <div className="flex flex-col font-['Avenir:Heavy',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444963] text-[14px] text-center whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'pnum'" }}>
        <p className="leading-[1.5]">15</p>
      </div>
    </div>
  );
}

function Component52() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
      <div className="flex flex-col font-['Avenir:Heavy',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444963] text-[14px] text-center whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'pnum'" }}>
        <p className="leading-[1.5]">16</p>
      </div>
    </div>
  );
}

function Component53() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
      <div className="flex flex-col font-['Avenir:Heavy',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444963] text-[14px] text-center whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'pnum'" }}>
        <p className="leading-[1.5]">17</p>
      </div>
    </div>
  );
}

function Component54() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
      <div className="flex flex-col font-['Avenir:Heavy',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444963] text-[14px] text-center whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'pnum'" }}>
        <p className="leading-[1.5]">18</p>
      </div>
    </div>
  );
}

function Component55() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
      <div className="flex flex-col font-['Avenir:Heavy',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444963] text-[14px] text-center whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'pnum'" }}>
        <p className="leading-[1.5]">19</p>
      </div>
    </div>
  );
}

function Component56() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
      <div className="flex flex-col font-['Avenir:Heavy',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444963] text-[14px] text-center whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'pnum'" }}>
        <p className="leading-[1.5]">20</p>
      </div>
    </div>
  );
}

function Tr10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative w-full" data-name="tr">
      <div className="content-stretch flex flex-[1_0_0] flex-col h-[36px] items-center justify-center min-h-px min-w-px relative rounded-[14px]" data-name="日期状态">
        <Component50 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col h-[36px] items-center justify-center min-h-px min-w-px relative rounded-[14px]" data-name="日期状态">
        <Component51 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col h-[36px] items-center justify-center min-h-px min-w-px relative rounded-[14px]" data-name="日期状态">
        <Component52 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col h-[36px] items-center justify-center min-h-px min-w-px relative rounded-[14px]" data-name="日期状态">
        <Component53 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col h-[36px] items-center justify-center min-h-px min-w-px relative rounded-[14px]" data-name="日期状态">
        <Component54 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col h-[36px] items-center justify-center min-h-px min-w-px relative rounded-[14px]" data-name="日期状态">
        <Component55 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col h-[36px] items-center justify-center min-h-px min-w-px relative rounded-[14px]" data-name="日期状态">
        <Component56 />
      </div>
    </div>
  );
}

function Component57() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
      <div className="flex flex-col font-['Avenir:Heavy',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444963] text-[14px] text-center whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'pnum'" }}>
        <p className="leading-[1.5]">21</p>
      </div>
    </div>
  );
}

function Component58() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
      <div className="flex flex-col font-['Avenir:Heavy',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444963] text-[14px] text-center whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'pnum'" }}>
        <p className="leading-[1.5]">22</p>
      </div>
    </div>
  );
}

function Component59() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
      <div className="flex flex-col font-['Avenir:Heavy',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444963] text-[14px] text-center whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'pnum'" }}>
        <p className="leading-[1.5]">23</p>
      </div>
    </div>
  );
}

function Component60() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
      <div className="flex flex-col font-['Avenir:Heavy',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444963] text-[14px] text-center whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'pnum'" }}>
        <p className="leading-[1.5]">24</p>
      </div>
    </div>
  );
}

function Component61() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
      <div className="flex flex-col font-['Avenir:Heavy',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444963] text-[14px] text-center whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'pnum'" }}>
        <p className="leading-[1.5]">25</p>
      </div>
    </div>
  );
}

function Component62() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
      <div className="flex flex-col font-['Avenir:Heavy',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444963] text-[14px] text-center whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'pnum'" }}>
        <p className="leading-[1.5]">26</p>
      </div>
    </div>
  );
}

function Component63() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
      <div className="flex flex-col font-['Avenir:Heavy',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444963] text-[14px] text-center whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'pnum'" }}>
        <p className="leading-[1.5]">27</p>
      </div>
    </div>
  );
}

function Tr11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative w-full" data-name="tr">
      <div className="content-stretch flex flex-[1_0_0] flex-col h-[36px] items-center justify-center min-h-px min-w-px relative rounded-[14px]" data-name="日期状态">
        <Component57 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col h-[36px] items-center justify-center min-h-px min-w-px relative rounded-[14px]" data-name="日期状态">
        <Component58 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col h-[36px] items-center justify-center min-h-px min-w-px relative rounded-[14px]" data-name="日期状态">
        <Component59 />
      </div>
      <div className="content-stretch flex flex-col items-center justify-center relative rounded-[14px] shrink-0 size-[36px]" data-name="日期状态">
        <Component60 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col h-[36px] items-center justify-center min-h-px min-w-px relative rounded-[14px]" data-name="日期状态">
        <Component61 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col h-[36px] items-center justify-center min-h-px min-w-px relative rounded-[14px]" data-name="日期状态">
        <Component62 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col h-[36px] items-center justify-center min-h-px min-w-px relative rounded-[14px]" data-name="日期状态">
        <Component63 />
      </div>
    </div>
  );
}

function Component64() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
      <div className="flex flex-col font-['Avenir:Heavy',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444963] text-[14px] text-center whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'pnum'" }}>
        <p className="leading-[1.5]">28</p>
      </div>
    </div>
  );
}

function Component65() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
      <div className="flex flex-col font-['Avenir:Heavy',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444963] text-[14px] text-center whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'pnum'" }}>
        <p className="leading-[1.5]">29</p>
      </div>
    </div>
  );
}

function Component66() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
      <div className="flex flex-col font-['Avenir:Heavy',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444963] text-[14px] text-center whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'pnum'" }}>
        <p className="leading-[1.5]">30</p>
      </div>
    </div>
  );
}

function Component67() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
      <div className="flex flex-col font-['Avenir:Heavy',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444963] text-[14px] text-center whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'pnum'" }}>
        <p className="leading-[1.5]">31</p>
      </div>
    </div>
  );
}

function Component68() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
      <div className="flex flex-col font-['Avenir:Heavy',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#abb4d1] text-[14px] text-center whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'pnum'" }}>
        <p className="leading-[1.5]">1</p>
      </div>
    </div>
  );
}

function Component69() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
      <div className="flex flex-col font-['Avenir:Heavy',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#abb4d1] text-[14px] text-center whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'pnum'" }}>
        <p className="leading-[1.5]">2</p>
      </div>
    </div>
  );
}

function Component70() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
      <div className="flex flex-col font-['Avenir:Heavy',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#abb4d1] text-[14px] text-center whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'pnum'" }}>
        <p className="leading-[1.5]">3</p>
      </div>
    </div>
  );
}

function Tr12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative w-full" data-name="tr">
      <div className="content-stretch flex flex-[1_0_0] flex-col h-[36px] items-center justify-center min-h-px min-w-px relative rounded-[14px]" data-name="日期状态">
        <Component64 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col h-[36px] items-center justify-center min-h-px min-w-px relative rounded-[14px]" data-name="日期状态">
        <Component65 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col h-[36px] items-center justify-center min-h-px min-w-px relative rounded-[14px]" data-name="日期状态">
        <Component66 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col h-[36px] items-center justify-center min-h-px min-w-px relative rounded-[14px]" data-name="日期状态">
        <Component67 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col h-[36px] items-center justify-center min-h-px min-w-px relative rounded-[14px]" data-name="日期状态">
        <Component68 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col h-[36px] items-center justify-center min-h-px min-w-px relative rounded-[14px]" data-name="日期状态">
        <Component69 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col h-[36px] items-center justify-center min-h-px min-w-px relative rounded-[14px]" data-name="日期状态">
        <Component70 />
      </div>
    </div>
  );
}

function Component71() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
      <div className="flex flex-col font-['Avenir:Heavy',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#abb4d1] text-[14px] text-center whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'pnum'" }}>
        <p className="leading-[1.5]">4</p>
      </div>
    </div>
  );
}

function Component72() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
      <div className="flex flex-col font-['Avenir:Heavy',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#abb4d1] text-[14px] text-center whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'pnum'" }}>
        <p className="leading-[1.5]">5</p>
      </div>
    </div>
  );
}

function Component73() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
      <div className="flex flex-col font-['Avenir:Heavy',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#abb4d1] text-[14px] text-center whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'pnum'" }}>
        <p className="leading-[1.5]">6</p>
      </div>
    </div>
  );
}

function Component74() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
      <div className="flex flex-col font-['Avenir:Heavy',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#abb4d1] text-[14px] text-center whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'pnum'" }}>
        <p className="leading-[1.5]">7</p>
      </div>
    </div>
  );
}

function Component75() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
      <div className="flex flex-col font-['Avenir:Heavy',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#abb4d1] text-[14px] text-center whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'pnum'" }}>
        <p className="leading-[1.5]">8</p>
      </div>
    </div>
  );
}

function Component76() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
      <div className="flex flex-col font-['Avenir:Heavy',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#abb4d1] text-[14px] text-center whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'pnum'" }}>
        <p className="leading-[1.5]">9</p>
      </div>
    </div>
  );
}

function Component77() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
      <div className="flex flex-col font-['Avenir:Heavy',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#abb4d1] text-[14px] text-center whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'pnum'" }}>
        <p className="leading-[1.5]">10</p>
      </div>
    </div>
  );
}

function Tr13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative w-full" data-name="tr">
      <div className="content-stretch flex flex-[1_0_0] flex-col h-[36px] items-center justify-center min-h-px min-w-px relative rounded-[14px]" data-name="日期状态">
        <Component71 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col h-[36px] items-center justify-center min-h-px min-w-px relative rounded-[14px]" data-name="日期状态">
        <Component72 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col h-[36px] items-center justify-center min-h-px min-w-px relative rounded-[14px]" data-name="日期状态">
        <Component73 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col h-[36px] items-center justify-center min-h-px min-w-px relative rounded-[14px]" data-name="日期状态">
        <Component74 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col h-[36px] items-center justify-center min-h-px min-w-px relative rounded-[14px]" data-name="日期状态">
        <Component75 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col h-[36px] items-center justify-center min-h-px min-w-px relative rounded-[14px]" data-name="日期状态">
        <Component76 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col h-[36px] items-center justify-center min-h-px min-w-px relative rounded-[14px]" data-name="日期状态">
        <Component77 />
      </div>
    </div>
  );
}

function PickerBody1() {
  return (
    <div className="bg-white h-[310px] relative shrink-0 w-full" data-name="picker-body">
      <div aria-hidden="true" className="absolute border-[#e9ecf5] border-r-[0.5px] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[4px] items-start pl-[16px] pr-[12px] py-[16px] relative size-full">
        <Tr7 />
        <Tr8 />
        <Tr9 />
        <Tr10 />
        <Tr11 />
        <Tr12 />
        <Tr13 />
      </div>
    </div>
  );
}

function DatePickerDropdown2() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[320px]" data-name="DatePicker-dropdown日期选择框下拉菜单">
      <PickerHeader1 />
      <PickerBody1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="col-1 content-stretch flex items-center ml-0 mt-0 relative row-1">
      <DatePickerDropdown1 />
      <DatePickerDropdown2 />
    </div>
  );
}

function ButtonGroup() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="ButtonGroup 按钮组">
      <div className="content-stretch flex flex-col items-center justify-center relative rounded-[4px] shrink-0" data-name="Button 按钮">
        <p className="font-['Alibaba_PuHuiTi_3.0:65_Medium',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#101019] text-[14px] whitespace-nowrap">2025年03月20日</p>
      </div>
      <p className="font-['PingFang_SC:Medium',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#101019] text-[14px] text-center whitespace-nowrap">-</p>
      <div className="content-stretch flex flex-col items-center justify-center relative rounded-[4px] shrink-0" data-name="Button 按钮">
        <p className="font-['Alibaba_PuHuiTi_3.0:65_Medium',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#101019] text-[14px] whitespace-nowrap">2025年04月05日</p>
      </div>
    </div>
  );
}

function PickerCellFooter() {
  return (
    <div className="bg-white col-1 ml-0 mt-[374px] relative row-1 w-[640px]" data-name="Picker-cell/Footer">
      <div className="content-stretch flex items-center justify-between overflow-clip px-[32px] py-[20px] relative rounded-[inherit] w-full">
        <ButtonGroup />
        <div className="content-stretch flex gap-[16px] items-center justify-end relative shrink-0" data-name="ButtonGroup 按钮组">
          <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="按钮 Button">
            <p className="font-['PingFang_SC:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#6574fc] text-[16px] text-center whitespace-nowrap">取消</p>
          </div>
          <div className="bg-[#6574fc] content-stretch flex items-center justify-center px-[24px] py-[8px] relative rounded-[20px] shrink-0" data-name="Button 按钮">
            <p className="font-['Alibaba_PuHuiTi_3.0:65_Medium',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">确定</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#dfe3f0] border-solid border-t inset-0 pointer-events-none" />
    </div>
  );
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Frame2 />
      <PickerCellFooter />
    </div>
  );
}

function DatePickerDropdown() {
  return (
    <div className="absolute content-stretch flex items-start left-0 overflow-clip rounded-[24px] top-0" data-name="DatePicker-dropdown日期选择框下拉菜单">
      <LayoutX />
      <Group />
    </div>
  );
}

export default function Component() {
  return (
    <div className="relative shadow-[0px_12px_60px_0px_rgba(171,180,209,0.3)] size-full" data-name="日历-范围">
      <DatePickerDropdown />
    </div>
  );
}