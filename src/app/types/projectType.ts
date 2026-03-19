export type ProjectStatus = "Active" | "Completed";

export interface Project {
    id:string,
    title:string,
    description:string,
    status:ProjectStatus,
    date:string
}