import {Skeleton} from "@/components/ui/skeleton";
import Container from "@/components/common/container";

export default function Loading() {
  return (
    <div className="bg-white">
      <Container>
        <div className="p-4 sm:p-6 lg:p-8">
          <Skeleton className="aspect-[2.4/1] w-full rounded-xl" />
        </div>
        <div className="px-4 sm:px-6 lg:px-8 pb-24 grid grid-cols-1 md:grid-cols-4 gap-x-6 md:gap-y-8 md:pt-10">
          <div className="hidden md:block space-y-4">
            <Skeleton className="h-8 w-full" />
            <Skeleton className="h-32 w-full" />
          </div>
          <div className="md:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="space-y-4">
                  <Skeleton className="aspect-square rounded-xl" />
                  <Skeleton className="h-4 w-2/3" />
                  <Skeleton className="h-4 w-1/2" />
                  <Skeleton className="h-4 w-1/4" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
