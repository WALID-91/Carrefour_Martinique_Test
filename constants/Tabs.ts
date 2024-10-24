import { HomeSvg, PromosSvg, ListeSvg, DriveSvg, ProfilSvg, SmartClubSvgTab } from "@/components/iconSVG/IconsSvg";

type TabItemType = {
    label: string;
    isActive: boolean;
    SvgIcon: React.FC<{ isActive: boolean }>;
}

export const Tabs : TabItemType[] = [
    {
        label: 'Accueil',
        isActive: true,
        SvgIcon: HomeSvg,
    },
    {
        label: 'Promos',
        isActive: false,
        SvgIcon: PromosSvg,
    },
    {
        label: 'Smart Club',
        isActive: false,
        SvgIcon: SmartClubSvgTab,
    },
    {
        label: 'Listes',
        isActive: false,
        SvgIcon: ListeSvg,
    },
    {
        label: 'Drive',
        isActive: false,
        SvgIcon: DriveSvg,
    },
    {
        label: 'Profil',
        isActive: false,
        SvgIcon: ProfilSvg,
    },
];