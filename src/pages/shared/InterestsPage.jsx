import MainLayout from "@/components/layout/MainLayout";

export default function InterestsPage() {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white">Interests</h1>
          <p className="text-white">
            Interests page content will go here
          </p>
        </div>
        <div className="border-4 border-dashed border-border rounded-lg h-96 flex items-center justify-center">
          <div className="text-center">
            <p className="text-muted-foreground">
              Interests content will go here 
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
