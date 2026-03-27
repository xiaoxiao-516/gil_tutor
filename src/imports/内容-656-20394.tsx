import svgPaths from "./svg-d0d4r2dbuk";

function Frame() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[40px]">
      <div className="bg-[#4a4fed] h-[4px] rounded-[2px] shrink-0 w-[12px]" />
    </div>
  );
}

function Frame1() {
  return <div className="content-stretch flex flex-col h-[4px] items-center shrink-0 w-[40px]" />;
}

function Component1() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-[190px]" data-name="文字">
      <p className="font-['Alibaba_PuHuiTi_3.0:55_Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#838bab] text-[14px] whitespace-nowrap">在我的资源中搜索</p>
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

function Frame3() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0">
      <div className="bg-white h-[32px] relative rounded-[16px] shrink-0" data-name="搜索框样式-32">
        <div className="content-stretch flex gap-[6px] h-full items-center justify-center overflow-clip p-[12px] relative rounded-[inherit]">
          <Component1 />
          <IcSearch />
        </div>
        <div aria-hidden="true" className="absolute border border-[#cfd5e8] border-solid inset-0 pointer-events-none rounded-[16px]" />
      </div>
    </div>
  );
}

function Component4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="内容">
      <p className="font-['Alibaba_PuHuiTi_3.0:55_Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#444963] text-[14px] whitespace-nowrap">年级</p>
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

function Component5() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="内容">
      <p className="font-['Alibaba_PuHuiTi_3.0:55_Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#444963] text-[14px] whitespace-nowrap">来源</p>
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

function Frame2() {
  return (
    <div className="absolute content-stretch flex gap-[20px] items-center left-0 top-[3.5px]">
      <div className="content-stretch flex gap-[8px] items-start overflow-clip relative rounded-[6px] shrink-0" data-name="筛选Filter元素/单个组成">
        <Component4 />
      </div>
      <div className="content-stretch flex gap-[8px] items-start overflow-clip relative rounded-[6px] shrink-0" data-name="筛选Filter元素/单个组成">
        <Component5 />
      </div>
    </div>
  );
}

