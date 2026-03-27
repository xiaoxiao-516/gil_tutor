import svgPaths from "./svg-hrhi0uopqy";

function Frame() {
  return <div className="content-stretch flex flex-col h-[4px] items-center shrink-0 w-[40px]" />;
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
      <div className="bg-[#4a4fed] h-[4px] rounded-[2px] shrink-0 w-[12px]" />
    </div>
  );
}

function Btn() {
  return <div className="absolute h-[32px] left-[709px] top-[16px] w-[74px]" data-name="btn" />;
}

function Tab() {
  return (
    <div className="h-[64px] relative shrink-0 w-[783px]" data-name="二级页面-tab+搜索+选择按钮">
      <div className="absolute content-stretch flex gap-[24px] items-center left-0 top-0" data-name="tab 组">
        <div className="content-stretch flex flex-col h-[64px] items-center justify-center relative shrink-0" data-name="全部">
          <div className="flex flex-col font-['Alibaba_PuHuiTi_3.0:75_SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#abb4d1] text-[20px] text-center whitespace-nowrap">
            <p className="leading-[1.5]">我的资源</p>
          </div>
          <Frame />
        </div>
        <div className="content-stretch flex flex-col h-[64px] items-start justify-center py-[12px] relative shrink-0" data-name="课程">
          <div className="flex flex-col font-['Alibaba_PuHuiTi_3.0:75_SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#101019] text-[20px] text-center whitespace-nowrap">
            <p className="leading-[1.5]">公共资源</p>
          </div>
          <Frame1 />
        </div>
      </div>
      <Btn />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col h-[2px] items-center justify-center relative shrink-0 w-full">
      <div className="bg-[#6574fc] h-[2px] rounded-[2px] shrink-0 w-full" />
    </div>
  );
}

function Component1() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-end px-[12px] relative shrink-0" data-name="单个">
      <p className="font-['Alibaba_PuHuiTi_3.0:65_Medium',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#4a4fed] text-[16px] text-center whitespace-nowrap">试题</p>
      <Frame7 />
    </div>
  );
}

function Frame8() {
  return <div className="content-stretch flex flex-col h-[2px] items-center justify-center shrink-0 w-full" />;
}

function Component2() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-center px-[12px] relative shrink-0 w-[77px]" data-name="单个">
      <p className="font-['Alibaba_PuHuiTi_3.0:65_Medium',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#abb4d1] text-[16px] text-center w-full">试卷</p>
      <Frame8 />
    </div>
  );
}

function Frame9() {
  return <div className="content-stretch flex flex-col h-[2px] items-center justify-center shrink-0 w-full" />;
}

function Component3() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-center px-[12px] relative shrink-0 w-[77px]" data-name="单个">
      <p className="font-['Alibaba_PuHuiTi_3.0:65_Medium',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#abb4d1] text-[16px] text-center w-full">其他资源</p>
      <Frame9 />
    </div>
  );
}

function Component4() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-[190px]" data-name="文字">
      <p className="font-['Alibaba_PuHuiTi_3.0:55_Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#838bab] text-[14px] whitespace-nowrap">在公共试题资源中搜索</p>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[6.25%_3.04%_8.45%_11.66%]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.151 13.151">
        <g id="Group 224104">
          <path clipRule="evenodd" d={svgPaths.p38519180} fill="var(--fill-0, #838BAB)" fillRule="evenodd" id="Ellipse 216 (Stroke)" />
          <path clipRule="evenodd" d={svgPaths.p2c8387f0} fill="var(--fill-0, #838BAB)" fillRule="evenodd" id="Vector 82 (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function IconTime() {
  return (
    <div className="absolute inset-[10.42%_14.58%_12.5%_8.33%]" data-name="icon-time-20">
      <Group />
    </div>
  );
}

function IcSearch() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="ic_search">
      <IconTime />
    </div>
  );
}

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

