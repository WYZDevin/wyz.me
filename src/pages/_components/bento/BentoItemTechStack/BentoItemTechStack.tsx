import { Stack } from '@/components/icons/Stack';
import { Marquee } from "@/components/magicui/marquee";
import BentoBadge from '../BentoBadge';
import techStacks from './techStacksData';

const BentoItemTechStack = () => {
  return (
    <div className="flex h-full flex-col gap-5 px-5 pb-6 pt-4 max-md:gap-8">
      <BentoBadge
        icon={Stack}
        text="Tech stack"
        className={{ component: 'w-fit' }}
      />
      <div className="flex-grow place-content-center">
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden md:shadow-xl">
          <Marquee pauseOnHover className="[--duration:20s]">
            {techStacks.map(({ icon: Icon, name }) => (
              <Icon className="size-12 md:max-lg:size-8" key={name} />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[var(--card-background)]"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[var(--card-background)]"></div>
        </div>
      </div>
      <div className="space-y-2">
        <p className="text-lg">Tech stacks I'm familiar with</p>
        <p className="text-sm text-slate-400">
          Primarily focused on the JavaScript ecosystem, but always eager to
          explore and learn new technologies.
        </p>
      </div>
    </div>
  );
};

export default BentoItemTechStack;
