import clsx from "clsx";
import svgPaths from "./svg-aid51fiwv2";

function PickerBody({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-white h-[310px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#e9ecf5] border-r-[0.5px] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[4px] items-start pl-[16px] pr-[12px] py-[16px] relative size-full">{children}</div>
    </div>
  );
}

function Wrapper3({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-col items-center justify-center size-full">
      <div className="content-stretch flex flex-col items-center justify-center relative size-full">{children}</div>
    </div>
  );
}

function PickerHeader({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[20px] relative w-full">{children}</div>
      </div>
    </div>
  );
}
type Wrapper2Props = {
  additionalClassNames?: string;
};

function Wrapper2({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper2Props>) {
  return (
    <div className={clsx("relative shrink-0", additionalClassNames)}>
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center relative">{children}</div>
      </div>
    </div>
  );
}

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative rounded-[4px] shrink-0">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center relative">{children}</div>
      </div>
    </div>
  );
}

function Helper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex-[1_0_0] h-[36px] min-h-px min-w-px relative rounded-[14px]">
      <Wrapper3>{children}</Wrapper3>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[12px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="icon-wrapper">{children}</g>
      </svg>
    </div>
  );
}

function IconWrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper>
      <g id="Union">{children}</g>
    </Wrapper>
  );
}

function Helper() {
  return (
    <div className="flex-[1_0_0] h-[36px] min-h-px min-w-px relative rounded-[14px]">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center size-full" />
      </div>
    </div>
  );
}

function Tr() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px overflow-clip relative w-full">
      <Helper1>
        <Text2 text="日" />
      </Helper1>
      <Helper1>
        <Text2 text="一" />
      </Helper1>
      <Helper1>
        <Text2 text="二" />
      </Helper1>
      <Helper1>
        <Text2 text="三" />
      </Helper1>
      <Helper1>
        <Text2 text="四" />
      </Helper1>
      <Helper1>
        <Text2 text="五" />
      </Helper1>
      <Helper1>
        <Text2 text="六" />
      </Helper1>
    </div>
  );
}
type Text2Props = {
  text: string;
};

function Text2({ text }: Text2Props) {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]">
      <div className="flex flex-col font-['Avenir:Heavy','Noto_Sans_JP:Black',sans-serif] justify-center leading-[0] relative shrink-0 text-[#838bab] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wght' 900", fontFeatureSettings: "'lnum', 'pnum'" }}>
        <p className="leading-[1.5]">{text}</p>
      </div>
    </div>
  );
}
type ButtonText1Props = {
  text: string;
};

function ButtonText1({ text }: ButtonText1Props) {
  return (
    <Wrapper1>
      <p className="font-['Alibaba_PuHuiTi_3.0:75_SemiBold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#202224] text-[16px] whitespace-nowrap">{text}</p>
    </Wrapper1>
  );
}
type HeaderViewProps = {
  text: string;
  text1: string;
  text2: string;
};

function HeaderView({ text, text1, text2 }: HeaderViewProps) {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <ButtonText1 text={text} />
      <p className="font-['PingFang_SC:Medium',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#101019] text-[14px] text-center whitespace-nowrap">{text1}</p>
      <ButtonText1 text={text2} />
    </div>
  );
}
type ButtonTextProps = {
  text: string;
};

function ButtonText({ text }: ButtonTextProps) {
  return (
    <div className="content-stretch flex flex-col items-start justify-center py-[4px] relative rounded-[4px] shrink-0">
      <p className="font-['DFP_King_Gothic_GB_Medium:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#444963] text-[14px] text-center whitespace-nowrap">{text}</p>
    </div>
  );
}
type Text1Props = {
  text: string;
  additionalClassNames?: string;
};

function Text1({ text, additionalClassNames = "" }: Text1Props) {
  return (
    <div style={{ fontFeatureSettings: "'lnum', 'pnum'" }} className={clsx("flex flex-col font-['Avenir:Heavy',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center whitespace-nowrap", additionalClassNames)}>
      <p className="leading-[1.5]">{text}</p>
    </div>
  );
}
type TextProps = {
  text: string;
};

function Text({ text }: TextProps) {
  return (
    <div className="bg-[#6574fc] content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[28px]">
      <Text1 text={text} additionalClassNames="text-white" />
    </div>
  );
}
type ComponentProps = {
  className?: string;
  propValue?: boolean;
  propValue1?: boolean;
  propValue2?: boolean;
  propValue3?: boolean;
  propValue4?: boolean;
  propValue5?: boolean;
  propValue6?: boolean;
  propValue7?: boolean;
};

