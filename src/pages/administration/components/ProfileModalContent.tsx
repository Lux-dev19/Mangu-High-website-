import type { CommunityMember } from "@/mocks/community";
import MonogramAvatar from "@/components/base/MonogramAvatar";

type Props = {
  member: CommunityMember;
};

export default function ProfileModalContent({ member }: Props) {
  return (
    <div className="grid md:grid-cols-[260px_1fr]">
      <div className="relative h-64 w-full md:h-full">
        <MonogramAvatar name={member.name} />
      </div>

      <div className="p-6 md:p-8">
        <span className="rounded-full bg-accent-100 px-3 py-1 font-label text-[10px] uppercase tracking-[0.14em] text-accent-800">
          {member.category}
        </span>
        <h3 className="mt-4 font-heading text-xl font-semibold text-foreground-950 md:text-2xl">
          {member.name}
        </h3>
        <p className="mt-1 font-label text-xs uppercase tracking-[0.14em] text-accent-700">
          {member.position}
        </p>

        <p className="mt-5 text-sm leading-relaxed text-foreground-700">{member.bio}</p>

        <dl className="mt-6 flex flex-col gap-4 border-t border-background-200 pt-5">
          <div>
            <dt className="font-label text-[11px] uppercase tracking-[0.16em] text-foreground-500">
              Department
            </dt>
            <dd className="mt-1 text-sm font-semibold text-foreground-900">{member.department}</dd>
          </div>
          <div>
            <dt className="font-label text-[11px] uppercase tracking-[0.16em] text-foreground-500">
              Qualifications
            </dt>
            <dd className="mt-1 text-sm text-foreground-800">{member.qualifications}</dd>
          </div>
          <div>
            <dt className="font-label text-[11px] uppercase tracking-[0.16em] text-foreground-500">
              Areas of Responsibility
            </dt>
            <dd className="mt-1 text-sm text-foreground-800">{member.responsibilities}</dd>
          </div>
        </dl>
      </div>
    </div>
  );
}