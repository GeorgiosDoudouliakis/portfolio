import { Project } from "../models/project.model";

export const PROJECTS: Project[] = [
    {
        title: 'Software Development Company Employees',
        description: 'Management system for software development companies (only for large devices)',
        tags: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Angular', 'Angular Material', 'Firebase'],
        previewLink: 'https://software-dev-company-employees.firebaseapp.com',
        codeLink: 'https://github.com/GeorgiosDoudouliakis/software-development-company-employees'
    },
    {
        title: 'Covid-19 Greece',
        description: 'A webpage with stats and news about COVID-19 in Greece. The user has the ability to see a map with overall cases on each region in Greece and global news about COVID-19 for the country he will select.',
        tags: ['HTML', 'CSS', 'Bulma', 'JavaScript', 'TypeScript', 'Angular'],
        previewLink: 'https://georgiosdoudouliakis.github.io/covid19-greece/',
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