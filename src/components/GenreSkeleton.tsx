//Not used

import {
  HStack,
  List,
  ListItem,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";

const GenreSkeleton = () => {
  return (
    <ListItem height="100px" marginY={200}>
      <Skeleton>
        <SkeletonText></SkeletonText>
      </Skeleton>
    </ListItem>
  );
};

export default GenreSkeleton;