function Tab1() {
  return (
    <div className="absolute border-[#e9ecf5] border-b border-solid h-[40px] left-0 top-0 w-[783px]" data-name="tab">
      <div className="absolute content-stretch flex items-start left-0 top-[8px]" data-name="tab/mid/5">
        <Component1 />
        <Component2 />
        <Component3 />
      </div>
      <div className="absolute bg-white h-[32px] left-[448px] rounded-[16px] top-[4px]" data-name="搜索框样式-灰底-32">
        <div className="content-stretch flex gap-[6px] h-full items-center justify-center overflow-clip p-[12px] relative rounded-[inherit]">
          <Component4 />
          <IcSearch />
        </div>
        <div aria-hidden="true" className="absolute border border-[#cfd5e8] border-solid inset-0 pointer-events-none rounded-[16px]" />
      </div>
      <div className="absolute content-stretch flex gap-[6px] h-[32px] items-center justify-center left-[709px] px-[16px] rounded-[18px] top-[4px]" data-name="线框按钮-灰背景">
        <div aria-hidden="true" className="absolute border border-[#e9ecf5] border-solid inset-0 pointer-events-none rounded-[18px]" />
        <div className="flex flex-col font-['Alibaba_PuHuiTi_3.0:65_Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444963] text-[14px] whitespace-nowrap">
          <p className="leading-[1.5]">数学</p>
        </div>
        <IcBtnArrow />
      </div>
    </div>
  );
}

function Component8() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[4px]" data-name="单个">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[2px] items-center px-[12px] py-[2px] relative w-full">
          <p className="font-['Alibaba_PuHuiTi_3.0:65_Medium',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#4a4fed] text-[12px] whitespace-nowrap">按章节</p>
        </div>
      </div>
    </div>
  );
}

function Component9() {
  return (
    <div className="flex-[1_0_0] h-[25px] min-h-px min-w-px relative" data-name="单个">
      <p className="absolute font-['Alibaba_PuHuiTi_3.0:55_Regular',sans-serif] leading-[1.5] left-[22px] not-italic text-[#838bab] text-[14px] top-0 whitespace-nowrap">按知识点</p>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0 w-full">
      <Component8 />
      <Component9 />
    </div>
  );
}

function Component10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px overflow-clip relative" data-name="内容">
      <p className="font-['Alibaba_PuHuiTi_3.0:55_Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#101019] text-[14px] whitespace-nowrap">优化设计 高二 上</p>
    </div>
  );
}

