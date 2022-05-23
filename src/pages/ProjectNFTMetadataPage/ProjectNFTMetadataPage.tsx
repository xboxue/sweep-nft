import { useParams } from "react-router-dom";
import { useGetProjectQuery } from "../../generated/graphql";
import ProjectImageUploadForm from "../../components/ProjectImageUploadForm/ProjectImageUploadForm";
import ProjectNFTMetadata from "../../components/ProjectNFTMetadata/ProjectNFTMetadata";

const ProjectNFTMetadataPage = () => {
  const { id } = useParams();
  const { data } = useGetProjectQuery({
    fetchPolicy: "cache-only",
    variables: { id },
  });

  if (data?.project_by_pk?.metadata_cid) return <ProjectNFTMetadata />;
  return <ProjectImageUploadForm />;
};

export default ProjectNFTMetadataPage;
