import Image from "next/image";
import {
  Box,
  Heading,
  Text,
  LinkBox,
  LinkOverlay,
  Tag,
  TagLeftIcon,
  TagLabel,
  HStack,
} from "@chakra-ui/react";
import { DiPython, DiReact } from "react-icons/di";

const TECH_ICON_MAPPING = {
  Python: DiPython,
  React: DiReact,
};

/**
 * Lists a side project on the homepage.
 * @param {*} props
 * @returns
 */
function ProjectListing(props) {
  const imagePath = props.imagePath || "/placeholder.png";
  const altText = props.altText || `A logo for ${props.title}`;
  let techTagItems = props.tech.map((element) => {
    return (
      <Tag key={element}>
        <TagLeftIcon as={TECH_ICON_MAPPING[element]} />
        <TagLabel>{element}</TagLabel>
      </Tag>
    );
  });

  return (
    <LinkBox>
      <Box
        overflow="hidden"
        borderRadius="md"
        borderWidth={2}
        height="100%"
        maxW={[null, 250, 300]}
        mb={4}
      >
        <LinkOverlay href={props.url} isExternal>
          <Box>
            <Image
              src={imagePath}
              alt={altText}
              width={300}
              height={200}
              layout="responsive"
            />
          </Box>
          <Box px={4} py={4}>
            <Heading fontSize={16}>{props.title}</Heading>
            <Text mt={3} fontSize="sm">
              {props.description}
            </Text>
            <HStack spacing={1} mt={3}>
              {techTagItems}
            </HStack>
          </Box>
        </LinkOverlay>
      </Box>
    </LinkBox>
  );
}

export default ProjectListing;
