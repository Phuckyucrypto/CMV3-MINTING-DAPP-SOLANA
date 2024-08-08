import { JsonMetadata } from "@metaplex-foundation/mpl-token-metadata";
import { PublicKey } from "@metaplex-foundation/umi";
import { Box, Text, Divider, SimpleGrid, VStack } from "@chakra-ui/react";
import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

interface TraitProps {
  heading: string;
  description: string;
}

interface TraitsProps {
  metadata: JsonMetadata;
}

const Trait = ({ heading, description }: TraitProps) => {
  return (
    <Box
      backgroundColor={"#03ff00"} // Green background for better contrast
      borderRadius={"8px"}
      width={"110px"}
      minHeight={"50px"}
    >
      <VStack>
        <Text fontSize={"sm"} color="black">
          {heading}
        </Text>
        <Text fontSize={"sm"} marginTop={"-2"} fontWeight={"semibold"} color="black">
          {description}
        </Text>
      </VStack>
    </Box>
  );
};

const Traits = ({ metadata }: TraitsProps) => {
  if (metadata === undefined || metadata.attributes === undefined) {
    return <></>;
  }

  // Find all attributes with trait_type and value
  const traits = metadata.attributes.filter(
    (a) => a.trait_type !== undefined && a.value !== undefined
  );
  const traitList = traits.map((t) => (
    <Trait
      key={t.trait_type}
      heading={t.trait_type ?? ""}
      description={t.value ?? ""}
    />
  ));

  return (
    <>
      <Divider marginTop={"15px"} borderColor="#03ff00" />
      <SimpleGrid marginTop={"15px"} columns={3} spacing={5}>
        {traitList}
      </SimpleGrid>
    </>
  );
};

const Card = ({
  metadata,
}: {
  metadata: JsonMetadata | undefined;
}) => {
  if (!metadata) {
    return <></>;
  }
  const image = metadata.animation_url ?? metadata.image;
  return (
    <Box position={"relative"} width={"full"} overflow={"hidden"} backgroundColor="black" p={4} borderRadius="md">
      <Box
        key={image}
        height={"sm"}
        position="relative"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        backgroundImage={`url(${image})`}
      />
      <Text fontWeight={"semibold"} marginTop={"15px"} color="white">
        {metadata.name}
      </Text>
      <Text color="white">{metadata.description}</Text>
      <Traits metadata={metadata} />
    </Box>
  );
};

type Props = {
  nfts:
    | { mint: PublicKey; offChainMetadata: JsonMetadata | undefined }[]
    | undefined;
};

export const ShowNft = ({ nfts }: Props) => {
  if (nfts === undefined) {
    return <></>;
  }

  const cards = nfts.map((nft, index) => (
    <AccordionItem key={nft.mint + "Accordion"} backgroundColor="black" color="white" borderRadius="md" marginBottom={2}>
      <h2>
        <AccordionButton>
          <Box as="span" flex="1" textAlign="left" color="white">
            {nft.offChainMetadata?.name}
          </Box>
          <AccordionIcon color="white" />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4} backgroundColor="black">
        <Card metadata={nft.offChainMetadata} key={nft.mint} />
      </AccordionPanel>
    </AccordionItem>
  ));
  return (
    <Accordion defaultIndex={[0]} allowMultiple={true} backgroundColor="black" color="white">
      {cards}
    </Accordion>
  );
};

export default Card;
