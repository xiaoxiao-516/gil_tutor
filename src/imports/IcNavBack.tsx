export default function IcNavBack() {
  return (
    <div className="bg-white relative rounded-[20px] size-full" data-name="ic_nav_back">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[10px] left-[calc(50%-0.5px)] top-1/2 w-[5px]" data-name="Vector">
          <div className="absolute inset-[-10%_-20%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 12">
              <path d="M6 1L1 6L6 11" id="Vector" stroke="var(--stroke-0, #646B8A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e9ecf5] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}