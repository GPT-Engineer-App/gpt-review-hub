// GPT Review and Comparison Platform - Index Page
import { Box, Container, Heading, Text, Button, SimpleGrid, Image, Badge, Divider, useColorModeValue, VStack, HStack, IconButton, Tooltip } from "@chakra-ui/react";
import { FaStar, FaRegStar, FaPlus, FaSyncAlt } from "react-icons/fa";

const Index = () => {
  const cardBg = useColorModeValue("white", "gray.700");

  return (
    <Container maxW="container.xl" py={8}>
      <VStack spacing={4} align="stretch">
        <Heading as="h1" size="xl" textAlign="center">
          GPT Review and Comparison Platform
        </Heading>
        <Text fontSize="lg" textAlign="center">
          Explore and compare the latest GPT models. Read reviews and stay updated with real-time analytics.
        </Text>
        <Divider my={6} />
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          {Array.from({ length: 3 }).map((_, index) => (
            <Box key={index} p={5} shadow="md" borderWidth="1px" bg={cardBg} borderRadius="md">
              <VStack spacing={3}>
                <Image borderRadius="md" src="https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxHUFQlMjBtb2RlbHxlbnwwfHx8fDE3MTM0MzQxNjV8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="GPT Model" boxSize="100px" objectFit="cover" />
                <Heading as="h3" size="md">
                  GPT Model {index + 1}
                </Heading>
                <Text fontSize="sm">An advanced GPT model with enhanced capabilities for various applications.</Text>
                <HStack>
                  <Badge colorScheme="green">New</Badge>
                  <Badge colorScheme="red">Popular</Badge>
                </HStack>
                <HStack>
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <IconButton key={starIndex} icon={starIndex < 4 ? <FaStar /> : <FaRegStar />} aria-label={`Rate ${starIndex + 1}`} variant="ghost" />
                  ))}
                </HStack>
                <Button leftIcon={<FaPlus />} colorScheme="blue" variant="solid">
                  Learn More
                </Button>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>
        <Divider my={6} />
        <HStack justifyContent="center">
          <Button leftIcon={<FaSyncAlt />} colorScheme="teal" variant="outline">
            Refresh Models
          </Button>
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;
