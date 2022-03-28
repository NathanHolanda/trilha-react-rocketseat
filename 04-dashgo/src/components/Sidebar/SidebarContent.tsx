import { Stack } from "@chakra-ui/react";
import { RiDashboardLine, RiContactsLine, RiInputMethodLine, RiGitMergeLine } from "react-icons/ri";
import { SidebarGroup } from "./SidebarGroup";

export function SidebarContent() {
    return (
        <Stack spacing="12" align="flex-start">
            <SidebarGroup
                name="Geral"
                items={[
                    {
                        icon: RiDashboardLine,
                        name: "Dashboard",
                        href: "/dashboard",
                    },
                    {
                        icon: RiContactsLine,
                        name: "Usuários",
                        href: "/usuarios",
                    },
                ]}
            />
            <SidebarGroup
                name="Automação"
                items={[
                    {
                        icon: RiInputMethodLine,
                        name: "Formulário",
                        href: "/formularios",
                    },
                    {
                        icon: RiGitMergeLine,
                        name: "Automação",
                        href: "/automacao",
                    },
                ]}
            />
        </Stack>
    );
}