function Component14() {
  return (
    <div className="bg-[#ebf1ff] relative rounded-[6px] shrink-0 w-full" data-name="树/一级菜单">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center p-[8px] relative w-full">
          <div className="flex items-center justify-center relative shrink-0">
            <div className="-scale-y-100 flex-none rotate-180">
              <div className="relative size-[12px]">
                <div className="absolute inset-[33.33%_20.83%_35.42%_20.83%]">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 3.75">
                    <path d={svgPaths.p32be8f00} fill="var(--fill-0, #646B8A)" id="Vector 2270" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-[1_0_0] flex-col font-['Alibaba_PuHuiTi_3.0:65_Medium',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#4a4fed] text-[14px]">
            <p className="leading-[1.5]">第一章 集合与常用逻辑用语</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Component16() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="树/二级菜单">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[10px] items-center p-[8px] relative w-full">
          <div className="flex items-center justify-center relative shrink-0">
            <div className="-scale-y-100 flex-none rotate-180">
              <div className="relative size-[12px]">
                <div className="absolute inset-[33.33%_20.83%_35.42%_20.83%]">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 3.75">
                    <path d={svgPaths.p32be8f00} fill="var(--fill-0, #646B8A)" id="Vector 2270" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-[1_0_0] flex-col font-['Alibaba_PuHuiTi_3.0:55_Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#101019] text-[14px]">
            <p className="leading-[1.5]">空间向量及其运算</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Component18() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="树/三级菜单">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center p-[8px] relative w-full">
          <div className="flex items-center justify-center relative shrink-0">
            <div className="-scale-y-100 flex-none rotate-180">
              <div className="relative size-[12px]">
                <div className="absolute inset-[33.33%_20.83%_35.42%_20.83%]">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 3.75">
                    <path d={svgPaths.p32be8f00} fill="var(--fill-0, #646B8A)" id="Vector 2270" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-[1_0_0] flex-col font-['Alibaba_PuHuiTi_3.0:55_Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#101019] text-[14px]">
            <p className="leading-[1.5]">空间向量及其线性运算</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Component19() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="树/最后一级">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[30px] pr-[12px] py-[8px] relative w-full">
          <div className="flex flex-[1_0_0] flex-col font-['Alibaba_PuHuiTi_3.0:55_Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#101019] text-[14px]">
            <p className="leading-[1.5]">空间向量及其线性运算</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col h-[38px] items-start justify-center overflow-clip relative shrink-0 w-full">
      <Component19 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pl-[14px] relative w-full">
          <Frame16 />
        </div>
      </div>
    </div>
  );
}

function Component17() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="树/三级菜单">
      <Component18 />
      <Frame4 />
    </div>
  );
}

function Component20() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="树/三级菜单">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center p-[8px] relative w-full">
          <div className="flex items-center justify-center relative shrink-0 size-[12px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
            <div className="-scale-y-100 flex-none rotate-90">
              <div className="relative size-[12px]">
                <div className="absolute inset-[33.33%_20.83%_35.42%_20.83%]">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 3.75">
                    <path d={svgPaths.p32be8f00} fill="var(--fill-0, #646B8A)" id="Vector 2270" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-[1_0_0] flex-col font-['Alibaba_PuHuiTi_3.0:55_Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#101019] text-[14px]">
            <p className="leading-[1.5]">空间向量的数量积运算</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-full">
      <Component17 />
      <Component20 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start pl-[14px] relative w-full">
        <Frame14 />
      </div>
    </div>
  );
}

function Component15() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="树/二级菜单">
      <Component16 />
      <Frame3 />
    </div>
  );
}

function Component21() {
  return (
    <div className="bg-white h-[38px] relative rounded-[6px] shrink-0 w-full" data-name="树/二级菜单">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[10px] items-center p-[8px] relative size-full">
          <div className="flex items-center justify-center relative shrink-0 size-[12px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
            <div className="-scale-y-100 flex-none rotate-90">
              <div className="relative size-[12px]">
                <div className="absolute inset-[33.33%_20.83%_35.42%_20.83%]">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 3.75">
                    <path d={svgPaths.p32be8f00} fill="var(--fill-0, #646B8A)" id="Vector 2270" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-[1_0_0] flex-col font-['Alibaba_PuHuiTi_3.0:55_Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#101019] text-[14px]">
            <p className="leading-[1.5]">空间向量基本定理</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Component22() {
  return (
    <div className="bg-white h-[28px] relative rounded-[6px] shrink-0 w-full" data-name="树/二级菜单">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[10px] items-center p-[8px] relative size-full">
          <div className="flex items-center justify-center relative shrink-0 size-[12px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
            <div className="-scale-y-100 flex-none rotate-90">
              <div className="relative size-[12px]">
                <div className="absolute inset-[33.33%_20.83%_35.42%_20.83%]">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 3.75">
                    <path d={svgPaths.p32be8f00} fill="var(--fill-0, #646B8A)" id="Vector 2270" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-[1_0_0] flex-col font-['Alibaba_PuHuiTi_3.0:55_Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#101019] text-[14px]">
            <p className="leading-[1.5]">空间向量及其运算的坐标</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-full">
      <Component15 />
      <Component21 />
      <Component22 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start pl-[14px] relative w-full">
        <Frame15 />
      </div>
    </div>
  );
}

function Component13() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="树/一级菜单">
      <Component14 />
      <Frame2 />
    </div>
  );
}

function Component6No() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="知识树/6/no">
      <Component13 />
      <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="树/一级菜单">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[10px] items-center px-[8px] py-[10px] relative w-full">
            <div className="flex items-center justify-center relative shrink-0 size-[12px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
              <div className="-scale-y-100 flex-none rotate-90">
                <div className="relative size-[12px]">
                  <div className="absolute inset-[33.33%_20.83%_35.42%_20.83%]">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 3.75">
                      <path d={svgPaths.p32be8f00} fill="var(--fill-0, #444963)" id="Vector 2270" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-[1_0_0] flex-col font-['Alibaba_PuHuiTi_3.0:55_Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#101019] text-[14px]">
              <p className="leading-[1.25]">直线和圆</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="树/一级菜单">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[10px] items-center px-[8px] py-[10px] relative w-full">
            <div className="flex items-center justify-center relative shrink-0 size-[12px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
              <div className="-scale-y-100 flex-none rotate-90">
                <div className="relative size-[12px]">
                  <div className="absolute inset-[33.33%_20.83%_35.42%_20.83%]">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 3.75">
                      <path d={svgPaths.p32be8f00} fill="var(--fill-0, #444963)" id="Vector 2270" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-[1_0_0] flex-col font-['Alibaba_PuHuiTi_3.0:55_Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#101019] text-[14px]">
              <p className="leading-[1.25]">圆锥曲线</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Component12() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="人教-2-展开">
      <Component6No />
    </div>
  );
}

function Component11() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="目录">
      <Component12 />
    </div>
  );
}

