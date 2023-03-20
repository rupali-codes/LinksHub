import copy from 'copy-to-clipboard'
import { useState } from 'react'

interface CopyToClipboardReturnValue {
  value: string
  success: boolean
}

type CopyToClipboardFunction = (text: string, options?: object) => void

export default function useCopyToClipboard(): [
  CopyToClipboardFunction,
  CopyToClipboardReturnValue
] {
  const [value, setValue] = useState('')
  const [success, setSuccess] = useState(false)

  const copyToClipboard: CopyToClipboardFunction = (text, options) => {
    const result = copy(text, options)
    if (result) setValue(text)
    setSuccess(result)

    setTimeout(() => setSuccess(false), 1500)
  }

  return [copyToClipboard, { value, success }]
}
