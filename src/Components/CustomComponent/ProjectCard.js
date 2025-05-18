import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import MyButton from "./MyButton";
import { Box } from "@mui/material";

export default function ProjectCard({ title, content, image, link }) {
  return (
    <Card
      sx={{
        maxWidth: 345,
        height: 400,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardMedia sx={{ height: 140 }} image={image} title="Card" />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {content}
        </Typography>
      </CardContent>
      <Box mb={3}>
      <CardActions sx={{ justifyContent: "center" }}>
        <MyButton name="Explore More" link={link} />
      </CardActions>
      </Box>
    </Card>
  );
}