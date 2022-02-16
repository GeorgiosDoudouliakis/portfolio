import { Project } from "../models/project.model";

export const PROJECTS: Project[] = [
    {
        title: 'Formula One',
        description: 'Website with stats about formula one from 1950 to 2021. Driver/Constructor details, standings, circuits, statistics showing points per circuit and map with the location of each circuit',
        tags: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Angular', 'Angular Material', 'Open Layers', 'Apache Echarts'],
        previewLink: 'https://georgiosdoudouliakis.github.io/formula-one/',
        codeLink: 'https://github.com/GeorgiosDoudouliakis/formula-one'
    },
    {
        title: 'Software Development Company Employees',
        description: 'Management system for software development companies (only for large devices)',
        tags: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Angular', 'Angular Material', 'Firebase'],
        previewLink: 'https://software-dev-company-employees.firebaseapp.com',
        codeLink: 'https://github.com/GeorgiosDoudouliakis/software-development-company-employees'
    },
    {
        title: 'Covid-19 Greece',
        description: 'A webpage with stats and news about COVID-19 in Greece. The user has the ability to see a map with overall cases on each region in Greece and global news about COVID-19 for the country he will select',
        tags: ['HTML', 'CSS', 'Bulma', 'JavaScript', 'TypeScript', 'Angular'],
        previewLink: 'https://georgiosdoudouliakis.github.io/covid19-greece/',
        codeLink: 'https://github.com/GeorgiosDoudouliakis/covid19-greece'
    }
]