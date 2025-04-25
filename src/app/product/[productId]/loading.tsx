import Container from "@/components/common/container";
import {Skeleton} from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            <div className="flex flex-col gap-4">
              <Skeleton className="aspect-square rounded-xl" />
              <div className="grid grid-cols-4 gap-4">
                {[...Array(4)].map((_, i) => (
                  <Skeleton key={i} className="aspect-square rounded-xl" />
                ))}
              </div>
            </div>
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <Skeleton className="h-8 w-2/3" />
              <Skeleton className="h-6 w-24 mt-4" />
              <Skeleton className="h-4 w-full mt-8" />
              <div className="mt-10 flex flex-col gap-y-6">
                <div className="space-y-4">
                  <Skeleton className="h-8 w-32" />
                  <div className="flex gap-4">
                    {[...Array(4)].map((_, i) => (
                      <Skeleton key={i} className="h-8 w-8 rounded-full" />
                    ))}
                  </div>
                </div>
                <div className="space-y-4">
                  <Skeleton className="h-8 w-32" />
                  <div className="flex gap-4">
                    {[...Array(4)].map((_, i) => (
                      <Skeleton key={i} className="h-8 w-8 rounded-full" />
                    ))}
                  </div>
                </div>
                <Skeleton className="h-12 w-48" />
              </div>
            </div>
          </div>
          <div className="mt-16 space-y-4">
            <Skeleton className="h-8 w-48" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[...Array(4)].map((_, i) => (
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
