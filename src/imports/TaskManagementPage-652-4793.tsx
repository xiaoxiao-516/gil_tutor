import svgPaths from "./svg-tyq2gsu6us";

function Icon() {
  return (
    <div className="relative shrink-0 size-[8px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
        <g clipPath="url(#clip0_652_3733)" id="Icon">
          <path d={svgPaths.p2162ffc0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        </g>
        <defs>
          <clipPath id="clip0_652_3733">
            <rect fill="white" height="8" width="8" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

export default function TaskManagementPage() {
  return (
    <div className="bg-[#4a4fed] content-stretch flex items-center justify-center px-[4px] relative rounded-[3px] size-full" data-name="TaskManagementPage">
      <Icon />
    </div>
  );
}