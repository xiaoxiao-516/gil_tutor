import svgPaths from "./svg-fip8jemehj";

function DecoArc() {
  return (
    <div className="h-[395px] overflow-clip relative shrink-0 w-full" data-name="DecoArc">
      <div className="absolute inset-[0.15%_0.19%_0.15%_0.23%]" data-name="Vector">
        <div className="absolute inset-[-0.13%_-0.19%_-0.13%_-0.23%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 267 394.827">
            <path d={svgPaths.p2c4e6500} id="Vector" stroke="var(--stroke-0, #6574FC)" strokeOpacity="0.4" strokeWidth="0.999562" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col h-[395px] items-start opacity-60 relative w-[267px]" data-name="Container">
      <DecoArc />
    </div>
  );
}

function DecoArc1() {
  return (
    <div className="h-[395px] overflow-clip relative shrink-0 w-full" data-name="DecoArc">
      <div className="absolute inset-[0.15%_0.19%_0.15%_0.23%]" data-name="Vector">
        <div className="absolute inset-[-0.13%_-0.19%_-0.13%_-0.23%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 267 394.827">
            <path d={svgPaths.p2c4e6500} id="Vector" stroke="var(--stroke-0, #6574FC)" strokeOpacity="0.4" strokeWidth="0.999562" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col h-[395px] items-start opacity-40 relative w-[267px]" data-name="Container">
      <DecoArc1 />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute bg-[#ebf1ff] h-[800px] left-0 overflow-clip top-0 w-[1280px]" data-name="Container">
      <div className="absolute flex h-[300.411px] items-center justify-center left-[-254.88px] top-[147.29px] w-[416.767px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-95">
          <Container1 />
        </div>
      </div>
      <div className="absolute flex h-[444.938px] items-center justify-center left-[574.19px] top-[325.03px] w-[349.012px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="-rotate-13 flex-none">
          <Container2 />
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 size-[28px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="absolute bg-[#767bf1] left-0 opacity-70 rounded-[28px] size-[28px] top-0" />
        <p className="absolute font-['Alibaba_PuHuiTi_3.0:55_Regular',sans-serif] leading-[27px] left-[calc(50%-13.5px)] not-italic text-[10px] text-white top-[calc(50%-13px)] whitespace-nowrap">LOGO</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[12px] items-center justify-center px-[12px] relative w-full">
          <Frame />
          <p className="font-['Alibaba_PuHuiTi_3.0:75_SemiBold',sans-serif] leading-[27px] not-italic relative shrink-0 text-[#101019] text-[24px] tracking-[1.08px] whitespace-nowrap">学管平台</p>
        </div>
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="h-[21px] relative shrink-0 w-[320px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Alibaba_PuHuiTi_3.0:65_Medium',sans-serif] leading-[21px] left-0 not-italic text-[#444963] text-[14px] top-[-0.5px] whitespace-nowrap">手机号</p>
      </div>
    </div>
  );
}

function TextInput() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[8px] w-[320px]" data-name="Text Input">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip px-[12px] relative rounded-[inherit] size-full">
        <p className="font-['Alibaba_PuHuiTi_3.0:55_Regular_L3','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[14px] text-[rgba(16,16,25,0.5)] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
          请输入手机号
        </p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#cfd5e8] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[74px] items-start left-0 top-0 w-[320px]" data-name="Container">
      <Label />
      <TextInput />
    </div>
  );
}

function Label1() {
  return (
    <div className="absolute h-[21px] left-0 top-0 w-[320px]" data-name="Label">
      <p className="absolute font-['Alibaba_PuHuiTi_3.0:65_Medium',sans-serif] leading-[21px] left-0 not-italic text-[#444963] text-[14px] top-[-0.5px] whitespace-nowrap">验证码</p>
    </div>
  );
}

function TextInput1() {
  return (
    <div className="absolute bg-white h-[45px] left-0 rounded-[8px] top-0 w-[320px]" data-name="Text Input">
      <div className="content-stretch flex items-center overflow-clip px-[12px] relative rounded-[inherit] size-full">
        <p className="font-['Alibaba_PuHuiTi_3.0:55_Regular_L3','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[normal] relative shrink-0 text-[14px] text-[rgba(16,16,25,0.5)] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
          请输入验证码
        </p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#cfd5e8] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Button() {
  return (
    <div className="absolute content-stretch flex h-[45px] items-center left-[235.95px] px-[12px] rounded-br-[23px] rounded-tr-[23px] top-0 w-[84.047px]" data-name="Button">
      <p className="font-['Alibaba_PuHuiTi_3.0:55_Regular_L3','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[18px] relative shrink-0 text-[#4a4fed] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        获取验证码
      </p>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute h-[45px] left-0 top-[29px] w-[320px]" data-name="Container">
      <TextInput1 />
      <Button />
      <div className="-translate-y-1/2 absolute h-[14px] left-[236px] top-[calc(50%-0.5px)] w-0">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 14">
            <path d="M0.5 0V14" id="Vector 438" stroke="var(--stroke-0, #E9ECF5)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute h-[74px] left-0 top-[90px] w-[320px]" data-name="Container">
      <Label1 />
      <Container8 />
    </div>
  );
}

function PrimitiveButton() {
  return (
    <div className="bg-white relative rounded-[3px] shrink-0 size-[14px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[#dfe3f0] border-solid inset-0 pointer-events-none rounded-[3px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Label2() {
  return (
    <div className="h-[18px] relative shrink-0 w-[236.172px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Alibaba_PuHuiTi_3.0:55_Regular_L3','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] leading-[0] left-0 text-[#202224] text-[12px] top-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
          <span className="leading-[18px]">我已知晓并同意</span>
          <span className="leading-[18px] text-[#2e42fb]">《用户协议》</span>
          <span className="leading-[18px]">和</span>
          <span className="leading-[18px] text-[#2e42fb]">《隐私政策》</span>
        </p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[18px] items-center left-0 top-[180px] w-[320px]" data-name="Container">
      <PrimitiveButton />
      <Label2 />
    </div>
  );
}

function Button1() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#bbcbfc] content-stretch flex h-[48px] items-center justify-center left-1/2 rounded-[8px] top-[230px] w-[320px]" data-name="Button">
      <p className="font-['Alibaba_PuHuiTi_3.0:75_SemiBold',sans-serif] leading-[30px] not-italic relative shrink-0 text-[20px] text-center text-white tracking-[6px] whitespace-nowrap">登 录</p>
    </div>
  );
}

function Form() {
  return (
    <div className="h-[278px] relative shrink-0 w-full" data-name="Form">
      <Container6 />
      <Container7 />
      <Container9 />
      <Button1 />
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[382px] relative shrink-0 w-[320px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[50px] items-start relative size-full">
        <Container5 />
        <Form />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute backdrop-blur-[5px] bg-[rgba(255,255,255,0.8)] content-stretch flex items-center justify-center left-1/2 p-[49px] rounded-[20px] top-1/2" data-name="Container">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[20px]" />
      <Container4 />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-[#f5faff] relative size-full" data-name="登录">
      <Container />
      <Container3 />
    </div>
  );
}