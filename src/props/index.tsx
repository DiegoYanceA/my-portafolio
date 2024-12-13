import { Information, Preference, Skill, TranslationLiteral, User } from "../types"

export type NavegatorProps = {
    preference: Preference, 
    translationLiteral: TranslationLiteral ,
    changeLang: (lang:string) => void,
    changeThemeMode: (mode:boolean) => void
}

export type WrapperProps = {
    translationLiteral: TranslationLiteral,
    information: Information,
    preference: Preference,
}

export type HomeProps = {
    translationLiteral: TranslationLiteral,
    user: User
}

export type SkillsProps = {
    translationLiteral: TranslationLiteral,
    skills: Array<Skill>,
    isDark: boolean
}