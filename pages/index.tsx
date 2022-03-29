import {
    AppShell,
    Box,
    Button,
    Grid,
    Group,
    Image,
    Text,
    Title,
} from "@mantine/core";
import type { NextPage } from "next";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Head from "next/head";

const Home: NextPage = () => {
    return (
        <AppShell padding={0}>
            <Box>
                <Grid
                    align={"center"}
                    justify="center"
                    m={0}
                    sx={(theme) => ({
                        height: "100vh",
                    })}
                >
                    <Grid.Col span={6}>
                        <Image
                            src="/me.png"
                            alt="Abyss Profile Picture"
                            width="300px"
                            height="300px"
                            sx={(theme) => ({
                                float: "right",
                            })}
                            styles={{
                                image: {
                                    borderRadius: "50%",
                                },
                            }}
                        />
                    </Grid.Col>
                    <Grid.Col span={6}>
                        <Title>I&apos;m Abyss</Title>
                        <Text size="xl">
                            A Cyber Security Professional and Full Stack
                            Developer
                        </Text>
                        <Group mt="xs">
                            <Button
                                component="a"
                                href="https://github.com/Abys5"
                                color="grape"
                                leftIcon={<FaGithub />}
                                size="xs"
                            >
                                Github
                            </Button>
                            <Button
                                component="a"
                                href="https://www.linkedin.com/in/thomas-burridge-abyss/"
                                color="blue"
                                leftIcon={<FaLinkedin />}
                                size="xs"
                            >
                                LinkedIn
                            </Button>
                        </Group>
                    </Grid.Col>
                </Grid>
            </Box>
        </AppShell>
    );
};

export default Home;