function Component7() {
  return (
    <div className="bg-white h-[653px] relative rounded-[16px] shrink-0 w-full" data-name="知识树">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-start pb-[24px] pt-[16px] px-[16px] relative size-full">
          <Frame19 />
          <div className="bg-white h-[36px] relative rounded-[6px] shrink-0 w-full" data-name="选择器 select">
            <div aria-hidden="true" className="absolute border border-[#cfd5e8] border-solid inset-0 pointer-events-none rounded-[6px]" />
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center justify-between px-[12px] py-[8px] relative size-full">
                <Component10 />
                <div className="overflow-clip relative shrink-0 size-[14px]" data-name="ic_arrow_down">
                  <div className="absolute inset-[35.94%_17.19%_32.81%_17.11%]" data-name>
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.1985 4.37503">
                      <path clipRule="evenodd" d={svgPaths.p1adb3300} fill="var(--fill-0, #646B8A)" fillRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Component11 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e9ecf5] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Component6() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-[234px]" data-name="分步选择知识树">
      <Component7 />
      <div className="absolute content-stretch flex h-[57px] items-start left-[218px] px-[2px] top-[222.5px]" data-name="滚动条">
        <div className="bg-[#c2c3d3] h-full opacity-20 rounded-[20px] shrink-0 w-[4px]" />
      </div>
    </div>
  );
}

