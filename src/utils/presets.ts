import clayCoColor from '@/assets/Clayton.svg'
import clayCoBlue from '@/assets/ClaytonBlue.svg'
import clayCoWhite from '@/assets/ClaytonWhite.svg'
import type { StyledQRCodeProps } from '@/components/StyledQRCode.vue'
import type { DrawType } from 'qr-code-styling'

export interface CustomStyleProps {
  borderRadius?: string
  background?: string
}

export type PresetAttributes = {
  style: CustomStyleProps
  name: string
}

export type Preset = Required<StyledQRCodeProps> & PresetAttributes

const defaultPresetOptions = {
  backgroundOptions: {
    color: 'transparent'
  },
  imageOptions: {
    margin: 5
  },
  width: 200,
  height: 200,
  margin: 5,
  type: 'svg' as DrawType
}

export const clayCoBluePreset: Preset = {
  ...defaultPresetOptions,
  name: 'Blue-ish',
  data: 'https://claytoncountyga.gov/',
  image: clayCoBlue,
  width: 200,
  height: 200,
  margin: 5,
  imageOptions: { margin: 5 },
  dotsOptions: { color: '#343579', type: 'extra-rounded' },
  cornersSquareOptions: { color: '#343579', type: 'extra-rounded' },
  cornersDotOptions: { color: '#343579', type: 'square' },
  style: { borderRadius: '24px', background: '#dde5ed' }
}

export const clayCoWhitePreset: Preset = {
  ...defaultPresetOptions,
  name: 'White',
  data: 'https://claytoncountyga.gov/',
  image: clayCoWhite,
  width: 200,
  height: 200,
  margin: 5,
  imageOptions: { margin: 5 },
  dotsOptions: { color: '#d9d9d6', type: 'extra-rounded' },
  cornersSquareOptions: { color: '#d9d9d6', type: 'extra-rounded' },
  cornersDotOptions: { color: '#d9d9d6', type: 'square' },
  style: { borderRadius: '24px', background: '#101820' }
}

export const defaultPreset: Preset = {
  ...defaultPresetOptions,
  name: 'Default',
  data: 'https://claytoncountyga.gov/',
  image: clayCoColor,
  imageOptions: { margin: 5 },
  dotsOptions: { color: '#101820', type: 'extra-rounded' },
  cornersSquareOptions: { color: '#101820', type: 'extra-rounded' },
  cornersDotOptions: { color: '#101820', type: 'square' },
  style: { borderRadius: '24px', background: '#FFFFFF' }
}

export const allPresets: Preset[] = [
  defaultPreset,
  ...[
    clayCoBluePreset,
    clayCoWhitePreset
  ].sort((a, b) => a.name.localeCompare(b.name))
]
