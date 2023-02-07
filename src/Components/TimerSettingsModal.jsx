import { Slider } from "@mui/material";
import { useContext } from "react";
import SettingsContext from "../context/SettingsContext";

export const TimerSettingsModal = ({ setIsModalOpen }) => {
  const settingsInfo = useContext(SettingsContext);

  return (
    <>
      <div class="fixed inset-0 z-50 flex items-center justify-center outline-none focus:outline-none">
        <div class="relative my-6 mx-auto w-3/5 max-w-lg">
          {/*content*/}
          <div class="relative flex w-full flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none">
            {/*body*/}
            <div class="relative my-4 mx-auto flex flex-col p-4 text-slate-600">
              {/* {content} */}

              <div class="w-full">
                <label htmlFor="duration">
                  Set work duration: {settingsInfo.workMins} minutes
                </label>
                <Slider
                  aria-label="workMins"
                  defaultValue={25}
                  valueLabelDisplay="auto"
                  value={settingsInfo.workMins}
                  onChange={(event, newVal) => settingsInfo.setWorkMins(newVal)}
                  step={5}
                  min={1}
                  max={90}
                />
              </div>

              <div class="w-48">
                <label htmlFor="duration">
                  Set break duration: {settingsInfo.breakMins} minutes
                </label>
                <Slider
                  aria-label="breakMins"
                  defaultValue={5}
                  valueLabelDisplay="auto"
                  value={settingsInfo.breakMins}
                  onChange={(event, newVal) =>
                    settingsInfo.setBreakMins(newVal)
                  }
                  step={5}
                  min={1}
                  max={30}
                />
              </div>
            </div>
            {/*footer*/}
            <div class="flex items-center justify-center rounded-b border-t border-solid border-slate-200 p-1">
              <button
                class="background-transparent py-2 text-sm font-bold uppercase text-red-500 outline-none transition-all duration-150 ease-linear focus:outline-none"
                type="button"
                onClick={() => setIsModalOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="fixed inset-0 z-40 bg-black opacity-25"></div>
    </>
  );
};

export default TimerSettingsModal;
