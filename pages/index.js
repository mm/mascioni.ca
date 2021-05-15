import Image from 'next/image';
import Layout from '../components/layout';
import ProjectListing from '../components/ProjectListing';
import { Box, Heading, Text, Stack, HStack, Divider } from "@chakra-ui/react"
import HomeButton from '../components/HomeButton';
import { HiOutlinePencilAlt, HiOutlineMail } from "react-icons/hi";
import { GoMarkGithub } from "react-icons/go";

export default function Home() {

  return (
    <Layout pageTitle="" home>
      <Box mt={10}>
        <HStack spacing={5}>
          <Image src="/me.png" height={80} width={80}/>
          <Box>
            <Heading size="xl">Matt Mascioni</Heading>
            <Heading size="md" mt={1}>Web Developer in Toronto</Heading>
          </Box>
        </HStack>
        <Text mt={9}>
          Hi! My name is Matt. My goal is to build products and tools that improve people's lives— whether it be giving them back more time in their day, or making their work more enjoyable. Huge fan of Python, technical writing, APIs, long-distance running, and reading.
        </Text>

        <HStack mt={10} flexDir={["column", "row", "row"]} alignItems="stretch" spacing={[0, 2, 2]}>
          <HomeButton url="https://dev.to/mmascioni" buttonIcon={<HiOutlinePencilAlt />} buttonLabel="Check out my blog" />
          <HomeButton url="https://github.com/mm" buttonIcon={<GoMarkGithub />} buttonLabel="GitHub" />
          <HomeButton url="mailto:mascionim@gmail.com" buttonIcon={<HiOutlineMail />} buttonLabel="Email me" />
        </HStack>

        <HStack mt={20}>
          <Divider width="40%"/>
          <Text 
            fontSize="sm"
            casing="uppercase" 
            width="50%"
            align="center"
            color="gray.400"
            fontWeight="bold"
          >
              Recent Side Projects
          </Text>
          <Divider width="40%"/>
        </HStack>

        <Stack 
          mt={8}
          mb={8}
          alignItems="stretch"
          direction={["column", "row", "row"]}
          justifyContent="center"
        >
          <ProjectListing 
            title="Heartbridge"
            url="https://pypi.org/project/heartbridge/"
            imagePath="/heartbridge.png"
            description="A command-line application to help extract heart rate data and more from the iOS Health app."
          />
          <ProjectListing 
            title="What Should We Play?"
            url="https://whatshouldweplay.xyz"
            imagePath="/whatshouldweplay.png"
            description="An index of games to play over a video chat with friends."
          />
        </Stack>
      </Box>
    </Layout> 
  )
}
