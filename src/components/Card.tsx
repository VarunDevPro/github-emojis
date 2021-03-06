import React, { useState } from 'react';
import { Text, Button, Flex } from '@chakra-ui/core';
import Image from 'next/image';

export const Card = ({ code, img }: { code: string; img: string }) => {
  const [hasCopied, setHasCopied] = useState(false);

  const copyCode = async (code: string) => {
    if (navigator && navigator.clipboard) {
      await navigator.clipboard.writeText(code);

      setHasCopied(true);
      setTimeout(() => {
        setHasCopied(false);
      }, 2000);
    }
  };

  return (
    <Flex
      pt="8"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      mx="20px"
      my="10px"
    >
      <Image
        src={img}
        width="40px"
        height="40px"
        alt={`${code} github emoji`}
      />
      <Text>{code}</Text>
      <Button mt="2" p="5px" variant="primary" onClick={() => copyCode(code)}>
        {hasCopied ? 'Copied!' : 'Copy'}
      </Button>
    </Flex>
  );
};
