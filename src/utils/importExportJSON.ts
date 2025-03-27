import { toast } from "react-toastify";
export const exportToJSON = (key: string, filename: string) => {
  try {
    const data = localStorage.getItem(key);
    const parsedData = data ? JSON.parse(data) : [];
    const jsonData = JSON.stringify(parsedData, null, 2);
    const blob = new Blob([jsonData], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  } catch (error) {
    console.error(error);
  }
};

export const importJSON = (key: string, file: File) => {
  const reader = new FileReader();
  reader.onload = (event) => {
    try {
      const data = event.target?.result;
      if (typeof data === "string") {
        const parsedData = JSON.parse(data);
        if (Array.isArray(parsedData)) {
          localStorage.setItem(key, data.toString());
          window.dispatchEvent(new CustomEvent("workoutDataImported"));
        } else {
          toast.error("Invalid data format");
        }
      }
    } catch (error) {
      console.error("Failed to import JSON:", error);
    }
  };
  reader.readAsText(file);
};
