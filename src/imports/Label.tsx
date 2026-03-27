import clsx from "clsx";
import svgPaths from "./svg-bwtb2unt3t";
type TextProps = {
  additionalClassNames?: string;
};

function Text({ children, additionalClassNames = "" }: React.PropsWithChildren<TextProps>) {
  return (
    <div className={clsx("h-[18px] relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">{children}</div>
    </div>
  );
}
type ComponentProps = {
  className?: string;
  propValue?: "小 12" | "大 16" | "中 14";
  propValue1?: boolean;
  propValue2?: boolean;
  propValue3?: boolean;
};

function Component({ className, propValue = "大 16", propValue1 = false, propValue2 = false, propValue3 = false }: ComponentProps) {
  const is12AndTrueAndFalseAndIsFalseOrTrue = propValue === "小 12" && propValue1 && !propValue2 && [false, true].includes(propValue3);
  const is12AndTrueAndTrueAndIsFalseOrTrue = propValue === "小 12" && propValue1 && propValue2 && [false, true].includes(propValue3);
  const is14AndTrueAndFalseAndIsFalseOrTrue = propValue === "中 14" && propValue1 && !propValue2 && [false, true].includes(propValue3);
  const is14AndTrueAndTrueAndIsFalseOrTrue = propValue === "中 14" && propValue1 && propValue2 && [false, true].includes(propValue3);
  const is16AndTrueAndTrueAndIsFalseOrTrue = propValue === "大 16" && propValue1 && propValue2 && [false, true].includes(propValue3);
  const isTrueAndIs16AndFalseAndFalseOr16AndFalseAndTrueOr16AndTrueAnd = propValue1 && ((propValue === "大 16" && !propValue2 && !propValue3) || (propValue === "大 16" && !propValue2 && propValue3) || (propValue === "大 16" && propValue2 && !propValue3) || (propValue === "大 16" && propValue2 && propValue3) || (propValue === "中 14" && !propValue2 && !propValue3) || (propValue === "中 14" && propValue2 && !propValue3) || (propValue === "中 14" && !propValue2 && propValue3) || (propValue === "中 14" && propValue2 && propValue3) || (propValue === "小 12" && !propValue2 && !propValue3) || (propValue === "小 12" && propValue2 && !propValue3) || (propValue === "小 12" && !propValue2 && propValue3) || (propValue === "小 12" && propValue2 && propValue3));
  const isTrueAndTrueAndIs16AndFalseOr16AndTrueOr14AndFalseOr14AndTrue = propValue1 && propValue2 && ((propValue === "大 16" && !propValue3) || (propValue === "大 16" && propValue3) || (propValue === "中 14" && !propValue3) || (propValue === "中 14" && propValue3) || (propValue === "小 12" && !propValue3) || (propValue === "小 12" && propValue3));
  return (
    <div className={className || `relative ${propValue === "小 12" && propValue1 && propValue3 && [false, true].includes(propValue2) ? "opacity-40 size-[12px]" : propValue === "小 12" && ((!propValue1 && !propValue2 && !propValue3) || (!propValue1 && !propValue2 && propValue3) || (propValue1 && !propValue2 && !propValue3) || (propValue1 && propValue2 && !propValue3)) ? "size-[12px]" : propValue === "中 14" && propValue1 && propValue3 && [false, true].includes(propValue2) ? "opacity-40 size-[14px]" : propValue === "中 14" && ((!propValue1 && !propValue2 && !propValue3) || (!propValue1 && !propValue2 && propValue3) || (propValue1 && !propValue2 && !propValue3) || (propValue1 && propValue2 && !propValue3)) ? "size-[14px]" : propValue === "大 16" && propValue1 && propValue3 && [false, true].includes(propValue2) ? "opacity-40 size-[16px]" : "size-[16px]"}`}>
      <div className={`absolute inset-0 rounded-[3px] ${isTrueAndIs16AndFalseAndFalseOr16AndFalseAndTrueOr16AndTrueAnd ? "bg-[#6574fc]" : !propValue1 && !propValue2 && propValue3 && ["大 16", "中 14", "小 12"].includes(propValue) ? "bg-[#f4f7fe] border border-[#cfd5e8] border-solid" : "bg-white border border-[#cfd5e8] border-solid"}`} data-name="checkbox" />
      {isTrueAndIs16AndFalseAndFalseOr16AndFalseAndTrueOr16AndTrueAnd && (
        <div className={`absolute ${is12AndTrueAndTrueAndIsFalseOrTrue ? "bottom-[41.67%] left-1/4 right-1/4 top-[58.33%]" : is14AndTrueAndTrueAndIsFalseOrTrue ? "bottom-[42.86%] left-1/4 right-1/4 top-[57.14%]" : is16AndTrueAndTrueAndIsFalseOrTrue ? "bottom-[43.75%] left-1/4 right-1/4 top-[56.25%]" : "inset-[31.25%]"}`}>
          <div className={`absolute ${is12AndTrueAndFalseAndIsFalseOrTrue ? "inset-[-16.67%]" : is14AndTrueAndFalseAndIsFalseOrTrue ? "inset-[-14.29%]" : isTrueAndTrueAndIs16AndFalseOr16AndTrueOr14AndFalseOr14AndTrue ? "inset-[-1.5px_0_0_0]" : "inset-[-12.5%]"}`}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox={is12AndTrueAndTrueAndIsFalseOrTrue ? "0 0 6 1.5" : is12AndTrueAndFalseAndIsFalseOrTrue ? "0 0 6.00011 6.0001" : is14AndTrueAndTrueAndIsFalseOrTrue ? "0 0 7 1.5" : is14AndTrueAndFalseAndIsFalseOrTrue ? "0 0 6.75011 6.7501" : is16AndTrueAndTrueAndIsFalseOrTrue ? "0 0 8 1.5" : "0 0 7.50011 7.5001"}>
              {propValue1 && !propValue2 && ((propValue === "大 16" && !propValue3) || (propValue === "大 16" && propValue3) || (propValue === "中 14" && !propValue3) || (propValue === "中 14" && propValue3) || (propValue === "小 12" && !propValue3) || (propValue === "小 12" && propValue3)) && <path d={is12AndTrueAndFalseAndIsFalseOrTrue ? svgPaths.p2495ca80 : is14AndTrueAndFalseAndIsFalseOrTrue ? svgPaths.p13d48940 : svgPaths.p2162ffc0} id="Vector 2267" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />}
              {isTrueAndTrueAndIs16AndFalseOr16AndTrueOr14AndFalseOr14AndTrue && <line id="Line 1" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" x1="0.75" x2={is12AndTrueAndTrueAndIsFalseOrTrue ? "5.25" : is14AndTrueAndTrueAndIsFalseOrTrue ? "6.25" : "7.25"} y1="0.75" y2="0.75" />}
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Label() {
  return (
    <div className="content-stretch flex gap-[16px] items-center px-[17px] py-px relative rounded-[6px] size-full" data-name="Label">
      <div aria-hidden="true" className="absolute border border-[#dfe3f0] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex-[1_0_0] min-h-px min-w-px relative">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative w-full">
          <Component className="opacity-40 relative shrink-0 size-[16px]" propValue1 propValue3 />
          <div className="content-stretch flex flex-[284_0_0] flex-col gap-[2px] h-[41px] items-start min-h-px min-w-px relative" data-name="TaskManagementPage">
            <div className="h-[21px] relative shrink-0 w-full" data-name="Container">
              <p className="absolute font-['Alibaba_PuHuiTi_3.0:65_Medium',sans-serif] leading-[21px] left-0 not-italic text-[#101019] text-[14px] top-[-0.5px] whitespace-nowrap">24. 诗歌吟课 3</p>
            </div>
            <div className="content-stretch flex gap-[6px] h-[18px] items-center relative shrink-0 w-full" data-name="Container">
              <Text additionalClassNames="w-[41.102px]">
                <div className="absolute left-0 size-[14px] top-[2px]" data-name="Ic">
                  <div className="absolute content-stretch flex flex-col h-[4.469px] items-start left-[6.5px] top-[5.27px] w-[3.758px]" data-name="Container">
                    <div className="h-[4.469px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                      <div className="absolute inset-[11.18%_13.3%]">
                        <div className="absolute inset-[-14.4%_-18.1%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.75656 4.46961">
                            <path d={svgPaths.p2684cd00} fill="var(--fill-0, #838BAB)" id="Vector 2075" stroke="var(--stroke-0, #838BAB)" strokeWidth="0.998387" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute content-stretch flex flex-col items-start left-[1.9px] size-[12.195px] top-[1.4px]" data-name="Container">
                    <div className="h-[12.195px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.1953 12.1953">
                        <path d={svgPaths.p1319d700} fill="var(--fill-0, #838BAB)" id="Subtract" />
                      </svg>
                    </div>
                  </div>
                </div>
                <p className="absolute font-['Alibaba_PuHuiTi_3.0:55_Regular_L3','Noto_Sans:Regular','Noto_Sans_SC:Regular',sans-serif] leading-[18px] left-[18px] text-[#838bab] text-[12px] top-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
                  AI课
                </p>
              </Text>
              <Text additionalClassNames="w-[4.289px]">
                <p className="absolute font-['Alibaba_PuHuiTi_3.0:55_Regular_L3','Noto_Sans:Regular',sans-serif] leading-[18px] left-0 text-[#838bab] text-[12px] top-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
                  ·
                </p>
              </Text>
              <Text additionalClassNames="w-[73.039px]">
                <p className="absolute font-['Alibaba_PuHuiTi_3.0:55_Regular_L3','Noto_Sans_SC:Regular','Noto_Sans:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[18px] left-0 text-[#838bab] text-[12px] top-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
                  预计 35 分钟 (已学25分钟)
                </p>
              </Text>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white h-[32px] relative rounded-[28px] shrink-0 w-[72px]" data-name="Button">
        <div aria-hidden="true" className="absolute border border-[rgba(74,79,237,0.35)] border-solid inset-0 pointer-events-none rounded-[28px]" />
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[10px] py-px relative size-full">
          <p className="font-['Alibaba_PuHuiTi_3.0:55_Regular_L3','Noto_Sans_SC:Regular',sans-serif] leading-[21px] relative shrink-0 text-[#4a4fed] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
            预览
          </p>
        </div>
      </div>
    </div>
  );
}