import { Grid, GridItem, Icon } from "@chakra-ui/react";
import ProjectGrid from "../components/ProjectGrid";
import SingleGrid from "../components/SingleGrid";
import { FaUser } from "react-icons/fa";
import { FaSmileBeam } from "react-icons/fa";
import { IoIosRocket } from "react-icons/io";
import { projects } from "../data/projects";

const AllProjectScreen = () => {
  return (
    <Grid
      templateColumns="repeat(4, 1fr)"
      templateRows="auto"
      gap={10}
      w="100%"
    >
      {projects.map((project) => (
        <GridItem colSpan={2}>
          <ProjectGrid key={project.name} project={project} />
        </GridItem>
      ))}

      <GridItem colSpan={1}>
        <SingleGrid
          url="/about"
          text="explore"
          heading="About me"
          icon={<Icon as={FaSmileBeam} boxSize={12} color="#9ec5ff" />}
        />
      </GridItem>

      <GridItem colSpan={2}>
        <SingleGrid
          url="/contact"
          text="Lets work together"
          heading="Get in touch now"
          weight="bold"
          size="xl"
          color="#9ec5ff"
          icon={<Icon as={IoIosRocket} boxSize={12} color="#9ec5ff" />}
        />
      </GridItem>

      <GridItem colSpan={1}>
        <SingleGrid
          url="/resume"
          text="See more"
          heading="See my resume"
          icon={<Icon as={FaUser} boxSize={12} color="#9ec5ff" />}
        />
      </GridItem>
    </Grid>
  );
};

export default AllProjectScreen;
