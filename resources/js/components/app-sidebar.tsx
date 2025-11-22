import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
import { dashboard } from '@/routes';
import { type NavItem } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import { BookOpen, Folder, LayoutGrid } from 'lucide-react';
import AppLogo from './app-logo';

const mainNavItems: NavItem[] = [
    {
        title: 'Főoldal',
        href: '/',
        icon: BookOpen,
    },
    {
        title: 'Adatbázis',
        href: '/singers',
        icon: Folder,
        items: [
            { title: 'Énekesek', href: '/singers' },
            { title: 'Művek', href: '/works' },
            { title: 'Szerepek', href: '/roles' },
        ],
    },
    {
        title: 'Dashboard',
        href: dashboard(),
        icon: LayoutGrid,
    },
    {
        title: 'Kapcsolat',
        href: '/contact',
        icon: Folder,
    },
    {
        title: 'Üzenetek',
        href: '/messages',
        icon: Folder,
    },
    {
        title: 'Admin',
        href: '/admin',
        icon: Folder,
    },
    {
        title: 'CRUD',
        href: '/singers-crud',
        icon: Folder,
    },
    {
        title: 'Diagram',
        href: '/diagram',
        icon: Folder,
    },
];

const footerNavItems: NavItem[] = [
    {
        title: 'Repository',
        href: 'https://github.com/laravel/react-starter-kit',
        icon: Folder,
    },
    {
        title: 'Documentation',
        href: 'https://laravel.com/docs/starter-kits#react',
        icon: BookOpen,
    },
];

export function AppSidebar() {
    const page = usePage();
    const auth = (page.props as any).auth;
    let items = mainNavItems;

    if (!auth || !auth.user) {
        items = mainNavItems.filter(
            (item) =>
                item.title !== 'Kapcsolat' &&
                item.title !== 'Üzenetek' &&
                item.title !== 'CRUD' &&
                item.title !== 'Admin'
        );
    } else if (auth.user.role !== 'admin') {
        items = mainNavItems.filter((item) => item.title !== 'CRUD' && item.title !== 'Admin');
    }

    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href={dashboard()} prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={items} />
            </SidebarContent>

            <SidebarFooter>
                <NavFooter items={footerNavItems} className="mt-auto" />
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