function Component({ className, propValue = true, propValue1 = false, propValue2 = false, propValue3 = false, propValue4 = false, propValue5 = false, propValue6 = false, propValue7 = false }: ComponentProps) {
  const isFalseAndFalseAndFalseAndFalseAndFalseAndFalseAndFalseAndFalse = !propValue && !propValue1 && !propValue2 && !propValue3 && !propValue4 && !propValue5 && !propValue6 && !propValue7;
  const isFalseAndTrueAndFalseAndFalseAndFalseAndFalseAndFalseAndFalse = !propValue && propValue1 && !propValue2 && !propValue3 && !propValue4 && !propValue5 && !propValue6 && !propValue7;
  const isTrueAndFalseAndFalseAndFalseAndFalseAndFalseAndFalseAndFalse = propValue && !propValue1 && !propValue2 && !propValue3 && !propValue4 && !propValue5 && !propValue6 && !propValue7;
  const isTrueAndFalseAndFalseAndFalseAndFalseAndFalseAndFalseAndIsFalse = propValue1 && !propValue2 && !propValue3 && !propValue4 && !propValue5 && !propValue6 && !propValue7 && [false, true].includes(propValue);
  const isTrueAndFalseAndFalseAndFalseAndFalseAndFalseAndFalseAndTrue = propValue && !propValue1 && !propValue2 && !propValue3 && !propValue4 && !propValue5 && !propValue6 && propValue7;
  const isTrueAndFalseAndFalseAndFalseAndFalseAndIsTrueAndFalseAndFalse = propValue && !propValue1 && !propValue2 && !propValue4 && !propValue6 && ((propValue3 && !propValue5 && !propValue7) || (!propValue3 && propValue5 && !propValue7) || (propValue3 && !propValue5 && propValue7) || (!propValue3 && propValue5 && propValue7));
  const isTrueAndFalseAndFalseAndFalseAndFalseAndTrueAndFalseAndFalse = propValue && !propValue1 && !propValue2 && !propValue3 && !propValue4 && propValue5 && !propValue6 && !propValue7;
  const isTrueAndFalseAndFalseAndFalseAndFalseAndTrueAndFalseAndTrue = propValue && !propValue1 && !propValue2 && !propValue3 && !propValue4 && propValue5 && !propValue6 && propValue7;
  const isTrueAndFalseAndFalseAndFalseAndTrueAndFalseAndFalseAndFalse = propValue && !propValue1 && !propValue2 && !propValue3 && propValue4 && !propValue5 && !propValue6 && !propValue7;
  const isTrueAndFalseAndFalseAndFalseAndTrueAndFalseAndFalseAndTrue = propValue && !propValue1 && !propValue2 && !propValue3 && propValue4 && !propValue5 && !propValue6 && propValue7;
  const isTrueAndFalseAndFalseAndFalseAndTrueAndFalseAndTrueAndFalse = propValue && !propValue1 && !propValue2 && !propValue3 && propValue4 && !propValue5 && propValue6 && !propValue7;
  const isTrueAndFalseAndFalseAndTrueAndFalseAndFalseAndFalseAndFalse = propValue && !propValue1 && !propValue2 && propValue3 && !propValue4 && !propValue5 && !propValue6 && !propValue7;
  const isTrueAndFalseAndFalseAndTrueAndFalseAndFalseAndFalseAndTrue = propValue && !propValue1 && !propValue2 && propValue3 && !propValue4 && !propValue5 && !propValue6 && propValue7;
  const isTrueAndFalseAndTrueAndFalseAndFalseAndFalseAndFalseAndFalse = propValue && !propValue1 && propValue2 && !propValue3 && !propValue4 && !propValue5 && !propValue6 && !propValue7;
  const isTrueAndTrueAndFalseAndFalseAndFalseAndFalseAndFalseAndFalse = propValue && propValue1 && !propValue2 && !propValue3 && !propValue4 && !propValue5 && !propValue6 && !propValue7;
  const isTrueAndTrueAndFalseAndFalseAndTrueAndFalseAndFalseAndFalse = propValue && propValue1 && !propValue2 && !propValue3 && propValue4 && !propValue5 && !propValue6 && !propValue7;
  const isTrueAndTrueAndFalseAndFalseAndTrueAndFalseAndTrueAndFalse = propValue && propValue1 && !propValue2 && !propValue3 && propValue4 && !propValue5 && propValue6 && !propValue7;
  const isTrueAndTrueAndTrueAndFalseAndFalseAndFalseAndFalseAndFalse = propValue && propValue1 && propValue2 && !propValue3 && !propValue4 && !propValue5 && !propValue6 && !propValue7;
  return (
    <div className={className || `relative ${isTrueAndTrueAndFalseAndFalseAndFalseAndFalseAndFalseAndFalse ? "size-[36px]" : isTrueAndFalseAndFalseAndFalseAndFalseAndFalseAndFalseAndTrue ? "rounded-[18px] size-[36px]" : isTrueAndFalseAndFalseAndFalseAndTrueAndFalseAndFalseAndTrue ? "bg-[#9cb1fc] size-[36px]" : propValue && !propValue1 && !propValue2 && !propValue3 && !propValue4 && propValue5 && !propValue6 && [false, true].includes(propValue7) ? "bg-[#ebf1ff] rounded-br-[36px] rounded-tr-[36px] w-[36px]" : propValue && !propValue1 && !propValue2 && propValue3 && !propValue4 && !propValue5 && !propValue6 && [false, true].includes(propValue7) ? "bg-[#ebf1ff] rounded-bl-[36px] rounded-tl-[36px] w-[36px]" : propValue && !propValue2 && !propValue3 && propValue4 && !propValue5 && propValue6 && !propValue7 && [false, true].includes(propValue1) ? "bg-[#f4f7fe] size-[36px]" : propValue && !propValue2 && !propValue3 && propValue4 && !propValue5 && !propValue6 && !propValue7 && [false, true].includes(propValue1) ? "bg-[#ebf1ff] size-[36px]" : isTrueAndFalseAndTrueAndFalseAndFalseAndFalseAndFalseAndFalse ? "rounded-[14px]" : "rounded-[14px] size-[36px]"}`}>
      {(isFalseAndFalseAndFalseAndFalseAndFalseAndFalseAndFalseAndFalse || isTrueAndFalseAndTrueAndFalseAndFalseAndFalseAndFalseAndFalse || isTrueAndFalseAndFalseAndFalseAndTrueAndFalseAndFalseAndFalse || isTrueAndFalseAndFalseAndFalseAndTrueAndFalseAndTrueAndFalse || isTrueAndFalseAndFalseAndFalseAndFalseAndFalseAndFalseAndFalse || isFalseAndTrueAndFalseAndFalseAndFalseAndFalseAndFalseAndFalse || isTrueAndTrueAndTrueAndFalseAndFalseAndFalseAndFalseAndFalse || isTrueAndTrueAndFalseAndFalseAndTrueAndFalseAndTrueAndFalse || isTrueAndTrueAndFalseAndFalseAndTrueAndFalseAndFalseAndFalse || isTrueAndFalseAndFalseAndTrueAndFalseAndFalseAndFalseAndFalse || isTrueAndFalseAndFalseAndFalseAndFalseAndTrueAndFalseAndFalse || isTrueAndFalseAndFalseAndTrueAndFalseAndFalseAndFalseAndTrue || isTrueAndFalseAndFalseAndFalseAndFalseAndTrueAndFalseAndTrue || isTrueAndFalseAndFalseAndFalseAndFalseAndFalseAndFalseAndTrue || isTrueAndTrueAndFalseAndFalseAndFalseAndFalseAndFalseAndFalse) && (
        <div className={`flex ${isTrueAndFalseAndFalseAndFalseAndFalseAndIsTrueAndFalseAndFalse ? "content-stretch items-start relative w-full" : isTrueAndFalseAndFalseAndFalseAndFalseAndFalseAndFalseAndIsFalse ? "flex-col items-center size-full" : propValue && !propValue1 && !propValue2 && !propValue3 && !propValue5 && ((propValue4 && !propValue6 && !propValue7) || (propValue4 && propValue6 && !propValue7) || (!propValue4 && !propValue6 && propValue7)) ? "flex-row items-center justify-center size-full" : isTrueAndFalseAndTrueAndFalseAndFalseAndFalseAndFalseAndFalse ? "content-stretch items-start p-[4px] relative" : "flex-col items-center justify-center size-full"}`}>
          {(isFalseAndFalseAndFalseAndFalseAndFalseAndFalseAndFalseAndFalse || isTrueAndFalseAndFalseAndFalseAndTrueAndFalseAndFalseAndFalse || isTrueAndFalseAndFalseAndFalseAndTrueAndFalseAndTrueAndFalse || isTrueAndFalseAndFalseAndFalseAndFalseAndFalseAndFalseAndFalse || isFalseAndTrueAndFalseAndFalseAndFalseAndFalseAndFalseAndFalse || isTrueAndTrueAndTrueAndFalseAndFalseAndFalseAndFalseAndFalse || isTrueAndTrueAndFalseAndFalseAndTrueAndFalseAndTrueAndFalse || isTrueAndTrueAndFalseAndFalseAndTrueAndFalseAndFalseAndFalse || isTrueAndFalseAndFalseAndTrueAndFalseAndFalseAndFalseAndFalse || isTrueAndFalseAndFalseAndFalseAndFalseAndTrueAndFalseAndFalse || isTrueAndFalseAndFalseAndTrueAndFalseAndFalseAndFalseAndTrue || isTrueAndFalseAndFalseAndFalseAndFalseAndTrueAndFalseAndTrue || isTrueAndFalseAndFalseAndFalseAndFalseAndFalseAndFalseAndTrue || isTrueAndTrueAndFalseAndFalseAndFalseAndFalseAndFalseAndFalse) && (
            <div className={`relative ${isTrueAndFalseAndFalseAndFalseAndFalseAndIsTrueAndFalseAndFalse ? "flex-[1_0_0] h-[36px] min-h-px min-w-px" : propValue && propValue1 && !propValue2 && !propValue3 && propValue4 && !propValue5 && !propValue7 && [true, false].includes(propValue6) ? "content-stretch flex flex-col gap-[4px] items-center justify-center pt-[4px] size-full" : isTrueAndTrueAndTrueAndFalseAndFalseAndFalseAndFalseAndFalse ? "content-stretch flex flex-col items-center justify-center p-[4px] size-full" : isTrueAndFalseAndFalseAndFalseAndFalseAndFalseAndFalseAndIsFalse ? "content-stretch flex flex-col items-center size-full" : propValue && !propValue1 && !propValue2 && !propValue3 && !propValue5 && ((propValue4 && propValue6 && !propValue7) || (!propValue4 && !propValue6 && propValue7)) ? "content-stretch flex items-center justify-center size-full" : isTrueAndFalseAndFalseAndFalseAndTrueAndFalseAndFalseAndFalse ? "content-stretch flex items-center justify-center p-[4px] size-full" : "content-stretch flex flex-col items-center justify-center size-full"}`}>
              {(isFalseAndFalseAndFalseAndFalseAndFalseAndFalseAndFalseAndFalse || isTrueAndFalseAndFalseAndFalseAndFalseAndFalseAndFalseAndFalse || isFalseAndTrueAndFalseAndFalseAndFalseAndFalseAndFalseAndFalse || isTrueAndTrueAndTrueAndFalseAndFalseAndFalseAndFalseAndFalse || isTrueAndTrueAndFalseAndFalseAndTrueAndFalseAndTrueAndFalse || isTrueAndTrueAndFalseAndFalseAndTrueAndFalseAndFalseAndFalse || isTrueAndFalseAndFalseAndTrueAndFalseAndFalseAndFalseAndFalse || isTrueAndFalseAndFalseAndFalseAndFalseAndTrueAndFalseAndFalse || isTrueAndFalseAndFalseAndTrueAndFalseAndFalseAndFalseAndTrue || isTrueAndFalseAndFalseAndFalseAndFalseAndTrueAndFalseAndTrue || isTrueAndFalseAndFalseAndFalseAndFalseAndFalseAndFalseAndTrue || isTrueAndTrueAndFalseAndFalseAndFalseAndFalseAndFalseAndFalse) && (
                <div className={`content-stretch flex flex-col items-center justify-center py-[5px] ${isTrueAndFalseAndFalseAndFalseAndFalseAndFalseAndFalseAndTrue ? "bg-[#f4f7fe] px-[8px] relative rounded-[28px] shrink-0 size-[28px]" : propValue && !propValue1 && !propValue2 && !propValue4 && !propValue6 && ((!propValue3 && propValue5 && !propValue7) || (propValue3 && !propValue5 && propValue7) || (!propValue3 && propValue5 && propValue7)) ? "absolute bg-[#6574fc] h-[28px] left-[4px] px-[6px] right-[4px] rounded-[16px] top-[4px]" : isTrueAndFalseAndFalseAndTrueAndFalseAndFalseAndFalseAndFalse ? "-translate-x-1/2 absolute bg-[#6574fc] h-[28px] left-1/2 px-[6px] rounded-[16px] top-[4px] w-[29px]" : isTrueAndTrueAndFalseAndFalseAndTrueAndFalseAndFalseAndFalse ? "px-[8px] relative rounded-[28px] shrink-0 size-[28px]" : isTrueAndTrueAndFalseAndFalseAndTrueAndFalseAndTrueAndFalse ? "bg-[#f4f7fe] px-[8px] relative rounded-[16px] shrink-0 size-[28px]" : isTrueAndTrueAndTrueAndFalseAndFalseAndFalseAndFalseAndFalse ? "bg-[#6574fc] px-[8px] relative rounded-[16px] shrink-0 size-[28px]" : "px-[8px] relative rounded-[16px] shrink-0 size-[36px]"}`} data-name="时间">
                  <div className={`flex flex-col font-["Avenir:Heavy",sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center ${isTrueAndTrueAndFalseAndFalseAndFalseAndFalseAndFalseAndFalse ? "text-[#4a4fed] whitespace-nowrap" : isTrueAndFalseAndFalseAndTrueAndFalseAndFalseAndFalseAndFalse ? "text-white w-full" : propValue && !propValue4 && !propValue6 && ((propValue1 && propValue2 && !propValue3 && !propValue5 && !propValue7) || (!propValue1 && !propValue2 && !propValue3 && propValue5 && !propValue7) || (!propValue1 && !propValue2 && propValue3 && !propValue5 && propValue7) || (!propValue1 && !propValue2 && !propValue3 && propValue5 && propValue7)) ? "text-white whitespace-nowrap" : !propValue2 && !propValue3 && !propValue5 && !propValue6 && ((propValue && !propValue1 && !propValue4 && !propValue7) || (!propValue && propValue1 && !propValue4 && !propValue7) || (propValue && propValue1 && propValue4 && !propValue7) || (propValue && !propValue1 && !propValue4 && propValue7)) ? "text-[#444963] whitespace-nowrap" : "text-[#abb4d1] whitespace-nowrap"}`} style={{ fontFeatureSettings: "'lnum', 'pnum'" }}>
                    <p className="leading-[1.5]">22</p>
                  </div>
                </div>
              )}
              {propValue1 && !propValue3 && !propValue5 && !propValue7 && ((!propValue && !propValue2 && !propValue4 && !propValue6) || (propValue && propValue2 && !propValue4 && !propValue6) || (propValue && !propValue2 && propValue4 && propValue6) || (propValue && !propValue2 && propValue4 && !propValue6) || (propValue && !propValue2 && !propValue4 && !propValue6)) && (
                <div className="h-0 relative shrink-0 w-[4px]" data-name="当前">
                  <div className={`absolute ${isTrueAndTrueAndTrueAndFalseAndFalseAndFalseAndFalseAndFalse ? "inset-[0_0_-8px_0]" : "inset-[0_0_-4px_0]"}`}>
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox={isTrueAndTrueAndTrueAndFalseAndFalseAndFalseAndFalseAndFalse ? "0 0 4 8" : "0 0 4 4"}>
                      <g id="å½å">
                        <circle cx="2" cy={isTrueAndTrueAndTrueAndFalseAndFalseAndFalseAndFalseAndFalse ? "6" : "2"} fill="var(--fill-0, #6574FC)" id="Ellipse 5" r="2" />
                      </g>
                    </svg>
                  </div>
                </div>
              )}
              {propValue && !propValue1 && !propValue2 && !propValue3 && propValue4 && !propValue5 && !propValue7 && [false, true].includes(propValue6) && (
                <div className={`flex flex-col font-["Avenir:Heavy",sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center whitespace-nowrap ${isTrueAndFalseAndFalseAndFalseAndTrueAndFalseAndTrueAndFalse ? "text-[#abb4d1]" : "text-[#444963]"}`} style={{ fontFeatureSettings: "'lnum', 'pnum'" }}>
                  <p className="leading-[1.5]">22</p>
                </div>
              )}
            </div>
          )}
          {isTrueAndFalseAndTrueAndFalseAndFalseAndFalseAndFalseAndFalse && <Text text="1" />}
        </div>
      )}
      {isTrueAndFalseAndFalseAndFalseAndTrueAndFalseAndFalseAndTrue && (
        <div className="absolute content-stretch flex flex-col inset-[11.11%] items-center justify-center px-[8px] py-[5px] rounded-[28px]" data-name="时间">
          <Text1 text="22" additionalClassNames="text-[#444963]" />
        </div>
      )}
    </div>
  );
}

