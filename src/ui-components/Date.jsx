/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function Date(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="214px"
      height="31px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Date")}
      {...rest}
    >
      <Text
        fontFamily="Inter"
        fontSize="24px"
        fontWeight="600"
        color="rgba(0,0,0,1)"
        lineHeight="31.19999885559082px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="2023-05-12（金）"
        {...getOverrideProps(overrides, "2023-05-12\uFF08\u91D1\uFF09")}
      ></Text>
    </View>
  );
}
