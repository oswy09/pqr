export default function Button() {
  return (
    <div className="bg-[#00008f] relative rounded-[64px] size-full" data-name="button">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[16px] text-white whitespace-nowrap">Learn more</p>
      </div>
      <div aria-hidden className="absolute border border-[#00008f] border-solid inset-0 pointer-events-none rounded-[64px]" />
    </div>
  );
}