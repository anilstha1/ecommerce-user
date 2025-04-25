import Container from "@/components/common/container";
import {Skeleton} from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-16 sm:px-6 lg:px-8">
          <Skeleton className="h-8 w-48" />
          <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
            <div className="lg:col-span-7">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="flex py-6 border-b gap-4">
                  <Skeleton className="aspect-square h-24 w-24 sm:h-48 sm:w-48 rounded-md" />
                  <div className="flex-1 space-y-4">
                    <Skeleton className="h-6 w-1/2" />
                    <Skeleton className="h-4 w-1/3" />
                    <Skeleton className="h-4 w-1/4" />
                  </div>
                </div>
              ))}
            </div>
            <div className="lg:col-span-5">
              <div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:mt-0 lg:p-8">
                <Skeleton className="h-8 w-1/3" />
                <div className="mt-6 space-y-4">
                  <Skeleton className="h-6 w-full" />
                  <Skeleton className="h-12 w-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
