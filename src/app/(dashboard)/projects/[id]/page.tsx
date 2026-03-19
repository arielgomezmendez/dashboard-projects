import ProjectDetails from "@/app/components/ProjectDetails";

interface ProjectDetailsProps {
  params: Promise<{
    id: string;
  }>;
}

//Create a delay function to simulate the data loading and display the Loading component
const delay = (time:number)=>{
    return new Promise((resolve)=> setTimeout(resolve,time))
}

export default async function Page({ params }: ProjectDetailsProps) {
  const { id } = await params;

  await delay(1500);

  console.log("Param:", id);
  return (
    <div>
      <ProjectDetails id = {id} />
    </div>
  );
}