function Component6() {
  return (
    <div className="absolute content-stretch flex gap-[4px] items-center left-[133px] top-[3.5px]" data-name="内容">
      <p className="font-['Alibaba_PuHuiTi_3.0:55_Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#444963] text-[14px] whitespace-nowrap">学科</p>
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

function Component7() {
  return (
    <div className="content-stretch flex gap-[4px] h-[28px] items-center justify-center px-[8px] py-[3px] relative rounded-[6px]" data-name="上传资料">
      <div aria-hidden="true" className="absolute border border-[#cfd5e8] border-solid inset-[-0.5px] pointer-events-none rounded-[6.5px]" />
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <p className="font-['Alibaba_PuHuiTi_3.0:65_Medium',sans-serif] leading-[1.5] not-italic relative text-[#444963] text-[14px] text-center whitespace-nowrap">上传文件</p>
        </div>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="overflow-clip relative size-[14px]" data-name="ic_upload_14">
            <div className="absolute flex inset-[11.24%_27.08%_30.43%_27.08%] items-center justify-center">
              <div className="-scale-y-100 flex-none h-[7.146px] w-[5.615px]">
                <div className="relative size-full" data-name="Vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.41667 8.16667">
                    <g id="Vector">
                      <path d={svgPaths.p271e8180} fill="var(--fill-0, #444963)" />
                      <path d={svgPaths.p271e8180} fill="var(--fill-0, #444963)" />
                      <path d={svgPaths.p271e8180} fill="var(--fill-0, #444963)" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
            <div className="absolute inset-[81.83%_16.67%_9.84%_16.67%]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 1.16667">
                <path d={svgPaths.p6099200} fill="var(--fill-0, #444963)" id="Rectangle 3469193" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Component3() {
  return (
    <div className="absolute h-[36px] left-[20px] top-[16px] w-[743px]" data-name="操作区">
      <Frame2 />
      <Component6 />
      <div className="absolute flex h-[28px] items-center justify-center left-[536px] top-[-2px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <Component7 />
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Alibaba_PuHuiTi_3.0:55_Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#101019] text-[14px] whitespace-nowrap">高三数学复习单元试卷集</p>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute h-[19px] left-[3px] top-[2.5px] w-[18px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 19">
        <g id="Group 1912054701">
          <path d={svgPaths.p6a1ce00} fill="url(#paint0_linear_652_19032)" id="Rectangle 34624319" />
          <path d={svgPaths.p34e15300} fill="url(#paint1_linear_652_19032)" id="Rectangle 34624320" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_652_19032" x1="9" x2="9" y1="0.75" y2="7.5">
            <stop stopColor="#FFB800" />
            <stop offset="1" stopColor="#FF9E00" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_652_19032" x1="9" x2="9" y1="6.5" y2="19">
            <stop stopColor="#FFCD38" />
            <stop offset="1" stopColor="#FFCD38" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Alibaba_PuHuiTi_3.0:55_Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#101019] text-[14px] whitespace-nowrap">高三数学复习单元试卷集</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Alibaba_PuHuiTi_3.0:55_Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#101019] text-[14px] whitespace-nowrap">高三数学复习单元试卷集</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Alibaba_PuHuiTi_3.0:55_Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#101019] text-[14px] whitespace-nowrap">高三数学复习单元试卷集</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Alibaba_PuHuiTi_3.0:55_Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#101019] text-[14px] whitespace-nowrap">高三数学复习单元试卷集</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Alibaba_PuHuiTi_3.0:55_Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#101019] text-[14px] whitespace-nowrap">高三数学复习单元试卷集</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Alibaba_PuHuiTi_3.0:55_Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#101019] text-[14px] whitespace-nowrap">高三数学复习单元试卷集</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Alibaba_PuHuiTi_3.0:55_Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#101019] text-[14px] whitespace-nowrap">高三数学复习单元试卷集</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Alibaba_PuHuiTi_3.0:55_Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#101019] text-[14px] whitespace-nowrap">高三数学复习单元试卷集</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Alibaba_PuHuiTi_3.0:55_Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#101019] text-[14px] whitespace-nowrap">高三数学复习单元试卷集</p>
    </div>
  );
}

function Rate() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="rate">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="rate">
          <path clipRule="evenodd" d={svgPaths.p1d713300} fill="var(--fill-0, #FA9524)" fillRule="evenodd" id="Star 3 (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function TableTableBody() {
  return (
    <div className="bg-white content-stretch flex gap-[24px] h-[52px] items-center px-[16px] py-[12px] relative shrink-0" data-name="表格 Table 元素/单元格元素/单元格 Table Body操作">
      <Rate />
      <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Link链接">
        <p className="font-['Alibaba_PuHuiTi_3.0:55_Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#4a4fed] text-[14px] text-center whitespace-nowrap">打开</p>
      </div>
      <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Link链接">
        <p className="font-['Alibaba_PuHuiTi_3.0:55_Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#4a4fed] text-[14px] text-center whitespace-nowrap">分享</p>
      </div>
      <div className="content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="Link链接">
        <div className="overflow-clip relative shrink-0 size-[14px]" data-name="more">
          <div className="absolute inset-[41.67%_4.17%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8333 2.33333">
              <g id="Vector">
                <path d={svgPaths.pb889000} fill="var(--fill-0, #4A4FED)" />
                <path d={svgPaths.p18e20380} fill="var(--fill-0, #4A4FED)" />
                <path d={svgPaths.p1c48d200} fill="var(--fill-0, #4A4FED)" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-0.5px_0px_0px_#e1e5f2]" />
    </div>
  );
}

function Table1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[198px]" data-name="表格 Table 元素/列元素/操作列">
      <div className="bg-[#f4f7fe] content-stretch flex h-[44px] items-center px-[16px] py-[12px] relative shrink-0 w-[198px]" data-name="表格 Table 元素/表头元素/表头">
        <p className="font-['Alibaba_PuHuiTi_3.0:55_Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#444963] text-[14px] whitespace-nowrap">操作</p>
      </div>
      <TableTableBody />
      <div className="bg-white content-stretch flex gap-[24px] h-[52px] items-center px-[16px] py-[12px] relative shrink-0" data-name="表格 Table 元素/单元格元素/单元格 Table Body操作">
        <div className="relative shrink-0 size-[16px]" data-name="rate">
          <div className="absolute inset-[6.25%_4.17%]" data-name="Star 3 (Stroke)">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6667 14">
              <path clipRule="evenodd" d={svgPaths.p2072d200} fill="var(--fill-0, #838BAB)" fillRule="evenodd" id="Star 3 (Stroke)" />
            </svg>
          </div>
        </div>
        <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Link链接">
          <p className="font-['Alibaba_PuHuiTi_3.0:55_Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#4a4fed] text-[14px] text-center whitespace-nowrap">打开</p>
        </div>
        <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Link链接">
          <p className="font-['Alibaba_PuHuiTi_3.0:55_Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#4a4fed] text-[14px] text-center whitespace-nowrap">分享</p>
        </div>
        <div className="content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="Link链接">
          <div className="overflow-clip relative shrink-0 size-[14px]" data-name="more">
            <div className="absolute inset-[41.67%_4.17%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8333 2.33333">
                <g id="Vector">
                  <path d={svgPaths.pb889000} fill="var(--fill-0, #4A4FED)" />
                  <path d={svgPaths.p18e20380} fill="var(--fill-0, #4A4FED)" />
                  <path d={svgPaths.p1c48d200} fill="var(--fill-0, #4A4FED)" />
                </g>
              </svg>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-0.5px_0px_0px_#e1e5f2]" />
      </div>
      <div className="bg-[#f4f7fe] content-stretch flex gap-[24px] h-[52px] items-center px-[16px] py-[12px] relative shrink-0" data-name="表格 Table 元素/单元格元素/单元格 Table Body操作">
        <div className="relative shrink-0 size-[16px]" data-name="rate">
          <div className="absolute inset-[6.25%_4.17%]" data-name="Star 3 (Stroke)">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6667 14">
              <path clipRule="evenodd" d={svgPaths.p2072d200} fill="var(--fill-0, #838BAB)" fillRule="evenodd" id="Star 3 (Stroke)" />
            </svg>
          </div>
        </div>
        <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Link链接">
          <p className="font-['Alibaba_PuHuiTi_3.0:55_Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#4a4fed] text-[14px] text-center whitespace-nowrap">加入</p>
        </div>
        <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Link链接">
          <p className="font-['Alibaba_PuHuiTi_3.0:55_Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#4a4fed] text-[14px] text-center whitespace-nowrap">分享</p>
        </div>
        <div className="content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="Link链接">
          <div className="overflow-clip relative shrink-0 size-[14px]" data-name="more">
            <div className="absolute inset-[41.67%_4.17%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8333 2.33333">
                <g id="Vector">
                  <path d={svgPaths.pb889000} fill="var(--fill-0, #4A4FED)" />
                  <path d={svgPaths.p18e20380} fill="var(--fill-0, #4A4FED)" />
                  <path d={svgPaths.p1c48d200} fill="var(--fill-0, #4A4FED)" />
                </g>
              </svg>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-0.5px_0px_0px_#e1e5f2]" />
      </div>
      <div className="bg-white content-stretch flex gap-[24px] h-[52px] items-center px-[16px] py-[12px] relative shrink-0" data-name="表格 Table 元素/单元格元素/单元格 Table Body操作">
        <div className="relative shrink-0 size-[16px]" data-name="rate">
          <div className="absolute inset-[6.25%_4.17%]" data-name="Star 3 (Stroke)">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6667 14">
              <path clipRule="evenodd" d={svgPaths.p2072d200} fill="var(--fill-0, #838BAB)" fillRule="evenodd" id="Star 3 (Stroke)" />
            </svg>
          </div>
        </div>
        <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Link链接">
          <p className="font-['Alibaba_PuHuiTi_3.0:55_Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#4a4fed] text-[14px] text-center whitespace-nowrap">加入</p>
        </div>
        <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Link链接">
          <p className="font-['Alibaba_PuHuiTi_3.0:55_Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#4a4fed] text-[14px] text-center whitespace-nowrap">分享</p>
        </div>
        <div className="content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="Link链接">
          <div className="overflow-clip relative shrink-0 size-[14px]" data-name="more">
            <div className="absolute inset-[41.67%_4.17%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8333 2.33333">
                <g id="Vector">
                  <path d={svgPaths.pb889000} fill="var(--fill-0, #4A4FED)" />
                  <path d={svgPaths.p18e20380} fill="var(--fill-0, #4A4FED)" />
                  <path d={svgPaths.p1c48d200} fill="var(--fill-0, #4A4FED)" />
                </g>
              </svg>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-0.5px_0px_0px_#e1e5f2]" />
      </div>
      <div className="bg-white content-stretch flex gap-[24px] h-[52px] items-center px-[16px] py-[12px] relative shrink-0" data-name="表格 Table 元素/单元格元素/单元格 Table Body操作">
        <div className="relative shrink-0 size-[16px]" data-name="rate">
          <div className="absolute inset-[6.25%_4.17%]" data-name="Star 3 (Stroke)">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6667 14">
              <path clipRule="evenodd" d={svgPaths.p2072d200} fill="var(--fill-0, #838BAB)" fillRule="evenodd" id="Star 3 (Stroke)" />
            </svg>
          </div>
        </div>
        <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Link链接">
          <p className="font-['Alibaba_PuHuiTi_3.0:55_Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#4a4fed] text-[14px] text-center whitespace-nowrap">加入</p>
        </div>
        <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Link链接">
          <p className="font-['Alibaba_PuHuiTi_3.0:55_Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#4a4fed] text-[14px] text-center whitespace-nowrap">分享</p>
        </div>
        <div className="content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="Link链接">
          <div className="overflow-clip relative shrink-0 size-[14px]" data-name="more">
            <div className="absolute inset-[41.67%_4.17%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8333 2.33333">
                <g id="Vector">
                  <path d={svgPaths.pb889000} fill="var(--fill-0, #4A4FED)" />
                  <path d={svgPaths.p18e20380} fill="var(--fill-0, #4A4FED)" />
                  <path d={svgPaths.p1c48d200} fill="var(--fill-0, #4A4FED)" />
                </g>
              </svg>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-0.5px_0px_0px_#e1e5f2]" />
      </div>
      <div className="bg-white content-stretch flex gap-[24px] h-[52px] items-center px-[16px] py-[12px] relative shrink-0" data-name="表格 Table 元素/单元格元素/单元格 Table Body操作">
        <div className="relative shrink-0 size-[16px]" data-name="rate">
          <div className="absolute inset-[6.25%_4.17%]" data-name="Star 3 (Stroke)">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6667 14">
              <path clipRule="evenodd" d={svgPaths.p2072d200} fill="var(--fill-0, #838BAB)" fillRule="evenodd" id="Star 3 (Stroke)" />
            </svg>
          </div>
        </div>
        <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Link链接">
          <p className="font-['Alibaba_PuHuiTi_3.0:55_Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#4a4fed] text-[14px] text-center whitespace-nowrap">加入</p>
        </div>
        <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Link链接">
          <p className="font-['Alibaba_PuHuiTi_3.0:55_Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#4a4fed] text-[14px] text-center whitespace-nowrap">操作2</p>
        </div>
        <div className="content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="Link链接">
          <div className="overflow-clip relative shrink-0 size-[14px]" data-name="more">
            <div className="absolute inset-[41.67%_4.17%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8333 2.33333">
                <g id="Vector">
                  <path d={svgPaths.pb889000} fill="var(--fill-0, #4A4FED)" />
                  <path d={svgPaths.p18e20380} fill="var(--fill-0, #4A4FED)" />
                  <path d={svgPaths.p1c48d200} fill="var(--fill-0, #4A4FED)" />
                </g>
              </svg>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-0.5px_0px_0px_#e1e5f2]" />
      </div>
    </div>
  );
}

function LayoutX() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px overflow-clip relative" data-name="layout布局模块/横向X6">
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="表格 Table 元素/列元素/复选列">
        <div className="bg-[#f4f7fe] content-stretch flex h-[44px] items-center justify-center px-[12px] py-[16px] relative shrink-0 w-[32px]" data-name="表格 Table 元素/表头元素/表头复选框">
          <div className="relative shrink-0 size-[16px]" data-name="复选框元素">
            <div className="absolute bg-white border border-[#cfd5e8] border-solid inset-0 rounded-[3px]" data-name="checkbox" />
          </div>
        </div>
        <div className="bg-white content-stretch flex h-[52px] items-center justify-center px-[12px] py-[16px] relative shrink-0 w-[32px]" data-name="表格 Table 元素/单元格元素/单元格 Table Body复选">
          <div className="relative shrink-0 size-[14px]" data-name="复选框元素">
            <div className="absolute bg-white border border-[#cfd5e8] border-solid inset-0 rounded-[3px]" data-name="checkbox" />
          </div>
          <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-0.5px_0px_0px_#e1e5f2]" />
        </div>
        <div className="bg-white content-stretch flex h-[52px] items-center justify-center px-[12px] py-[16px] relative shrink-0 w-[32px]" data-name="表格 Table 元素/单元格元素/单元格 Table Body复选">
          <div className="relative shrink-0 size-[14px]" data-name="复选框元素">
            <div className="absolute bg-white border border-[#cfd5e8] border-solid inset-0 rounded-[3px]" data-name="checkbox" />
          </div>
          <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-0.5px_0px_0px_#e1e5f2]" />
        </div>
        <div className="bg-[#f4f7fe] content-stretch flex h-[52px] items-center justify-center px-[12px] py-[16px] relative shrink-0 w-[32px]" data-name="表格 Table 元素/单元格元素/单元格 Table Body复选">
          <div className="relative shrink-0 size-[14px]" data-name="复选框元素">
            <div className="absolute bg-white border border-[#cfd5e8] border-solid inset-0 rounded-[3px]" data-name="checkbox" />
          </div>
          <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-0.5px_0px_0px_#e1e5f2]" />
        </div>
        <div className="bg-white content-stretch flex h-[52px] items-center justify-center px-[12px] py-[16px] relative shrink-0 w-[32px]" data-name="表格 Table 元素/单元格元素/单元格 Table Body复选">
          <div className="relative shrink-0 size-[14px]" data-name="复选框元素">
            <div className="absolute bg-white border border-[#cfd5e8] border-solid inset-0 rounded-[3px]" data-name="checkbox" />
          </div>
          <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-0.5px_0px_0px_#e1e5f2]" />
        </div>
        <div className="bg-white content-stretch flex h-[52px] items-center justify-center px-[12px] py-[16px] relative shrink-0 w-[32px]" data-name="表格 Table 元素/单元格元素/单元格 Table Body复选">
          <div className="relative shrink-0 size-[14px]" data-name="复选框元素">
            <div className="absolute bg-white border border-[#cfd5e8] border-solid inset-0 rounded-[3px]" data-name="checkbox" />
          </div>
          <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-0.5px_0px_0px_#e1e5f2]" />
        </div>
        <div className="bg-white content-stretch flex h-[52px] items-center justify-center px-[12px] py-[16px] relative shrink-0 w-[32px]" data-name="表格 Table 元素/单元格元素/单元格 Table Body复选">
          <div className="relative shrink-0 size-[14px]" data-name="复选框元素">
            <div className="absolute bg-white border border-[#cfd5e8] border-solid inset-0 rounded-[3px]" data-name="checkbox" />
          </div>
          <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-0.5px_0px_0px_#e1e5f2]" />
        </div>
        <div className="bg-white content-stretch flex h-[52px] items-center justify-center px-[12px] py-[16px] relative shrink-0 w-[32px]" data-name="表格 Table 元素/单元格元素/单元格 Table Body复选">
          <div className="relative shrink-0 size-[14px]" data-name="复选框元素">
            <div className="absolute bg-white border border-[#cfd5e8] border-solid inset-0 rounded-[3px]" data-name="checkbox" />
          </div>
          <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-0.5px_0px_0px_#e1e5f2]" />
        </div>
        <div className="bg-white content-stretch flex h-[52px] items-center justify-center px-[12px] py-[16px] relative shrink-0 w-[32px]" data-name="表格 Table 元素/单元格元素/单元格 Table Body复选">
          <div className="relative shrink-0 size-[14px]" data-name="复选框元素">
            <div className="absolute bg-white border border-[#cfd5e8] border-solid inset-0 rounded-[3px]" data-name="checkbox" />
          </div>
          <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-0.5px_0px_0px_#e1e5f2]" />
        </div>
        <div className="bg-white content-stretch flex h-[52px] items-center justify-center px-[12px] py-[16px] relative shrink-0 w-[32px]" data-name="表格 Table 元素/单元格元素/单元格 Table Body复选">
          <div className="relative shrink-0 size-[14px]" data-name="复选框元素">
            <div className="absolute bg-white border border-[#cfd5e8] border-solid inset-0 rounded-[3px]" data-name="checkbox" />
          </div>
          <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-0.5px_0px_0px_#e1e5f2]" />
        </div>
        <div className="bg-white content-stretch flex h-[52px] items-center justify-center px-[12px] py-[16px] relative shrink-0 w-[32px]" data-name="表格 Table 元素/单元格元素/单元格 Table Body复选">
          <div className="relative shrink-0 size-[14px]" data-name="复选框元素">
            <div className="absolute bg-white border border-[#cfd5e8] border-solid inset-0 rounded-[3px]" data-name="checkbox" />
          </div>
          <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-0.5px_0px_0px_#e1e5f2]" />
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-[247px]" data-name="表格 Table 元素">
        <div className="bg-[#f4f7fe] h-[44px] relative shrink-0 w-full" data-name="表格 Table 元素/表头元素/表头">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
              <p className="font-['Alibaba_PuHuiTi_3.0:55_Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#444963] text-[14px] whitespace-nowrap">名称</p>
            </div>
          </div>
        </div>
        <div className="bg-white h-[52px] relative shrink-0 w-full" data-name="表格 Table 元素/单元格元素/icon+纯文本/hover=no">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[11px] relative size-full">
              <div className="overflow-clip relative shrink-0 size-[24px]" data-name="文件icon">
                <div className="absolute h-[20px] left-[4px] top-[2px] w-[16px]">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
                    <path d={svgPaths.p284f6980} fill="var(--fill-0, #FA5A57)" id="Rectangle 34624319" />
                  </svg>
                </div>
                <div className="absolute inset-[8.33%_16.67%_70.83%_62.5%]">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
                    <path d={svgPaths.p2dd3a480} fill="var(--fill-0, white)" fillOpacity="0.3" id="Vector 2" />
                  </svg>
                </div>
                <div className="absolute inset-[33.33%_29.17%_25.01%_29.17%]" data-name="Exclude">
                  <div className="absolute inset-[0_-9.17%_-18.34%_-9.17%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.8333 11.8304">
                      <g filter="url(#filter0_d_652_19040)" id="Exclude">
                        <path clipRule="evenodd" d={svgPaths.pd72ea40} fill="var(--fill-0, white)" fillRule="evenodd" />
                      </g>
                      <defs>
                        <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="11.8304" id="filter0_d_652_19040" width="11.8333" x="4.88877e-10" y="0">
                          <feFlood floodOpacity="0" result="BackgroundImageFix" />
                          <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                          <feOffset dy="0.916667" />
                          <feGaussianBlur stdDeviation="0.458333" />
                          <feColorMatrix type="matrix" values="0 0 0 0 0.905882 0 0 0 0 0.129412 0 0 0 0 0 0 0 0 0.25 0" />
                          <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_652_19040" />
                          <feBlend in="SourceGraphic" in2="effect1_dropShadow_652_19040" mode="normal" result="shape" />
                        </filter>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
              <Frame6 />
            </div>
          </div>
          <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-0.5px_0px_0px_#e1e5f2]" />
        </div>
        <div className="bg-white h-[52px] relative shrink-0 w-full" data-name="表格 Table 元素/单元格元素/icon+纯文本/hover=no">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[11px] relative size-full">
              <div className="overflow-clip relative shrink-0 size-[24px]" data-name="文件icon">
                <Group1 />
              </div>
              <Frame7 />
            </div>
          </div>
          <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-0.5px_0px_0px_#e1e5f2]" />
        </div>
        <div className="bg-[#f4f7fe] h-[52px] relative shrink-0 w-full" data-name="表格 Table 元素/单元格元素/icon+纯文本/hover=no">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[11px] relative size-full">
              <div className="overflow-clip relative shrink-0 size-[24px]" data-name="文件icon">
                <div className="absolute h-[20px] left-[4px] top-[2px] w-[16px]">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
                    <path d={svgPaths.p284f6980} fill="var(--fill-0, #2DC01F)" id="Rectangle 34624319" />
                  </svg>
                </div>
                <div className="absolute inset-[8.33%_16.67%_70.83%_62.5%]">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
                    <path d={svgPaths.p2dd3a480} fill="var(--fill-0, white)" fillOpacity="0.3" id="Vector 2" />
                  </svg>
                </div>
                <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Avenir:Black',sans-serif] justify-center leading-[0] left-[12px] not-italic text-[5px] text-center text-shadow-[0px_1px_1px_rgba(18,187,2,0.25)] text-white top-[14.5px] whitespace-nowrap">
                  <p className="leading-[normal]">XLS</p>
                </div>
              </div>
              <Frame8 />
            </div>
          </div>
          <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-0.5px_0px_0px_#e1e5f2]" />
        </div>
        <div className="bg-white h-[52px] relative shrink-0 w-full" data-name="表格 Table 元素/单元格元素/icon+纯文本/hover=no">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[11px] relative size-full">
              <div className="overflow-clip relative shrink-0 size-[24px]" data-name="文件icon">
                <div className="absolute h-[20px] left-[4px] top-[2px] w-[16px]">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
                    <path d={svgPaths.p284f6980} fill="var(--fill-0, #6F60FF)" id="Rectangle 34624319" />
                  </svg>
                </div>
                <div className="absolute inset-[8.33%_16.67%_70.83%_62.5%]">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
                    <path d={svgPaths.p2dd3a480} fill="var(--fill-0, white)" fillOpacity="0.3" id="Vector 2" />
                  </svg>
                </div>
                <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Avenir:Black',sans-serif] justify-center leading-[0] left-[12px] not-italic text-[5px] text-center text-shadow-[0px_1px_1px_rgba(117,101,255,0.25)] text-white top-[14.5px] whitespace-nowrap">
                  <p className="leading-[normal]">PNG</p>
                </div>
              </div>
              <Frame9 />
            </div>
          </div>
          <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-0.5px_0px_0px_#e1e5f2]" />
        </div>
        <div className="bg-white h-[52px] relative shrink-0 w-full" data-name="表格 Table 元素/单元格元素/icon+纯文本/hover=no">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[11px] relative size-full">
              <div className="overflow-clip relative shrink-0 size-[24px]" data-name="文件icon">
                <div className="absolute h-[20px] left-[4px] top-[2px] w-[16px]">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
                    <path d={svgPaths.p284f6980} fill="var(--fill-0, #E53E8C)" id="Rectangle 34624319" />
                  </svg>
                </div>
                <div className="absolute inset-[8.33%_16.67%_70.83%_62.5%]">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
                    <path d={svgPaths.p2dd3a480} fill="var(--fill-0, white)" fillOpacity="0.3" id="Vector 2" />
                  </svg>
                </div>
                <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Avenir:Black',sans-serif] justify-center leading-[0] left-[11.5px] not-italic text-[5px] text-center text-shadow-[0px_1px_1px_rgba(236,0,110,0.25)] text-white top-[14.5px] whitespace-nowrap">
                  <p className="leading-[normal]">MP3</p>
                </div>
              </div>
              <Frame10 />
            </div>
          </div>
          <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-0.5px_0px_0px_#e1e5f2]" />
        </div>
        <div className="bg-white h-[52px] relative shrink-0 w-full" data-name="表格 Table 元素/单元格元素/icon+纯文本/hover=no">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[11px] relative size-full">
              <div className="overflow-clip relative shrink-0 size-[24px]" data-name="文件icon">
                <div className="absolute h-[20px] left-[4px] top-[2px] w-[16px]">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
                    <path d={svgPaths.p284f6980} fill="var(--fill-0, #FA5A57)" id="Rectangle 34624319" />
                  </svg>
                </div>
                <div className="absolute inset-[8.33%_16.67%_70.83%_62.5%]">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
                    <path d={svgPaths.p2dd3a480} fill="var(--fill-0, white)" fillOpacity="0.3" id="Vector 2" />
                  </svg>
                </div>
                <div className="absolute inset-[33.33%_29.17%_25.01%_29.17%]" data-name="Exclude">
                  <div className="absolute inset-[0_-9.17%_-18.34%_-9.17%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.8333 11.8304">
                      <g filter="url(#filter0_d_652_19040)" id="Exclude">
                        <path clipRule="evenodd" d={svgPaths.pd72ea40} fill="var(--fill-0, white)" fillRule="evenodd" />
                      </g>
                      <defs>
                        <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="11.8304" id="filter0_d_652_19040" width="11.8333" x="4.88877e-10" y="0">
                          <feFlood floodOpacity="0" result="BackgroundImageFix" />
                          <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                          <feOffset dy="0.916667" />
                          <feGaussianBlur stdDeviation="0.458333" />
                          <feColorMatrix type="matrix" values="0 0 0 0 0.905882 0 0 0 0 0.129412 0 0 0 0 0 0 0 0 0.25 0" />
                          <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_652_19040" />
                          <feBlend in="SourceGraphic" in2="effect1_dropShadow_652_19040" mode="normal" result="shape" />
                        </filter>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
              <Frame11 />
            </div>
          </div>
          <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-0.5px_0px_0px_#e1e5f2]" />
        </div>
        <div className="bg-white h-[52px] relative shrink-0 w-full" data-name="表格 Table 元素/单元格元素/icon+纯文本/hover=no">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[11px] relative size-full">
              <div className="overflow-clip relative shrink-0 size-[24px]" data-name="文件icon">
                <div className="absolute h-[20px] left-[4px] top-[2px] w-[16px]">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
                    <path d={svgPaths.p284f6980} fill="var(--fill-0, #FA5A57)" id="Rectangle 34624319" />
                  </svg>
                </div>
                <div className="absolute inset-[8.33%_16.67%_70.83%_62.5%]">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
                    <path d={svgPaths.p2dd3a480} fill="var(--fill-0, white)" fillOpacity="0.3" id="Vector 2" />
                  </svg>
                </div>
                <div className="absolute inset-[33.33%_29.17%_25.01%_29.17%]" data-name="Exclude">
                  <div className="absolute inset-[0_-9.17%_-18.34%_-9.17%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.8333 11.8304">
                      <g filter="url(#filter0_d_652_19040)" id="Exclude">
                        <path clipRule="evenodd" d={svgPaths.pd72ea40} fill="var(--fill-0, white)" fillRule="evenodd" />
                      </g>
                      <defs>
                        <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="11.8304" id="filter0_d_652_19040" width="11.8333" x="4.88877e-10" y="0">
                          <feFlood floodOpacity="0" result="BackgroundImageFix" />
                          <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                          <feOffset dy="0.916667" />
                          <feGaussianBlur stdDeviation="0.458333" />
                          <feColorMatrix type="matrix" values="0 0 0 0 0.905882 0 0 0 0 0.129412 0 0 0 0 0 0 0 0 0.25 0" />
                          <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_652_19040" />
                          <feBlend in="SourceGraphic" in2="effect1_dropShadow_652_19040" mode="normal" result="shape" />
                        </filter>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
              <Frame12 />
            </div>
          </div>
          <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-0.5px_0px_0px_#e1e5f2]" />
        </div>
        <div className="bg-white h-[52px] relative shrink-0 w-full" data-name="表格 Table 元素/单元格元素/icon+纯文本/hover=no">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[11px] relative size-full">
              <div className="overflow-clip relative shrink-0 size-[24px]" data-name="文件icon">
                <div className="absolute h-[20px] left-[4px] top-[2px] w-[16px]">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
                    <path d={svgPaths.p284f6980} fill="var(--fill-0, #FA5A57)" id="Rectangle 34624319" />
                  </svg>
                </div>
                <div className="absolute inset-[8.33%_16.67%_70.83%_62.5%]">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
                    <path d={svgPaths.p2dd3a480} fill="var(--fill-0, white)" fillOpacity="0.3" id="Vector 2" />
                  </svg>
                </div>
                <div className="absolute inset-[33.33%_29.17%_25.01%_29.17%]" data-name="Exclude">
                  <div className="absolute inset-[0_-9.17%_-18.34%_-9.17%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.8333 11.8304">
                      <g filter="url(#filter0_d_652_19040)" id="Exclude">
                        <path clipRule="evenodd" d={svgPaths.pd72ea40} fill="var(--fill-0, white)" fillRule="evenodd" />
                      </g>
                      <defs>
                        <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="11.8304" id="filter0_d_652_19040" width="11.8333" x="4.88877e-10" y="0">
                          <feFlood floodOpacity="0" result="BackgroundImageFix" />
                          <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                          <feOffset dy="0.916667" />
                          <feGaussianBlur stdDeviation="0.458333" />
                          <feColorMatrix type="matrix" values="0 0 0 0 0.905882 0 0 0 0 0.129412 0 0 0 0 0 0 0 0 0.25 0" />
                          <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_652_19040" />
                          <feBlend in="SourceGraphic" in2="effect1_dropShadow_652_19040" mode="normal" result="shape" />
                        </filter>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
              <Frame13 />
            </div>
          </div>
          <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-0.5px_0px_0px_#e1e5f2]" />
        </div>
        <div className="bg-white h-[52px] relative shrink-0 w-full" data-name="表格 Table 元素/单元格元素/icon+纯文本/hover=no">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[11px] relative size-full">
              <div className="overflow-clip relative shrink-0 size-[24px]" data-name="文件icon">
                <div className="absolute h-[20px] left-[4px] top-[2px] w-[16px]">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
                    <path d={svgPaths.p284f6980} fill="var(--fill-0, #FA5A57)" id="Rectangle 34624319" />
                  </svg>
                </div>
                <div className="absolute inset-[8.33%_16.67%_70.83%_62.5%]">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
                    <path d={svgPaths.p2dd3a480} fill="var(--fill-0, white)" fillOpacity="0.3" id="Vector 2" />
                  </svg>
                </div>
                <div className="absolute inset-[33.33%_29.17%_25.01%_29.17%]" data-name="Exclude">
                  <div className="absolute inset-[0_-9.17%_-18.34%_-9.17%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.8333 11.8304">
                      <g filter="url(#filter0_d_652_19040)" id="Exclude">
                        <path clipRule="evenodd" d={svgPaths.pd72ea40} fill="var(--fill-0, white)" fillRule="evenodd" />
                      </g>
                      <defs>
                        <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="11.8304" id="filter0_d_652_19040" width="11.8333" x="4.88877e-10" y="0">
                          <feFlood floodOpacity="0" result="BackgroundImageFix" />
                          <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                          <feOffset dy="0.916667" />
                          <feGaussianBlur stdDeviation="0.458333" />
                          <feColorMatrix type="matrix" values="0 0 0 0 0.905882 0 0 0 0 0.129412 0 0 0 0 0 0 0 0 0.25 0" />
                          <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_652_19040" />
                          <feBlend in="SourceGraphic" in2="effect1_dropShadow_652_19040" mode="normal" result="shape" />
                        </filter>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
              <Frame14 />
            </div>
          </div>
          <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-0.5px_0px_0px_#e1e5f2]" />
        </div>
        <div className="bg-white h-[52px] relative shrink-0 w-full" data-name="表格 Table 元素/单元格元素/icon+纯文本/hover=no">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[11px] relative size-full">
              <div className="overflow-clip relative shrink-0 size-[24px]" data-name="文件icon">
                <div className="absolute h-[20px] left-[4px] top-[2px] w-[16px]">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
                    <path d={svgPaths.p284f6980} fill="var(--fill-0, #FA5A57)" id="Rectangle 34624319" />
                  </svg>
                </div>
                <div className="absolute inset-[8.33%_16.67%_70.83%_62.5%]">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
                    <path d={svgPaths.p2dd3a480} fill="var(--fill-0, white)" fillOpacity="0.3" id="Vector 2" />
                  </svg>
                </div>
                <div className="absolute inset-[33.33%_29.17%_25.01%_29.17%]" data-name="Exclude">
                  <div className="absolute inset-[0_-9.17%_-18.34%_-9.17%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.8333 11.8304">
                      <g filter="url(#filter0_d_652_19040)" id="Exclude">
                        <path clipRule="evenodd" d={svgPaths.pd72ea40} fill="var(--fill-0, white)" fillRule="evenodd" />
                      </g>
                      <defs>
                        <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="11.8304" id="filter0_d_652_19040" width="11.8333" x="4.88877e-10" y="0">
                          <feFlood floodOpacity="0" result="BackgroundImageFix" />
                          <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                          <feOffset dy="0.916667" />
                          <feGaussianBlur stdDeviation="0.458333" />
                          <feColorMatrix type="matrix" values="0 0 0 0 0.905882 0 0 0 0 0.129412 0 0 0 0 0 0 0 0 0.25 0" />
                          <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_652_19040" />
                          <feBlend in="SourceGraphic" in2="effect1_dropShadow_652_19040" mode="normal" result="shape" />
                        </filter>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
              <Frame15 />
            </div>
          </div>
          <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-0.5px_0px_0px_#e1e5f2]" />
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-[142px]" data-name="年级">
        <div className="bg-[#f4f7fe] h-[44px] relative shrink-0 w-full" data-name="表格 Table 元素/表头元素/表头">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[4px] items-center px-[16px] py-[12px] relative size-full">
              <p className="font-['Alibaba_PuHuiTi_3.0:55_Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#444963] text-[14px] whitespace-nowrap">年级</p>
            </div>
          </div>
        </div>
        <div className="bg-white content-stretch flex h-[52px] items-start relative shrink-0 w-full" data-name="表格 Table 元素/单元格元素/数字类">
          <div className="bg-white flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="表格 Table 元素/单元格元素/头像+tag">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex gap-[4px] items-center px-[16px] py-[12px] relative size-full">
                <p className="font-['Alibaba_PuHuiTi_3.0:55_Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#101019] text-[14px] whitespace-nowrap">高一，高二，高三</p>
              </div>
            </div>
            <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-0.5px_0px_0px_#e1e5f2]" />
          </div>
        </div>
        <div className="bg-white h-[52px] relative shrink-0 w-full" data-name="表格 Table 元素/单元格元素/纯文本">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
              <p className="font-['Alibaba_PuHuiTi_3.0:55_Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#101019] text-[14px] whitespace-nowrap">高二，高三</p>
            </div>
          </div>
          <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-0.5px_0px_0px_#e1e5f2]" />
        </div>
        <div className="bg-[#f4f7fe] h-[52px] relative shrink-0 w-full" data-name="表格 Table 元素/单元格元素/纯文本">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
              <p className="font-['Alibaba_PuHuiTi_3.0:55_Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#101019] text-[14px] whitespace-nowrap">高一</p>
            </div>
          </div>
          <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-0.5px_0px_0px_#e1e5f2]" />
        </div>
        <div className="bg-white h-[52px] relative shrink-0 w-full" data-name="表格 Table 元素/单元格元素/纯文本">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
              <p className="font-['Alibaba_PuHuiTi_3.0:55_Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#101019] text-[14px] whitespace-nowrap">高二</p>
            </div>
          </div>
          <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-0.5px_0px_0px_#e1e5f2]" />
        </div>
        <div className="bg-white h-[52px] relative shrink-0 w-full" data-name="表格 Table 元素/单元格元素/纯文本">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
              <p className="font-['Alibaba_PuHuiTi_3.0:55_Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#101019] text-[14px] whitespace-nowrap">高一</p>
            </div>
          </div>
          <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-0.5px_0px_0px_#e1e5f2]" />
        </div>
        <div className="bg-white h-[52px] relative shrink-0 w-full" data-name="表格 Table 元素/单元格元素/纯文本">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
              <p className="font-['Alibaba_PuHuiTi_3.0:55_Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#101019] text-[14px] whitespace-nowrap">高一</p>
            </div>
          </div>
          <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-0.5px_0px_0px_#e1e5f2]" />
        </div>
        <div className="bg-white h-[52px] relative shrink-0 w-full" data-name="表格 Table 元素/单元格元素/数字类">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
              <p className="font-['Avenir:Roman','Noto_Sans_JP:Regular',sans-serif] leading-[1.5] relative shrink-0 text-[#101019] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400", fontFeatureSettings: "'lnum', 'pnum'" }}>
                高二
              </p>
            </div>
          </div>
          <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-0.5px_0px_0px_#e1e5f2]" />
        </div>
        <div className="bg-white h-[52px] relative shrink-0 w-full" data-name="表格 Table 元素/单元格元素/数字类">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
              <p className="font-['Avenir:Roman',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#101019] text-[14px] whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'pnum'" }}>
                68
              </p>
            </div>
          </div>
          <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-0.5px_0px_0px_#e1e5f2]" />
        </div>
        <div className="bg-white h-[52px] relative shrink-0 w-full" data-name="表格 Table 元素/单元格元素/数字类">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
              <p className="font-['Avenir:Roman',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#101019] text-[14px] whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'pnum'" }}>
                20
              </p>
            </div>
          </div>
          <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-0.5px_0px_0px_#e1e5f2]" />
        </div>
        <div className="bg-white h-[52px] relative shrink-0 w-full" data-name="表格 Table 元素/单元格元素/数字类">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
              <p className="font-['Avenir:Roman',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#101019] text-[14px] whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'pnum'" }}>
                23
              </p>
            </div>
          </div>
          <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-0.5px_0px_0px_#e1e5f2]" />
        </div>
      </div>
      <div className="content-stretch flex flex-col items-center relative shrink-0 w-[124px]" data-name="更新日期">
        <div className="bg-[#f4f7fe] h-[44px] relative shrink-0 w-full" data-name="表格 Table 元素/表头元素/表头">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[4px] items-center px-[16px] py-[12px] relative size-full">
              <p className="font-['Alibaba_PuHuiTi_3.0:55_Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#444963] text-[14px] whitespace-nowrap">更新日期</p>
            </div>
          </div>
        </div>
        <div className="bg-white h-[52px] relative shrink-0 w-full" data-name="表格 Table 元素/单元格元素/日期">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
              <p className="font-['Avenir:Roman',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#101019] text-[14px] whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'pnum'" }}>
                2025-01-30
              </p>
            </div>
          </div>
          <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-0.5px_0px_0px_#e1e5f2]" />
        </div>
        <div className="bg-white h-[52px] relative shrink-0 w-full" data-name="表格 Table 元素/单元格元素/日期">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
              <p className="font-['Avenir:Roman',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#101019] text-[14px] whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'pnum'" }}>
                2025-01-30
              </p>
            </div>
          </div>
          <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-0.5px_0px_0px_#e1e5f2]" />
        </div>
        <div className="bg-[#f4f7fe] h-[52px] relative shrink-0 w-full" data-name="表格 Table 元素/单元格元素/日期">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
              <p className="font-['Avenir:Roman',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#101019] text-[14px] whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'pnum'" }}>
                2025-01-30
              </p>
            </div>
          </div>
          <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-0.5px_0px_0px_#e1e5f2]" />
        </div>
        <div className="bg-white h-[52px] relative shrink-0 w-full" data-name="表格 Table 元素/单元格元素/日期">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
              <p className="font-['Avenir:Roman',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#101019] text-[14px] whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'pnum'" }}>
                2025-01-30
              </p>
            </div>
          </div>
          <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-0.5px_0px_0px_#e1e5f2]" />
        </div>
        <div className="bg-white h-[52px] relative shrink-0 w-full" data-name="表格 Table 元素/单元格元素/日期">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
              <p className="font-['Avenir:Roman',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#101019] text-[14px] whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'pnum'" }}>
                2025-01-30
              </p>
            </div>
          </div>
          <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-0.5px_0px_0px_#e1e5f2]" />
        </div>
        <div className="bg-white h-[52px] relative shrink-0 w-full" data-name="表格 Table 元素/单元格元素/日期">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
              <p className="font-['Avenir:Roman',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#101019] text-[14px] whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'pnum'" }}>
                2020-01-30
              </p>
            </div>
          </div>
          <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-0.5px_0px_0px_#e1e5f2]" />
        </div>
        <div className="bg-white h-[52px] relative shrink-0 w-full" data-name="表格 Table 元素/单元格元素/日期">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
              <p className="font-['Avenir:Roman',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#101019] text-[14px] whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'pnum'" }}>
                2020-01-30
              </p>
            </div>
          </div>
          <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-0.5px_0px_0px_#e1e5f2]" />
        </div>
        <div className="bg-white h-[52px] relative shrink-0 w-full" data-name="表格 Table 元素/单元格元素/百分比">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
              <p className="font-['Avenir:Roman',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#101019] text-[14px] whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'pnum'" }}>
                86%
              </p>
            </div>
          </div>
          <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-0.5px_0px_0px_#e1e5f2]" />
        </div>
        <div className="bg-white h-[52px] relative shrink-0 w-full" data-name="表格 Table 元素/单元格元素/百分比">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
              <p className="font-['Avenir:Roman',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#101019] text-[14px] whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'pnum'" }}>
                86%
              </p>
            </div>
          </div>
          <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-0.5px_0px_0px_#e1e5f2]" />
        </div>
        <div className="bg-white h-[52px] relative shrink-0 w-full" data-name="表格 Table 元素/单元格元素/百分比">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
              <p className="font-['Avenir:Roman',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#101019] text-[14px] whitespace-nowrap" style={{ fontFeatureSettings: "'lnum', 'pnum'" }}>
                86%
              </p>
            </div>
          </div>
          <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-0.5px_0px_0px_#e1e5f2]" />
        </div>
      </div>
      <Table1 />
    </div>
  );
}

