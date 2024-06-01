import {Button} from "@/components/ui/button";
import {Toaster} from "@/components/ui/toaster";
import {useToast} from "@/components/ui/use-toast";
import {Icon} from "@iconify/react";

function Copy() {
  const {toast} = useToast();
  const handleClick = () => {
    const doi = document.querySelector(
      '[data-testid="source-info-entry-doi"]>dd'
    );
    navigator.clipboard.writeText(doi?.textContent as string).then(() => {
      toast({
        title: "Copiado!",
        description: doi?.textContent
      });
    });
  };
  return (
    <div className="flex justify-between w-full items-center">
      <span>DOI: </span>
      <Button
        size="icon"
        className="rounded-lg bg-green-600"
        onClick={handleClick}
      >
        <Icon icon="solar:copy-broken" />
      </Button>
      <Toaster />
    </div>
  );
}

export default Copy;
