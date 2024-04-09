import { Box } from "@mui/material";
import { Post } from "./Post";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export const Feed = () => {
  return (
    <Box flex={4} p={2}>
      {cards.map((card) => (
        <Post key={card} />
      ))}
    </Box>
  );
};
