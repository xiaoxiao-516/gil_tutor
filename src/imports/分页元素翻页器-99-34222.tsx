import svgPaths from "./svg-5a53rb226x";

export default function Component() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[8px] relative rounded-[6px] size-full" data-name="分页元素/翻页器">
      <div aria-hidden="true" className="absolute border border-[#cfd5e8] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="ic_arrow_right">
        <div className="absolute flex inset-[18.71%_33.33%_15.59%_35.42%] items-center justify-center">
          <div className="-scale-y-100 flex-none h-[9.198px] w-[4.375px]">
            <div className="relative size-full" data-name>
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.00003 10.5126">
                <path clipRule="evenodd" d={svgPaths.pf430400} fill="var(--fill-0, #444963)" fillRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}