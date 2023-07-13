/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text, View } from "@aws-amplify/ui-react";
export default function Group4(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="142px"
      height="43px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Group4")}
      {...rest}
    >
      <Flex
        gap="10px"
        direction="row"
        width="104px"
        height="43px"
        justifyContent="flex-start"
        alignItems="flex-start"
        position="absolute"
        top="0%"
        bottom="0%"
        left="13.38%"
        right="13.38%"
        border="1px SOLID rgba(255,201,7,1)"
        borderRadius="11px"
        padding="15px 9px 9px 9px"
        backgroundColor="rgba(255,199,0,1)"
        {...getOverrideProps(overrides, "Frame 1")}
      ></Flex>
      <Text
        fontFamily="Inter"
        fontSize="20px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="24.204544067382812px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="142px"
        height="33px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="18.6%"
        bottom="4.65%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="log in"
        {...getOverrideProps(overrides, "log in")}
      ></Text>
    </View>
  );
}