function Component25() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="内容">
      <p className="font-['Alibaba_PuHuiTi_3.0:55_Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#444963] text-[14px] whitespace-nowrap">题型</p>
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="ic_arrow_down">
        <div className="absolute inset-[35.94%_17.19%_32.81%_17.11%]" data-name>
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.1985 4.37503">
            <path clipRule="evenodd" d={svgPaths.p1adb3300} fill="var(--fill-0, #646B8A)" fillRule="evenodd" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Component26() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="内容">
      <p className="font-['Alibaba_PuHuiTi_3.0:55_Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#444963] text-[14px] whitespace-nowrap">难度</p>
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="ic_arrow_down">
        <div className="absolute inset-[35.94%_17.19%_32.81%_17.11%]" data-name>
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.1985 4.37503">
            <path clipRule="evenodd" d={svgPaths.p1adb3300} fill="var(--fill-0, #444963)" fillRule="evenodd" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Component27() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="内容">
      <p className="font-['Alibaba_PuHuiTi_3.0:55_Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#444963] text-[14px] whitespace-nowrap">地区</p>
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="ic_arrow_down">
        <div className="absolute inset-[35.94%_17.19%_32.81%_17.11%]" data-name>
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.1985 4.37503">
            <path clipRule="evenodd" d={svgPaths.p1adb3300} fill="var(--fill-0, #444963)" fillRule="evenodd" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Component28() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="内容">
      <p className="font-['Alibaba_PuHuiTi_3.0:55_Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#444963] text-[14px] whitespace-nowrap">年份</p>
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="ic_arrow_down">
        <div className="absolute inset-[35.94%_17.19%_32.81%_17.11%]" data-name>
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.1985 4.37503">
            <path clipRule="evenodd" d={svgPaths.p1adb3300} fill="var(--fill-0, #444963)" fillRule="evenodd" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0">
      <div className="content-stretch flex gap-[8px] items-start overflow-clip relative rounded-[6px] shrink-0" data-name="筛选Filter元素/单个组成">
        <Component25 />
      </div>
      <div className="content-stretch flex gap-[8px] items-start overflow-clip relative rounded-[6px] shrink-0" data-name="筛选Filter元素/单个组成">
        <Component26 />
      </div>
      <div className="content-stretch flex gap-[8px] items-start overflow-clip relative rounded-[6px] shrink-0" data-name="筛选Filter元素/单个组成">
        <Component27 />
      </div>
      <div className="content-stretch flex gap-[8px] items-start overflow-clip relative rounded-[6px] shrink-0" data-name="筛选Filter元素/单个组成">
        <Component28 />
      </div>
    </div>
  );
}

function Component29() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="内容">
      <p className="font-['Alibaba_PuHuiTi_3.0:55_Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#444963] text-[14px] whitespace-nowrap">按最新排序</p>
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="ic_arrow_down">
        <div className="absolute inset-[35.94%_17.19%_32.81%_17.11%]" data-name>
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.1985 4.37503">
            <path clipRule="evenodd" d={svgPaths.p1adb3300} fill="var(--fill-0, #646B8A)" fillRule="evenodd" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Component24() {
  return (
    <div className="content-stretch flex items-center justify-between pb-[8px] relative shrink-0 w-full" data-name="操作区">
      <div aria-hidden="true" className="absolute border-[#e9ecf5] border-b border-solid inset-0 pointer-events-none" />
      <Frame5 />
      <div className="content-stretch flex gap-[8px] items-start overflow-clip relative rounded-[6px] shrink-0" data-name="筛选Filter元素/单个组成">
        <Component29 />
      </div>
    </div>
  );
}

function Component30() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center leading-[0] not-italic relative shrink-0 whitespace-nowrap" data-name="筛选结果">
      <div className="flex flex-col font-['Alibaba_PuHuiTi_3.0:75_SemiBold',sans-serif] justify-center relative shrink-0 text-[14px] text-black">
        <p className="leading-[1.5]">试题列表</p>
      </div>
      <div className="flex flex-col font-['Alibaba_PuHuiTi_3.0:55_Regular',sans-serif] justify-center relative shrink-0 text-[#838bab] text-[12px]">
        <p className="leading-[1.5]">共4个结果</p>
      </div>
    </div>
  );
}

function Component32() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-center py-[4px] relative rounded-[16px] shrink-0 w-[24px]" data-name="序号">
      <div className="flex flex-col font-['Avenir:Heavy',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444963] text-[12px] text-center whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'pnum'" }}>
        <p className="leading-[1.5]">123.</p>
      </div>
    </div>
  );
}

function Component33() {
  return (
    <div className="content-start flex flex-wrap font-['Alibaba_PuHuiTi_3.0:55_Regular',sans-serif] gap-[16px_32px] items-start leading-[1.5] not-italic relative shrink-0 text-[#101019] text-[16px] w-full whitespace-nowrap" data-name="答案">
      <p className="relative shrink-0">{`A.a f(b) > b f(a)`}</p>
      <p className="relative shrink-0">{`B.a f(a) > b f(b)`}</p>
      <p className="relative shrink-0">{`C.a f(a) < b f(b)`}</p>
      <p className="relative shrink-0">{`D.a f(b) < b f(a)`}</p>
    </div>
  );
}

