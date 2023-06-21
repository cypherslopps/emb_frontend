export interface IUser {
    id: number | string,
    fullname: string,
    email: string,
    role: "admin" | "student" | "moderator",
    socials: {
        telegram: string,
        twitter: string,
        facebook: string
    }
} 