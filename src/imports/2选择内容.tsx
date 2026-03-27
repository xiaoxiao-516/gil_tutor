import svgPaths from "./svg-vwlpb83c5k";

export default function Component() {
  return (
    <div className="content-stretch flex flex-col items-start p-[24px] relative rounded-[20px] size-full" data-name="2选择内容">
      <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative w-full" data-name="图文区">
        <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-full" data-name="图文">
          <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full">
            <div className="relative shrink-0 size-[120px]" data-name="布置对象-空">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 120 120">
                <g id="å¸ç½®å¯¹è±¡-ç©º">
                  <rect fill="white" height="120" width="120" />
                  <path d={svgPaths.p286f9600} fill="var(--fill-0, #E0EAFF)" id="Vector 5610" />
                  <path d={svgPaths.p145d5b00} fill="var(--fill-0, #BBCBFC)" id="Vector 5596" />
                  <path d={svgPaths.pfbd6600} fill="var(--fill-0, white)" id="Rectangle 34624359" />
                  <path d="M66 49H82" id="Vector 5622" stroke="var(--stroke-0, #101019)" strokeWidth="1.5" />
                  <path d="M66 59H82" id="Vector 5623" stroke="var(--stroke-0, #101019)" strokeWidth="1.5" />
                  <path d={svgPaths.p19ea31c0} fill="var(--fill-0, #101019)" id="Union" />
                  <g id="Group 1912054719">
                    <path d={svgPaths.p39acd500} fill="var(--fill-0, #BBCBFC)" id="Rectangle 34624354" />
                    <circle cx="45" cy="51" fill="var(--fill-0, #9CB1FC)" id="Ellipse 2516" r="6" />
                    <path d={svgPaths.p1914aaf0} fill="var(--fill-0, #9CB1FC)" id="Ellipse 2517" />
                  </g>
                  <g id=" æ">
                    <path d={svgPaths.p31eaef00} fill="var(--fill-0, white)" id="Vector 5614" />
                    <path d={svgPaths.p2bcb300} id="Vector 5613" stroke="var(--stroke-0, #101019)" strokeWidth="1.5" />
                  </g>
                </g>
              </svg>
            </div>
            <div className="content-stretch flex flex-col gap-[4px] items-center leading-[1.5] not-italic relative shrink-0 text-[14px] w-full whitespace-nowrap">
              <p className="font-['Alibaba_PuHuiTi_3.0:65_Medium',sans-serif] relative shrink-0 text-[#444963] text-center">该学生尚未完成诊断</p>
              <p className="font-['Alibaba_PuHuiTi_3.0:55_Regular',sans-serif] relative shrink-0 text-[#838bab]">无法自动生成学习规划。请先布置诊断。</p>
            </div>
          </div>
          <div className="bg-white content-stretch flex h-[32px] items-center justify-center px-[16px] py-[6px] relative rounded-[16px] shrink-0 w-[80px]" data-name="Button 按钮">
            <div aria-hidden="true" className="absolute border border-[#6574fc] border-solid inset-0 pointer-events-none rounded-[16px]" />
            <p className="font-['Alibaba_PuHuiTi_3.0:65_Medium',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#6574fc] text-[14px] text-center whitespace-nowrap">去诊断</p>
          </div>
        </div>
      </div>
    </div>
  );
}