function Tag1() {
  return (
    <div className="content-start flex flex-wrap gap-[6px] items-start relative shrink-0" data-name="tag">
      <div className="bg-[#f2f4f9] h-[22px] relative rounded-[4px] shrink-0" data-name="浅色标签 Tag">
        <div className="content-stretch flex h-full items-center overflow-clip px-[6px] py-[2px] relative rounded-[inherit]">
          <div className="flex flex-col font-['Alibaba_PuHuiTi_3.0:55_Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#646b8a] text-[12px] whitespace-nowrap">
            <p className="leading-[1.5]">2020年·江西省·期末</p>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#dfe3f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
      <div className="bg-[#f2f4f9] h-[22px] relative rounded-[4px] shrink-0" data-name="浅色标签 Tag">
        <div className="content-stretch flex h-full items-center overflow-clip px-[6px] py-[2px] relative rounded-[inherit]">
          <div className="flex flex-col font-['Alibaba_PuHuiTi_3.0:55_Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#646b8a] text-[12px] whitespace-nowrap">
            <p className="leading-[1.5]">单选</p>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#dfe3f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
      <div className="bg-[#f2f4f9] h-[22px] relative rounded-[4px] shrink-0" data-name="浅色标签 Tag">
        <div className="content-stretch flex h-full items-center overflow-clip px-[6px] py-[2px] relative rounded-[inherit]">
          <div className="flex flex-col font-['Alibaba_PuHuiTi_3.0:55_Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#646b8a] text-[12px] whitespace-nowrap">
            <p className="leading-[1.5]">简单</p>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#dfe3f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
    </div>
  );
}

function Tag() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="tag">
      <Tag1 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <p className="font-['Alibaba_PuHuiTi_3.0:55_Regular',sans-serif] leading-[1.5] min-w-full not-italic relative shrink-0 text-[#101019] text-[16px] w-[min-content] whitespace-pre-wrap">{`若函数y=f（x）在R上可导且满足不等式xf(x) > -f(x)恒成立, 则下列不等式一定成立的是（  ）`}</p>
      <Component33 />
      <Tag />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px pt-[4px] relative">
      <Frame17 />
    </div>
  );
}

function Component31() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="题干">
      <Component32 />
      <Frame10 />
    </div>
  );
}

function Component35() {
  return <div className="content-stretch flex h-[21px] items-center shrink-0 w-[217px]" data-name="信息" />;
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <div className="content-stretch flex gap-[2px] h-[21px] items-center justify-center py-[6px] relative rounded-[6px] shrink-0" data-name="按钮-中-32">
        <p className="font-['Alibaba_PuHuiTi_3.0:55_Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#444963] text-[14px] text-center whitespace-nowrap">答案解析</p>
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="ic_arrow_down_16">
          <div className="absolute inset-[37.7%_21.29%_34.96%_21.22%]" data-name>
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.1985 4.37503">
              <path clipRule="evenodd" d={svgPaths.p1adb3300} fill="var(--fill-0, #444963)" fillRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex h-[12px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[12px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 1">
                <line id="Line 55" stroke="var(--stroke-0, #E9ECF5)" x2="12" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 size-[16px]" data-name="ic_rate_16">
        <div className="absolute inset-[6.25%]">
          <div className="absolute inset-[1.21%_3.03%_8.33%_3.03%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.152 12.6646">
              <path d={svgPaths.p160a2e00} fill="var(--fill-0, #FA9524)" id="Star 5" stroke="var(--stroke-0, #FA9524)" strokeLinejoin="round" strokeWidth="1.2" />
            </svg>
          </div>
        </div>
      </div>
      <div className="bg-white content-stretch flex h-[32px] items-center justify-center px-[16px] py-[6px] relative rounded-[16px] shrink-0" data-name="按钮-中-32">
        <div aria-hidden="true" className="absolute border border-[#fca5a2] border-solid inset-0 pointer-events-none rounded-[16px]" />
        <p className="font-['Alibaba_PuHuiTi_3.0:55_Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#e0443f] text-[14px] text-center whitespace-nowrap">取消加入</p>
      </div>
    </div>
  );
}

function Component34() {
  return (
    <div className="content-stretch flex h-[56px] items-center justify-between relative shrink-0 w-full" data-name="底部操作">
      <div aria-hidden="true" className="absolute border-[#dfe3f0] border-dashed border-t inset-[-0.5px_0_0_0] pointer-events-none" />
      <Component35 />
      <Frame12 />
    </div>
  );
}

function Component37() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-center py-[4px] relative rounded-[16px] shrink-0 w-[24px]" data-name="序号">
      <div className="flex flex-col font-['Avenir:Heavy',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444963] text-[12px] text-center whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'pnum'" }}>
        <p className="leading-[1.5]">8.</p>
      </div>
    </div>
  );
}

