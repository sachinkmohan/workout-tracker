import { FaDumbbell, FaFileExport, FaFileImport } from "react-icons/fa";
import { exportToJSON, importJSON } from "../utils/importExportJSON";
import { format } from "date-fns";
import { useRef } from "react";
import { toast } from "react-toastify";

const AppHeader = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const dataExportToJSON = () => {
    const formattedDateTime = format(new Date(), "ddMMyy-HHmm");
    const filename = `workoutLogs_${formattedDateTime}.json`;
    exportToJSON("workoutLogs", filename);
    toast.success("Data downloaded successfully");
  };

  const importJSONFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      importJSON("workoutLogs", file);
      toast.success("Data imported successfully");
    }
  };

  const handleImportClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <header>
      <div className="flex gap-1 justify-between py-3">
        <div className="flex gap-1">
          <FaDumbbell className="text-xl pt-1" />
          <h1>FitTrack</h1>
        </div>

        <div className="flex gap-3">
          <input
            type="file"
            ref={fileInputRef}
            onChange={importJSONFile}
            style={{ display: "none" }}
            accept=".json"
          />
          <FaFileImport
            className="text-xl pt-1 cursor-pointer"
            onClick={handleImportClick}
          />
          <FaFileExport
            className="text-xl pt-1 cursor-pointer"
            onClick={dataExportToJSON}
          />
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
