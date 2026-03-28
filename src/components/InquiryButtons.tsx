import { whatsappNumber } from "@/lib/gems";

type InquiryButtonsProps = {
  gemName: string;
};

export function InquiryButtons({ gemName }: InquiryButtonsProps) {
  const inquiryMessage = encodeURIComponent(
    `Hello Sandaru Gemstone, I am interested in ${gemName}. Please share availability and certification details.`,
  );

  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
      <a
        href={`mailto:hello@sandarugemstone.com?subject=Inquiry - ${encodeURIComponent(gemName)}`}
        className="inline-flex min-h-12 flex-1 items-center justify-center rounded-full bg-zinc-900 px-5 text-sm font-semibold text-white hover:bg-zinc-700 active:bg-zinc-800 sm:flex-none sm:min-w-[10rem]"
      >
        Send inquiry
      </a>
      <a
        href={`https://wa.me/${whatsappNumber}?text=${inquiryMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex min-h-12 flex-1 items-center justify-center rounded-full border-2 border-[#8f7744] px-5 text-sm font-semibold text-[#8f7744] hover:bg-[#8f7744] hover:text-white active:bg-[#7a6838] active:text-white sm:flex-none sm:min-w-[10rem]"
      >
        WhatsApp
      </a>
    </div>
  );
}
