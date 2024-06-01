import {Button} from "@/components/ui/button";
import {Icon} from "@iconify/react";
import {Translate} from "@/services/translate";
function TranslatePage() {
  const handleClick = async () => {
    const titleElement = document.querySelector(".Highlight-module__akO5D");
    const abstractElement = document.querySelector(
      ".Abstract-module__pTWiT>p>span"
    );

    if (titleElement && abstractElement) {
      const title = titleElement.textContent || "";
      const abstract = abstractElement.textContent || "";
      const trlService = new Translate([title, abstract], "en", "es");
      const [trlTitle, trlAbstract] = await trlService.get();
      titleElement.textContent = trlTitle;
      abstractElement.textContent = trlAbstract;
    }
  };
  return (
    <Button onClick={handleClick}>
      <Icon icon="tabler:language" />
    </Button>
  );
}

export default TranslatePage;
