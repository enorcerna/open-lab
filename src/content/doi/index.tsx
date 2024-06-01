import {Button} from "@/components/ui/button";
import {Icon} from "@iconify/react";

function Doi() {
  const handleClick = async () => {
    const doi = document.querySelector(
      '[data-testid="source-info-entry-doi"]>dd'
    )?.textContent;
    console.log(doi);
    open(`https://sci-hub.se/${doi}`, "_blank");
  };

  return (
    <>
      <Button
        className="fixed right-0 top-1/2 bottom-1/2 w-36 "
        onClick={handleClick}
      >
        <Icon
          icon="solar:file-smile-line-duotone"
          className="w-8 h-8"
        />
        <span className="ml-2">Open PDF</span>
      </Button>
    </>
  );
}

export default Doi;
