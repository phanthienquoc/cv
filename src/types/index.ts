
export interface IWorkingProject {
    location: string;
    from?: number;
    to?: number | null;
    project_name?: string;
    description?: string;
    role?: string[];
    responsibility?: string[];
    program_language?: string[];
    framework_ui?: string[];
    development_tool?: string[];
    additional?: string | null
}

export interface ICompany {
    company_id: string
    location: string
    company_name: string
    from?: number | null
    to?: number | null
    projects: any[]
}
