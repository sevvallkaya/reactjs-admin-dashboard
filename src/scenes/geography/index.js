import { Box } from "@mui/material";
import Header from "../../components/Header";
import GeoChart from "../../components/GeoChart";
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";

const Geography = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box mb="20px">
      <Header title="Geography Chart" subtitle="Simple Geography Chart" />
      <Box
        height="75vh"
        border={`.5px solid ${colors.grey[400]}`}
        borderRadius="4px"
      >
        <GeoChart />
      </Box>
    </Box>
  );
};
export default Geography;
