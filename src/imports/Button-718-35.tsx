export default function Button() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center px-[10px] py-px relative rounded-[28px] size-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(74,79,237,0.35)] border-solid inset-0 pointer-events-none rounded-[28px]" />
      <p className="font-['Alibaba_PuHuiTi_3.0:55_Regular_L3','Noto_Sans_SC:Regular',sans-serif] leading-[21px] relative shrink-0 text-[#4a4fed] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        预览
      </p>
    </div>
  );
}