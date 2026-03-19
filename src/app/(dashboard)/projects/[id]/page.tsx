import ProjectDetails from "@/app/components/ProjectDetails";

interface ProjectDetailsProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function Page({ params }: ProjectDetailsProps) {
  const { id } = await params;

  console.log("Param:", id);
  return (
    <div>
      <ProjectDetails id = {id} />
    </div>
  );
}
