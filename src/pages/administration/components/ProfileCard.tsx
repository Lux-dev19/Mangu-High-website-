import type { CommunityMember } from "@/mocks/community";
import MonogramAvatar from "@/components/base/MonogramAvatar";

type ProfileCardProps = {
  member: CommunityMember;
  onOpen: (member: CommunityMember) => void;
};

export default function ProfileCard({ member, onOpen }: ProfileCardProps) {
  return (
    <button
      type="button"
      onClick={() => onOpen(member)}
      className="group flex h-full w-full cursor-pointer flex-col overflow-hidden rounded-lg border border-background-200 bg-background-50 text-left transition-all duration-300 hover:border-accent-300"
    >
      <div className="relative h-60 w-full overflow-hidden">
        <MonogramAvatar name={member.name} />
        <span className="absolute left-3 top-3 rounded-full bg-primary-950/80 px-3 py-1 font-label text-[10px] uppercase tracking-[0.14em] text-accent-400 backdrop-blur-sm">
          {member.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-heading text-base font-semibold text-foreground-950">{member.name}</h3>
        <p className="mt-1 font-label text-xs uppercase tracking-[0.12em] text-accent-700">
          {member.position}
        </p>
        <p className="mt-1 text-xs text-foreground-500">{member.department}</p>
        <p className="mt-3 line-clamp-2 flex-1 text-sm leading-relaxed text-foreground-600">
          {member.bio}
        </p>
        <span className="mt-4 inline-flex items-center gap-2 font-label text-xs font-semibold uppercase tracking-[0.12em] text-primary-600">
          View profile
          <i className="ri-arrow-right-line transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </button>
  );
}