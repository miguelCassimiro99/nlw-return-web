import html2canvas from "html2canvas";
import { backgroundPosition } from "html2canvas/dist/types/css/property-descriptors/background-position";
import { Camera, Trash } from "phosphor-react";
import { useState } from "react";
import { Loading } from "../Loading";

interface ScreenshotButtonProps {
  onScreenshotTook: (screenhot: string | null) => void
  screenshot: string | null
}

export function ScreenshotButton({onScreenshotTook, screenshot}: ScreenshotButtonProps) {
  const [isTakingScreenshot, setITakingScreenshot] = useState(false)

  async function handleTakeScreenshot() {
    setITakingScreenshot(true)
    const canvas = await html2canvas(document.querySelector('html')!)
    const base64image = canvas.toDataURL('image/png')

    onScreenshotTook(base64image)

    setITakingScreenshot(false)
  }

  if (screenshot) {
    return (
      <button
        onClick={() => onScreenshotTook(null)}
        type="button"
        style={{ 
          backgroundImage: `url(${screenshot})`,
          backgroundPosition: 'right bottom',
          backgroundSize: 180
         }}
        className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-colors"
      >
        <Trash weight="fill" />
      </button>
    )
  }

  return (
    <button
      onClick={handleTakeScreenshot}
      type="button"
      className="rounded-md border-transparent hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
    >
      {isTakingScreenshot ? <Loading /> : <Camera className="w-6 h-6 text-zinc-100" />}      
    </button>
  )
}