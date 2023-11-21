export const SocialNets = Object.freeze({
    LinkedIn: "linkedin",
    Telegram: "telegram",
    Instagram: "instagram",
    WhatsUp: "whatsup",
} as const)

export const checkboxes = [
    {
        name: SocialNets.LinkedIn,
        label: "LinkedIn",
    },
    {
        name: SocialNets.Telegram,
        label: "Telegram",
    },
    {
        name: SocialNets.Instagram,
        label: "Instagram",
    },
    {
        name: SocialNets.WhatsUp,
        label: "What's up",
    },
]
