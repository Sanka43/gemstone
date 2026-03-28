import type { Metadata } from "next";
import { gemstones } from "@/lib/gems";
import { AdminSidebar } from "@/components/admin/AdminSidebar";

export const metadata: Metadata = {
  title: "Admin",
  description: "Sandaru Gemstone — admin layout preview for inventory and inquiries.",
};

export default function AdminPage() {
  return (
    <div className="luxury-container py-10 sm:py-14">
      <div className="grid gap-6 lg:grid-cols-[minmax(0,260px),1fr] lg:gap-8">
        <AdminSidebar />
        <section className="space-y-6">
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              ["Total Gems", gemstones.length.toString()],
              ["New Inquiries", "12"],
              ["Pending Replies", "5"],
            ].map(([label, value]) => (
              <article key={label} className="rounded-2xl border border-zinc-200 bg-white p-5">
                <p className="text-sm text-zinc-500">{label}</p>
                <p className="mt-2 font-serif text-3xl text-zinc-950">{value}</p>
              </article>
            ))}
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-white p-5">
            <h3 className="font-serif text-2xl text-zinc-950">Recent Inquiries</h3>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="text-zinc-500">
                  <tr>
                    <th className="py-2">Client</th>
                    <th className="py-2">Gem</th>
                    <th className="py-2">Date</th>
                    <th className="py-2">Status</th>
                  </tr>
                </thead>
                <tbody className="text-zinc-700">
                  {[
                    ["Amelia K", "Royal Blue Ceylon Sapphire", "2026-03-20", "New"],
                    ["Luca D", "Pigeon Blood Ruby", "2026-03-21", "Replied"],
                    ["Nina R", "Padparadscha Sapphire", "2026-03-22", "Pending"],
                  ].map(([client, gem, date, status]) => (
                    <tr key={client} className="border-t border-zinc-100">
                      <td className="py-3">{client}</td>
                      <td className="py-3">{gem}</td>
                      <td className="py-3">{date}</td>
                      <td className="py-3">{status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
