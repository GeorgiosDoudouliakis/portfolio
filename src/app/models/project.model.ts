type Tag = 'HTML' | 'CSS' | 'Bulma' | 'Bootstrap' |'JavaScript' | 'TypeScript' | 'Angular' | 'Angular Material' | 'Firebase';

export interface Project {
    title: string;
    description: string;
    tags: Tag[];
    previewLink: string;
    codeLink: string;
}