export default function Component1() {
  return (
    <div className="relative shadow-[0px_12px_60px_0px_rgba(171,180,209,0.3)] size-full" data-name="日历-单独一天">
      <div className="absolute content-stretch flex items-start left-0 overflow-clip rounded-[24px] top-0" data-name="DatePicker-dropdown日期选择框下拉菜单">
        <div className="bg-[#f4f7fe] relative self-stretch shrink-0 w-[131px]" data-name="layout布局模块/纵向X5">
          <div className="overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col gap-[20px] items-start p-[32px] relative size-full">
              <ButtonText text="最近7天" />
              <ButtonText text="最近两周" />
              <ButtonText text="1个月内" />
            </div>
          </div>
        </div>
        <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
          <div className="col-1 content-stretch flex items-center ml-0 mt-0 relative row-1">
            <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[320px]" data-name="DatePicker-dropdown日期选择框下拉菜单">
              <PickerHeader>
                <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="item">
                  <Wrapper2 additionalClassNames="rounded-[3.429px]">
                    <IconWrapper>
                      <path d={svgPaths.p3f689400} fill="var(--fill-0, #444963)" />
                      <path d={svgPaths.p1df14e80} fill="var(--fill-0, #444963)" />
                    </IconWrapper>
                  </Wrapper2>
                  <Wrapper2 additionalClassNames="rounded-[3.429px]">
                    <Wrapper>
                      <path clipRule="evenodd" d={svgPaths.p38acaf00} fill="var(--fill-0, #444963)" fillRule="evenodd" id="Union" />
                    </Wrapper>
                  </Wrapper2>
                </div>
                <HeaderView text="2025年" text1="-" text2="03月" />
                <div className="content-stretch flex gap-[8px] h-[12px] items-start shrink-0 w-[32px]" data-name="item" />
              </PickerHeader>
              <PickerBody>
                <Tr />
                <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative w-full" data-name="tr">
                  <Helper1>
                    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
                      <Text1 text="26" additionalClassNames="text-[#abb4d1]" />
                    </div>
                  </Helper1>
                  <Helper1>
                    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
                      <Text1 text="27" additionalClassNames="text-[#abb4d1]" />
                    </div>
                  </Helper1>
                  <Helper1>
                    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
                      <Text1 text="28" additionalClassNames="text-[#abb4d1]" />
                    </div>
                  </Helper1>
                  <Helper1>
                    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
                      <Text1 text="29" additionalClassNames="text-[#abb4d1]" />
                    </div>
                  </Helper1>
                  <Helper1>
                    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
                      <Text1 text="30" additionalClassNames="text-[#abb4d1]" />
                    </div>
                  </Helper1>
                  <Helper1>
                    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
                      <Text1 text="1" additionalClassNames="text-[#444963]" />
                    </div>
                  </Helper1>
                  <Helper1>
                    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
                      <Text1 text="2" additionalClassNames="text-[#444963]" />
                    </div>
                  </Helper1>
                </div>
                <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative w-full" data-name="tr">
                  <Helper1>
                    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
                      <Text1 text="3" additionalClassNames="text-[#444963]" />
                    </div>
                  </Helper1>
                  <Helper1>
                    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
                      <Text1 text="4" additionalClassNames="text-[#444963]" />
                    </div>
                  </Helper1>
                  <Helper1>
                    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
                      <Text1 text="5" additionalClassNames="text-[#444963]" />
                    </div>
                  </Helper1>
                  <Helper1>
                    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
                      <Text1 text="6" additionalClassNames="text-[#444963]" />
                    </div>
                  </Helper1>
                  <Helper1>
                    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
                      <Text1 text="7" additionalClassNames="text-[#444963]" />
                    </div>
                  </Helper1>
                  <Helper1>
                    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
                      <Text1 text="8" additionalClassNames="text-[#444963]" />
                    </div>
                  </Helper1>
                  <Helper1>
                    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
                      <Text1 text="9" additionalClassNames="text-[#444963]" />
                    </div>
                  </Helper1>
                </div>
                <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative w-full" data-name="tr">
                  <Helper1>
                    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
                      <Text1 text="10" additionalClassNames="text-[#444963]" />
                    </div>
                  </Helper1>
                  <Helper1>
                    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
                      <Text1 text="11" additionalClassNames="text-[#444963]" />
                    </div>
                  </Helper1>
                  <Helper1>
                    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
                      <Text1 text="12" additionalClassNames="text-[#444963]" />
                    </div>
                  </Helper1>
                  <Helper1>
                    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
                      <Text1 text="13" additionalClassNames="text-[#444963]" />
                    </div>
                  </Helper1>
                  <Helper1>
                    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
                      <Text1 text="14" additionalClassNames="text-[#444963]" />
                    </div>
                  </Helper1>
                  <Helper1>
                    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
                      <Text1 text="15" additionalClassNames="text-[#444963]" />
                    </div>
                  </Helper1>
                  <Helper1>
                    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
                      <Text1 text="16" additionalClassNames="text-[#444963]" />
                    </div>
                  </Helper1>
                </div>
                <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative w-full" data-name="tr">
                  <Helper1>
                    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
                      <Text1 text="17" additionalClassNames="text-[#444963]" />
                    </div>
                  </Helper1>
                  <Helper1>
                    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
                      <Text1 text="18" additionalClassNames="text-[#444963]" />
                    </div>
                  </Helper1>
                  <div className="flex-[1_0_0] h-[36px] min-h-px min-w-px relative rounded-[14px]" data-name="日期状态">
                    <div className="flex flex-col items-center size-full">
                      <div className="content-stretch flex flex-col items-center relative size-full">
                        <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
                          <Text1 text="19" additionalClassNames="text-[#444963]" />
                        </div>
                        <div className="h-0 relative shrink-0 w-[4px]" data-name="当前">
                          <div className="absolute inset-[0_0_-4px_0]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
                              <g id="å½å">
                                <circle cx="2" cy="2" fill="var(--fill-0, #6574FC)" id="Ellipse 5" r="2" />
                              </g>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative rounded-[14px] shrink-0" data-name="日期状态">
                    <div className="content-stretch flex items-start p-[4px] relative">
                      <Text text="20" />
                    </div>
                  </div>
                  <Helper1>
                    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
                      <Text1 text="21" additionalClassNames="text-[#444963]" />
                    </div>
                  </Helper1>
                  <Component className="flex-[1_0_0] h-[36px] min-h-px min-w-px relative rounded-[14px]" />
                  <Helper1>
                    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
                      <Text1 text="23" additionalClassNames="text-[#444963]" />
                    </div>
                  </Helper1>
                </div>
                <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative w-full" data-name="tr">
                  <Helper1>
                    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
                      <Text1 text="24" additionalClassNames="text-[#444963]" />
                    </div>
                  </Helper1>
                  <Helper1>
                    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
                      <Text1 text="25" additionalClassNames="text-[#444963]" />
                    </div>
                  </Helper1>
                  <Helper1>
                    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
                      <Text1 text="26" additionalClassNames="text-[#444963]" />
                    </div>
                  </Helper1>
                  <Helper1>
                    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
                      <Text1 text="27" additionalClassNames="text-[#444963]" />
                    </div>
                  </Helper1>
                  <Helper1>
                    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
                      <Text1 text="28" additionalClassNames="text-[#444963]" />
                    </div>
                  </Helper1>
                  <Helper1>
                    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
                      <Text1 text="29" additionalClassNames="text-[#444963]" />
                    </div>
                  </Helper1>
                  <Helper1>
                    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
                      <Text1 text="30" additionalClassNames="text-[#444963]" />
                    </div>
                  </Helper1>
                </div>
                <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative w-full" data-name="tr">
                  <Helper1>
                    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
                      <Text1 text="31" additionalClassNames="text-[#444963]" />
                    </div>
                  </Helper1>
                  <Helper1>
                    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] rounded-[16px] shrink-0 size-[36px]" data-name="时间" />
                  </Helper1>
                  <Helper1>
                    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] rounded-[16px] shrink-0 size-[36px]" data-name="时间" />
                  </Helper1>
                  <Helper1>
                    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] rounded-[16px] shrink-0 size-[36px]" data-name="时间" />
                  </Helper1>
                  <Helper1>
                    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] rounded-[16px] shrink-0 size-[36px]" data-name="时间" />
                  </Helper1>
                  <Helper />
                  <Helper />
                </div>
              </PickerBody>
            </div>
            <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[320px]" data-name="DatePicker-dropdown日期选择框下拉菜单">
              <PickerHeader>
                <div className="content-stretch flex gap-[8px] items-start shrink-0 size-[12px]" data-name="item" />
                <HeaderView text="2025年" text1="-" text2="04月" />
                <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="item">
                  <Wrapper2 additionalClassNames="rounded-[3.429px]">
                    <Wrapper>
                      <path clipRule="evenodd" d={svgPaths.p180e7c00} fill="var(--fill-0, #444963)" fillRule="evenodd" id="Union" />
                    </Wrapper>
                  </Wrapper2>
                  <Wrapper2 additionalClassNames="rounded-[3.429px]">
                    <IconWrapper>
                      <path d={svgPaths.p356ace80} fill="var(--fill-0, #444963)" />
                      <path d={svgPaths.p363968b2} fill="var(--fill-0, #444963)" />
                    </IconWrapper>
                  </Wrapper2>
                </div>
              </PickerHeader>
              <PickerBody>
                <Tr />
                <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative w-full" data-name="tr">
                  <Helper />
                  <Helper1>
                    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
                      <Text1 text="1" additionalClassNames="text-[#444963]" />
                    </div>
                  </Helper1>
                  <Helper1>
                    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
                      <Text1 text="2" additionalClassNames="text-[#444963]" />
                    </div>
                  </Helper1>
                  <Helper1>
                    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
                      <Text1 text="3" additionalClassNames="text-[#444963]" />
                    </div>
                  </Helper1>
                  <Helper1>
                    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
                      <Text1 text="4" additionalClassNames="text-[#444963]" />
                    </div>
                  </Helper1>
                  <Helper1>
                    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
                      <Text1 text="5" additionalClassNames="text-[#444963]" />
                    </div>
                  </Helper1>
                  <Helper1>
                    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
                      <Text1 text="6" additionalClassNames="text-[#444963]" />
                    </div>
                  </Helper1>
                </div>
                <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative w-full" data-name="tr">
                  <Helper1>
                    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
                      <Text1 text="7" additionalClassNames="text-[#444963]" />
                    </div>
                  </Helper1>
                  <Helper1>
                    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
                      <Text1 text="8" additionalClassNames="text-[#444963]" />
                    </div>
                  </Helper1>
                  <Helper1>
                    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
                      <Text1 text="9" additionalClassNames="text-[#444963]" />
                    </div>
                  </Helper1>
                  <Helper1>
                    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
                      <Text1 text="10" additionalClassNames="text-[#444963]" />
                    </div>
                  </Helper1>
                  <Helper1>
                    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
                      <Text1 text="11" additionalClassNames="text-[#444963]" />
                    </div>
                  </Helper1>
                  <Helper1>
                    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
                      <Text1 text="12" additionalClassNames="text-[#444963]" />
                    </div>
                  </Helper1>
                  <Helper1>
                    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
                      <Text1 text="13" additionalClassNames="text-[#444963]" />
                    </div>
                  </Helper1>
                </div>
                <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative w-full" data-name="tr">
                  <Helper1>
                    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
                      <Text1 text="14" additionalClassNames="text-[#444963]" />
                    </div>
                  </Helper1>
                  <Helper1>
                    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
                      <Text1 text="15" additionalClassNames="text-[#444963]" />
                    </div>
                  </Helper1>
                  <Helper1>
                    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
                      <Text1 text="16" additionalClassNames="text-[#444963]" />
                    </div>
                  </Helper1>
                  <Helper1>
                    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
                      <Text1 text="17" additionalClassNames="text-[#444963]" />
                    </div>
                  </Helper1>
                  <Helper1>
                    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
                      <Text1 text="18" additionalClassNames="text-[#444963]" />
                    </div>
                  </Helper1>
                  <Helper1>
                    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
                      <Text1 text="19" additionalClassNames="text-[#444963]" />
                    </div>
                  </Helper1>
                  <Helper1>
                    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
                      <Text1 text="20" additionalClassNames="text-[#444963]" />
                    </div>
                  </Helper1>
                </div>
                <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative w-full" data-name="tr">
                  <Helper1>
                    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
                      <Text1 text="21" additionalClassNames="text-[#444963]" />
                    </div>
                  </Helper1>
                  <Helper1>
                    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
                      <Text1 text="22" additionalClassNames="text-[#444963]" />
                    </div>
                  </Helper1>
                  <Helper1>
                    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
                      <Text1 text="23" additionalClassNames="text-[#444963]" />
                    </div>
                  </Helper1>
                  <div className="relative rounded-[14px] shrink-0 size-[36px]" data-name="日期状态">
                    <Wrapper3>
                      <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
                        <Text1 text="24" additionalClassNames="text-[#444963]" />
                      </div>
                    </Wrapper3>
                  </div>
                  <Helper1>
                    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
                      <Text1 text="25" additionalClassNames="text-[#444963]" />
                    </div>
                  </Helper1>
                  <Helper1>
                    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
                      <Text1 text="26" additionalClassNames="text-[#444963]" />
                    </div>
                  </Helper1>
                  <Helper1>
                    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
                      <Text1 text="27" additionalClassNames="text-[#444963]" />
                    </div>
                  </Helper1>
                </div>
                <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative w-full" data-name="tr">
                  <Helper1>
                    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
                      <Text1 text="28" additionalClassNames="text-[#444963]" />
                    </div>
                  </Helper1>
                  <Helper1>
                    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
                      <Text1 text="29" additionalClassNames="text-[#444963]" />
                    </div>
                  </Helper1>
                  <Helper1>
                    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
                      <Text1 text="30" additionalClassNames="text-[#444963]" />
                    </div>
                  </Helper1>
                  <Helper1>
                    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
                      <Text1 text="31" additionalClassNames="text-[#444963]" />
                    </div>
                  </Helper1>
                  <Helper1>
                    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
                      <Text1 text="1" additionalClassNames="text-[#abb4d1]" />
                    </div>
                  </Helper1>
                  <Helper1>
                    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
                      <Text1 text="2" additionalClassNames="text-[#abb4d1]" />
                    </div>
                  </Helper1>
                  <Helper1>
                    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
                      <Text1 text="3" additionalClassNames="text-[#abb4d1]" />
                    </div>
                  </Helper1>
                </div>
                <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative w-full" data-name="tr">
                  <Helper1>
                    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
                      <Text1 text="4" additionalClassNames="text-[#abb4d1]" />
                    </div>
                  </Helper1>
                  <Helper1>
                    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
                      <Text1 text="5" additionalClassNames="text-[#abb4d1]" />
                    </div>
                  </Helper1>
                  <Helper1>
                    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
                      <Text1 text="6" additionalClassNames="text-[#abb4d1]" />
                    </div>
                  </Helper1>
                  <Helper1>
                    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
                      <Text1 text="7" additionalClassNames="text-[#abb4d1]" />
                    </div>
                  </Helper1>
                  <Helper1>
                    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
                      <Text1 text="8" additionalClassNames="text-[#abb4d1]" />
                    </div>
                  </Helper1>
                  <Helper1>
                    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
                      <Text1 text="9" additionalClassNames="text-[#abb4d1]" />
                    </div>
                  </Helper1>
                  <Helper1>
                    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[5px] relative rounded-[16px] shrink-0 size-[36px]" data-name="时间">
                      <Text1 text="10" additionalClassNames="text-[#abb4d1]" />
                    </div>
                  </Helper1>
                </div>
              </PickerBody>
            </div>
          </div>
          <div className="bg-white col-1 ml-0 mt-[374px] relative row-1 w-[640px]" data-name="Picker-cell/Footer">
            <div className="content-stretch flex items-center justify-between overflow-clip px-[32px] py-[20px] relative rounded-[inherit] w-full">
              <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="ButtonGroup 按钮组">
                <Wrapper1>
                  <p className="font-['Alibaba_PuHuiTi_3.0:65_Medium',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#202224] text-[14px] whitespace-nowrap">2025年03月20日</p>
                </Wrapper1>
              </div>
              <div className="relative shrink-0" data-name="ButtonGroup 按钮组">
                <div className="flex flex-row items-center justify-end size-full">
                  <div className="content-stretch flex gap-[16px] items-center justify-end relative">
                    <Wrapper2>
                      <p className="font-['PingFang_SC:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#6574fc] text-[16px] text-center whitespace-nowrap">取消</p>
                    </Wrapper2>
                    <div className="bg-[#6574fc] relative rounded-[20px] shrink-0" data-name="Button 按钮">
                      <div className="flex flex-row items-center justify-center size-full">
                        <div className="content-stretch flex items-center justify-center px-[24px] py-[8px] relative">
                          <p className="font-['Alibaba_PuHuiTi_3.0:65_Medium',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">确定</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div aria-hidden="true" className="absolute border-[#dfe3f0] border-solid border-t inset-0 pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  );
}