function Component38() {
  return (
    <div className="content-start flex flex-wrap font-['Alibaba_PuHuiTi_3.0:55_Regular',sans-serif] gap-[16px_32px] items-start leading-[1.5] not-italic relative shrink-0 text-[#101019] text-[16px] w-full whitespace-nowrap" data-name="答案">
      <p className="relative shrink-0">{`A.a f(b) > b f(a)`}</p>
      <p className="relative shrink-0">{`B.a f(a) > b f(b)`}</p>
      <p className="relative shrink-0">{`C.a f(a) < b f(b)`}</p>
      <p className="relative shrink-0">{`D.a f(b) < b f(a)`}</p>
    </div>
  );
}

function Tag3() {
  return (
    <div className="content-start flex flex-wrap gap-[6px] items-start relative shrink-0" data-name="tag">
      <div className="bg-[#f2f4f9] h-[22px] relative rounded-[4px] shrink-0" data-name="浅色标签 Tag">
        <div className="content-stretch flex h-full items-center overflow-clip px-[6px] py-[2px] relative rounded-[inherit]">
          <div className="flex flex-col font-['Alibaba_PuHuiTi_3.0:55_Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#646b8a] text-[12px] whitespace-nowrap">
            <p className="leading-[1.5]">2020年·江西省·期末</p>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#dfe3f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
      <div className="bg-[#f2f4f9] h-[22px] relative rounded-[4px] shrink-0" data-name="浅色标签 Tag">
        <div className="content-stretch flex h-full items-center overflow-clip px-[6px] py-[2px] relative rounded-[inherit]">
          <div className="flex flex-col font-['Alibaba_PuHuiTi_3.0:55_Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#646b8a] text-[12px] whitespace-nowrap">
            <p className="leading-[1.5]">单选</p>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#dfe3f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
      <div className="bg-[#f2f4f9] h-[22px] relative rounded-[4px] shrink-0" data-name="浅色标签 Tag">
        <div className="content-stretch flex h-full items-center overflow-clip px-[6px] py-[2px] relative rounded-[inherit]">
          <div className="flex flex-col font-['Alibaba_PuHuiTi_3.0:55_Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#646b8a] text-[12px] whitespace-nowrap">
            <p className="leading-[1.5]">简单</p>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#dfe3f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
    </div>
  );
}

function Tag2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="tag">
      <Tag3 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <p className="font-['Alibaba_PuHuiTi_3.0:55_Regular',sans-serif] leading-[1.5] min-w-full not-italic relative shrink-0 text-[#101019] text-[16px] w-[min-content] whitespace-pre-wrap">{`若函数y=f（x）在R上可导且满足不等式xf(x) > -f(x)恒成立, 则下列不等式一定成立的是（  ）`}</p>
      <Component38 />
      <Tag2 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px pt-[4px] relative">
      <Frame18 />
    </div>
  );
}

