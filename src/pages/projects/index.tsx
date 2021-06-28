import { SimpleGrid } from "@chakra-ui/react";
import { useSession } from "next-auth/client";
import { withUrqlClient } from "next-urql";
import React from "react"
import { ProjectCard } from "../../components/projects/ProjectCard";
import { useProjectsQuery } from "../../generated/graphql";


const ProjectsView: React.FC<unknown> = (): JSX.Element => {
  const [{ data }] = useProjectsQuery();
  return (
    <SimpleGrid columns={[2, null, 3]} spacing="20px" maxBlockSize="fit-content">
      {data?.projects?.map((p, i) => {
        return <ProjectCard key={p.id} id={p.id} description={p.description} title={p.title} createdAt={p.createdAt} updatedAt={p.updatedAt}> </ProjectCard>
      })}
    </SimpleGrid>
  )
};

export default withUrqlClient(() => ({
  // ...add your Client options here
  url: 'http://localhost:8080/graphql',
}))(ProjectsView);