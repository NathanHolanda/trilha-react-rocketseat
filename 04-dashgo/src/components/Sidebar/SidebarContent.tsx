import { Stack } from "@chakra-ui/react";
import { RiDashboardLine, RiContactsLine, RiInputMethodLine, RiGitMergeLine } from "react-icons/ri";
import { SidebarGroup } from "./SidebarGroup";

export function SidebarContent() {
    return (
        <Stack spacing="12" align="flex-start">
            <SidebarGroup
                name="Geral"
                items={[
                    { icon: RiDashboardLine, name: "Dashboard" },
                    { icon: RiContactsLine, name: "Usuários" },
                ]}
            />
            <SidebarGroup
                name="Automação"
                items={[
                    { icon: RiInputMethodLine, name: "Formulário" },
                    { icon: RiGitMergeLine, name: "Automação" },
                ]}
            />
        </Stack>
    );
}
