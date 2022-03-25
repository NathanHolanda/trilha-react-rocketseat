import { Box, Stack } from "@chakra-ui/react"
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri"
import { SidebarGroup } from './SidebarGroup';

export function Sidebar () {
    return (
        <Box as='aside' w='64' mr='8'>
            <Stack spacing='12' align='flex-start'>
                <SidebarGroup name='Geral' items={[
                    {icon: RiDashboardLine, name: 'Dashboard'},
                    {icon: RiContactsLine, name: 'Usuários'}
                ]} />
                <SidebarGroup name='Automação' items={[
                    {icon: RiInputMethodLine, name: 'Formulário'},
                    {icon: RiGitMergeLine, name: 'Automação'}
                ]} />
            </Stack>
        </Box>
    )
}