function Component36() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="题干">
      <Component37 />
      <Frame11 />
    </div>
  );
}

function Component40() {
  return <div className="content-stretch flex h-[21px] items-center shrink-0 w-[217px]" data-name="信息" />;
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <div className="content-stretch flex gap-[2px] h-[21px] items-center justify-center py-[6px] relative rounded-[6px] shrink-0" data-name="按钮-中-32">
        <p className="font-['Alibaba_PuHuiTi_3.0:55_Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#444963] text-[14px] text-center whitespace-nowrap">答案解析</p>
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="ic_arrow_down_16">
          <div className="absolute inset-[37.7%_21.29%_34.96%_21.22%]" data-name>
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.1985 4.37503">
              <path clipRule="evenodd" d={svgPaths.p1adb3300} fill="var(--fill-0, #444963)" fillRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex h-[12px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[12px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 1">
                <line id="Line 55" stroke="var(--stroke-0, #E9ECF5)" x2="12" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 size-[16px]" data-name="ic_rate_16">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[14px] top-1/2">
          <div className="absolute inset-[0.14%_1.96%_7.26%_1.96%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.4522 12.9647">
              <path d={svgPaths.p1906d680} id="Star 4" stroke="var(--stroke-0, #646B8A)" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
      <div className="bg-white content-stretch flex h-[32px] items-center justify-center px-[16px] py-[6px] relative rounded-[16px] shrink-0 w-[88px]" data-name="按钮-中-32">
        <div aria-hidden="true" className="absolute border border-[#9cb1fc] border-solid inset-0 pointer-events-none rounded-[16px]" />
        <p className="font-['Alibaba_PuHuiTi_3.0:65_Medium',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#6574fc] text-[14px] text-center whitespace-nowrap">加 入</p>
      </div>
    </div>
  );
}

function Component39() {
  return (
    <div className="content-stretch flex h-[56px] items-center justify-between relative shrink-0 w-full" data-name="底部操作">
      <div aria-hidden="true" className="absolute border-[#dfe3f0] border-dashed border-t inset-[-0.5px_0_0_0] pointer-events-none" />
      <Component40 />
      <Frame13 />
    </div>
  );
}

function Component23() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[16px]" data-name="题目卡片">
      <div aria-hidden="true" className="absolute border border-[#e9ecf5] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start justify-center pb-[20px] pt-[16px] px-[20px] relative w-full">
          <Component24 />
          <Component30 />
          <div className="h-[532px] relative shrink-0 w-[493px]" data-name="题目卡片-组">
            <div className="absolute bg-white content-stretch flex flex-col gap-[12px] inset-[0_0_51.5%_0] items-start pt-[20px] px-[20px] rounded-[12px]" data-name="题目卡片-已加入">
              <div aria-hidden="true" className="absolute border border-[#e9ecf5] border-solid inset-0 pointer-events-none rounded-[12px]" />
              <Component31 />
              <Component34 />
            </div>
            <div className="absolute bg-white content-stretch flex flex-col gap-[12px] inset-[51.5%_0_0_0] items-start pt-[20px] px-[20px] rounded-[12px]" data-name="题目卡片-未加入">
              <div aria-hidden="true" className="absolute border border-[#e9ecf5] border-solid inset-0 pointer-events-none rounded-[12px]" />
              <Component36 />
              <Component39 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Component5() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[653px] items-start left-0 top-[56px] w-[783px]" data-name="2选择内容">
      <Component6 />
      <Component23 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="h-[709px] relative shrink-0 w-full">
      <Tab1 />
      <Component5 />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-[#f5faff] content-stretch flex flex-col items-start pb-[16px] pt-[32px] px-[24px] relative size-full" data-name="内容">
      <Tab />
      <Frame6 />
    </div>
  );
}