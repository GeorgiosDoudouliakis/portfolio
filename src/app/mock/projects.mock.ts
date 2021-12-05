import { Project } from "../models/project.model";

export const PROJECTS: Project[] = [
    {
        title: 'Covid-19 Greece',
        description: 'A webpage with stats and news about COVID-19 in Greece. The user has the ability to see a map with overall cases on each region in Greece and global news about COVID-19 for the country he will select.',
        tags: ['HTML', 'CSS', 'Bulma', 'JavaScript', 'TypeScript', 'Angular'],
        previewLink: '',
        codeLink: 'https://github.com/GeorgiosDoudouliakis/covid19-greece'
    },
    {
        title: 'Angular Conference Website',
        description: 'A website about the upcoming event of Angular in Athens, with info about the event.',
        tags: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'TypeScript', 'Angular'],
        previewLink: 'https://suspicious-fermi-591959.netlify.app',
        codeLink: 'https://github.com/GeorgiosDoudouliakis/angular-conference-website'
    }
]