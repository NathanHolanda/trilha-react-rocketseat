import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import Head from "next/head";
import { Header } from "../components/Header";
import { Sidebar } from './../components/Sidebar';
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { theme } from "../styles/theme";

const Chart = dynamic(() => import('react-apexcharts'), {
    ssr: false,
})

export default function Dashboard(){
    const [options, setOptions] = useState({})
    const [series, setSeries] = useState([])

    useEffect(() => {
        setOptions({
            chart: {
                toolbar: {
                    show: false
                },
                zoom: {
                    enabled: false
                },
                foreColor: theme.colors.gray[500]
            },
            grid: {
                show: false
            },
            dataLabels: {
                enabled: false
            },
            tooltip: {
                enabled: false
            },
            xaxis: {
                type: 'datetime',
                axisBorder: {
                    color: theme.colors.gray[600]
                },
                axisTicks: {
                    color: theme.colors.gray[600]
                },
                categories: [
                    '2022-03-15T00:00:00.000Z',
                    '2022-03-16T00:00:00.000Z',
                    '2022-03-17T00:00:00.000Z',
                    '2022-03-18T00:00:00.000Z',
                    '2022-03-19T00:00:00.000Z',
                    '2022-03-20T00:00:00.000Z',
                    '2022-03-21T00:00:00.000Z'
                ]
            },
            fill: {
                opacity: 0.3,
                type: 'gradient',
                gradient: {
                    shade: 'dark',
                    opacityFrom: 0.7,
                    opacityTo: 0.3
                }
            }
        })

        setSeries([{
            name: 'series1', data: [14, 26, 34, 27, 32, 55, 48]
        }])
    }, [])

    return (
        <>
            <Head>
                <title>Dashboard | dashgo</title>
            </Head>
            <Flex direction='column' h='100vh'>
                <Header />
                <Flex w='100%' my='6' maxW={1480} mx='auto' px='6'>
                    <Sidebar />

                    <SimpleGrid flex='1' gap='4' minChildWidth='320px' alignItems='flex-start'>
                        <Box
                            p='8'
                            bg='gray.800'
                            borderRadius={8}
                        >
                            <Text fontSize='lg' mb='4'>Inscritos da semana</Text>
                            <Chart type='area' height={160} options={options} series={series} />
                        </Box>
                        <Box
                            p='8'
                            bg='gray.800'
                            borderRadius={8}
                        >
                            <Text fontSize='lg' mb='4'>Taxa de abertura</Text>
                            <Chart type='area' height={160} options={options} series={series} />
                        </Box>
                    </SimpleGrid>
                </Flex>
            </Flex>
        </>
        
    )
}