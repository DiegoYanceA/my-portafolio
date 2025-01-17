import { ContactLiteral, Information, Literal, Option, Preference, ProjectLiteral, Projects, Skill, SkillLiteral, SkillTable, TranslationLiteral, User, UserLiteral } from "../types"

export type NavegatorProps = {
    preference: Preference, 
    translationLiteral: TranslationLiteral | undefined ,
    changeLang: (lang:string) => void,
    changeThemeMode: (mode:boolean) => void
}

export type HomePageProps = {
    translationLiteral: TranslationLiteral,
    information: Information,
    preference: Preference,
}

export type HomeProps = {
    trans: Literal,
    user: User
}

export type SkillsProps = {
    trans: SkillLiteral,
    skills: Array<Skill>,
    isDark: boolean
}

export type SkillsTableProps = {
    trans: SkillTable,
    categories: Array<Option>
    skills: Array<Skill>
}

export type ContactProps = {
    user: User,
    trans: ContactLiteral
}

export type UserProps = {
    trans: UserLiteral
}

export type ProjectProps = {
    projects: Array<Projects>,
    trans: ProjectLiteral
}