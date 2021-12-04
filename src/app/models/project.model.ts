type Tag = 'HTML' | 'CSS' | 'JavaScript' | 'TypeScript' | 'Angular';

export interface Project {
    title: string;
    description: string;
    tags: Tag[];
    previewLink: string;
    codeLink: string;
}