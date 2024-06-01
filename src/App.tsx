function App() {
  const handleClick = async () => {
    let [tab] = await chrome.tabs.query({active: true, currentWindow: true});
    chrome.scripting.executeScript({
      target: {tabId: tab.id!},
      func: () => {
        const menu = document.querySelector("minu");
        if (menu) {
          menu.remove();
        }
      }
    });
  };
  return (
    <>
      <div className="bg-neutral-950 text-white  p-6">
        <button
          className="drop-shadow-sm bg-white/10 rounded-lg py-2 px-3 hover:bg-white/15"
          onClick={handleClick}
        >
          changle
        </button>
      </div>
    </>
  );
}

export default App;