function Table() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" data-name="表格 Table">
      <LayoutX />
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute content-stretch flex flex-col items-end left-[20px] top-[53px] w-[743px]">
      <Table />
    </div>
  );
}

function IcUpload() {
  return (
    <div className="h-[13.333px] relative w-[14px]" data-name="ic_upload_14">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 13.333">
        <g id="ic_upload_14">
          <path d={svgPaths.p6b25280} fill="var(--fill-0, #444963)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Component8() {
  return (
    <div className="content-stretch flex gap-[4px] h-[28px] items-center justify-center px-[8px] py-[3px] relative rounded-[6px]" data-name="上传资料">
      <div aria-hidden="true" className="absolute border border-[#cfd5e8] border-solid inset-[-0.5px] pointer-events-none rounded-[6.5px]" />
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <p className="font-['Alibaba_PuHuiTi_3.0:65_Medium',sans-serif] leading-[1.5] not-italic relative text-[#444963] text-[14px] text-center whitespace-nowrap">新建文件夹</p>
        </div>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <IcUpload />
        </div>
      </div>
    </div>
  );
}

function Component2() {
  return (
    <div className="bg-white h-[652px] relative rounded-[12px] shrink-0 w-full" data-name="表格">
      <div aria-hidden="true" className="absolute border border-[#e9ecf5] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Component3 />
      <Frame5 />
      <div className="absolute flex h-[28px] items-center justify-center left-[660px] top-[14px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <Component8 />
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Component2 />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-[#f5faff] content-stretch flex flex-col items-start pb-[16px] pt-[32px] px-[24px] relative size-full" data-name="内容">
      <div className="content-stretch flex items-center justify-between relative shrink-0 w-[783px]" data-name="二级页面-tab+搜索+选择按钮">
        <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="tab 组">
          <div className="content-stretch flex flex-col h-[64px] items-center justify-center relative shrink-0" data-name="全部">
            <div className="flex flex-col font-['Alibaba_PuHuiTi_3.0:75_SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#101019] text-[20px] text-center whitespace-nowrap">
              <p className="leading-[1.5]">我的资源</p>
            </div>
            <Frame />
          </div>
          <div className="content-stretch flex flex-col h-[64px] items-center justify-center relative shrink-0" data-name="课程">
            <div className="flex flex-col font-['Alibaba_PuHuiTi_3.0:75_SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#abb4d1] text-[20px] text-center whitespace-nowrap">
              <p className="leading-[1.5]">公共资源</p>
            </div>
            <Frame1 />
          </div>
        </div>
        <Frame3 />
      </div>
      <Frame4 />
    </div>
  );
}