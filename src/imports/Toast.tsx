import svgPaths from "./svg-jmtwf69l42";

export default function Toast() {
  return (
    <div className="bg-[rgba(16,16,25,0.7)] content-stretch flex gap-[4px] items-center px-[10px] py-[8px] relative rounded-[24px] size-full" data-name="toast">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="info_success">
        <div className="absolute inset-[4.17%]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3333 18.3333">
            <path d={svgPaths.p18ba9d00} fill="var(--fill-0, #4DE03F)" id="Ellipse 2302" />
          </svg>
        </div>
        <div className="absolute inset-[34.31%_26.31%_28.19%_28.84%]" data-name="Vector 5338 (Stroke)">
          <div className="absolute inset-[0_0_6.48%_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.97147 7.01385">
              <path clipRule="evenodd" d={svgPaths.p121a580} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector 5338 (Stroke)" />
            </svg>
          </div>
        </div>
      </div>
      <p className="font-['Alibaba_PuHuiTi_3.0:55_Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">成功提示2s消失~</p>
    </div>
  );
}