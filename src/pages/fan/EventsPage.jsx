import MainLayout from "@/components/layout/MainLayout";

export default function EventsPage() {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white">Events</h1>
          <p className="text-white">
            Events page content will go here
          </p>
        </div>
        <div className="border-4 border-dashed border-border rounded-lg h-96 flex items-center justify-center">
          <div className="text-center">
            <p className="text-muted-foreground">
              Events content will go here 
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
