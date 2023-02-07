import { useContext, useEffect, useState, useRef } from "react";

import SettingsContext from "../context/SettingsContext";

import Timer from "./Timer";
import PauseButton from "./PauseButton";
import PlayButton from "./PlayButton";
import RestartButton from "./RestartButton";
import SettingsButton from "./SettingsButton";
import TimerSettingsModal from "./TimerSettingsModal";
import { PomodoroNotification } from "./PomodorNotification";

export const TimerContainer = () => {
  const settingsInfo = useContext(SettingsContext);

  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);
  const [pomoCount, setPomoCount] = useState(0);
  const [notifMsg, setNotifMsg] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const [isPaused, setIsPaused] = useState(true);
  const [secsLeft, setSecsLeft] = useState(0);
  const [mode, setMode] = useState("work");

  const secsLeftRef = useRef(secsLeft);
  const isPausedRef = useRef(isPaused);
  const modeRef = useRef(mode);
  const pomoCountRef = useRef(pomoCount);
  const notifMsgRef = useRef(notifMsg);
  const showAlertRef = useRef(showAlert);

  const handleAlertClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    showAlertRef.current = false;
    setShowAlert(false);
  };

  const tick = () => {
    secsLeftRef.current--;
    setSecsLeft(secsLeftRef.current);
  };

  const onRestartClick = () => {
    secsLeftRef.current = settingsInfo.workMins * 60;
    setSecsLeft(secsLeftRef.current);

    modeRef.current = "work";
    setMode(modeRef.current);

    setIsPaused(true);
    isPausedRef.current = true;

    pomoCountRef.current = 0;
    setPomoCount(pomoCountRef.current);
  };
  useEffect(() => {
    const switchMode = () => {
      notifMsgRef.current =
        modeRef.current === "work"
          ? "Great Work. You deserve a break!"
          : "Break Over. Time to learn!";

      showAlertRef.current = true;
      setNotifMsg(notifMsgRef.current);
      setShowAlert(showAlertRef.current);

      const nextMode = modeRef.current === "work" ? "break" : "work";
      const nextSecs =
        (nextMode === "work" ? settingsInfo.workMins : settingsInfo.breakMins) *
        60;
      pomoCountRef.current =
        nextMode === "work" ? pomoCountRef.current + 1 : pomoCountRef.current;

      setPomoCount(pomoCountRef.current);

      setMode(nextMode);
      modeRef.current = nextMode;

      setSecsLeft(nextSecs);
      secsLeftRef.current = nextSecs;
    };

    const initTimer = () => {
      console.log("initTimer called");
      secsLeftRef.current = settingsInfo.workMins * 60;
      setSecsLeft(secsLeftRef.current);
    };

    initTimer();

    const interval = setInterval(() => {
      if (isPausedRef.current) {
        return;
      }
      if (secsLeftRef.current === 0) {
        return switchMode();
      }
      tick();
    }, 100);

    return () => clearInterval(interval);
  }, [settingsInfo]);

  const totalSecs =
    mode === "work" ? settingsInfo.workMins * 60 : settingsInfo.breakMins * 60;

  const percentage = Math.round((secsLeft / totalSecs) * 100);
  const mins = Math.floor(secsLeft / 60);

  let secs = secsLeft % 60;
  if (secs < 10) secs = "0" + secs;

  return (
    <div class="border-box rounded-sm text-center text-xs text-slate-300">
      <div class="mx-5 flex w-80 items-center justify-between">
        <PomodoroNotification
          showAlert={showAlert}
          message={notifMsg}
          handleAlertClose={handleAlertClose}
        />
        <Timer percentVal={percentage} mins={mins} secs={secs} mode={mode} />
        <div class="mx-5 flex cursor-pointer justify-center">
          {isPaused ? (
            <PlayButton
              onPlayClick={() => {
                setIsPaused(false);
                isPausedRef.current = false;
              }}
            />
          ) : (
            <PauseButton
              onPauseClick={() => {
                setIsPaused(true);
                isPausedRef.current = true;
              }}
            />
          )}

          <RestartButton onRestartClick={onRestartClick} />
          <SettingsButton setIsModalOpen={setIsSettingsModalOpen} />
          {isSettingsModalOpen ? (
            <TimerSettingsModal setIsModalOpen={setIsSettingsModalOpen} />
          ) : (
            <></>
          )}
          <span class="mx-1 my-auto uppercase text-slate-400">
            Round {pomoCount}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TimerContainer;
