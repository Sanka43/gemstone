import { whatsappNumber } from "@/lib/gems";

type InquiryButtonsProps = {
  gemName: string;
};

export function InquiryButtons({ gemName }: InquiryButtonsProps) {
  const inquiryMessage = encodeURIComponent(
    `Hello Ceylon Gem Gallery, I am interested in ${gemName}. Please share availability and certification details.`,
  );

  return (
    <div className="flex flex-wrap gap-3">
      <a
        href={`mailto:hello@ceylongemgallery.com?subject=Inquiry - ${encodeURIComponent(gemName)}`}
        className="rounded-full bg-zinc-900 px-5 py-3 text-sm text-white hover:bg-zinc-700"
      >
        Send Inquiry
      </a>
      <a
        href={`https://wa.me/${whatsappNumber}?text=${inquiryMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full border border-[#8f7744] px-5 py-3 text-sm text-[#8f7744] hover:bg-[#8f7744] hover:text-white"
      >
        Contact on WhatsApp
      </a>
    </div>
  );
}
